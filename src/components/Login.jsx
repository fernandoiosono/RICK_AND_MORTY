import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../js/contexts.js";
import { errorLoginForm, validateLoginUserData } from "../js/validations.js";

const Login = () => {
	const dbDataUser = { email: "fernandoiosono@gmail.com", password: "admin123" };

	const navigate = useNavigate();
	const fnHandleLogin = useContext(AuthenticationContext);

	const [userData, setUserData] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({ email: "", password: "" });

	const handleSubmit = (e) => {
		const errorForm = errorLoginForm(userData, errors, dbDataUser);

		e.preventDefault();

		if (errorForm === "") {
			// Si no hay error en el formulario, permite el acceso
			fnHandleLogin(true);
			navigate("/home");
		} else {
			alert(errorForm);
		}
	};

	const handleInputChange = (e) => {
		const property = e.target.name,
			value = e.target.value;

		// De ésta forma valida la información actualizada que enviamos al estado estado,
		// sin tener el problema de usar el estado desactualizado.
		const userDUpdated = { ...userData, [property]: value };

		setUserData(userDUpdated);
		validateLoginUserData(userDUpdated, property, setErrors, errors);
	};

	return (
        <DivLogin>
            <FrmLogin onSubmit={handleSubmit}>
                <br />
                <h1>Welcome Back!</h1>
                <br />
                <LblLogin htmlFor="email">Correo Electrónico:</LblLogin>
                <br />
                <InputLogin type="text" name="email" placeholder="Ingresa tu E-Mail..." value={userData.email} onChange={handleInputChange} />
                <PError>{errors.email}</PError>
                <br />
                <LblLogin htmlFor="password">Contraseña:</LblLogin>
                <br />
                <InputLogin type="text" name="password" placeholder="Ingresa tu Contraseña..." value={userData.password} onChange={handleInputChange} />
                <PError>{errors.password}</PError>
                <br />
                <BtnLogin type="submit">Ingresar</BtnLogin>
            </FrmLogin>
        </DivLogin>
	);
};

const DivLogin = styled.div`
    padding: 10px;  
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FrmLogin = styled.form`
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    height: 60vh;
    width: 60vh;
`;

const LblLogin = styled.label`
    font-weight: bold;
    font-size: 15px;
`;

const InputLogin = styled.input`
    border-radius: 5px;  
    height: 30px;
    margin-top: 10px;
    border: 2px solid black;
    width: 200px;
    text-align: center;
`;

const PError = styled.p`
	color: #9d1a1a;
    font-weight: bold;
    font-size: 10px;
    background-color: red;
    color: white;

`;

const BtnLogin = styled.button`
    height: 35px;
    width: 100px;
    margin-top: 10px;
    border-radius: 5px;  
    border: 2px solid black;
    font-weight: bold;
    background-color: black;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: rgb(46, 204, 113);
        color: black;
    }
`;

export default Login;
