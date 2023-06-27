'use client'
import Image from "next/image"
import { useState, useEffect, useRef } from "react";
import MenuItems from "./MenuItems";


const navigation = [
  { name: 'Home', 
    href: '/home', 
    current: true, 
  },
  { name: 'Work',
    href: '/work', 
    current: false,
  },
  { name: 'Exhibition', 
    href: '/exhibition', 
    current: false,
    submenu: [
      {
        name: "Il tubo",
        href: "/iltubo",
      },
      {
        name: "In-sicure stabilità",
        href: "/insicurestabilita",
      },
      {
        name: "Il cubo",
        href: "/ilcubo",
      },
      {
        name: "Inside the outside",
        href: "/insidetheoutside",
      },
      {
        name: "The Belly",
        href: "/thebelly",
      },
      {
        name: "The Sign",
        href: "/thesign",
      },
      {
        name: "Mirror/s",
        href: "/mirrors",
      },
    ] 
  },
  { name: 'About', 
    href: '/about', 
    current: false 
  },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (toggle && ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
}, [toggle]);



  return (
        <>
          <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <Image 
                  src="/assets/icons/logo-black.png" 
                  alt="t."
                  height={50}
                  width={70} 
                  className="mx-2"
                />
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                  {navigation.map((menu, index) => (
                    <MenuItems key={index} items={menu} />
                  ))}
                </ul>
        
                <div className="sm:hidden flex flex-1 justify-end items-center" ref={ref}>
                  <Image
                    src={toggle ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"}
                    alt="menu"
                    width={28}
                    height={28}
                    className="object-contain mx-2"
                    aria-expanded={toggle ? "true" : "false"}
                    onClick={() => setToggle((toggle) => !toggle)}
                    />
                  <div
                    className={`z-40 ${
                      !toggle ? "hidden" : "flex"
                    } p-6 bg-white-grey-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                      {navigation.map((menu, index) => (
                         <MenuItems key={index} items={menu} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
          </nav>
        </>
  )
}

export default Navbar