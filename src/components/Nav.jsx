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
                    <H4Home>Home</H4Home>
                </Link>
                <Link to="/favorites" style={{ textDecoration: 'none', color: 'black' }}>
                    <H4About>❤️</H4About>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                    <H4About>About</H4About>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <H4LogOut onClick={handleLogOut}>LogOut</H4LogOut>
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
    padding: 0 20px 0 20px;
    background: rgba(255, 255, 255, 0.7);
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

const H4Home = styled.h4`
    margin-right: 10px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px 20px 3px 20px;
    height: 25px;
    align-items: center;
    display: flex;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

const H4About = styled.h4`
    margin-right: 10px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px 20px 3px 20px;
    height: 25px;
    align-items: center;
    display: flex;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

const H4LogOut = styled.h4`
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px 20px 3px 20px;
    height: 25px;
    align-items: center;
    display: flex;

    &:hover {
        background-color: red;
        color: white;
        cursor: pointer;
    }
`;

const Hr = styled.hr`
  border-top: 2px solid black;
  border-bottom: none;
`;

export default Nav;