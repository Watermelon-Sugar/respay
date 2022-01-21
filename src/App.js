import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import AddPropertyForm from './components/Modals/AddPropertyFormModal/AddPropertyForm';
import Rent from './components/Modals/RentModal/Rent';
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <div style={{display: 'flex'}} className='App'>
        <div>
          <Sidebar  />
        </div>
      
      <div className='mainPage'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Properties />} />
        <Route path='/property-details' element={<PropertyDetails />} />
        <Route path='/add-property-form' element={<AddPropertyForm />} />
        <Route path='/rent' element={<Rent/>} />
      </Routes>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
