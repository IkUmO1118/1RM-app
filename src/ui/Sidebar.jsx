import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <div className="row-span-full flex flex-col gap-16 bg-teal-600 px-10 py-12">
      <Logo />
      <MainNav />
    </div>
  );
}

export default Sidebar;
