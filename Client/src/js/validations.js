export const validateLoginUserData = (userData, property, setErrors, errors) => {
    let error = "";
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

    if (!userData[property]) {
        error = `Plase Enter The ${property}!`;
    } else {
        switch (property) {
            case "email":
                if (!regexEmail.test(userData[property])) error = "The E-Mail Structure Is Incorrect!";
                    else if (userData[property].length > 35) error = "The E-Mail Cannot Be Longer Than 35 Characters!";
                break;
            case "password":
                if (userData[property].length < 6 || userData[property].length > 10) error = "The Password Must Contain 6 To 10 Characters!";
                    else if (userData[property].replace(/[^0-9]/g, "").length === 0) error = "The Password Must Contain At Least One Number!";
                break;
        }
    }

    setErrors({ ...errors, [property]: error });
};

export const errorLoginForm = (userData, errors) => {
    let error = "";

    const countErrors = (Object.values(errors).filter(elmnt => elmnt !== "").length);
    const countEmptyFields = (Object.values(userData).filter(elmnt => elmnt === "").length);

    if (countEmptyFields > 0) {
        error = "Please Fill All Fields!";
    } else if (countErrors > 0) {
        error = "Correct The Form Data To Continue!";
    }

    return error;
};

export const validateNewIDChar = (id, allCharacters) => {
    let order = "Enter A Number From 1 To 826!";

    switch (true) {
        case isNaN(id):
            alert(`This Field Only Accepts Numbers At The Moment. \n ${order}`);
            return false;

        case id < 1 || id > 826:
            alert(`${order}`);
            return false;

        case allCharacters.filter((char) => char.id == id).length > 0:
            alert("The Entered Character Already Exists, Enter Another!");
            return false;
    }

    return true;
};