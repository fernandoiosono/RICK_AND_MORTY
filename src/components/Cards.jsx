import Card from "./Card";
import styled from "styled-components";
// import { useSelector } from "react-redux"; // GET CHARACTERS WITH REDUX

const Cards = (props) => {
	const { characters } = props;
	// const characters = useSelector((state) => state.characters); // GET CHARACTERS WITH REDUX

	return (
		<SectionCards>
			{characters.map((c) => (
				<Card
					key={c.idChar}
					args={{
						id: c.idChar,
						name: c.name,
						image: c.image,
                  isFav: c.isFav
					}}
				/>
			))}
		</SectionCards>
	);
};

const SectionCards = styled.section`
	display: flex;
	justify-content: center;
`;

export default Cards;
