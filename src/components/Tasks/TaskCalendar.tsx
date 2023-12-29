import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Badge from "@mui/material/Badge";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useTasks } from "../../context/TasksContext";
import { useCalendar } from "../../context/CalendarContext";

function TaskCalendar() {
  const { highlightedDay, handleChangeHighlightDay } = useCalendar();
  const { tasks, getTasks, openTaskModal } = useTasks();

  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
  const [dobleClickTimer, setDobleClickTimer] = useState(false);
  const initialValue = dayjs(new Date());

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      handleMonthChange(dayjs(new Date()));
    }
  }, [tasks]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  function filterTasksOnMonth(date: Dayjs) {
    const month = date.month() + 1;
    const year = date.year();

    const tasksInMonth = tasks.filter(
      (task) =>
        parseInt(task.date.toString().slice(5, 7)) === month &&
        parseInt(task.date.toString().slice(0, 4)) === year
    );

    const daysToHighlight = tasksInMonth.map((task) =>
      parseInt(task.date.toString().slice(8, 10))
    );

    return daysToHighlight;
  }

  function ServerDay(
    props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
  ) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !props.outsideCurrentMonth &&
      highlightedDays.indexOf(props.day.date()) >= 0;

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={
          !isSelected
            ? undefined
            : dayjs(props.day) < dayjs().subtract(1, "day")
            ? "🔴"
            : dayjs(props.day) > dayjs()
            ? "🔵"
            : "🟢"
        }
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  }

  const handleMonthChange = (date: Dayjs) => {
    setIsLoading(true);
    setHighlightedDays([]);
    setHighlightedDays(filterTasksOnMonth(date));
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          onMonthChange={handleMonthChange}
          renderLoading={() => <DayCalendarSkeleton />}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          value={highlightedDay}
          onChange={(selectedDay: Dayjs | null) => {
            if (dobleClickTimer) {
              openTaskModal(selectedDay?.toDate() as Date);
            } else {
              handleChangeHighlightDay(dayjs(selectedDay));
              setDobleClickTimer(true);
              setTimeout(() => {
                setDobleClickTimer(false);
              }, 400);
            }
          }}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            } as any,
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default TaskCalendar;
