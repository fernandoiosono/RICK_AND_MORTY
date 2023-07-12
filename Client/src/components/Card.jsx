import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCharacter, addFavorite, delFavorite } from "../redux/actions.js"

const Card = (props) => {
	const dispatch = useDispatch();
	const [ isFav, setIsFav ] = useState(false);
	const { id, name, image, gender, fatherComp } = props.args;
	const allFavorites = useSelector((state) => state.allFavorites);
	
	const handleFavorite = () => {
		if (isFav) {
			dispatch(delFavorite(id));
			setIsFav(false);
		} else {
			dispatch(addFavorite(id, name, image, gender));
			setIsFav(true);
		}
	};

	const handleDelCharacter = () => {
		dispatch(delCharacter(id));
	};

	useEffect(() => {
		for (let f = 0; f < allFavorites.length; f++) {
			if (allFavorites[f].id === id) setIsFav(true);
		}
	}, [allFavorites]);

	return (
		<ArticleCard>
			<Link title={id} style={{ textDecoration: "none", color: "purple" }} to={`/carddetail/${fatherComp}/${id}`}>
				<HeaderCard>
					<PName>{name}</PName>
				</HeaderCard>
				<main>
					<ImgCard src={image} alt="Char Photo" />
				</main>
			</Link>
			<footer>
				{
					fatherComp === "cards" ? (
						<>
							<ButtonFavMate onClick={handleFavorite}>{ isFav ? "❤️" : "🖤" }</ButtonFavMate>
							<ButtonDelete onClick={handleDelCharacter}>❌</ButtonDelete>	
						</>
					) : ( // fatherComp === "favorites"
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
	border-radius: 5px;
`;

const ButtonFavMate = styled(Button)`
	width: 50%;
	border-right: none;
	border-radius: 5px 0 0 5px;
`;

const ButtonDelete = styled(Button)`
	width: 50%;
	border-radius: 0 5px 5px 0;
`;

export default Card;