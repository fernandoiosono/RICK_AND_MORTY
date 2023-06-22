import styled from "styled-components";

const About = () => {
	return (
		<DivAbout>
			<h1>Rick & Morty Project</h1>

			<section>
				<ImgLeft src="../../img/rmcarcel.jpg" alt="rick&mortyJail" />
				<PRight>
					Rick Sánchez es un ejemplo del típico "científico loco". Es un genio, pero es irresponsable, alcohólico, egoísta, un poco depresivo y con
					poca cordura. Rick por diferentes razones termina mudándose a la casa de su hija Beth y en ese momento se encuentra con su nieto Morty; un
					chico de 14 años de edad, tímido y no muy listo. Al juntarse con su nieto, Rick y Morty viven una variedad de aventuras a lo largo del
					cosmos y universos paralelos. Y es mediante tantas vivencias y reflexiones que Rick busca que su nieto Morty no acabe como su padre, Jerry,
					un hombre muy poco exitoso que a pesar de tener buenas intenciones resulta ser bastante inútil en muchas ocasiones y depende mucho de su
					esposa, Beth, hija de Rick. A pesar de estar muy apegados, Rick y su nieto experimentan momentos en los que Summer, hermana de Morty, se une
					en ocasiones a las pintorescas aventuras provocadas por Rick.
				</PRight>
			</section>

			<br />

			<section>
				<ImgRight src="../../img/rmdesk.jpg" alt="rick&mortyExperiment" />

				<PLeft>
					La fórmula general en Rick y Morty consiste en la yuxtaposición de dos escenarios que confluyen. Por un lado se muestran las aventuras que
					vive un abuelo extremadamente egoísta y alcohólico por lo vasto y desconocido del espacio intergaláctico o interdimensional, el cual
					arrastra a su nieto para que viaje con él. Estas aventuras se intercalan en cada episodio con dramas domésticos familiares más propios del
					género sitcom. Dan Harmon describe esta fusión de ciencia ficción y ambiente familiar como una mezcla de influencias entre las dos obras de
					Matt Groening: Los Simpson y Futurama. Por otro lugar, el coautor Justin Roiland comunicó la intención de los creadores de que la serie
					sobrepasara la continuidad tradicional en la televisión, optando así por storylines discontinuas, «no fijadas por reglas». Roiland describe
					cada episodio como su «propio punto de vista».
				</PLeft>
			</section>

			<p>Esta es una aplicación donde podrás encontrar toda la información de los 826 personajes de esta increíble serie :)</p>
		</DivAbout>
	);
};

const DivAbout = styled.div`
	padding: 10px;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
`;

const ImgLeft = styled.img`
	float: left;
	margin: 2% 70px 0 70px;
	width: 300px;
	border-radius: 15px;
`;

const ImgRight = styled.img`
	float: right;
	margin: 2% 70px 0 70px;
	width: 300px;
	border-radius: 15px;
`;

const PRight = styled.p`
	line-height: 1.4;
	margin-right: 70px;
	overflow: hidden;
	text-align: justify;
`;

const PLeft = styled.p`
	line-height: 1.4;
	margin-left: 70px;
	overflow: hidden;
	text-align: justify;
`;

export default About;
