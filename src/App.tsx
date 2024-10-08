// src/App.js
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './index.css';

function App() {
  return (
    <div className="app-container"> {/* Add the app-container class for the grid layout */}
      <Navbar />
      <main>
        {/* Add your main content here */}
        <h1>Welcome to Starlights</h1>
        <p>Your one-stop shop for K-pop lightsticks!</p>
        {/* Add more content as needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
