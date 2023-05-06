import Registration from "./../src/pages/registration/Registration";
import UserData from "./pages/data_table/UserData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />}></Route>
        <Route path="/data_table" element={<UserData />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
