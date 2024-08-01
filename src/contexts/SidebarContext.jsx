import { createContext, useState } from "react";

export const SidebarContext = createContext()
// eslint-disable-next-line react/prop-types
const SidebarProvider = ({children}) => {
// side bar staet

const [open , setOpen] = useState(false);
const handleClose =()=>{
  setOpen(false);
}

  return(
    <SidebarContext.Provider value={{open,setOpen,handleClose}}>
      {children}
    
    </SidebarContext.Provider>
  )
};

export default SidebarProvider;
