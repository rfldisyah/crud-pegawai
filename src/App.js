import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <div className="App">
      <h1>CRUD Data Pegawai</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/users/create" element={<EmpCreate />}></Route>

          <Route path="/users/detail/:empid" element={<EmpDetail />}></Route>
          <Route path="/users/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
