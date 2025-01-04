import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import ContactUs from "./components/Email/Email";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { authUser } = useAuth(); // Use destructuring here

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      {/* Routes Configuration */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/hax" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Protected Routes */}
        {/* <Route
          path="/book" element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />*/}
      </Routes>

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
