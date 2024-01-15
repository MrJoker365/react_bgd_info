import {Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Main_page from "./pages/Main_page";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main_page/>}>
          {/*<Route index element={<Main_page/>}/>*/}

        </Route>
      </Routes>
  );
}

export default App;
