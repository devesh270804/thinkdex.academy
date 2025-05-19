import "./App.css";
import Navbar from "./components/Navbar";
import StudentCertifications from "./components/StudentCertifications";
import TrainingCertification from "./components/TrainingCertification";
import LearningPathsGrid from "./cards/LearningPathsGrid";
import InternshipProgram from "./components/InternshipProgram";
import TopCompanyReferrals from "./components/TopCompanyReferrals";
import CareerReadinessAgents from "./components/CareerReadinessAgents";
import AmbassadorProgram from "./components/AmbassadorProgram";
import WhatYoullGet from "./components/WhatYoullGet";
import Faqs from "./components/faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <StudentCertifications />
      </header>
      <div className="App-body">
        <TrainingCertification />
        <LearningPathsGrid />
        <InternshipProgram />
        <TopCompanyReferrals />
        <CareerReadinessAgents />
        <AmbassadorProgram />
        <WhatYoullGet />
        <Faqs />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
