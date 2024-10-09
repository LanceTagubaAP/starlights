// src/App.js
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './index.css';

const data = [
  {src : "https://nolae.eu/cdn/shop/products/newjeans-official-light-stick-nolae-334191.webp?v=1680684911&width=700" , alt : "Newjeans"},
  {src : "https://kpopmerch.com/cdn/shop/files/zerobaseone-md-goods-zb1-zerobaseone-official-light-stick-36083779076277.jpg?v=1697442610" , alt : "Newjeans"},
  {src : "https://m.media-amazon.com/images/I/41PGPJlO+UL.jpg" , alt : "Newjeans"}
];



function App() {
  return (
    <div className="app-container"> {/* Add the app-container class for the grid layout */}
      <Navbar />
      <main>
        {/* Add your main content here */}
        <h1>Welcome to Starlights</h1>
        <p>Your one-stop shop for K-pop lightsticks!</p>
        <Carousel data={data}></Carousel>
        {/* Add more content as needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
