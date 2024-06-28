import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Applicants from "./components/Applicants";
import JobPreview from './components/JobPreview'
import Match from "./components/Match";
import Messages from "./components/Messages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<JobPreview/>}/>
          <Route path="/applicant" element={<Applicants/>} />
          <Route path="/match" element={<Match/>} />
          <Route path="/message" element={<Messages/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App