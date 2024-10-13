import './App.css';
import Test from './components/Test';
import BarcodeScanner from './pages/Scanner';
import Tracking from './pages/Tracking';

function App() {
  return (
    <div className="App">
     <BarcodeScanner/>
     {/* <Test/> */}
    </div>
  );
}

export default App;
