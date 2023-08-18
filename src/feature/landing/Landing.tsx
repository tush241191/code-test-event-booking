import React from 'react'
import EventCard from 'src/components/cards/EventCard'

const Landing = () => {
  return (
    <div className="w-full px-4 mx-auto max-w-screen-2xl">
      <div className="mt-[46px] lg:px-11 pt-10 pb-12 space-y-[30px]">
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
