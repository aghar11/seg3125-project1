import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import PerformanceModifications from './components/performanceModifications/PerfromanceModifications';
import RegularMaintenance from './components/regularMaintenance/RegularMaintenance';
import Tuning from './components/tuning/Tuning';

function App() {
    return (
        <Routes>
            <Route exact path="/home" element={<Homepage/>} />
            <Route exact path="/regularMaintenance" element={<RegularMaintenance/>} />
            <Route exact path="/performanceModifications" element={<PerformanceModifications/>} />
            <Route exact path="/tuning" element={<Tuning/>} />
        </Routes>
    );
}

export default App;