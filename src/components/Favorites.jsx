import Card from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { filterCards, orderCards } from "../redux/actions.js"

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
	const dispatch = useDispatch();

	const handleOrder = (e) => {
		dispatch(orderCards(e.target.value));
	};

	const handleFilter = (e) => {
		// dispatch(filterCards(e.target.value));
		console.log(e.target.value);
	};

    return (<>
		<SectionFilters>
			<SlctOrder name="slctOrder" id="slctOrder" onChange={handleOrder}>
				<option value></option>
				<option value="Ascending">Ascending</option>
				<option value="Descending">Descending</option>
			</SlctOrder>
			<SlctGender name="slctFilter" id="slctFilter" onChange={handleFilter}>
				<option value></option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="Unknown">Unknown</option>
			</SlctGender>
		</SectionFilters>
        <SectionFavs>
            {favorites.map((f) => (
				<Card
					key={f.id}
					args={{
						id: f.id,
						name: f.name,
						image: f.image,
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
	margin-right: 10px;
`;

const SlctGender = styled(Select)`
	
`;

export default Favorites;