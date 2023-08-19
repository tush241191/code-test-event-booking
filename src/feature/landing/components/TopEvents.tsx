import React from 'react'
import {ASSETS} from 'src/assets'
import EventCard from 'src/components/cards/EventCard'
import Icon from 'src/components/icons/Icon'

const TopEvents = () => {
  return (
    <div className="relative px-4 py-4 bg-white lg:pt-10 lg:pb-12 lg:px-11 rounded-2xl">
      <img src={ASSETS.BADGE_ICON} alt="" className="absolute hidden lg:block -top-8 left-8" />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[22px] text-app-gray-600 font-bold leading-7">Müügi TOP</h1>
        <div className="hidden lg:flex items-center space-x-[18px]">
          <p className="text-base leading-5 text-app-gray-600">1/2</p>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10">
              <Icon className="fill-app-purple-100" icon="chevron-left" size="lg" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-app-peach hover:rounded-full">
              <Icon className="fill-app-purple-400" icon="chevron-right" size="lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:grid lg:grid-cols-5 gap-x-2 lg:gap-x-[30px] overflow-x-auto lg:overflow-hidden">
        <EventCard isTopEvent />
        <EventCard isTopEvent />
        <EventCard isTopEvent />
        <EventCard isTopEvent />
        <EventCard isTopEvent />
      </div>
    </div>
  )
}

export default TopEvents
