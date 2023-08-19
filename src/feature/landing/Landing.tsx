import React from 'react'
import EventCard from 'src/components/cards/EventCard'

import TopEvents from './components/TopEvents'

const Landing = () => {
  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      <div className="mt-4 lg:mt-[46px] px-0 lg:px-4">
        <TopEvents />
      </div>
      <div className="px-4 lg:px-11 mt-10 pb-12 space-y-[30px]">
        <h1 className="text-[20px] leading-[26px] font-extrabold text-app-gray-600">Muusikasündmused</h1>
        <div className="grid gap-x-4 gap-y-6 lg:gap-y-8 lg:grid-cols-4">
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
