import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);
    
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
       
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
      <li 
        className="menu-items pl-4" 
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}  
      >
        {items.submenu ? (
          <>
            <button 
                type="button" 
                aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
            >
              {items.name}{' '}
            </button>
            <Dropdown 
                submenus={items.submenu}
                dropdown={dropdown} 
            />
          </>
        ) : (
          <Link href={items.href}>{items.name}</Link>
        )}
      </li>
    );
}
export default MenuItems;