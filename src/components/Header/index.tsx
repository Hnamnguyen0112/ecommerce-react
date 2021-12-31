import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledMenuItem = styled.a`
  ${tw`
    text-gray-800 
    hover:text-purple-300 
    py-3 
    px-6
  `}
`

const StyledSignUpButton = styled.a`
  ${tw`
    bg-purple-200 
    hover:bg-purple-300 
    rounded-full 
    uppercase 
    text-purple-700 
    py-3 
    px-6
  `}
`

function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-6 relative">
      <h3 className="text-2xl font-bold uppercase text-blue-900">Logo</h3>
      <nav className="hidden md:flex text-lg">
        <StyledMenuItem href="#!">Home</StyledMenuItem>
        <StyledMenuItem href="#!">Services</StyledMenuItem>
        <StyledMenuItem href="#!">About</StyledMenuItem>
        <StyledMenuItem href="#!">Contact</StyledMenuItem>
        <StyledMenuItem href="#!">FAQ</StyledMenuItem>
        <StyledSignUpButton href="#!">Sign Up</StyledSignUpButton>
      </nav>
      <button type="button" className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
        <span className="w-5 h-px mb-1 bg-orange-500" />
        <span className="w-5 h-px mb-1 bg-orange-500" />
        <span className="w-5 h-px mb-1 bg-orange-500" />
      </button>
    </header>
  )
}

export default Header
