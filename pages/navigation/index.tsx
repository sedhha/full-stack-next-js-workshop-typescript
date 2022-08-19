import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [randomPage, setRandomPage] = useState('');
  const router = useRouter();
  const onClickHandler = () =>
    randomPage.length > 0 && router.push(`navigation/${randomPage}`);

  const onClickHandlerReplace = () =>
    randomPage.length > 0 && router.replace(`navigation/${randomPage}`);
  return (
    <div className='p-4'>
      <h1>Router Navigation</h1>
      <input
        value={randomPage}
        onChange={(e) => setRandomPage(e.target.value)}
        placeholder={'Go to Specific route'}
        className='border'
      />
      <br />
      <button
        onClick={onClickHandler}
        className='p-2 mt-2 ml-2 text-white bg-blue-600'>
        Go to Specific Route
      </button>
      <button
        onClick={onClickHandlerReplace}
        className='p-2 mt-2 ml-2 text-white bg-blue-600'>
        Go to Specific Route with Replace
      </button>
    </div>
  );
}
