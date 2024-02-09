import React, {useState} from 'react';
import MyInput from "../../input/MyInput";
import MyButton from "../../button/MyButton";
import st from "./MyCreateForm.module.css"
import MySelect from "../../select/MySelect";

const MyCreateForm = ({callback, form, data}) => {

    const [info, setInfo] = useState({
        "address": "Клепарівська 18",
        "electric_box": "1 поверх",
        "place_of_overlap": "5 поверх",
        "persons_with_disabilities": 0,
        "number_of_people": 70
    })


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { // функція, яка передається до callback
            ...info,
            // id: Date.now()
        }
        callback(newPost)

        let emptyInfo = {}
        Object.keys(info).map((key) => {
            // setInfo({...info, [key]:""})
            emptyInfo = {...emptyInfo, [key]: ''}
            }
        )
        setInfo(emptyInfo)



    }

    return (

        <div className={st.Rectangle}>

            <div className={st.Alert}>read only</div>

            <MySelect/>

            <form>
                {
                    Object.keys(form).map((key) =>

                            <div className={st.Row}>
                                <div>{form[key].name}</div>
                                <MyInput
                                    value={info[key]}
                                    onChange={ (e) => setInfo({...info, [key]: e.target.value})}
                                    type={form[key].inputType}
                                    placeholder={form[key].name}
                                    inputStyle="input"
                                />
                            </div>
                    )
                }

                    {/*<MyInput*/}
                    {/*    value={info.address}*/}
                    {/*    onChange={ (e) => setInfo({...info, address: e.target.value})}*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Адреса"*/}
                    {/*    inputStyle="input"*/}

                    {/*/>*/}



                <MyButton onClick={(e) => addNewPost(e)}>Створити</MyButton>
            </form>

        </div>



    );
};

export default MyCreateForm;