import React, { useState } from 'react';
import MyInput from "../../input/MyInput";
import MyButton from "../../button/MyButton";
import st from "./MyCreateForm.module.css";
import MySelect from "../../select/MySelect";
import { Frame_Mode, InputStyleConst } from "../../../../constant/Const";
import MyFormAlert from "../../alert/MyFormAlert";
import MyModal from "../../Modal/MyModal";

const MyCreateForm = ({ callback, form, data, setData, frame_mode, visible, selectedRow, setSelectedRow, method }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentAction, setCurrentAction] = useState(null);
    const disabled = frame_mode === Frame_Mode.READ;
    const is_createTable_mode = frame_mode === Frame_Mode.CREATE_TABLE ? "true" : false;
    const rootClasses = [st.Rectangle];

    if (visible || visible == null) {
        rootClasses.push(st.Visible);
    }

    const handleAction = (action) => {
        setCurrentAction(action);
        setModalVisible(true);
    };

    const confirmAction = () => {
        if (currentAction === "create") method.addInfo();
        if (currentAction === "update") method.updateInfo();
        setModalVisible(false);
    };

    const cancelAction = () => {
        setModalVisible(false);
    };

    return (
        <div className={rootClasses.join(" ")}>
            <MyFormAlert frame_mode={frame_mode} />
            <form style={{ gap: "0" }}>
                {Object.keys(form).map((key) => (
                    <div
                        className={st.Row}
                        create_table={is_createTable_mode}
                        onClick={() => setSelectedRow && setSelectedRow(key)}
                        aria-current={selectedRow === key}
                    >
                        <div>{form[key].name}</div>
                        <MyInput
                            value={data ? data[key] : ""}
                            onChange={(e) => setData({ ...data, [key]: e.target.value })}
                            type={form[key].inputType}
                            placeholder={form[key].name}
                            inputStyle={InputStyleConst.INPUT}
                            disabled={disabled}
                        />
                    </div>
                ))}

                {frame_mode === Frame_Mode.CREATE && (
                    <div style={{ display: "flex", gap: "30px" }}>
                        <MyButton onClick={() => handleAction("create")}>Create</MyButton>
                        <MyButton onClick={() => handleAction("cancel")}>Cancel</MyButton>
                    </div>
                )}
                {frame_mode === Frame_Mode.CHANGE && (
                    <div style={{ display: "flex", gap: "30px" }}>
                        <MyButton onClick={() => handleAction("update")}>Save Changes</MyButton>
                        <MyButton onClick={() => handleAction("cancel")}>Cancel</MyButton>
                    </div>
                )}
            </form>

            <MyModal
                visible={modalVisible}
                onConfirm={confirmAction}
                onCancel={cancelAction}
                message={`Are you sure you want to ${currentAction}?`}
            />
        </div>
    );
};

export default MyCreateForm;
