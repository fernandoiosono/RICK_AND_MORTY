import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../js/contexts.js";
import { errorLoginForm, validateLoginUserData } from "../js/validations.js";

const Login = () => {
    const dbDataUser = { email: "fernandoiosono@gmail.com", password: "admin123" };

    const navigate = useNavigate();
    const fnHandleLogin = useContext(AuthenticationContext);

    const [ userData, setUserData ] = useState({ email: "", password: "" });
    const [ errors, setErrors ] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        const errorForm = errorLoginForm(userData, errors, dbDataUser);

        e.preventDefault();

        if (errorForm === "") { // Si no hay error en el formulario, permite el acceso
            fnHandleLogin(true);
            navigate("/home");
        } else {
            alert(errorForm);
        }
    };

    const handleInputChange = (e) => {
        const property = e.target.name, value = e.target.value;

        // De ésta forma valida la información actualizada que enviamos al estado estado, 
        // sin tener el problema de usar el estado desactualizado.
        const userDUpdated = { ...userData, [property]: value };

        setUserData(userDUpdated);
        validateLoginUserData(userDUpdated, property, setErrors, errors);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="text" name="email" placeholder="Ingresa tu E-Mail..." 
                value={userData.email} 
                onChange={handleInputChange} />
            <PError>{errors.email}</PError>
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input type="text" name="password" placeholder="Ingresa tu Contraseña..."
                value={userData.password}
                onChange={handleInputChange} />
            <PError>{errors.password}</PError>
            <button type="submit">Ingresar</button>
        </form>
    );
};

const PError = styled.p`
    color: red;
`;

export default Login;