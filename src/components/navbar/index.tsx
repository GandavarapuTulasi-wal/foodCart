import { ReactElement, useState } from "react"
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import './index.css'
import Link from "./Link"
import { SelectedPage } from "../types"
import useMediaQuery from "../../hooks/useMediaQuery"
import { MagnifyingGlassIcon,PercentBadgeIcon,ChatBubbleLeftEllipsisIcon,UserIcon,ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link as RouterLink } from 'react-router-dom';

type Props={
    isTopOfPage: boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}
const NavBar=({isTopOfPage,selectedPage,setSelectedPage}:Props):ReactElement=>{
    const flexBetween='flex items-center justify-between'
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-white drop-shadow";
    return(
       <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full  shadow-md`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
            <RouterLink to="/">
              <img alt="logo" src={Logo} className="w-[75px] h-[75px]" />
            </RouterLink>
                { isAboveMediumScreens ? (
                    <div className={`${flexBetween}  ml-*`}>
                        <div className={`${flexBetween} gap-10 `}>
                        <div className="flex items-center gap-3">
                            <MagnifyingGlassIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                            page="Search"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            to="/search"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <PercentBadgeIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                                page="Offers"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                to="/offers"
                            />
                            <sup className="text-yellow-500">New</sup>
                        </div>
                        <div className="flex items-center gap-3">
                            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                                page="Help"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                to="/help"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <UserIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                                page="Sign In"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                to="/signin"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <ShoppingCartIcon className="h-6 w-6 text-slate-600" />
                            {/* <ActionButton setSelectedPage={setSelectedPage}>Cart</ActionButton> */}
                            <Link 
                                page="Cart"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                 to="/cart"
                            />
                        </div>
                           
                        </div>
                        </div>
                       ) : (
                        <button
                          className="rounded-full bg-secondary-500 p-2"
                          onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                          <Bars3Icon className="h-6 w-6 text-black" />
                        </button>
                      )}
            </div>
        </div>
        </div>
        {!isAboveMediumScreens&&isMenuToggled&&(
            <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400 "/>
                    </button>
                    </div>

                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <div className="flex items-center gap-3">
                            <MagnifyingGlassIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                            page="Search"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            to="/search"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <PercentBadgeIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                                page="Offers"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                to="/offers"
                            />
                            <sup className="text-yellow-500">New</sup>
                        </div>
                        <div className="flex items-center gap-3">
                            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                                page="Help"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                to='help'
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <UserIcon className="h-6 w-6 text-slate-600" />
                            <Link 
                                page="Sign In"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                to="signin"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <ShoppingCartIcon className="h-6 w-6 text-slate-600" />
                            {/* <ActionButton setSelectedPage={setSelectedPage}>Cart</ActionButton> */}
                            <Link 
                                page="Cart"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                to="/cart"
                            />
                        </div>
                           

                </div>
            </div>
        )}
       </nav>
    )
}

export default NavBar