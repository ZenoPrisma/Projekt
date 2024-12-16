import './App.css'
import { User, Countries } from "./Person";
import { UserProvider } from './UserContextProvider';

function App() {

  //const testUser = () => ({ name: "Pedro", age: 25, isMarried: true});
  //const testedUser = testUser();
  // -> <Person name={testedUser.name} age={testedUser.age} isMarried={testedUser.isMarried}/>{""}

  return (
    <UserProvider>
      {"--------"}
      <User name={"Henry"} age={22} isMarried={false} country={Countries.Brazil} />{""}
      {"--------"}
      <User name={"Paul"} age={34} isMarried={true} country={Countries.France} />{""}
      {"--------"}
    </UserProvider>
  );
}

export default App
