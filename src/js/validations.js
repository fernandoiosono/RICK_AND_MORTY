export const errorLoginForm = (userData, errors, dbDataUser) => {
    let error = "";

    const countEmptyFields = (Object.values(userData).filter(elmnt => elmnt === "").length);
    const countErrors = (Object.values(errors).filter(elmnt => elmnt !== "").length);

    if (countEmptyFields > 0) {
        error = "Por Favor Llene Todos Los Campos";
    } else if (countErrors > 0) {
        error = "Corrija los Datos del Formulario, para Poder Continuar";
    } else if (userData.email !== dbDataUser.email) {
        error = "Usuario No Encontrado :("
    } else if (userData.password !== dbDataUser.password) {
        error = "La Contraseña es Incorrecta :("
    }

    return error;
};

export const validateLoginUserData = (userData, property, setErrors, errors) => {
    let error = "";
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

    if (!userData[property]) {
        error = `Por favor ingresa el ${property}!`;
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
};