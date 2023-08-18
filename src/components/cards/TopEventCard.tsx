import React from 'react'

const TopEventCard = () => {
  return (
    <div className="flex flex-col">
      <div className="relative block w-full overflow-hidden bg-gray-100 rounded group aspect-h-7 aspect-w-10 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img src="https://api.intra.piletilevi.ee/images/noep.jpeg" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
        <div className="absolute left-0 top-1">
          <span className="w-7 h-7 bg-app-red flex items-center justify-center rounded-[54px] rounded-l-none text-white text-base font-bold">1</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse">
        <p className="text-base font-bold leading-5 mt-[7px] break-words">NOËP - Staadionikontsert noep staadionikontsert</p>
        <p className="text-sm leading-[18px] font-medium text-app-purple mt-[7px]">L 19.august</p>
      </div>
    </div>
  )
}

export default TopEventCard
