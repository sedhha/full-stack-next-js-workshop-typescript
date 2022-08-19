import { useRouter } from 'next/router';
import React from 'react';

export default function RandomPage() {
  const router = useRouter();
  const pageTitle = router.query.randomPage ?? 'Getting';
  const goBack = () => router.back();
  const reload = () => router.reload();
  return (
    <div>
      <div>RandomPage: {pageTitle}</div>
      <button className='p-2 mt-2 text-white bg-blue-600' onClick={goBack}>
        Go Back
      </button>
      <button className='p-2 mt-2 ml-2 text-white bg-blue-600' onClick={reload}>
        Reload
      </button>
    </div>
  );
}
