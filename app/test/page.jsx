"use client"
import React, { useEffect, useState } from 'react'
import { useUserStore } from "../stores/userStore"
import { useRouter } from 'next/navigation'

export default function TestPage() {
  const { user, loading, getAuthenticateUser} = useUserStore()
  const router = useRouter()

  useEffect(() => {
    getAuthenticateUser()
  }, [getAuthenticateUser]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if(!user && !loading) {
    router.push('/login')
  }


  return (
    <div>
      {user ? (
        <div>
          <h1>User Info</h1>
          <p>Name: {user.name}</p>  {/* Assuming the user has a name field */}
          <p>Email: {user.email}</p>  {/* Assuming the user has an email field */}
          {/* Render more fields as necessary */}
        </div>
      ) : (
        <div>No user data found</div>
      )}
    </div>
  );
}
