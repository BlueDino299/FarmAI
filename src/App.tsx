import { useState } from 'react';
import HomePage from './pages/HomePage';
import CropGradingPage from './pages/CropGradingPage';
import CropPlanningPage from './pages/CropPlanningPage';
import PestAlertPage from './pages/PestAlertPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'grading':
        return <CropGradingPage onNavigate={setCurrentPage} />;
      case 'planning':
        return <CropPlanningPage onNavigate={setCurrentPage} />;
      case 'pest':
        return <PestAlertPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {renderPage()}
    </div>
  );
}

export default App;
