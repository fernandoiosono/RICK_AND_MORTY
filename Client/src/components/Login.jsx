import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAuthentication } from "../redux/actions.js";
import { errorLoginForm, validateLoginUserData } from "../js/validations.js";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({ email: "", password: "" });
	const [userData, setUserData] = useState({ email: "", password: "" });

	const handleInputChange = (e) => {
		const property = e.target.name,
			value = e.target.value;

		// De ésta forma valida la información actualizada que enviamos al estado estado,
		// sin tener el problema de usar el estado desactualizado.
		const userDUpdated = { ...userData, [property]: value };

		setUserData(userDUpdated);
		validateLoginUserData(userDUpdated, property, setErrors, errors);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = userData;
    	const URL = "http://localhost:3001/rickandmorty/users/access";

		const errorForm = errorLoginForm(userData, errors);

		if (errorForm === "") {
			axios(URL + `?email=${email}&password=${password}`)
				.then(({ data }) => {
					if (data.access) {
						// Si existe el usuario en la base de datos, se permite el acceso.
						dispatch(userAuthentication(true));
						navigate("/home");
					} else {
						alert('User Not Found');
					} 
				})
		} else {
			alert(errorForm);
		}
	};

	return (
		<DivLogin>
			<FrmLogin onSubmit={handleSubmit}>
				<H1Title>Welcome Back!</H1Title>
				<LblLogin htmlFor="email">E-Mail:</LblLogin>
				<br />
				<InputLogin type="text" name="email" placeholder="Enter Your E-Mail..." value={userData.email} onChange={handleInputChange} />
				<PError>{errors.email}</PError>
				<LblLogin htmlFor="password">Password:</LblLogin>
				<br />
				<InputLogin type="text" name="password" placeholder="Enter Your Password..." value={userData.password} onChange={handleInputChange} />
				<PError>{errors.password}</PError>
				<BtnLogin type="submit">LogIn</BtnLogin>
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

const H1Title = styled.h1` 
	margin-top: 25px; 
	margin-bottom: 30px; 
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
	margin-bottom: 35px;
`;

const BtnLogin = styled.button`
	height: 35px;
	width: 100px;
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