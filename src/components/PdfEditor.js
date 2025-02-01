import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";


function PdfEditor() {
    const [pdfFile, setPdfFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    // Handle file upload
    const onFileChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      
      setPdfFile(file);
    };
  
    // Called when the PDF is successfully loaded
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  
    // Add text to PDF using pdf-lib
    const addTextToPdf = async () => {
      if (pdfFile) {
        const fileReader = new FileReader();
        fileReader.onload = async function () {
          const arrayBuffer = this.result;
          const pdfDoc = await PDFDocument.load(arrayBuffer);
  
          // Add text to the first page
          const pages = pdfDoc.getPages();
          const firstPage = pages[0];
          firstPage.drawText("Hello from React!", {
            x: 50,
            y: 700,
            size: 30,
            color: rgb(0, 0.53, 0.71),
          });
  
          // Save the modified PDF
          const pdfBytes = await pdfDoc.save();
          const blob = new Blob([pdfBytes], { type: "application/pdf" });
          saveAs(blob, "edited.pdf");
        };
        fileReader.readAsArrayBuffer(pdfFile);
      }
    };

  //   useEffect(() => {
  //     const createHtmlFromPdf = async () => {
  //         const pdf = await pdfjs.getDocument("http://govhr.gocoolcare.com/uploads/Default_VerifyCertificate1729244357035.pdf").promise;
  //         const textContent = [];

  //         for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
  //             const page = await pdf.getPage(pageNumber);
  //             const text = await page.getTextContent();
  //             const pageText = text.items.map(item => item.str).join(' ');

  //             textContent.push(pageText);
  //         }

  //         // Create HTML
  //         const htmlContent = textContent.map((text, index) => (
  //             `<div class="page" id="page-${index + 1}">
  //                 <h2>Page ${index + 1}</h2>
  //                 <p>${text}</p>
  //             </div>`
  //         )).join('');

  //         document.getElementById('pdf-content').innerHTML = htmlContent;
  //     };

  //     createHtmlFromPdf();
  // }, []);
  
    return (
      <div>
        <h1>React PDF Editor</h1>
        <div id="pdf-content"></div>
        <input type="file" onChange={onFileChange} accept="application/pdf" />
        {/* {pdfFile && (
          <>
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous
            </button>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
            <br />
            <button onClick={addTextToPdf}>Add Text to PDF</button>
          </>
        )} */}
      </div>
    );
  
}

export default PdfEditor