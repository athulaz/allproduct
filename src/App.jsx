
import './App.css';
import Productslist from './pages/Productslist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
    <Productslist/>
    <Footer/>
    </div>
  );
}

export default App;
