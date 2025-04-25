'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QrCodeGenerator() {
  const [text, setText] = useState('https://nextjs.org');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg">
      <h1 className="text-2xl font-bold">QR Code Generator</h1>
      
      <div className="w-full">
        <label htmlFor="text-input" className="block mb-2 text-sm font-medium">
          Enter text for QR code:
        </label>
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter text or URL"
        />
      </div>
      
      <div className="border p-4 bg-white">
        <QRCodeSVG value={text} size={200} />
      </div>
      
      {text.length > 0 && (
        <p className="text-sm text-gray-500">
          QR code for: {text}
        </p>
      )}
    </div>
  );
} 