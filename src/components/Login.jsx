import { useState } from "react";

const Login = () => {
    const [ inputs, setInputs ] = useState({ email: "", password: "" });
    const [ errors, setErrors ] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.values(errors).length) {
            // setInputs({ email: "", password: "" });
            // setErrors({ email: "", password: "" });

            alert('Bienvenido!!!');
        } else alert('Por Favor Llene Todos Los Campos!');
    };

    const handleChange = (e) => {

    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="text" name="email" placeholder="Ingresa tu E-Mail..." 
                value={inputs.email} 
                onChange={handleChange} />
            <p>{errors.email}</p>
            <br />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input type="text" name="password" placeholder="Ingresa tu Contraseña..."
                value={inputs.password}
                onChange={handleChange} />
            <p>{errors.password}</p>
            <button type="submit">Ingresar</button>
        </form>
    );
};

export default Login;