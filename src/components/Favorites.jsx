import Card from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { filterFavorites, orderFavorites } from "../redux/actions.js"

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
	const dispatch = useDispatch();

	const handleOrder = (e) => {
		dispatch(orderFavorites(e.target.value));
	};

	const handleFilter = (e) => {
		// Deseleccionamos el orden para evitar tener que codificar más condicionales
		document.getElementById("slctOrder").selectedIndex = 0; 
		
		dispatch(filterFavorites(e.target.value));
	};

    return (<>
		<SectionFilters>
			<SlctGender name="slctFilter" id="slctFilter" onChange={handleFilter}>
				<option value="" style={{ color: 'grey' }}>Filtrar por...</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="Unknown">Unknown</option>
			</SlctGender>
			<SlctOrder name="slctOrder" id="slctOrder" onChange={handleOrder}>
				<option value="" style={{ color: 'grey' }}>Ordenar...</option>
				<option value="Ascending">Ascending</option>
				<option value="Descending">Descending</option>
			</SlctOrder>
		</SectionFilters>
        <SectionFavs>
            {favorites.map((f) => (
				<Card
					key={f.id}
					args={{
						id: f.id,
						name: f.name,
						image: f.image,
						gender: f.gender,
						fatherComp: "favorites"
					}}
				/>
			))}
        </SectionFavs>
	</>);
};

const SectionFilters = styled.section`
	display: flex;
	justify-content: right;
	padding: 10px 20px 10px 20px;
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 5px;
`;

const SectionFavs = styled.section`
	display: flex;
	justify-content: center;
`;

const Select = styled.select`
	height: 30px;
	border-radius: 5px;
`;

const SlctOrder = styled(Select)`
	
`;

const SlctGender = styled(Select)`
	margin-right: 10px;
`;

export default Favorites;