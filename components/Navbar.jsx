'use client'
import Image from "next/image"
import { useState, useEffect, useRef } from "react";
import MenuItems from "./MenuItems";
import Link from "next/link";


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
        href: "/exhibition/il-tubo",
      },
      {
        name: "In-sicure stabilità",
        href: "/exhibition/insicure-stabilita",
      },
      {
        name: "Il cubo",
        href: "/exhibition/il-cubo",
      },
      {
        name: "Inside the outside",
        href: "/exhibition/inside-the-outside",
      },
      {
        name: "The Belly",
        href: "/exhibition/the-belly",
      },
      {
        name: "The Sign",
        href: "/exhibition/the-sign",
      },
      {
        name: "Mirror/s",
        href: "/exhibition/mirrors",
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
          <nav className="mx-auto max-w-7xl pb-2 sm:pb-6 lg:pb-8">
            <div className="relative flex h-16 items-center justify-between">
                <Link href="/home">
                <Image 
                  src="/assets/icons/logo-black.png" 
                  alt="t."
                  height={50}
                  width={70} 
                  className="mx-2"
                />
                </Link>
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