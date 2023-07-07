import { useContext, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FnCloseCardContext } from "../js/contexts.js";
import { addFavorite, delFavorite } from "../redux/actions.js"
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
	const dispatch = useDispatch();
	// const buttonFav = useRef(null);
	const { id, name, image, fatherComp } = props.args;
	const [ isFav, setIsFav ] = useState(false);
	const closeCard = useContext(FnCloseCardContext);
	const favorites = useSelector((state) => state.favorites);
	
	const handleFavorite = () => {
		if (isFav) {
			dispatch(delFavorite(id));
			setIsFav(false);
		} else {
			dispatch(addFavorite(id, name, image));
			setIsFav(true);
		}
	};

	useEffect(() => {
		for (let f = 0; f < favorites.length; f++) {
			if (favorites[f].id === id) setIsFav(true);
		}
	}, [favorites]);

	return (
		<ArticleCard>
			<Link to={`/carddetail/${id}`} style={{ textDecoration: "none", color: "purple" }} title={id}>
				<HeaderCard>
					<PName>{name}</PName>
				</HeaderCard>
				<main>
					<ImgCard src={image} alt="Char Photo" />
				</main>
			</Link>
			<footer>
				{/* <ButtonFavMate ref={buttonFav} onClick={handleFavorite}>{ isFav ? "❤️" : "🖤" }</ButtonFavMate> */}
				{
					(fatherComp === "cards") ? (
						<>
							<ButtonFavMate onClick={handleFavorite}>{ isFav ? "❤️" : "🖤" }</ButtonFavMate>
							<ButtonClose onClick={() => { closeCard(id); }}>❌</ButtonClose>	
						</>
					) : (
						<ButtonFavAlone onClick={handleFavorite}>{ isFav ? "❤️" : "🖤" }</ButtonFavAlone>
					)
				}
			</footer>
		</ArticleCard>
	);
};

const ArticleCard = styled.article`
	margin: 15px;
	width: 205px;
	border-radius: 5px;
	padding: 0 15px 15px 15px;
	background: rgba(255, 255, 255, 0.7);

	&:hover { background: white; };
`;

const HeaderCard = styled.header`
	height: 30px;
	margin-bottom: 10px;
`;

const PName = styled.p`
	font-weight: bold;

	&:hover { cursor: pointer; }
`;

const ImgCard = styled.img`
	width: 98%;
	border-radius: 5px;
	margin: 10px 0 10px 0;
	border: 2px solid black;
`;

const Button = styled.button`
	height: 30px;
	color: black;
	font-weight: bold;
	border: 2px solid black;
	background-color: white;

	&:hover { cursor: pointer; }
`;

const ButtonFavAlone = styled(Button)`
	width: 100%;
	/* border-right: none; */
	border-radius: 5px;
`;

const ButtonFavMate = styled(Button)`
	width: 50%;
	border-right: none;
	border-radius: 5px 0 0 5px;
`;

const ButtonClose = styled(Button)`
	width: 50%;
	border-radius: 0 5px 5px 0;
`;

export default Card;