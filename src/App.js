import { Route, Routes } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import DashBoard from "./Pages/DashBoard";
import CustomerMaster from "./Pages/CustomerMaster";
import Booking from "./Pages/Booking";




function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path="homepage" element={<HomePage/>}>
        <Route path="/homepage/dashboard" element={<DashBoard/>}/>
        <Route path="/homepage/customermaster" element={<CustomerMaster/>}/>
        <Route path="/homepage/booking" element={<Booking/>}/>
      </Route>
    </Routes>

    </div>
  );
}

export default App;
