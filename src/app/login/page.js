import React from 'react'
import Link from 'next/link'

const LoginPage = () => {
  return <main class="flex flex-row h-screen bg-[#F9F9F9]">
    <div class="grow flex flex-col justify-center items-center">
      <div>
      <p class="text-base font-medium text-gray-900">I am ready to</p>
      <h2 class="text-3xl font-semibold text-gray-900 pb-6">Hire quality candidates</h2>
      
      <p class="font-normal text-base text-gray-700 pb-8">Welcome back! Please enter your details.</p>

      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-800 pb-1.5" for="email">Email</label>
        <input class="border rounded-lg h-11 w-[360px] px-3.5 py-2.5" type="text" id="email" name="email" placeholder='Enter your email'/>
      </div>

      <div class="flex flex-col pt-5">
        <label class="text-sm font-medium text-gray-800 pb-1.5" for="password">Password</label>
        <input class="border rounded-lg h-11 w-[360px] px-3.5 py-2.5 bg-white" type="password" id="password" name="password" placeholder='Enter your password'/>
      </div>

      <div class="flex flex-row py-6">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label class="grow font-medium text-sm text-gray-800 pl-2" for="vehicle1">Remember for 30 days</label>
      <Link class="text-sm font-semibold text-blue-600" href="/">Forgot password</Link>
      </div>

      <button class="bg-blue-600 w-[360px] h-11 text-white text-base font-semibold py-2.5 rounded-lg">Sign in</button>

      <button class="w-[360px] h-11 text-white text-base font-semibold py-2.5 rounded-lg">Sign in with Google</button>
      </div>
    </div>
    <div class="grow">
      picture
    </div>
  </main>
}

export default LoginPage
