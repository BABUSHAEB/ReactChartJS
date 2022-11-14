import './App.css';
import NavBar from './component/NavBar';
import LineCharts from './component/GraphTypes/LineCharts';
import BarCharts from './component/GraphTypes/BarCharts';
import PieCharts from './component/GraphTypes/PieCharts';
import DoughnutCharts from './component/GraphTypes/DoughnutCharts';
import PolarAreaCharts from './component/GraphTypes/PolarAreaCharts';
import RadarCharts from './component/GraphTypes/RadarCharts';
import { BrowserRouter ,Route, Routes } from "react-router-dom"
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linecharts" element={<LineCharts />} />
          <Route path="/barcharts" element={<BarCharts />} />
          <Route path="/piecharts" element={<PieCharts />} />
          <Route path="/doughnutcharts" element={<DoughnutCharts />} />
          <Route path="/polarareacharts" element={<PolarAreaCharts />} />
          <Route path="/radarcharts" element={<RadarCharts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
