import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

// QR config
const qrConfig = {
  type: "canvas",
  shape: "square",
  width: 250,
  height: 250,
  data: "Razz kutty ithami rasu",
  margin: 5,
  qrOptions: {
    typeNumber: "0",
    mode: "Byte",
    errorCorrectionLevel: "Q",
  },
  imageOptions: {
    saveAsBlob: true,
    hideBackgroundDots: true,
    imageSize: 0.3,
    margin: 0,
  },
  dotsOptions: {
    type: "rounded",
    color: "#000",
    roundSize: true,
  },
  backgroundOptions: {
    round: 0,
    color: "#ffffff",
  },
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Red_trademark.svg/1024px-Red_trademark.svg.png",

  cornersSquareOptions: {
    type: "rounded",
    color: "red",
  },
  cornersDotOptions: {
    type: "",
    color: "red",
  },
};

const StyledQR = () => {
  const ref = useRef(null);
  const qrInstance = useRef(null);

  useEffect(() => {
    qrInstance.current = new QRCodeStyling(qrConfig);

    // Clear old QR if re-rendered
    ref.current.innerHTML = "";
    qrInstance.current.append(ref.current);
  }, []);

  const handleDownload = () => {
    if (qrInstance.current) {
      qrInstance.current.download({ name: "my-qr", extension: "png" });
    }
  };

  return (
    <div className="text-center mt-6">
      <h2 className="text-xl font-semibold mb-4">Styled QR Code</h2>
      <div ref={ref} className="mb-4" />
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default StyledQR;
