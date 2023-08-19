import React, {useEffect, useState} from 'react'
import EventCard from 'src/components/cards/EventCard'

import {getAllEvents, getTopEvents} from './api'
import TopEvents from './components/TopEvents'
import {EventData} from './types'

const Landing = () => {
  const [topEvents, setTopEvents] = useState<EventData[]>()
  const [allEvents, setAllEvents] = useState<EventData[]>()

  useEffect(() => {
    fetchTopEvents()
    fetchAllEvents()
  }, [])

  const fetchTopEvents = () => {
    getTopEvents()
      .then(response => {
        if(response.status === 'SUCCESS') {
          setTopEvents(response.data)
        }
      })
  }

  const fetchAllEvents = () => {
    getAllEvents()
      .then(response => {
        if(response.status === 'SUCCESS') {
          setAllEvents(response.data)
        }
      })
  }

  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      {topEvents && topEvents?.length > 0 &&
        <div className="mt-4 lg:mt-[46px] px-0 lg:px-4">
          <TopEvents events={topEvents} />
        </div>
      }

      {allEvents && allEvents.length > 0 &&
        <div className="px-4 lg:px-11 mt-10 pb-12 space-y-[30px]">
          <h1 className="text-[20px] leading-[26px] font-extrabold text-app-gray-600">Muusikasündmused</h1>
          <div className="grid gap-x-4 gap-y-6 lg:gap-y-8 lg:grid-cols-4">
            {allEvents.map(event =>
              <EventCard key={event.id} event={event} />
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default Landing
