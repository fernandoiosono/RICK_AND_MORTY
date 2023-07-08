import Card from "./Card.jsx";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Cards = () => {
	const allCharacters = useSelector((state) => state.allCharacters);

	return (
		<SectionCards>
			{allCharacters.map((c) => (
				<Card
					key={c.id}
					args={{
						id: c.id,
						name: c.name,
						image: c.image,
						gender: c.gender,
						fatherComp: "cards",
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
