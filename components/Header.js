import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className=
      "flex justify-between max-w-4xl pl-9 mx-[200px] lg:mx-auto"
      /* "flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto" */
      >

        {/* left */}
        <div
          className=
          "relative md:hidden lg:inline-grid w-24 cursor-pointer"
          /* "relative hidden lg:inline-grid w-24  cursor-pointer" */
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          className=
          "relative w-10 hidden  flex-shrink-0 cursor-pointer"
          /*"relative w-10 lg:hidden flex-shrink-0 cursor-pointer" */
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md  ">
            <div className="absolute inset-y-0 flex pl-3 items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search.."
            />
          </div>
        </div>

        {/* right */}
        <div className=
        "pl-13 flex items-center justify-end space-x-4"
        /* "flex items-center justify-end space-x-4" */
        >
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-6 hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5  bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white ">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                className=" h-10 w-10 rounded-full cursor-pointer"
                src={session.user.image}
                alt="profile pic"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
