import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import PerformanceModifications from './components/performanceModifications/PerfromanceModifications';
import RegularMaintenance from './components/regularMaintenance/RegularMaintenance';
import Tuning from './components/tuning/Tuning';

function App() {
    return (
        <Routes>
            <Route exact path="/seg3125-project1/home" element={<Homepage/>} />
            <Route exact path="/seg3125-project1/regularMaintenance" element={<RegularMaintenance/>} />
            <Route exact path="/seg3125-project1/performanceModifications" element={<PerformanceModifications/>} />
            <Route exact path="/seg3125-project1/tuning" element={<Tuning/>} />
        </Routes>
    );
}

export default App;