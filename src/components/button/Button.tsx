import classNames from 'classnames'
import React, {ButtonHTMLAttributes} from 'react'

import Icon, {Icons} from '../icons/Icon'
import Spinner from '../spinners/Spinner'

type ButtonType = 'primary' | 'secondary' | 'tertiary'
export type ButtonSizes = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  btnType?: ButtonType;
  size?: ButtonSizes;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: Icons;
  rightIcon?: Icons;
  onClick?: () => void;
}

const Button = ({
  text,
  btnType = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  ...rest
}: ButtonProps) => {
  const buttonClasses = classNames(
    'flex items-center justify-center rounded-full font-medium text-sm lg:text-base',
    {
      'w-full': fullWidth,
      'px-2 py-1 lg:px-4 lg:py-2': size === 'sm',
      'px-3 py-[7px] lg:px-6 lg:py-[14px]': size === 'md',
      'bg-app-gray-50 text-[#CBCCCE]': disabled,
      'bg-app-green-400 text-white hover:bg-app-green-300 focus:bg-app-green-300': btnType === 'primary' && !disabled,
      'bg-white text-app-gray-600 border border-app-purple-200 hover:bg-app-purple-200 hover:text-white focus:bg-app-green-400 focus:text-white': btnType === 'secondary' && !disabled,
      'bg-white text-app-gray-500 border border-app-gray-50 hover:bg-app-gray-300 hover:text-app-gray-500 focus:bg-app-gray-300 focus:text-[#AAABAD]': btnType === 'tertiary' && !disabled
    }
  )

  const iconClasses = classNames({
    'fill-white': btnType === 'primary',
    'fill-app-gray-600': btnType === 'secondary' || btnType === 'tertiary',
    'fill-app-gray-200': disabled,
    'opacity-0': loading
  })

  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      <ButtonContent
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        size={size}
        text={text}
        iconClasses={iconClasses}
      />
    </button>
  )
}

export default Button

interface ButtonContentProps {
  loading: boolean;
  leftIcon?: Icons;
  rightIcon?: Icons;
  size: ButtonSizes;
  text: string;
  iconClasses: string;
}

const ButtonContent = (props: ButtonContentProps) => {
  const {loading, leftIcon, rightIcon, size, text, iconClasses} = props
  return (
    <>
      {loading &&
        <div className="absolute">
          <Spinner size="md" />
        </div>
      }
      {leftIcon &&
        <Icon icon={leftIcon} className={`${iconClasses} mr-1`} size={size} />
      }
      <span className={loading ? 'opacity-0' : ''}>{text}</span>
      {rightIcon &&
        <Icon
          icon={rightIcon}
          className={`${iconClasses} ml-1`}
          size={size}
        />
      }
    </>
  )
}
