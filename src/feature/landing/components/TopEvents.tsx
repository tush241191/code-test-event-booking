import React, {useState} from 'react'
import {ASSETS} from 'src/assets'
import EventCard from 'src/components/cards/EventCard'

import {EventData, PageAction} from '../types'
import NavigationButton from './NavigationButton'

interface TopEventsProps {
  events: EventData[];
}

const TopEvents = ({events}: TopEventsProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const groupSize = 5

  const outputArray: EventData[][] = []

  for (let i = 0; i < events.length; i += groupSize) {
    const group = events.slice(i, i + groupSize)
    outputArray.push(group)
  }

  const handlePage = (action: PageAction) => {
    switch (action) {
      case 'PREVIOUS':
        if(currentPage === 1) return
        setCurrentPage(prev => prev - 1)
        break
      case 'NEXT':
        if(currentPage === outputArray.length) return
        setCurrentPage(prev => prev + 1)
        break
      default:
        break
    }
  }

  return (
    <div className="relative px-4 py-4 bg-white lg:pt-10 lg:pb-12 lg:px-11 rounded-2xl">
      <img src={ASSETS.BADGE_ICON} alt="" className="absolute hidden lg:block -top-8 left-8" />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[22px] text-app-gray-600 font-bold leading-7">Müügi TOP</h1>
        <div className="hidden lg:flex items-center space-x-[18px]">
          <p className="text-base leading-5 text-app-gray-600">{currentPage}/{outputArray.length}</p>
          <div className="items-center hidden lg:flex">
            <NavigationButton onClick={() => handlePage('PREVIOUS')} disabled={currentPage === 1} direction="left" />
            <NavigationButton onClick={() => handlePage('NEXT')} disabled={currentPage === outputArray.length} direction="right" />
          </div>
        </div>
      </div>
      {outputArray.length > 0 &&
        <div className="hidden lg:grid lg:grid-cols-5 gap-x-2 lg:gap-x-[30px] overflow-x-auto lg:overflow-hidden">
          {
            outputArray[currentPage - 1].map((event, index) =>
              <EventCard key={event.id} isTopEvent event={event} ordinal={(currentPage - 1) * groupSize + index + 1} />
            )
          }
        </div>
      }
      {events.length > 0 &&
        <div className="flex overflow-x-auto gap-x-2 lg:hidden">
          {
            events.map((event, index) =>
              <EventCard key={event.id} isTopEvent event={event} ordinal={index + 1} />
            )
          }
        </div>
      }
    </div>
  )
}

export default TopEvents
