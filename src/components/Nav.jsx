import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";

export default function Nav(props) {
    return (
        <Navigation>
            <SearchBar />
        </Navigation>
    );
}

const Navigation = styled.nav`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: right;
`;