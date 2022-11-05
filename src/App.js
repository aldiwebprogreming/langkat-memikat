
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Crouselcomponet from './components/Crouselcomponent';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Label from './components/Label';

function App() {
  return (
      
      <div>
          
          <div className='row'>
              <div className='col-sm-4'>

              </div>

              <div className='col-sm-4'>
                <Header />
                <Hero />
                <Crouselcomponet />
                <Label />
                <Footer />
              </div>

              <div className='col-sm-4'>
                
              </div>
          </div>
      </div>
     );
}

export default App;
