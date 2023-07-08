import Nav from "./Nav.jsx";
import Favorites from "./Favorites.jsx";
import Cards from "./Cards.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import CardDetail from "./CardDetail.jsx";
import PageNotFound from "./PageNotFound.jsx";

import { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { AuthenticationContext, FnCloseCardContext } from "../js/contexts.js";

const App = () => {
	const [userIsAuth, setUserIsAuth] = useState(false);

	const handleLogin = (isAuth) => {
		if (!isAuth) setCharacters([]);

		setUserIsAuth(isAuth);
	};

	const closeCharCard = (idChar) => {
		setCharacters((current) => current.filter((char) => char.idChar !== idChar));
	};

	return (
		<AuthenticationContext.Provider value={handleLogin}>
			<SectionApp>
				<header>{userIsAuth ? <Nav /> : null}</header>
				<main>
					<FnCloseCardContext.Provider value={closeCharCard}>
						<Routes>
							<Route path="*" element={<PageNotFound />} />
							<Route path="/" element={<Login />} />
							<Route path="/home" element={<Cards />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/about" element={<About />} />
							<Route path="/carddetail/:fatherComp/:id" element={<CardDetail />} />
						</Routes>
					</FnCloseCardContext.Provider>
				</main>
			</SectionApp>
		</AuthenticationContext.Provider>
	);
};

const SectionApp = styled.section`
	text-align: center;
	padding: 25px;
`;

export default App;
