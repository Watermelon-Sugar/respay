import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import AddPropertyForm from './components/Modals/AddPropertyFormModal/AddPropertyForm';
import Rent from './components/Modals/RentModal/Rent';
import "antd/dist/antd.css";
import SuccessReport from './components/Modals/SuccessReport/SuccessReport';
import RESPAY from './Adapters/Axios';
import { useEffect } from 'react';

function App() {
const login = async () => {
try {
       const res = await RESPAY.post('/api/auth/signin', {
  username: "zgamomv@tmtdoeh.com",
  password: "aA11@@"
})
console.log(res.data?.data?.token)

       localStorage.setItem('accesstoken', res.data?.data?.token)
    }catch(err){
       console.log(err.response.data)
    }
}

useEffect(()=>{
  login()
}, [])


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
        <Route path='/property-details/:id' element={<PropertyDetails />} />
        <Route path='/add-property-form' element={<AddPropertyForm />} />
        <Route path='/rent' element={<Rent/>} />
        <Route path='/success-report' element={<SuccessReport/>} />
      </Routes>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
