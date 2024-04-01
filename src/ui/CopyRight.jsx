import { FaGithub } from 'react-icons/fa6';

function CopyRight() {
  return (
    <div className="flex justify-between">
      <span className="items-center text-base">
        &copy; 2024 Ikumo. All rights reserved.
      </span>
      <a href="https://github.com/IkUmO1118" target="_blank" rel="noreferrer">
        <FaGithub className="h-6 w-6 items-center transition-all duration-200 hover:scale-125" />
      </a>
    </div>
  );
}

export default CopyRight;
