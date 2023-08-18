import "./App.css";
import Nav from './components/Nav';
import AllTasks from './components/AllTasks';
import Dashboard from "./components/dashboard";

function App() {

  return (
    <div className="main-container">
      <Nav />
      <AllTasks />
    </div>
  );
}

export default App;
