import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Collection from './components/collection';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Collection />
      <Footer />
      
    </div>
  );
}

export default App;
