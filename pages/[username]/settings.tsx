import { useRouter } from 'next/router';
import React from 'react';

export default function Settings() {
  const router = useRouter();
  const query = router.query;
  return <div>Username: {query.username}</div>;
}
