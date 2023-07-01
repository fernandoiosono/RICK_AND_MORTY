import Card from "./Card.jsx";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <SectionFavs>
            {favorites.map((c) => (
				<Card
					key={c.id}
					args={{
						id: c.id,
						name: c.name,
						image: c.image
					}}
				/>
			))}
        </SectionFavs>
    );
};

const SectionFavs = styled.section`
	display: flex;
	justify-content: center;
`;

export default Favorites;