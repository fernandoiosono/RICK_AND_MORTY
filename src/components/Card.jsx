import styled from "styled-components";

export default function Card(props) {
   const { name, species, gender, image } = props.args;

   return (
      <ArticleCard>
         <HeaderCard>
            <H2NameCard> {name} </H2NameCard>
            <BtnCloseCard onClick={() => window.alert('Emulamos que se cierra la card')}> X </BtnCloseCard>
         </HeaderCard>
         <MainCard>
            <ImgCard src={image} alt="Rick Photo" />
         </MainCard>
         <FooterCard>
            <H4Species> {species} </H4Species>
            <H4Gender> {gender} </H4Gender>
         </FooterCard>
      </ArticleCard>
   );
}

const ArticleCard = styled.article`
  background-color: white;
  background: rgba(255, 255, 255, 0.5);
  padding: 15px;
  margin: 15px;
  width: 205px;
  border-radius: 5px;
`;

const HeaderCard = styled.header``;

const MainCard = styled.main``;

const FooterCard = styled.footer`
   display: flex;
   padding-top: 10px;
   width: 100%;
   white-space: nowrap;
`;

const H2NameCard = styled.h2` 
   float: left;
`;

const BtnCloseCard = styled.button`
   float: right;
   border: 2px solid black;
   color: black;
   background-color: transparent;
   font-weight: bold;
   border-radius: 5px;
`;

const H4Species = styled.h4`
   float: left; 
   position: relative;
   width: 50%;
   border: 2px solid black;
   border-right: none;
   margin: auto;
   padding: 10px;
   border-radius: 5px 0 0 5px;
`;

const H4Gender = styled.h4`
   float: right; 
   position: relative;
   width: 50%;
   border: 2px solid black;
   margin: auto;
   padding: 10px;
   border-radius: 0 5px 5px 0;
`;

const ImgCard = styled.img`
  border: 2px solid black;
  width: 98%;
  border-radius: 5px;
`;