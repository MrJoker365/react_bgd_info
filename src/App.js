import {Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Main_page from "./pages/Main_page";
import MyCreateTableColumnForm from "./components/UI/Content/forms/MyCreateTableColumnForm";
import CreateTable_page from "./pages/CreateTable_page";
import SystemUsers_page from "./pages/SystemUsers_page";
function App() {
  return (

      <Routes>
              <Route path="/" element={<Navbar/>}>
                  {/*<Route path="main/buildinfo" element={<Main_page/>}/>*/}
                  {/*<Route path="main/buildinfo/:id" element={<Main_page/>}/>*/}
                  <Route path="list/*" element={<Main_page/>}/>
                  <Route path="users/*" element={<SystemUsers_page/>}/>
                  {/*<Route path="newtabletemplate" element={<MyCreateTableColumnForm/>}/> /!*TODO тимчасово*!/*/}
                  <Route path="newtabletemplate" element={<CreateTable_page/>}/> {/*TODO тимчасово*/}
                  {/*<Route path={["main/buildinfo/:id", "main/buildinfo" ]} element={<Main_page/>}/>*/}
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
