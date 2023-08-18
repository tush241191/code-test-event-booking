import React from 'react'

interface HeartIconProps {
  isFilled?: boolean;
  onClick?: (isFilled: boolean) => void;
}
const HeartIcon = ({isFilled = false, onClick}: HeartIconProps) => {
  return (
    <svg onClick={() => onClick?.(!isFilled)} width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
      <path
        d="M19.1035 2.22555C18.6353 1.75714 18.0794 1.38556 17.4676 1.13205C16.8557 0.878532 16.1999 0.748047 15.5377 0.748047C14.8754 0.748047 14.2196 0.878532 13.6077 1.13205C12.9959 1.38556 12.44 1.75714 11.9718 2.22555L11.0002 3.19722L10.0285 2.22555C9.08277 1.27984 7.8001 0.748537 6.46265 0.748537C5.1252 0.748537 3.84253 1.27984 2.89682 2.22555C1.9511 3.17127 1.4198 4.45394 1.4198 5.79139C1.4198 7.12883 1.9511 8.4115 2.89682 9.35722L3.86848 10.3289L11.0002 17.4606L18.1318 10.3289L19.1035 9.35722C19.5719 8.88903 19.9435 8.33313 20.197 7.7213C20.4505 7.10946 20.581 6.45367 20.581 5.79139C20.581 5.12911 20.4505 4.47332 20.197 3.86148C19.9435 3.24964 19.5719 2.69375 19.1035 2.22555Z"
        fill={`${isFilled ? '#19005F' : 'none'}`}
        fill-opacity="0.5"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default HeartIcon
