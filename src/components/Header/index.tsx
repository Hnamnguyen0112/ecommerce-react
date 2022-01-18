import React, { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

import brazilFlag from '@assets/svg/flags/brazil.svg'
import denmarkFlag from '@assets/svg/flags/denmark.svg'
import franceFlag from '@assets/svg/flags/france.svg'
import germanyFlag from '@assets/svg/flags/germany.svg'
import netherlandsFlag from '@assets/svg/flags/netherlands.svg'
import spainFlag from '@assets/svg/flags/spain.svg'
import unitedKingdomFlag from '@assets/svg/flags/united-kingdom.svg'

import styled from 'styled-components'
import tw from 'twin.macro'
import { useTranslation } from 'react-i18next'

const StyledMenuItem = styled.a`
  ${tw`
    text-gray-800 
    font-medium
    py-3 
    px-4
  `}
`

function Header() {
  const { t, i18n } = useTranslation()

  const [flags] = useState([
    { flag: brazilFlag, name: 'Português (Brasil)', value: 'po' },
    { flag: denmarkFlag, name: 'Denmark', value: 'dk' },
    { flag: franceFlag, name: 'France', value: 'fr' },
    { flag: germanyFlag, name: 'Germany', value: 'de' },
    { flag: netherlandsFlag, name: 'Netherlands', value: 'nl' },
    { flag: spainFlag, name: 'Español', value: 'es' },
    { flag: unitedKingdomFlag, name: 'United Kingdom', value: 'en' },
  ])
  const [currentLanguage, setCurrentLanguage] = useState(flags.find((item) => item.value === i18n.language))

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    setCurrentLanguage(flags.find((item) => item.value === i18n.language))
  }, [i18n.language])

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-3 px-6 relative">
      <div className="sm:w-1/2 flex flex-wrap">
        <h3 className="text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 m-auto">Logo</h3>
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
        <Menu as="div" className="hidden relative sm:inline-block text-left">
          <Menu.Button
            className="inline-flex justify-center w-full md:px-4 my-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-0 hover:bg-opacity-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {currentLanguage && <img src={currentLanguage.flag} alt="" className="h-6" />}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            >
              <div className="px-1 py-1">
                {
                  flags.map((item) =>
                    (
                      <Menu.Item key={`${item.value}`}>
                        {({ active }) => (
                          <button
                            type="button"
                            className={`${
                              active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            onClick={() => changeLanguage(item.value)}
                          >
                            <img src={item.flag} alt="" width="24" height="24" className="mr-2" />
                            <p>{item.name}</p>
                          </button>
                        )}
                      </Menu.Item>
                    ))
                }
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  )
}

export default Header
