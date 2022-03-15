import Scores from "./Scores";

const Students = (props) => {
  return ( 
    <div>
      {props.students.map(student => 
        <div>
          <h2>Name: {student.name}</h2>
          <h4>Bio: {student.bio}</h4>
          
          {student.scores.map((score, i) =>
            <Scores key={student.name + 'score' + i} score={score} />
          )}
        </div>
        )}
    </div>
   );
}
 
export default Students;