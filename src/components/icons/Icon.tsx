import classNames from 'classnames'
import React, {Suspense} from 'react'

import CartIcon from '../../assets/icons/CartIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import HeartFillIcon from '../../assets/icons/HeartFillIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import TrashIcon from '../../assets/icons/TrashIcon'
import UserIcon from '../../assets/icons/UserIcon'

export type Icons = typeof iconList[number];
interface IconComponent {
  [componentName: string]: () => JSX.Element;
}

export type IconSizes = 'sm' | 'md' | 'lg' | 'full';
export interface IconProps {
  icon: Icons;
  onClick?: () => void;
  className?: string;
  size?: IconSizes;
}

export const iconList = [
  'cart',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'heart',
  'heart-fill',
  'plus',
  'trash',
  'user'
]

const iconComponents: IconComponent = {
  CartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  HeartIcon,
  HeartFillIcon,
  PlusIcon,
  TrashIcon,
  UserIcon
}

const buildIconComponentName = (iconProp: string) => {
  const iconSuffix = 'Icon'
  const replaceRegex = /(^\w|-\w)/g // Target the first character and each dash with the following character

  const iconName = iconProp.replace(replaceRegex, subStr =>
    subStr
      .replace(/-/, '') // remove dashes
      .toUpperCase()
  )

  return iconName + iconSuffix
}

const Icon = ({icon, className, size = 'md', onClick}: IconProps) => {
  const iconComponentName = buildIconComponentName(icon)
  const IconComponent = iconComponents[iconComponentName]

  const iconWrapperClasses = classNames(
    onClick ? 'cursor-pointer' : 'cursor-[inherit]',
    className,
    {
      'w-4 h-4 p-px': size === 'sm',
      'w-6 h-6 p-0.5': size === 'md',
      'w-8 h-8 p-1': size === 'lg',
      'w-full h-full': size === 'full'
    }
  )

  return (
    <div
      className={iconWrapperClasses}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
    >
      <Suspense>
        <IconComponent />
      </Suspense>
    </div>
  )
}

export default Icon
