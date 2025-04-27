import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './components/home';
import Profile from './components/profile';
import HealthProgram from './components/healthprogram';
import RegistrationForm from './components/registrationform';
import EnrollmentForm from './components/enrollmentform';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element = {<HomePage />} /> 
        <Route path='/profile' element = {<Profile/>} /> 
        <Route path='/healthprogram' element = {<HealthProgram/>} /> 
        <Route path='/registrationform' element = {<RegistrationForm/>} /> 
        <Route path='/enrollmentform' element = {<EnrollmentForm/>} /> 
      </Routes>
    </Router>
  )
}
export default App
