import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../js/contexts.js"
import { useContext } from "react";

const Nav = () => {
    const navigate = useNavigate();
    const fnHandleLogin = useContext(AuthenticationContext);

    const handleLogOut = () => {
        fnHandleLogin(false);
        navigate("/");
    };

    return (<>
        <Navigation>
            <ArticleLinks>
                <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
                    <H3Home>Home</H3Home>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                    <H3About>About</H3About>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <H3LogOut onClick={handleLogOut}>LogOut</H3LogOut>
                </Link>
            </ArticleLinks>
            <ArticleSearch>
                <SearchBar />
            </ArticleSearch>
        </Navigation>
        <Hr />
    </>);
};

const Navigation = styled.nav`
    border-radius: 5px;
    display: flex;
    padding: 0 10px 0 10px;
    background: rgba(255, 255, 255, 0.5);
    align-items: center;
`;

const ArticleLinks = styled.article`
    width: 30%;
    display: flex;
    justify-content: left;
`;

const ArticleSearch = styled.article`
    width: 70%;
    display: flex;
    justify-content: right;
`;

const H3Home = styled.h3`
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px 20px 3px 20px;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

const H3About = styled.h3`
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px 20px 3px 20px;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

const H3LogOut = styled.h3`
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px 20px 3px 20px;

    &:hover {
        background-color: white;
        color: red;
        cursor: pointer;
    }
`;

const Hr = styled.hr`
  border-top: 2px solid black;
  border-bottom: none;
`;

export default Nav;