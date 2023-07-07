import Card from "./Card.jsx";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <SectionFavs>
            {favorites.map((f) => (
				<Card
					key={f.id}
					args={{
						id: f.id,
						name: f.name,
						image: f.image,
						component: "favs"
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