import { useRouter } from 'next/router';
import React from 'react';

export default function SlugPage() {
  const router = useRouter();
  return <div>Blog Slug: {router.query.slug}</div>;
}
