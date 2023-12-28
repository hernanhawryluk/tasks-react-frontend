import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import AlertDialog from "../AlertDialog";

function AuthLinks() {
  const { logout } = useAuth();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleLogout = () => {
    logout();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <li
        onClick={() => setOpenDialog(true)}
        className="text-neutral-400 cursor-pointer highlight"
      >
        <FaSignOutAlt size={26} />
      </li>
      <AlertDialog
        openDialog={openDialog}
        title="Logout"
        description="Are you sure you want to logout?"
        confirmButtonText="Logout"
        onConfirm={handleLogout}
        handleDialogClose={handleDialogClose}
      />
    </>
  );
}

export default AuthLinks;
