"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function ProcessGuard(Component, redirectTo = '/process/query') {
  return function Guard(...props) {
    const auth = true;
    console.log(auth);
    useEffect(() => {
      if (!auth) {
        debugger;
        console.log("firing");
        return redirect(redirectTo);
      }
    }, [auth]);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
