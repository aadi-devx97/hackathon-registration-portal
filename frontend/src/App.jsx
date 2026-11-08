import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import VerifyOTP from './pages/VerifyOTP'
import Dashboard from './pages/Dashboard'
import Registration from './pages/Registration'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App