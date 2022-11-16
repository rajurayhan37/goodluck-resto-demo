import Dessert from "./components/Dessert";
import MainCrouse from "./components/MainCourse";
import Menu from "./components/Menu";
import MenuBar from "./components/MenuBar";
import Soup from "./components/Soup";
import Staters from "./components/Staters";

function App() {
  return (
    <div>
      <MenuBar/>
      <Menu/>
      <Soup/>
      <Staters/>
      <Dessert/>
      <MainCrouse/>
    </div>
  );
}

export default App;
