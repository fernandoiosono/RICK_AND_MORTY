import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav = () => {
    return (<>
        <Navigation>
            <ArticleLinks>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <H3Home>Home</H3Home>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                    <H3About>About</H3About>
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
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px 20px 3px 20px;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

const Hr = styled.hr`
  border-top: 2px solid black;
  border-bottom: none;
`;

export default Nav;