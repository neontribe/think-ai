'use client';

import {useEffect} from 'react';
import {redirect} from 'next/navigation';
import {useGlobalState} from '@/app/contexts/GlobalStateProvider';

export default function ProcessGuard(Component, redirectTo = '/process/query') {
  return function Guard(...props) {
    const { auth } = useGlobalState();

    // on render, useEffect will trigger, and we can check/redirect
    useEffect(() => {
      if (!auth) {
        return redirect(redirectTo);
      }
    }, [auth]);

    // if !auth, render nothing (to avoid wierd flickering)
    if (!auth) {
      return null;
    }
    // otherwise, render the component we were passed with its props
    return <Component {...props} />;
  };
}
