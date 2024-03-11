import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import SignIn from "./Page/SignIn";
import SignUp from "./Page/SignUp";
import AboutUs from "./Page/AboutUs";
import Contact from "./Page/Contact";
import { ProtectedRouter } from "./ProtectRouter";
import PremiumAccount from "./Page/PremiumAccount";
// import Profile from "./Page/Profile";

function App() {
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
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
