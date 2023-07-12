import { Card } from "../components";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterFavorites, orderFavorites } from "../redux/actions.js"

const Favorites = () => {
	const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

	const handleFilter = (e) => {
		// Deseleccionamos el orden para evitar tener que codificar más condicionales
		document.getElementById("slctOrder").selectedIndex = 0; 
		
		dispatch(filterFavorites(e.target.value));
	};
	
	const handleOrder = (e) => {
		dispatch(orderFavorites(e.target.value));
	};

    return (<>
		<SectionFilters>
			<SlctGender id="slctFilter" name="slctFilter" onChange={handleFilter}>
				<option value="" style={{ color: 'grey' }}>Filtrar por...</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="Unknown">Unknown</option>
			</SlctGender>
			<Select id="slctOrder" name="slctOrder" onChange={handleOrder}>
				<option value="" style={{ color: 'grey' }}>Ordenar...</option>
				<option value="Ascending">Ascending</option>
				<option value="Descending">Descending</option>
			</Select>
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

const Section = styled.section` display: flex; `;

const SectionFilters = styled(Section)`
	justify-content: right;
	padding: 10px 20px 10px 20px;
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 5px;
`;

const SectionFavs = styled(Section)` justify-content: center; `;

const Select = styled.select`
	height: 30px;
	border-radius: 5px;
`;

const SlctGender = styled(Select)` margin-right: 10px; `;

export default Favorites;