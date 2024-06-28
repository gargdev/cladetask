import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import DashboardPage from "./components/DashboardPage";
import Products from "./components/Products";
import Applicants from "./components/Applicants";
import JobPreview from './components/JobPreview'
import Match from "./components/Match";
import Messages from "./components/Messages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/applicant" element={<Applicants/>} />
          <Route path="/preview" element={<JobPreview/>} />
          <Route path="/match" element={<Match/>} />
          <Route path="/message" element={<Messages/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App