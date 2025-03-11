'use client';

import { useGlobalState } from "@/app/contexts/GlobalStateProvider";
import Modal from "./Modal";

export default function ModalWrapper({ children }) {
  const { state } = useGlobalState();

  return (
    <>
      {children}
      {state.modalVisible && <Modal />}
    </>
  );
}
