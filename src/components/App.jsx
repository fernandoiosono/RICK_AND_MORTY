import styled from "styled-components";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Nav, Favorites, Cards, About, Login, CardDetail, PageNotFound } from "../components";

const App = () => {
	const userIsAuth = useSelector((state) => state.userIsAuth);

	return (
		<SectionApp>
			<header>{userIsAuth ? <Nav /> : null}</header>
			<main>
				<Routes>
					<Route path="*" element={<PageNotFound />} />
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Cards />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/about" element={<About />} />
					<Route path="/carddetail/:fatherComp/:id" element={<CardDetail />} />
				</Routes>
			</main>
		</SectionApp>
	);
};

const SectionApp = styled.section`
	text-align: center;
	padding: 25px;
`;

export default App;