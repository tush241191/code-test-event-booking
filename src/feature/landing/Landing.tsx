import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {APP_ROUTES} from 'src/router/router'
import {menuItems} from 'src/utils/constants'
import {findMenuItemByUrl} from 'src/utils/utils'

import {getAllEvents, getTopEvents} from './api'
import EventsList from './components/EventsList'
import TopEvents from './components/TopEvents'
import {EventData} from './types'

const Landing = () => {
  const {category} = useParams()
  const navigate = useNavigate()
  if(!category) navigate(APP_ROUTES.EVENTS.replace(':category', menuItems[0].url))

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

  const categoryTitle = (category && findMenuItemByUrl(menuItems, category)?.description) || 'Muud üritused'

  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      {topEvents && topEvents?.length > 0 &&
        <div className="mt-4 lg:mt-[46px] px-0 lg:px-4">
          <TopEvents events={topEvents} />
        </div>
      }

      {allEvents && allEvents.length > 0 &&
        <div className="mt-10">
          <EventsList title={categoryTitle} list={allEvents} />
        </div>
      }
    </div>
  )
}

export default Landing
