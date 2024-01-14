import React, { memo } from "react";
import Modal from "../../../components/customModal/Modal";
import "../style.scss";

function LogoutModal({ open, close }) {
  const handelLogoutUser = () => {
    // localStorage.clear();
    localStorage.removeItem("authToken");
    close();
    window.location.reload();
  };
  return (
    <Modal isOpen={open} onClose={close} title="Logout user">
      <p>
        The action you are going to perform is irreversible. Please confirm! Are
        you sure that you want to logout?
      </p>
      <div className="logout_user_btn_container">
        <button onClick={close}>No</button>
        <button type="submit" onClick={handelLogoutUser}>
          Yes
        </button>
      </div>
    </Modal>
  );
}

export default memo(LogoutModal);
