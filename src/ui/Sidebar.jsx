import CopyRight from './CopyRight';
import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <div className="row-span-full flex flex-col gap-32 border-r-2 border-gray-100 px-10 py-12">
      <Logo />
      <MainNav />
      <div className="mt-auto">
        <CopyRight />
      </div>
    </div>
  );
}

export default Sidebar;
