import Link from "next/link";

export default function Navbar() {
  return (
    //     </li>
    //     <li>
    //       <Link href="/client">client</Link>
    //     </li>
    //   </ul>
    // </nav>
    <header className="max-container mt-5 bg-cyan-200 px-4 py-2 rounded-xl">
      <nav className=" flex justify-between items-center">
        <a href="/">
          <h1 className="text-3xl font-semibold text-cyan-600 max-xl:hidden">
            |ImageGala|
          </h1>
        </a>
        <ul className="flex justify-center items-center lg:gap-5 ">
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-600 px-6 py-2 hover:text-white rounded-lg">
            <a href="/"> Home</a>
          </li>
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-600 px-6 py-2 hover:text-white rounded-lg">
            <a href="/client"> Other-images</a>
          </li>
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-600 px-6 py-2 hover:text-white rounded-lg">
            <a href="/api/auth/signin"> Login</a>
          </li>
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-600 px-6 py-2 hover:text-white rounded-lg">
            <a href="/api/auth/signout"> Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
