'use client';

import { useRouter } from 'next/navigation';

export default function Discuss() {
  const router = useRouter();
  return (<>
    <div>
      <p>Let&#39;s Dive Deeper</p>
      <div>
        <p><i>... insert discussion of the response</i></p>
      </div>
    </div>
    <button type="button" onClick={() => router.push('/process/query?')}>
      start again
    </button>
  </>);
}
