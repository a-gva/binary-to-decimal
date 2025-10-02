'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [bits, setBits] = useState(Array(12).fill(false));
  const [decimal, setDecimal] = useState(0);

  // Update decimal value whenever bits change
  useEffect(() => {
    const newDecimal = bits.reduce((acc, bit, index) => {
      return acc + (bit ? Math.pow(2, 11 - index) : 0);
    }, 0);
    setDecimal(newDecimal);
  }, [bits]);

  // Toggle bit at specific position
  const toggleBit = (position: number) => {
    const newBits = [...bits];
    newBits[position] = !newBits[position];
    setBits(newBits);
  };

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center w-full max-w-md'>
        <h1 className='text-2xl font-bold'>Binary to Decimal</h1>

        <div className='grid grid-cols-12 gap-2 w-full'>
          {bits.map((bit, index) => (
            <div
              key={index}
              className={`border cursor-pointer flex items-center justify-center h-12 text-center ${bit ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
              onClick={() => toggleBit(index)}
            >
              {bit ? '1' : '0'}
            </div>
          ))}
        </div>

        <div className='grid grid-cols-12 gap-2 w-full text-xs'>
          {bits.map((_, index) => (
            <div key={index} className='text-center'>
              {Math.pow(2, 11 - index)}
            </div>
          ))}
        </div>

        <div className='text-xl font-bold'>Decimal: {decimal}</div>
      </main>
    </div>
  );
}
