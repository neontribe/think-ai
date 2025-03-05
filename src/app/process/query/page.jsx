'use client';

import { useRouter } from 'next/navigation';

export default function Query() {
  const router = useRouter();
  return (<>
    <div>
      <p> Think of an idea for an image</p>
      <p><strong>BUT</strong> think about ...</p>
      <div>What makes a good prompt?</div>
      <div>What to be aware of?</div>
    </div>
    <input type="text" defaultValue="Describe an image" />
    <button type="button" onClick={() => router.push('/process/response')}>
      Create!
    </button>
  </>);
}
