import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import ContactUs from "./components/Email/Email";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth(); // authUser ko context se fetch karte hain

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      {/* Routes Configuration */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Protected Routes */}
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
      </Routes>

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
