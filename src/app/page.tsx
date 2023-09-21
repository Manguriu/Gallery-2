import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";
import HeroContext from "./components/hero/HeroContext";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <>
          <div className="max-container px-4 mt-4">
            <p>
              <span className="font-bold text-xl">Email:</span> user@example.com
            </p>
            <p>
              <span className="font-bold text-xl">Password:</span> 1Password
            </p>
            <div>
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
            </div>
          </div>
          <HeroContext />
        </>
      )}
    </>
  );
}

// Email: user@example.com

// Password: 1Password
