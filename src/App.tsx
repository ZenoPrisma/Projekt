import './App.css'
import { Person } from "./Person";

function App() {

  const testUser = () => ({ name: "Pedro", age: 25, isMarried: true});
  const testedUser = testUser();

  return (
    <>
      {"--------"}
      <Person name={"Henry"} age={22} isMarried={false}/>{""}
      {"--------"}
      <Person name={"Paul"} age={34} isMarried={true}/>{""}
      {"--------"}
      <Person name={testedUser.name} age={testedUser.age} isMarried={testedUser.isMarried}/>{""}
    </>
  );
}

export default App
