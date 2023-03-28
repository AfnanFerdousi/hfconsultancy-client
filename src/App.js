import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/nav/Menu";
import AdminSubjectView from "./pages/admin/AdminSubjectView";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminStudyArea from "./pages/admin/StudyArea";
import Sub from "./pages/admin/Sub";
import AdminSubjects from "./pages/admin/Subjects";
import AdminUniversityUpdate from "./pages/admin/UniversityUpdate";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
// import AddSubject from "./pages/admin/university/AddSubject";
import Footer from "./components/footer/Footer";
import AddStudents from "./pages/admin/AddStudents";
import AdminOrders from "./pages/admin/Orders";
import ApplyNow from "./pages/ApplyNow";
import Cart from "./pages/Cart";
import Contact from './pages/Contact';
import Search from "./pages/Search";
import SearchProgram from "./pages/SearchProgram";
import StudyAreasList from "./pages/StudyAreasList";
import StudyAreaView from "./pages/StudyAreaView";
import SubjectView from "./pages/SubjectView";
import AdminStudents from "./pages/admin/Students";


const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchprogram" element={<SearchProgram />} />
        <Route path="/studyAreas" element={<StudyAreasList />} />
        <Route path="/studyArea/:slug" element={<StudyAreaView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subject/:slug" element={<SubjectView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/university/subject/:subjectSlug" element={<ApplyNow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<UserProfile />} />
          <Route path="user/orders" element={<UserOrders />} />
        </Route> */}

        <Route path="/dashboard/admin" element={<AdminDashboard>
        </AdminDashboard>}>

          {/* <Route path="admin" element={<AdminDashboard />} /> */}
          <Route path="studyArea" element={<AdminStudyArea />} />
          <Route path="subject" element={<Sub />} />
          <Route path="subjects" element={<AdminSubjects />} />
          <Route path="subject/:slug" element={<AdminSubjectView />} />
          <Route
            path="admin/university/update/:slug"
            element={<AdminUniversityUpdate />}
          />
          <Route
            path="addStudent"
            element={<AddStudents />}
          />
          <Route
            path="students"
            element={<AdminStudents />}
          />

          <Route path="admin/orders" element={<AdminOrders />} />

        </Route>

        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
