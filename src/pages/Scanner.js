import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';

const BarcodeScanner = () => {
  const [barcodeData, setBarcodeData] = useState(null);
  const [showBarCode, setshowBarCode] = useState(false);

  const handleScan = (result) => {
    // console.log("result" ,result);
    if (result) {
      setBarcodeData(result.text);
      triggerDownload(result.text); // Trigger download once barcode is scanned
    }
  };

  const handleError = (err) => {
    console.log(err);
  };

  const triggerDownload = (barcode) => {
    console.log(barcode);
    const fileUrl = `assets/feeReciept.pdf`; // Assuming the barcode data corresponds to a file
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `Default_VerifyCertificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(()=>{
    setshowBarCode(true)
  },[])

  return (
    <div className='' style={{maxWidth:"500px"}}>
      {/* <h1>Scan a Barcode to Download</h1> */}
      {/* <button onClick={()=>{setshowBarCode(true)}}>Scan Now</button> */}
      {
          showBarCode &&
          <QrReader
            onResult={(result, error) => {
                if(showBarCode){
                    if (result) {
                      handleScan(result);
                    } else if (error) {
                      handleError(error);
                    }
                }
            }}
            style={{ width: '100%' }}
          />
      }
      {barcodeData && <p>Scanned Barcode: {barcodeData}</p>}
    </div>
  );
};

export default BarcodeScanner;
