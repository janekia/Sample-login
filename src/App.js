import logo from './logo.svg';
import Login  from "./Components/login";
import Logout  from "./Components/logout";
import {selectUser} from './Features/userSlice';
import {useSelector} from "react-redux";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {user ? <Logout /> : <Login />}
    </div>
  );
}

export default App;
