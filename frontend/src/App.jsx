import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header';
import NewEvents from './components/NewEvents';
import Footer from './components/Footer';
import Login from './components/login';

export const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} /> {/* You can use the same component */}
        {/* Other routes */}
      </Routes>
    </Router>
    <Header />
    <NewEvents/>
    <Footer />
    
    </div>
  )
}

export default App;