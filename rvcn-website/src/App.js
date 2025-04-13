import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';


// Import your page components
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />

          
            {/* Add other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;