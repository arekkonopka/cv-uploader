'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickSignIn = () => {
    localStorage.setItem('role', email)
    router.push('/')
  }

  return (
    <main className="flex flex-row h-screen bg-[#F9F9F9]">
      <div className="grow flex flex-col justify-center items-center">
        <div>
          <p className="text-base font-medium text-gray-900">I am ready to</p>
          <h2 className="text-3xl font-semibold text-gray-900 pb-6">
            Hire quality candidates
          </h2>

          <p className="font-normal text-base text-gray-700 pb-8">
            Welcome back! Please enter your details.
          </p>

          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-800 pb-1.5"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border rounded-lg h-11 w-[360px] px-3.5 py-2.5"
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={onChangeEmail}
              value={email}
            />
          </div>

          <div className="flex flex-col pt-5">
            <label
              className="text-sm font-medium text-gray-800 pb-1.5"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded-lg h-11 w-[360px] px-3.5 py-2.5 bg-white"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={onChangePassword}
              value={password}
            />
          </div>

          <div className="flex flex-row py-6">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label
              className="grow font-medium text-sm text-gray-800 pl-2"
              htmlFor="vehicle1"
            >
              Remember for 30 days
            </label>
            <Link className="text-sm font-semibold text-blue-600" href="/">
              Forgot password
            </Link>
          </div>

          <button
            className="bg-blue-600 w-[360px] h-11 text-white text-base font-semibold py-2.5 rounded-lg"
            onClick={onClickSignIn}
          >
            Sign in
          </button>

          <div className="pt-4">
        <button className="w-[360px] border border-gray-300 h-11 bg-white text-gray-700 text-base font-semibold py-2.5 rounded-lg">Sign in with Google</button>
      </div>

      <div className="flex flex-row items-center justify-center pt-8">
      <p className="text-sm font-normal text-gray-600">Don’t have an account?</p>
      <Link className="text-sm font-semibold text-blue-600 pl-1" href="/">Sign up</Link>
      </div>
      </div>
    </div>
    <div>
    <Image
      src="/Image.svg"
      width={0}
      height={0}
      style={{ width: '100%', height: '100%' }} 
      alt="Picture of the author"
    />
    </div>

  </main>
  )
}

export default LoginPage
