import React, { useState } from 'react';
import styled from 'styled-components';

// const FormContainer = styled.div`
//     width: 300px;
//     padding: 20px;
//     background-color: white;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0,0,0,0.1);
// `;


// const FormContainer = styled.div`
//
//   display: flex;
//     //width: 300px;
//     padding: 20px;
//     background-color: rgba(31, 31, 31, 0.97);
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0,0,0,0.1);
//     //position: absolute;
//     //top: 50%;
//     //left: 50%;
//     //transform: translate(-50%, -50%);
// `;


const FormContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
  background: rgba(0, 0, 0, 0.62);
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0,0,0,0.1);
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 5px;
    margin-bottom: 15px;
`;

const StyledButton = styled.button`
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email is : ${email} and Password is : ${password}`);
    }

    return (
        <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel htmlFor="emailInput">Email:</StyledLabel>
                <StyledInput id="emailInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <StyledLabel htmlFor="passwordInput">Password:</StyledLabel>
                <StyledInput id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <StyledButton type="submit">Log In</StyledButton>
            </StyledForm>
        </FormContainer>
    );
}

export default LoginForm;