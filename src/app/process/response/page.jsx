'use client';

import { useRouter } from 'next/navigation';

export default function Response() {
  const router = useRouter();
  return (<>
    <div>
      <p> Nice!</p>
      <p><strong>BUT</strong></p>
      <p> What could be the problem with generating content this way </p>
    </div>
    <button type="button" onClick={() => router.push('/process/discuss')}>
      Find Out
    </button>
  </>);
}
