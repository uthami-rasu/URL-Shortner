import React from 'react'
import Logo from '../sub-components/Logo'
import SignIn from '../sub-components/SignIn'
import Navigation from '../sub-components/Navigation'

const MobileMenu = ({handleOpenMenu}) => {
  return (
    <div className='w-full h-full bg-amber-400 md:hidden'>
        <div className='bg-red-600 flex justify-between items-center'>
            <Logo/>
            <SignIn/>
           
        </div>
        <Navigation navStyles={"block"}/>
    </div>
  )
}

export default MobileMenu