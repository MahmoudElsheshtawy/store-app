import { useContext } from 'react';
import { BsBag } from 'react-icons/bs';
import { SidebarContext } from '../contexts/SidebarContext';
const Header = () => {
  const {open , setOpen}= useContext(SidebarContext)
  return <header className='bg-slate-400'>
  <div>Header</div>
   <div className='cursor-pointer  flex relative ' onClick={()=>setOpen(!open)}><BsBag/></div>



  </header>;
};

export default Header;
