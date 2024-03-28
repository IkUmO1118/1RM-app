import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest('button').getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 8,
    });

    openId === '' || openId !== id ? open(id) : close();
  }

  return (
    <button onClick={handleClick}>
      <HiEllipsisVertical className="h-12 w-12 p-1 hover:bg-gray-100" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  const StyledlistPosition = {
    top: `${position.y}px`,
    right: `${position.x}px`,
  };

  return createPortal(
    <ul
      className="fixed rounded-xl bg-white shadow-sm"
      style={StyledlistPosition}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="flex w-full items-center gap-6 border-none bg-none px-10 py-4 text-left text-xl transition-all duration-200 hover:bg-gray-200"
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

// Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
