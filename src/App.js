import "./styles.css";

function getRow(index, person) {
  let className = "row";

  if (index === 0) {
    className += " header";
  } else if (index % 2 === 0) {
    className += " even";
  }

  if (person.role === "PM") {
    className += " pm";
  }

  return (
    <div className={className}>
      <span>{person.first}</span>
      <span>{person.last}</span>
      <span>{person.role}</span>
      <span style={{color: person.color}}>{person.color}</span>
    </div>
  );
}

export default function App() {
  let classRoster = [
    { first: "First Name", last: "Last Name", role: "Role", color: "Favorite Color"},
    { first: "Derek", last: "P", role: "Volunteer", color: "red"},
    { first: "Faran", last: "J", role: "Volunteer", color: "orange"},
    { first: "Jared", last: "H", role: "Volunteer", color: "yellow"},
    { first: "Joe", last: "T", role: "Volunteer", color: "green"},
    { first: "Matt", last: "W", role: "Volunteer", color: "blue"},
    { first: "Mika", last: "S", role: "PM", color: "indigo"},
    { first: "Nicki", last: "A", role: "Volunteer", color: "violet"},
    { first: "Ralphie", last: "L", role: "PM", color: "red"}
  ];
  return (
    <div className="App">
      {classRoster.map((person, i) => getRow(i, person))}
    </div>
  )
}