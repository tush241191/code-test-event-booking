import React from 'react'
import {Tooltip as ReactTooltip} from 'react-tooltip'

type Places = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'

interface TooltipProps {
  id: string;
  className?: string;
  place?: Places;
}

const Tooltip = ({id, className, place = 'bottom'}: TooltipProps) => {
  return (
    <ReactTooltip id={id} className={`text-sm text-white !font-medium rounded !bg-app-purple-400 !px-2 !py-1 ${className}`} place={place} />
  )
}

export default Tooltip
