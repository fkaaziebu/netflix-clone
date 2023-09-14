import React from "react";

interface NavbarItemsProps {
  label: string;
}

const NavbarItem = ({ label }: NavbarItemsProps) => {
  return (
    <div className="nav-item">
        {label}
    </div>
  );
};

export default NavbarItem;
