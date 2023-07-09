import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setCharacterDetail, cleanDetail } from "../redux/actions";

const CardDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fatherComp, id } = useParams();
    const character = useSelector((state) => state.characterDetail)
    
    useEffect(() => {
        dispatch(setCharacterDetail(id));

        return () => { dispatch(cleanDetail()); };
    }, [id]);

    return (
        <DivRow>
            <SectionImage>
                <h1>{character.name}</h1>
                <ImgChar src={character.image} alt="Character Image" />
                <br />
                {
                    fatherComp === "cards" ? (
                        <ButtonBack onClick={ () => {navigate("/home")} }>Back</ButtonBack>
                    ) : (
                        <ButtonBack onClick={ () => {navigate("/favorites")} }>Back</ButtonBack>
                    )
                }
            </SectionImage>
            <SectionDetail>
                <DivColumn>
                    <ArticleDetail>
                        <h1>Status: </h1>
                        <PData>{character.status}</PData>
                    </ArticleDetail>
                    <ArticleWMargin>
                        <h1>Demonym: </h1>
                        <PData>{character.type}</PData>
                    </ArticleWMargin>
                    <ArticleWMargin>
                        <h1>Species: </h1>
                        <PData>{character.species}</PData>
                    </ArticleWMargin>
                    <ArticleWMargin>
                        <h1>Gender: </h1>
                        <PData>{character.gender}</PData>
                    </ArticleWMargin>
                </DivColumn>
            </SectionDetail>
            <SectionDetail>
                <DivColumn>
                    <ArticleDetail>
                        <h1>Created: </h1>
                        <PData>{character.created}</PData>
                    </ArticleDetail>
                    <ArticleWMargin>
                        <h1>Origin: </h1>
                        <PData>{character.origin}</PData>
                    </ArticleWMargin>
                    <ArticleWMargin>
                        <h1>Location: </h1>
                        <PData>{character.location}</PData>
                    </ArticleWMargin>
                    <ArticleEmpty/>
                </DivColumn>
            </SectionDetail>
        </DivRow>
    );
};

const DivFlex = styled.div` display: flex; `;

const DivRow = styled(DivFlex)` flex-direction: row; `;

const DivColumn = styled(DivFlex)`
    flex-direction: column;
    height: 100%;
`;

const SectionImage = styled.section`
    flex: 1;
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    justify-content: center;
    overflow: visible;

    &:hover { background: rgba(255, 255, 255, 1); }
`;

const SectionDetail = styled.section`
    flex: 2;
    margin-left: 10px;
`;

const Article = styled.article`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

const ArticleDetail = styled(Article)`
    background-color: rgba(255, 255, 255, 0.7);

    &:hover { background: rgba(255, 255, 255, 1); }
`;

const ArticleWMargin = styled(ArticleDetail)` margin-top: 10px; `;

const ArticleEmpty = styled(Article)` margin-top: 10px; `;

const ImgChar = styled.img`
    width: 70%;
    border-radius: 5px;
    border: 2px solid black;
    margin-bottom: 20px;
`;

const ButtonBack = styled.button`
    font-weight: bold;
    border: 2px solid black;
    border-radius: 5px;
    height: 30px;
    width: 70px;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

const PData = styled.p`
    margin-left: 10px; 
    font-size: 20px; 
`;

export default CardDetail;