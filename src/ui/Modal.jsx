import { cloneElement, createContext, useContext, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('false');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-[1000] h-screen w-screen backdrop-blur-sm transition-all duration-500">
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-50 px-16 py-12 shadow-2xl transition-all duration-500"
        ref={ref}
      >
        <button
          className="absolute right-8 top-5 translate-x-3 rounded-md border-none bg-none p-2 transition-all duration-200 hover:bg-gray-100"
          onClick={close}
        >
          <HiXMark className="h-10 w-10 text-gray-500" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
