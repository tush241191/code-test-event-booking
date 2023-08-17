import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import {MenuItem} from '../types'

interface NavItemProps {
  menuItem: MenuItem;
}

const NavItem = ({menuItem}: NavItemProps) => {
  const hasSubMenuItems = menuItem.items && menuItem.items?.length > 0
  return (
    <div
      className="relative menu group"
    >
      <NavLink
        to={menuItem.url}
        className={({isActive}) =>
          `w-full inline-flex items-center px-4 py-1.5 lg:py-3 text-base font-medium text-gray-900 border-b-2 ${
            isActive
              ? 'border-app-red cursor-default'
              : 'group-hover:border-app-red border-transparent'
          }`
        }
      >
        {menuItem.label}
        {hasSubMenuItems &&
          <svg className="ml-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9.5L12 15.5L18 9.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
      </NavLink>
      {hasSubMenuItems &&
        <div className="absolute z-10 w-56 p-2 bg-white shadow-md sub-menu lg:-left-8 top-full rounded-xl ring-1 ring-gray-900/5">
          {menuItem.items?.map(subItem =>
            <Link to={subItem.url} className="block px-3 py-2 text-sm font-semibold leading-6 text-gray-900 rounded-lg hover:bg-gray-50" >{subItem.label}</Link>
          )}
        </div>
      }
    </div>
  )
}

export default NavItem
