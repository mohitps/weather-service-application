"use client";
import React, { useState, useEffect } from 'react'
import SignoutButton from "@/components/signoutButton"
import {
  CustomSession,
  authOptions,
} from "@/app/api/auth/[...nextauth]/options";
//import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import Link from 'next/link';
import ProfileDropdown from '../ProfileDropDown';
import ProfileDropDown2 from '../ProfileDropDown2';


export default function Header() {
  const [session, setSession] = useState(null);


  useEffect(() => {
    async function fetchSession() {
      const session = await getSession();
      setSession(session);
    }

    fetchSession();
  }, []);

  if (!session) {
    return <div>Loading...</div>;
  }



  //async function getSession() { await getServerSession(authOptions); }
  //const session: CustomSession | null = getSession();

  return (
    <>
    <div className='flex flex-row w-full justify-center items-center align-middle bg-green-900'>
        <h2 className='px-4'>
        <Link
          href="/"
          title=""
          className="text-md font-thin text-black  hover:font-extrabold m-4 items-center"
        >
          Home
        </Link>
        </h2>

        <div className="flex flex-row w-full text-sm text-gray-800 items-center float-right justify-end pr-2 bg-slate-200">
          Welcome Back, {session.user.email}

          <ProfileDropDown2 {...session}></ProfileDropDown2>    
        </div>      
    </div>

</>   
  )
}
