import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchBar } from "../components";
import { cleanFilterFavorites, cleanState } from "../redux/actions.js";

const Nav = () => {
    const dispatch = useDispatch();

    const handleFavorites = () => {
        // Reseteamos los filtros para que aparezcan todos los favoritos de nuevo cada que se abra el componente
        dispatch(cleanFilterFavorites()); 
    };

    const handleLogOut = () => {
        dispatch(cleanState());
    };

    return (<>
        <Navigation>
            <ArticleLinks>
                <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
                    <H4Before>Home</H4Before>
                </Link>
                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                    <H4Before onClick={handleFavorites}>❤️</H4Before>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                    <H4Before>About</H4Before>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <H4Last onClick={handleLogOut}>💣</H4Last>
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

const Article = styled.article` display: flex; `;

const ArticleLinks = styled(Article)`
    width: 30%;
    justify-content: left;
`;

const ArticleSearch = styled(Article)`
    width: 70%;
    justify-content: right;
`;

const H4 = styled.h4`
    height: 25px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    border: 2px solid black;
    padding: 3px 20px 3px 20px;
`;

const H4Before = styled(H4)`
    margin-right: 10px;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

const H4Last = styled(H4)`
    &:hover {
        background-color: #fe3e3e;
        color: white;
        cursor: pointer;
    }
`;

const Hr = styled.hr`
  border-top: 2px solid black;
  border-bottom: none;
`;

export default Nav;