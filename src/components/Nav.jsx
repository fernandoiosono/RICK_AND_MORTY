import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";

const Nav = () => {
    return (
        <Navigation>
            <SearchBar />
        </Navigation>
    );
};

const Navigation = styled.nav`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: right;
`;

export default Nav;