import React, {useState} from 'react'
import {ASSETS} from 'src/assets'
import Input from 'src/components/inputs/Input'

import NavItem from './components/NavItem'
import UserInfo from './components/UserInfo'
import {MenuItem} from './types'

const menuItems: MenuItem[] = [
  {
    url: '/Kõik',
    label: 'Kõik'
  },
  {
    url: '/Täna',
    label: 'Täna'
  },
  {
    url: '/Nädalavahetusel',
    label: 'Nädalavahetusel'
  },
  {
    url: '/uued',
    label: 'uued'
  },
  {
    url: '/',
    label: 'Muusika'
  },
  {
    url: '/Teater',
    label: 'Teater'
  },
  {
    url: '/Kogupere',
    label: 'Kogupere'
  },
  {
    url: '/Sport',
    label: 'Sport'
  },
  {
    url: '/Festival',
    label: 'Festival'
  },
  {
    url: '/Veel',
    label: 'Veel',
    items: [
      {
        url: '/Veel1',
        label: 'Veel1'
      },
      {
        url: '/Veel2',
        label: 'Veel2'
      },
      {
        url: '/Veel3',
        label: 'Veel3'
      }
    ]
  }
]

const otherMenu: MenuItem = {
  url: '/PÖFF',
  label: 'PÖFF'
}

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
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.612 5.41452C20.1722 4.96607 19.65 4.61034 19.0752 4.36763C18.5005 4.12492 17.8844 4 17.2623 4C16.6401 4 16.0241 4.12492 15.4493 4.36763C14.8746 4.61034 14.3524 4.96607 13.9126 5.41452L12.9998 6.34476L12.087 5.41452C11.1986 4.50912 9.99364 4.00047 8.73725 4.00047C7.48085 4.00047 6.27591 4.50912 5.38751 5.41452C4.4991 6.31992 4 7.5479 4 8.82833C4 10.1088 4.4991 11.3367 5.38751 12.2421L6.30029 13.1724L12.9998 20L19.6992 13.1724L20.612 12.2421C21.0521 11.7939 21.4011 11.2617 21.6393 10.676C21.8774 10.0902 22 9.46237 22 8.82833C22 8.19428 21.8774 7.56645 21.6393 6.9807C21.4011 6.39494 21.0521 5.86275 20.612 5.41452Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="relative hidden lg:block">
              <img src={ASSETS.CART_ICON} alt="cart" className="w-6 h-6" />
              <span className="absolute top-[-6px] right-[-5px] flex items-center justify-center w-4 h-4 p-1 text-base font-medium text-white rounded-full bg-app-red">3</span>
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
          <span className="h-8 border border-app-gray-300"></span>
          <NavItem menuItem={otherMenu} />
        </nav>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {showMobileMenu &&
      <nav className="absolute z-50 w-full bg-white lg:hidden" aria-label="Global" id="mobile-menu">
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
            <div className="">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.612 5.41452C20.1722 4.96607 19.65 4.61034 19.0752 4.36763C18.5005 4.12492 17.8844 4 17.2623 4C16.6401 4 16.0241 4.12492 15.4493 4.36763C14.8746 4.61034 14.3524 4.96607 13.9126 5.41452L12.9998 6.34476L12.087 5.41452C11.1986 4.50912 9.99364 4.00047 8.73725 4.00047C7.48085 4.00047 6.27591 4.50912 5.38751 5.41452C4.4991 6.31992 4 7.5479 4 8.82833C4 10.1088 4.4991 11.3367 5.38751 12.2421L6.30029 13.1724L12.9998 20L19.6992 13.1724L20.612 12.2421C21.0521 11.7939 21.4011 11.2617 21.6393 10.676C21.8774 10.0902 22 9.46237 22 8.82833C22 8.19428 21.8774 7.56645 21.6393 6.9807C21.4011 6.39494 21.0521 5.86275 20.612 5.41452Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="relative">
              <img src={ASSETS.CART_ICON} alt="cart" className="w-6 h-6" />
              <span className="absolute top-[-6px] right-[-5px] flex items-center justify-center w-4 h-4 p-1 text-base font-medium text-white rounded-full bg-app-red">3</span>
            </div>
          </div>
        </div>
      </nav>
      }
    </header>
  )
}

export default Header
