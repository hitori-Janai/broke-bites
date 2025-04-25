'use client';

import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

type QrCodeData = {
  id: number;
  qrcode_txt: string;
  score: number;
};

export default function QrCodeGenerator() {
  const [text, setText] = useState('https://nextjs.org');
  const [qrCodeData, setQrCodeData] = useState<QrCodeData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    // Reset QR code data when text changes
    setQrCodeData(null);
  };

  const handleLike = async () => {
    if (!text) return;
    
    setIsLoading(true);
    try {
      const payload = qrCodeData?.id 
        ? { id: qrCodeData.id } 
        : { qrcode_txt: text };
        
      const response = await fetch('/api/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to like QR code');
      }

      const data = await response.json();
      setQrCodeData(data);
    } catch (error) {
      console.error('Error liking QR code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShake = async () => {
    setIsShaking(true);
    try {
      const response = await fetch('/api/random');
      
      if (!response.ok) {
        throw new Error('Failed to get random QR code');
      }
      
      const data = await response.json();
      setText(data.qrcode_txt);
      setQrCodeData(data);
    } catch (error) {
      console.error('Error fetching random QR code:', error);
    } finally {
      setIsShaking(false);
    }
  };

  // Button is enabled if there's text
  const isButtonEnabled = text.length > 0;

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
      
      <div className="flex flex-col items-center gap-2 w-full">
        {qrCodeData && (
          <div className="text-center mb-2">
            <span className="text-sm">ID: {qrCodeData.id}</span>
            <span className="text-sm ml-4">Likes: {qrCodeData.score}</span>
          </div>
        )}
        
        <div className="flex gap-4">
          <button
            onClick={handleLike}
            disabled={!isButtonEnabled || isLoading}
            className={`px-4 py-2 rounded transition-colors ${
              isButtonEnabled 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Liking...' : qrCodeData ? 'Like Again' : 'Like'}
          </button>
          
          <button
            onClick={handleShake}
            disabled={isShaking}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition-colors cursor-pointer"
          >
            {isShaking ? 'Shaking...' : 'Shake'}
          </button>
        </div>
      </div>
      
      {text.length > 0 && (
        <p className="text-sm text-gray-500">
          QR code for: {text}
        </p>
      )}
    </div>
  );
} 