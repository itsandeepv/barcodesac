import './App.css';
import PdfEditor from './components/PdfEditor';
import Test from './components/Test';
import ProductPage from './pages/DetailPage';
import BarcodeScanner from './pages/Scanner';
import Tracking from './pages/Tracking';
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set the workerSrc to load the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <div className="App">
     <ProductPage/>
     {/* <Test/> */}
    </div>
  );
}

export default App;
