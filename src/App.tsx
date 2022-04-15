import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
    <div className="App">
      <div className="container">{<Login />}</div>
    </div>
  );
}

export default App;
