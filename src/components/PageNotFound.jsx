import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Page Not Found</h1>
            <button onClick={() => navigate("/")}>Volver</button>
        </>
    );
};

export default PageNotFound;