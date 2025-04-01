import React from 'react'

const SignIn = ({openMenu}) => {
  return (
    <button className={`${openMenu?"absolute left-8/12":"hidden"} md:block cursor-pointer  text-base shadow py-1 px-6 md:py-2 md:px-6 md:shadow-[2px_4px_6px_rgba(0,0,0,1)] bg-blue-600 border-[0.5px] md:text-base lg:text-lg rounded-2xl font-[Poppins] font-semibold'`}>Sign In</button>
  )
}

export default SignIn;