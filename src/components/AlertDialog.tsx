import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type AlerDialogProps = {
  openDialog: boolean;
  title: string;
  description: string;
  confirmButtonText: string;
  onConfirm: () => void;
  handleDialogClose: () => void;
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    error: {
      main: "#a22",
    },
  },
  typography: {
    button: {
      fontSize: 12,
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "7px 16px",
          borderRadius: 4,
        },
      },
    },
  },
});

const AlertDialog = ({
  openDialog,
  handleDialogClose,
  title,
  description,
  confirmButtonText,
  onConfirm,
}: AlerDialogProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby={title}
        aria-describedby={description}
      >
        <div className="p-[1px] rounded-lg bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
          <div className="bg-zinc-800 rounded-lg pl-4 pr-8 py-2">
            <DialogTitle id={title}>{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id={description}>
                {description}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  onConfirm();
                  handleDialogClose();
                }}
                autoFocus
              >
                {confirmButtonText}
              </Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </ThemeProvider>
  );
};

export default AlertDialog;
