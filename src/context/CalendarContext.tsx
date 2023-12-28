import { createContext, useState, useContext } from "react";
import dayjs, { Dayjs } from "dayjs";

type CalendarProviderProps = {
  children: React.ReactNode;
};

type CalendarContextType = {
  highlightedDay: Dayjs | null;
  handleChangeHighlightDay: (date: Dayjs) => void;
};

export const CalendarContext = createContext<CalendarContextType | null>(null);

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within an CalendarProvider");
  }
  return context;
};

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
  const [highlightedDay, setHighlightedDay] = useState<Dayjs | null>(
    dayjs(new Date())
  );

  const handleChangeHighlightDay = (date: Dayjs) => {
    setHighlightedDay(date);
  };

  return (
    <CalendarContext.Provider
      value={{ highlightedDay, handleChangeHighlightDay }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
