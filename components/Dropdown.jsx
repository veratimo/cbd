import Link from "next/link";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <Link href={submenu.href}>{submenu.name}</Link>
        </li>
      ))}
    </ul>
  );
};
  
export default Dropdown;