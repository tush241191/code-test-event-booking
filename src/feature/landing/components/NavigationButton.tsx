import React from 'react'
import Icon from 'src/components/icons/Icon'

interface NavigationButtonProps {
  onClick: () => void;
  disabled: boolean;
  direction: 'left' | 'right';
}

const NavigationButton: React.FC<NavigationButtonProps> = ({onClick, disabled, direction}) => {
  const cursorClass = disabled ? 'cursor-default' : 'cursor-pointer hover:bg-app-peach hover:rounded-full'
  const fillClass = disabled ? 'fill-app-purple-100' : 'fill-app-purple-400'

  return (
    <div onClick={onClick} className={`flex items-center justify-center w-10 h-10 ${cursorClass}`}>
      <Icon className={fillClass} icon={`chevron-${direction.toLowerCase()}`} size="lg" />
    </div>
  )
}

export default NavigationButton
