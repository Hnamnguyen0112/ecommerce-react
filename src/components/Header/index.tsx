import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledMenuItem = styled.a`
  ${tw`
    text-gray-800 
    hover:text-amber-300 
    py-3 
    px-6
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
    px-6
  `}
`

function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-6 relative">
      <h3 className="text-2xl font-bold uppercase text-amber-900">Logo</h3>
      <nav className="hidden md:flex text-lg">
        <StyledMenuItem href="#!">Home</StyledMenuItem>
        <StyledMenuItem href="#!">Services</StyledMenuItem>
        <StyledMenuItem href="#!">About</StyledMenuItem>
        <StyledMenuItem href="#!">Contact</StyledMenuItem>
        <StyledMenuItem href="#!">FAQ</StyledMenuItem>
        <StyledSignUpButton href="#!">Sign Up</StyledSignUpButton>
      </nav>
    </header>
  )
}

export default Header
