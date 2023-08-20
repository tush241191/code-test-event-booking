import React, {useState} from 'react'
import {ASSETS} from 'src/assets'
import Icon from 'src/components/icons/Icon'
import Input from 'src/components/inputs/Input'
import {menuItems, otherMenu} from 'src/utils/constants'

import CartInfo from './components/CartInfo'
import NavItem from './components/NavItem'
import UserInfo from './components/UserInfo'

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const toggleMobileMenu = () => setShowMobileMenu(prevValue => !prevValue)

  return (
    <header className="relative bg-white shadow-sm">
      <div className="px-2 pt-1 lg:pt-6 mx-auto max-w-screen-2xl sm:px-4 lg:px-[60px]">
        <div className="relative flex justify-between pb-[10px]">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex items-center flex-shrink-0">
              <img className="hidden w-auto h-16 lg:block" src={ASSETS.LOGO_LG} alt="Piletilevi" />
              <img className="w-auto h-16 lg:hidden" src={ASSETS.LOGO_SM} alt="Piletilevi" />
            </div>
          </div>
          <div className="z-0 flex items-center justify-center flex-1 px-2 sm:inset-0">
            <div className="w-full lg:max-w-[526px]">
              <Input
                value={searchValue}
                onChange={setSearchValue}
                type="search"
                placeholderText="Search for events, performers, venues"
              />
            </div>
          </div>
          <div className="relative z-10 flex items-center space-x-8">
            <div className="mr-4 lg:hidden">
              <UserInfo showUserName={false} />
            </div>
            <div className="hidden mr-0 lg:block">
              <UserInfo />
            </div>

            <div className="hidden lg:block">
              <Icon icon="heart" className="cursor-pointer fill-app-gray-600 hover:fill-app-red" />
            </div>

            <div className="hidden lg:block">
              <CartInfo />
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button onClick={toggleMobileMenu} type="button" className="relative inline-flex items-center justify-center p-2 focus:outline-none focus:ring-0 focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open menu</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 24H28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 16H28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 8H28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <nav className="items-center hidden h-12 lg:flex" aria-label="Global">
          {menuItems.length > 0 &&
            menuItems.map(menuItem =>
              <NavItem key={menuItem.label} menuItem={menuItem} />
            )
          }
          <div className="flex items-center group">
            <span className="h-8 border border-app-gray-300 group-hover:hidden"></span>
            <NavItem menuItem={otherMenu} />
          </div>
        </nav>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {showMobileMenu &&
      <nav className="absolute z-50 w-full min-h-screen bg-white shadow-md lg:hidden" aria-label="Global" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.length > 0 &&
            menuItems.map(menuItem =>
              <NavItem key={menuItem.label} menuItem={menuItem} />
            )
          }
        </div>
        <div className="flex items-center justify-between px-4 pt-4 pb-3 border-t border-gray-200">
          <UserInfo />
          <div className="flex items-center space-x-4">
            <Icon icon="heart" className="cursor-pointer fill-app-gray-600 hover:fill-app-red" />
            <CartInfo />
          </div>
        </div>
      </nav>
      }
    </header>
  )
}

export default Header
