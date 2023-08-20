import React from 'react'
import EventCard from 'src/components/cards/EventCard'

import {EventData} from '../types'

interface EventsListProps {
  title: string;
  list: EventData[];
}

const EventsList = ({title, list}: EventsListProps) => {
  return (
    <div className="px-4 lg:px-11 mt-10 pb-12 space-y-[30px]">
      <h1 className="text-[20px] leading-[26px] font-extrabold text-app-gray-600">{title}</h1>
      <div className="grid gap-x-4 gap-y-6 lg:gap-y-8 lg:grid-cols-4">
        {list.map(event =>
          <EventCard key={event.id} event={event} />
        )}
      </div>
    </div>
  )
}

export default EventsList
