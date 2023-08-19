import classNames from 'classnames'
import React from 'react'

import Button from '../button/Button'
import Icon from '../icons/Icon'

interface EventCardProps {
  isTopEvent?: boolean;
}

const EventCard = ({isTopEvent = false}: EventCardProps) => {
  const wrapperClasses = classNames(
    'flex w-full h-full group',
    {
      'flex-col': isTopEvent,
      'space-x-3 rounded-lg lg:space-x-0 lg:block lg:bg-white lg:border border-app-gray-50': !isTopEvent
    }
  )

  const imageWrapperClasses = classNames(
    'block focus-within:ring-0 focus-within:ring-offset-0 overflow-hidden bg-gray-100 overflow-hidden',
    {
      'rounded w-[160px] lg:w-auto h-[160px] lg:h-[125px]': isTopEvent,
      'lg:rounded-b-none rounded-lg  w-[90px] h-[90px] lg:w-full lg:h-[167px]': !isTopEvent
    }
  )

  const infoWrapperClasses = classNames(
    'w-full flex flex-col h-full',
    {
      'py-4': isTopEvent,
      'lg:relative lg:p-4 lg:h-[140px]': !isTopEvent
    }
  )

  const imageClass = 'object-cover object-center w-full h-full pointer-events-none'

  return (
    <div className={wrapperClasses}>
      <div className="relative">
        <div className={imageWrapperClasses}>
          <img src="https://api.intra.piletilevi.ee/images/depeche-mode.png" alt="" className={`${imageClass} ${isTopEvent && 'group-hover:hidden'}`} />
          <img src="https://api.intra.piletilevi.ee/images/noep.jpeg" alt="" className={`${imageClass} ${isTopEvent && 'hidden group-hover:block group-hover:opacity-75'}`} />
        </div>
        {!isTopEvent &&
          <>
            <div className="hidden lg:block absolute top-[6px] right-[8px]">
              <Icon icon="heart-fill" className="cursor-pointer fill-transparent hover:fill-app-purple-400/50" />
            </div>
            <div className="absolute items-center justify-center hidden w-full transition duration-300 ease-in-out bottom-2 lg:bottom-0 lg:pt-4 lg:bg-white group-hover:flex rounded-t-2xl">
              <div className="hidden lg:block">
                <Button text="Osta Pilet" btnType="primary" leftIcon="cart" size="sm" />
              </div>
              <div className="lg:hidden">
                <Button text="Osta Pilet" btnType="primary" size="sm" />
              </div>
            </div>
          </>
        }
        {isTopEvent &&
        <>
          <div className="absolute left-0 top-1">
            <span className="w-7 h-7 bg-app-red flex items-center justify-center rounded-[54px] rounded-l-none text-white text-base font-bold">1</span>
          </div>
          <div className="absolute inset-0 z-10 items-end justify-center hidden bottom-2 group-hover:flex">
            <Button text="Osta Pilet" btnType="primary" leftIcon="cart" size="sm" />
          </div>
        </>
        }
      </div>
      <div className={infoWrapperClasses}>
        <p className="order-1 text-base font-bold leading-5 lg:order-2 lg:mt-[7px] break-words line-clamp-2">NOËP - Staadionikontsert noep staadionikontsert</p>
        <p className="order-2 lg:order-1 text-sm leading-[18px] font-medium text-app-purple-200 mt-[7px] lg:mt-0 flex items-center space-x-2">
          <span>L 19.august</span>
          {isTopEvent &&
            <>
              <span className="lg:hidden bg-app-purple-200 w-0.5 h-0.5 rounded-full"></span>
              <span className="lg:hidden">19:00</span>
            </>
          }
          {!isTopEvent &&
          <span className="hidden group-hover:block">19:00</span>
          }
        </p>
        {!isTopEvent &&
          <p className="order-3 lg:absolute lg:bottom-4 text-sm leading-[18px] font-medium text-app-gray-500 truncate mt-[7px]">A. Le Coq Arena, Tallinn</p>
        }
      </div>
    </div>
  )
}

export default EventCard
