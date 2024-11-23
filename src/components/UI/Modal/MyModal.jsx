import React from "react";
import st from "./MyModal.module.css";

const MyModal = ({ visible, setVisible, title, children }) => {
    const rootClasses = [st.Modal];
    if (visible) {
        rootClasses.push(st.Active);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={st.ModalContent} onClick={(e) => e.stopPropagation()}>
                <h3>{title}</h3>
                {children}
                <div className={st.Actions}>
                    <button onClick={() => setVisible(false)}>Закрити</button>
                </div>
            </div>
        </div>
    );
};

export default MyModal;
