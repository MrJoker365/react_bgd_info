import React from "react";
import st from "./MyModal.module.css";

const MyModal = ({ visible, onConfirm, onCancel, message }) => {
    if (!visible) return null;

    return (
        <div className={st.modalBackdrop}>
            <div className={st.modalContent}>
                <p>{message}</p>
                <div className={st.modalButtons}>
                    <button onClick={onConfirm} className={st.confirmButton}>Yes</button>
                    <button onClick={onCancel} className={st.cancelButton}>No</button>
                </div>
            </div>
        </div>
    );
};

export default MyModal;
