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
  shape: {
    borderRadius: 4,
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
        <DialogTitle id={title}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id={description}>{description}</DialogContentText>
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
      </Dialog>
    </ThemeProvider>
  );
};

export default AlertDialog;
