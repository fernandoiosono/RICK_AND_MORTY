import styled from "styled-components";

const About = () => {
	return (
		<DivAbout>
			<h1>Rick & Morty Project</h1>

			<section>
				<ImgLeft src="../../img/rmjail.jpg" alt="rick&mortyJail" />
				<PRight>
					The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters traveling to other planets and dimensions through portals and Rick's flying saucer. Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego.
				</PRight>
			</section>

			<br />

			<section>
				<ImgRight src="../../img/rmdesk.jpg" alt="rick&mortyExperiment" />

				<PLeft>
					Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family. Different versions of the characters inhabit other dimensions throughout the show's multiverse and their personal characteristics can vary from one reality to another. The show's original Rick identifies himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe, but this does not apply to any other member of the Smith household. For instance, in the first-season episode "Rick Potion #9", after turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving the original Summer, Beth and Jerry behind.
				</PLeft>
			</section>

			<p>This is an application where you can find all the information about the 826 characters of this incredible series! :)</p>
		</DivAbout>
	);
};

const DivAbout = styled.div`
	padding: 10px;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
`;

const Img = styled.img`
	width: 300px;
	border-radius: 15px;
	margin: 2% 70px 0 70px;
`;

const ImgLeft = styled(Img)` float: left; `;

const ImgRight = styled(Img)` float: right; `;

const Paragraph = styled.p`
	line-height: 1.4;
	overflow: hidden;
	text-align: justify;
`;

const PLeft = styled(Paragraph)` margin-left: 70px; `;

const PRight = styled(Paragraph)` margin-right: 70px; `;

export default About;