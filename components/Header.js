import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {selectItems} from "../slices/basketSlice";

function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

  return (
    <header> 
    {/* Top nav, Logo, Search bar, utilities */}
        <div className="md:flex items-center bg-amazon_blue p-1 flex-grow-0 py-2">
            {/* image */}
            <div className="mt-2 flex items-center  ">
                {/* <div className="mt-2 flex items-center flex-grow sm:flex-grow-0"> */}
                <Image onClick={() => router.push("/")}
                src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit = "contain" // it will keep the aspect ratio
                className="cursor-pointer"
                /> 
            </div>

            {/* Search bar */}
            <div className="flex cursor-pointer items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow"> 
            {/* sm:flex */}
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text"
                />
                <SearchIcon className="h-12 p-4"/>
            </div>

            {/* Right  info */}
                <div className="hidden items-center text-xs space-x-6 text-white  md:flex mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn :signOut} className="link">
                        <p>{session ? `Hello, ${session.user.name}`: "Sign in"}</p>
                        <p className="font-bold md:text-sm">Account&Lists</p>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-bold md:text-sm">&Orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">{items.length}</span>
                        <ShoppingCartIcon className="h-9"/>
                        <p className="font-bold md:text-sm mt-4">Basket</p>
                    </div>
              </div>
    </div>
    {/* Bottom nav */}
        <div className="flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
            <p className="link flex items-center"><MenuIcon className="h-6 mr-1"/>
            All
             </p>
             <p className="link">Prime video</p>
             <p className="link">Amazon Business</p>
             <p className="link">Today's Deals</p>
             <p className="link">Gift Cards</p>
             <p className="link hidden lg:inline">Electronics</p>
             <p className="link hidden lg:inline-flex">Food & Gorcery</p>
             <p className="link hidden lg:inline-flex">Shooper Toolkit</p>
             <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header