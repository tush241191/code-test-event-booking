import React from 'react'

import HeartIcon from '../icons/HeartIcon'

const EventCard = () => {
  return (
    <div className="flex h-full space-x-3 rounded-lg lg:space-x-0 lg:block lg:bg-white lg:border border-app-gray-50">
      <div className="relative block w-[90px] lg:w-full h-[90px] lg:h-[167px] overflow-hidden bg-gray-100 lg:rounded-b-none rounded-lg group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img src="https://api.intra.piletilevi.ee/images/noep.jpeg" alt="" className="object-cover object-center h-full pointer-events-none group-hover:opacity-75" />
        <div className="hidden lg:block absolute top-[6px] right-[8px]">
          <HeartIcon isFilled />
        </div>
      </div>
      <div className="w-full lg:relative flex flex-col h-full lg:h-[140px] lg:p-4">
        <p className="order-1 text-base font-bold leading-5 lg:order-2 lg:mt-[7px] break-words">NOËP - Staadionikontsert noep staadionikontsert</p>
        <p className="order-2 lg:order-1 text-sm leading-[18px] font-medium text-app-purple mt-[7px] lg:mt-0">L 19.august</p>
        <p className="lg:absolute lg:bottom-4 order-3 text-sm leading-[18px] font-medium text-app-gray-500 truncate mt-[7px]">A. Le Coq Arena, Tallinn</p>
      </div>
    </div>
  )
}

export default EventCard
