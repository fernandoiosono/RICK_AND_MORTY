export default function Card(props) {
   const { name, species, gender, image } = props.args;

   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt="Rick Funny Photo" />
      </div>
   );
}
