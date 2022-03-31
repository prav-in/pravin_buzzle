import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <BrowserRouter>
      <Searchbar />
      <Aside />
      <Main />
    </BrowserRouter>
  );
}

export default App;
