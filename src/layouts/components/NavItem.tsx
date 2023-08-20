import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Icon from 'src/components/icons/Icon'

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
          `w-full inline-flex items-center px-4 py-1.5 lg:py-3 text-base font-medium text-app-gray-600 border-b-2 ${
            isActive
              ? 'border-app-red cursor-default'
              : ''
          }
          ${!hasSubMenuItems && 'group-hover:bg-app-red group-hover:text-white'}
          `
        }
      >
        {menuItem.label}
        {hasSubMenuItems &&
          <Icon className="ml-2 fill-app-gray-600" icon="chevron-down" size="md" />
        }
      </NavLink>
      {hasSubMenuItems &&
        <div className="absolute z-10 w-56 p-2 bg-white shadow-md sub-menu lg:-left-8 top-full rounded-xl ring-1 ring-app-gray-600/5">
          {menuItem.items?.map(subItem =>
            <Link key={subItem.label} to={subItem.url} className="block px-3 py-2 text-sm font-medium leading-6 rounded-lg text-app-gray-600 hover:bg-app-red hover:text-white" >{subItem.label}</Link>
          )}
        </div>
      }
    </div>
  )
}

export default NavItem
