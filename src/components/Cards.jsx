import Card from "./Card";
import styled from "styled-components";

const Cards = (props) => {
	const { characters } = props;
	console.log(characters);

	return (
		<SectionCards>
			{characters.map((c) => (
				<Card
					key={c.idChar}
					args={{
						id: c.idChar,
						name: c.name,
						image: c.image,
						gender: c.gender,
						fatherComp: "cards"
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
