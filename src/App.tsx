import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProfileSummary from './components/profile/ProfileSummary';
import CareerTimeline from './components/timeline/CareerTimeline';
import CompetencyRadar from './components/skills/CompetencyRadar';
import MarketDynamics from './components/market/MarketDynamics';
import SuitableRoles from './components/roles/SuitableRoles';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <ProfileSummary />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-800" />
        </div>
        <CompetencyRadar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-800" />
        </div>
        <MarketDynamics />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-800" />
        </div>
        <SuitableRoles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-800" />
        </div>
        <CareerTimeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
