"use client";

const Modal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="relative bg-blue-600 rounded p-6 shadow-lg z-10">
        <p>Hang on... Doing a thing</p>
      </div>
    </div>
  );
};

export default Modal;
