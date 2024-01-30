"use client";
import React, { useState, useEffect } from 'react'
//import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import Link from 'next/link';


export default function Footer() {
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
    <div className='flex justify-center items-center px-4 pt-4 pb-4 z-100 bg-transparent'>

        <div className="text-sm text-gray-800">
          Footer
          <Link
          href="/"
          title=""
          className="text-sm font-semibold text-black hover:underline mb-4 ml-4"
        >
          Home
        </Link>
        </div>      
    </div>

</>   
  )
}
