"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"; 
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)
     const { isSignedIn } = useUser();
     const [menuOpen, setMenuOpen] = useState(false);
   
    return ( <>{showNavbar &&    <nav className='fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl flex justify-between items-center p-4 px-6 rounded-full z-50
                            bg-white/30 backdrop-blur-md shadow-lg transition-all'>
            
                <Link href={"/"} className='flex items-center'>
                <svg className='h-8' viewBox="0 0 1176 238" title="Linktree Logo" xmlns="http://www.w3.org/2000/svg"><path d="M0 25.5326H33.7257V202.802H127.205V233.988H0V25.5326ZM160.564 25.5326C172.111 25.5326 181.642 34.469 181.642 45.9586C181.642 57.6307 172.111 66.9318 160.564 66.9318C148.833 66.9318 139.485 57.6307 139.485 45.9586C139.485 34.469 148.833 25.5326 160.564 25.5326ZM144.067 83.7103H176.51V233.988H144.067V83.7103ZM195.572 83.7103H228.015V104.501C237.546 88.6345 254.042 79.6981 275.854 79.6981C311.046 79.6981 333.041 107.054 333.041 150.46V233.988H300.598V153.378C300.598 125.292 288.318 109.425 265.956 109.425C241.579 109.425 228.015 126.021 228.015 156.113V233.988H195.572V83.7103ZM350.087 25.5326H382.53V157.39L443.016 83.8927H483.707L419.188 159.031L483.707 233.988H443.016L382.53 160.673V233.988H350.087V25.5326ZM496.354 45.4114H529.347V83.7103H567.838V110.519H529.347V187.847C529.347 197.695 535.395 203.713 544.743 203.713H566.372V233.988H540.344C512.117 233.988 496.354 217.392 496.354 187.847V45.4114ZM584.5 83.7103H614.577V102.313C622.642 88.0873 636.022 79.6981 652.519 79.6981C657.468 79.6981 660.217 79.8805 663.883 81.1571V111.249C661.683 110.702 658.384 110.155 651.786 110.155C627.958 110.155 614.761 130.034 614.761 164.503V233.988H582.318V83.7103H584.5ZM739.582 79.6981C775.324 79.6981 813.999 101.218 813.999 162.314V166.691H697.792C700.358 193.5 715.938 208.273 741.965 208.273C760.661 208.273 776.607 198.242 780.09 184.199H813.082C809.783 214.291 778.44 238 741.965 238C695.226 238 665.899 207.726 665.899 158.667C665.899 115.261 694.309 79.6981 739.582 79.6981ZM779.54 139.882C774.958 121.28 760.294 109.608 739.766 109.608C719.97 109.608 706.04 121.644 700.541 139.882H779.54ZM902.162 79.6981C937.904 79.6981 976.578 101.218 976.578 162.314V166.691H860.372C862.938 193.5 878.517 208.273 904.545 208.273C923.241 208.273 939.187 198.242 942.669 184.199H975.662C972.363 214.291 941.02 238 904.545 238C857.805 238 828.479 207.726 828.479 158.667C828.479 115.261 856.706 79.6981 902.162 79.6981ZM941.936 139.882C937.354 121.28 922.691 109.608 901.979 109.608C882.183 109.608 868.253 121.644 862.754 139.882H941.936ZM984.643 79.1509H1042.56L1001.32 40.1226L1024.05 16.9609L1063.28 57.0835V0H1097.37V57.0835L1136.59 16.9609L1159.32 40.1226L1118.08 79.1509H1176V111.431H1117.71L1159.14 151.554L1136.41 174.169L1080.14 117.815L1023.87 174.169L1001.14 151.554L1042.56 111.431H984.277V79.1509H984.643ZM1063.46 157.572H1097.55V234.17H1063.46V157.572Z"></path></svg></Link>
   
   {/*Desktop Menu */}
                <ul className='hidden md:flex gap-6 text-gray-700 font-medium'>
                    <Link href="/"><li>Templates </li></Link>
                    <Link href="/"><li>Marketplace</li></Link>
                    <Link href="/"><li>Discover</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                    <Link href="/"><li>Learn</li></Link>
                </ul>
           
         {/*Auth Buttons */}
            <div className='hidden md:flex gap-3 items-center'>
                {isSignedIn ? (
                    <UserButton /> //Show profile dropdown if signed in
                ) : (
                    <>
                      <SignInButton>
                        <button className='login bg-gray-400 p-4 rounded-lg font-bold hover:bg-gray-500 transition'>
                            Log in
                        </button>
                    </SignInButton>

                    <SignUpButton>
                        <button className='signup bg-gray-900 text-white font-bold p-3 rounded-full hover:bg-gray-800 transition'>
                            sign up free
                        </button>
                    </SignUpButton>
                  </> 
                )}
            </div> 

            {/* mobile Hamburger */}

           <div className='md:hidden flex items-center'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className='absolute top-full left-0 w-full bg-white flex flex-col items-center py-4 shadow-lg md:hidden'>
                        <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
                            <Link href="/"><li onClick={() => setMenuOpen(false)}>Templates</li></Link>
                            <Link href="/"><li onClick={() => setMenuOpen(false)}>Marketplace</li></Link>
                            <Link href="/"><li onClick={() => setMenuOpen(false)}>Discover</li></Link>
                            <Link href="/"><li onClick={() => setMenuOpen(false)}>Pricing</li></Link>
                            <Link href="/"><li onClick={() => setMenuOpen(false)}>Learn</li></Link>
                        </ul>
                        <div className='flex flex-col gap-2 mt-4 w-3/4'>
                            {isSignedIn ? (
                                <UserButton />
                            ) : (
                                <>
                                    <SignInButton>
                                        <button className='login bg-gray-400 p-3 rounded-lg font-bold w-full hover:bg-gray-500 transition'>
                                            Log in
                                        </button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <button className='signup bg-gray-900 text-white p-3 rounded-full font-bold w-full hover:bg-gray-800 transition'>
                                            Sign up free
                                        </button>
                                    </SignUpButton>
                                </>
                            )}
                        </div>
                    </div>
                )} 
        </nav>}
        </>

    )
}

export default Navbar