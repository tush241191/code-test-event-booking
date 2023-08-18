import React from 'react'
import EventCard from 'src/components/cards/EventCard'
import TopEventCard from 'src/components/cards/TopEventCard'

const Landing = () => {
  return (
    <div className="w-full px-4 mx-auto max-w-screen-2xl">
      <div className="mt-[46px] pt-10 pb-12 bg-white lg:px-11 rounded-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] text-app-gray-600 font-bold leading-7">Müügi TOP</h1>
          <div className="flex items-center">
            <p className="text-base leading-5 text-app-gray-600">1/2</p>
            <div>
              {'<'}
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-5 gap-x-[30px]">
          <li className="relative">
            <TopEventCard />
          </li>
          <li className="relative">
            <TopEventCard />
          </li>
          <li className="relative">
            <TopEventCard />
          </li>
          <li className="relative">
            <TopEventCard />
          </li>
          <li className="relative">
            <TopEventCard />
          </li>
        </ul>
      </div>
      <div className="lg:px-11 mt-10 pb-12 space-y-[30px]">
        <h1 className="text-[20px] leading-[26px] font-extrabold text-app-gray-600">Muusikasündmused</h1>
        <div className="grid gap-4 lg:grid-cols-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  )
}

export default Landing
