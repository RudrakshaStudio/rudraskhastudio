import logo from './logo.svg';
import './App.css';
import heading from './images/PHOTO-2023-12-25-13-50-04_prev_ui.png'
import Slideshow from './components/slider';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <img src={heading} id='heading'/>
      <div style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'center'
      }}>
      <Slideshow />
      </div>
      <Footer />

    </div>
  );
}

export default App;
