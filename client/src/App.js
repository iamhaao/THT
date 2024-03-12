import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import SignIn from "./Page/SignIn";
import SignUp from "./Page/SignUp";
import AboutUs from "./Page/AboutUs";
import Contact from "./Page/Contact";
import { AdminProtectedRouter, ProtectedRouter } from "./ProtectRouter";
import PremiumAccount from "./Page/PremiumAccount";
import Profile from "./Page/DashBoard/Profile";
import AddMovie from "./Page/DashBoard/Admin/AddMovie";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/movieSlice/movieSlice";
import { fetchCategories } from "./redux/categorySlice/category.slice";
import { fetchPackages } from "./redux/packageSlice/packageSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchMovies());
  dispatch(fetchCategories());
  dispatch(fetchPackages());
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/premium" element={<PremiumAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<AdminProtectedRouter />}>
            <Route element={<AddMovie />} path="/add-movie" />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
