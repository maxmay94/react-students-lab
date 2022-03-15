import Students from "./Students";

const Scores = (props) => {
  return ( 
    <div>
      <p>Date: {props.score.date}</p>
      <p>Score: {props.score.score}</p>
      <br />
    </div>
   );
}
 
export default Scores;