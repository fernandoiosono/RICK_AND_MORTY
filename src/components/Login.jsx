import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../js/contexts.js"

const Login = () => {
    const navigate = useNavigate();
    const fnHandleLogin = useContext(AuthenticationContext);
    
    const [ userData, setUserData ] = useState({ email: "", password: "" });
    const [ errors, setErrors ] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Object.values(errors).length);

        // if (!Object.values(errors).length) {
        if (validateUserData(userData, '', setErrors, errors)) {
            // setInputs({ email: "", password: "" });
            // setErrors({ email: "", password: "" });

            fnHandleLogin(true);
            navigate("/home");

            alert('Bienvenido!!!');
        } else {
            alert('Por Favor Llene Todos Los Campos!');
        }
    };

    const handleInputChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        const userDUpdated = { ...userData, [property]: value };

        setUserData(userDUpdated);
        validateUserData(userDUpdated, property, setErrors, errors); // De ésta forma valida la información actualizada que enviamos al estado estado, sin tener el problema de usar el estado desactualizado.
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="text" name="email" placeholder="Ingresa tu E-Mail..." 
                value={userData.email} 
                onChange={handleInputChange} />
            <p>{errors.email}</p>
            <br />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input type="text" name="password" placeholder="Ingresa tu Contraseña..."
                value={userData.password}
                onChange={handleInputChange} />
            <p>{errors.password}</p>
            <button type="submit">Ingresar</button>
        </form>
    );
};

const validateUserData = (userData, property, setErrors, errors) => {
    let error = "";
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

    if (!property) {
        // Aquí entra cuando hace el submit sin modificar los campos anteriormente. URGE !!!
    } else if (!userData[property]) {
        error = `Por favor ingresa el ${property}.`;
    } else {
        switch (property) {
            case "email":
                if (!regexEmail.test(userData[property])) error = "La esctructura del E-Mail es incorrecta!";
                    else if (userData[property].length > 35) error = "El E-Mail no puedo ser mayor a 35 caracteres!";
                break;
            case "password":
                if (userData[property].length < 6 || userData[property].length > 10) error = "El password debe de contener de 6 a 10 caracteres!";
                    else if (userData[property].replace(/[^0-9]/g, "").length === 0) error = "El password debe contener al menos un número!";
                break;
        }
    }

    setErrors({ ...errors, [property]: error });

    // switch (true) {
    //     case (!userData[property]):
    //         setErrors({ ...errors, [property]: "Por favor llena este campo!" });
    //         break;
    //     case (property === "email"):
    //         if (!regexEmail.test(userData[property]))
    //             setErrors({ ...errors, [property]: "La esctructura del E-Mail es incorrecta!" });
    //         else if (userData[property].length > 35)
    //             setErrors({ ...errors, [property]: "El E-Mail no puedo ser mayor a 35 caracteres!" });
    //         else 
    //             setErrors({ ...errors, [property]: "" });
    //         break;
    //     case (property === "password"):
    //         if (userData[property].length < 6 || userData[property].length > 10)
    //             setErrors({ ...errors, [property]: "El password debe de contener de 6 a 10 caracteres!" });
    //         else if (userData[property].replace(/[^0-9]/g, "").length === 0)
    //             setErrors({ ...errors, [property]: "El password debe contener al menos un número!" });
    //         else 
    //             setErrors({ ...errors, [property]: "" });
    //         break;
    //     default:
    //         setErrors({ ...errors, [property]: "" });
    // }
    
    // if (!userD.email) setError({ ...errors, email: "E-Mail Vacío!" })
    //     else if (!regexEmail.test(userD.email)) setError({ ...errors, email: "E-Mail Inválido!" })
    //         else setError({ ...errors, email: "" })

    // if (!userD.email) setError({ ...errors, email: "E-Mail Vacío!" })
    //     else setError({ ...errors, email: "" })

    // if (!regexEmail.test(userD.email)) setError({ ...errors, email: "E-Mail Inválido!" })
    //     else setError({ ...errors, email: "" })
};

export default Login;