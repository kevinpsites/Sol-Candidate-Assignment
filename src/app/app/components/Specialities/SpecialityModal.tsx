import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface SpecialityModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const SpecialityModal: React.FC<SpecialityModalProps> = ({
  open,
  children,
  onClose,
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 mx-4 flex flex-col">
        <div className="flex justify-end">
          <button className="m-4 text-gray-600" onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default SpecialityModal;
