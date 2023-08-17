import {RefObject, useEffect} from 'react'

type EventTypes = 'mousedown' | 'mouseleave';

const useOutsideAlerter = (
  ref: RefObject<HTMLDivElement>,
  active: boolean,
  eventType: EventTypes,
  callbackFunction: () => void
) => {
  useEffect(() => {
    function handleClickOutside (event: MouseEvent) {
      if (active && ref.current && !ref.current.contains(event.target as Node)) {
        callbackFunction()
      }
    }
    document.addEventListener(eventType, handleClickOutside)
    return () => {
      document.removeEventListener(eventType, handleClickOutside)
    }
  }, [active, ref])
}

export default useOutsideAlerter
