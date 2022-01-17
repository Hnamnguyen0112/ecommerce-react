import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledMenuItem = styled.a`
  ${tw`
    text-gray-800 
    hover:text-amber-300 
    font-medium
    py-3 
    px-4
  `}
`

const StyledSignUpButton = styled.a`
  ${tw`
    bg-amber-200 
    hover:bg-amber-300 
    rounded-full 
    uppercase 
    text-amber-700 
    py-3 
    px-3
  `}
`

function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-3 px-6 relative">
      <div className="sm:w-1/2 flex flex-wrap">
        <h3 className="text-2xl font-bold uppercase text-amber-900 m-auto">Logo</h3>
        <nav className="w-4/5 hidden md:flex text-md">
          <StyledMenuItem href="#!">Products</StyledMenuItem>
          <StyledMenuItem href="#!">Solutions</StyledMenuItem>
          <StyledMenuItem href="#!">Company</StyledMenuItem>
          <StyledMenuItem href="#!">Partners</StyledMenuItem>
          <StyledMenuItem href="#!">Events</StyledMenuItem>
        </nav>
      </div>
      <nav className="hidden lg:flex text-md">
        <StyledMenuItem href="#!">Resources</StyledMenuItem>
        <StyledMenuItem href="#!">Success & Support</StyledMenuItem>
        <StyledSignUpButton href="#!">Contact sales</StyledSignUpButton>
      </nav>
    </header>
  )
}

export default Header
