import {Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Main_page from "./pages/Main_page";
function App() {
  return (

      <Routes>
              <Route path="/" element={<Navbar/>}>
                  <Route path="main" element={<Main_page/>}/>
                  <Route path="main/:mode/:id" element={<Main_page/>}/>
              </Route>

      </Routes>



      // <Routes>
      //     <Route path="/" element={<Main_page/>}>
      //         <Route path="main" element={<Navbar/>}>
      //             <Route path="bb" element={<List_page_content/>}/>
      //         </Route>
      //
      //     </Route>
      // </Routes>


      // <Routes>
      //   <Route path="/main" element={<Main_page/>}>
      //     {/*<Route index element={<Main_page/>}/>*/}
      //
      //   </Route>
      // </Routes>
  );
}

export default App;
