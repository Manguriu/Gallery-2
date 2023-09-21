import React, { useState } from "react";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

function LgButton({ user }: Props) {
  return (
    <div>
      {user ? (
        <div className="mt-10">
          <p className="text-slate-600 flex">You are logged in</p>
          <a
            href="/api/auth/signout"
            className="mt-4 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-cyan-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            // Call handleLogout when clicking the logout button
          >
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Logout
            </span>
          </a>
        </div>
      ) : (
        <div className="mt-10">
          <p className="text-slate-600 flex">
            Login to Explore more cool functionalities
          </p>
          <a
            href="/client"
            className="mt-4 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-cyan-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-cyan-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Login
            </span>
          </a>
          <div>
            <p>email</p>
            <p>password</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LgButton;
