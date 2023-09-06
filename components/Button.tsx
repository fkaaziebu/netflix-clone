"use client";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  handleClick?: any;
};

const Button = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => signOut()}
        className="h-10 w-full bg-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Button;
