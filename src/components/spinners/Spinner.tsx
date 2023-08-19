import classNames from 'classnames'
import React from 'react'

export type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export interface SpinnerProps {
  size?: SpinnerSizes;
}

const Spinner = ({size = 'md'}: SpinnerProps) => {
  const spinnerClassName = classNames(
    'text-inherit',
    {
      'w-4 h-4': size === 'sm',
      'w-6 h-6': size === 'md',
      'w-8 h-8': size === 'lg',
      'w-12 h-12': size === 'xl',
      'w-24 h-24': size === 'xxl'
    }
  )

  return (
    <div role="status">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        className={spinnerClassName}
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
        </defs>

        <g strokeWidth="28">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 14 100 A 86 86 0 0 1 186 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 186 100 A 86 86 0 0 1 14 100"
          />

          <path
            stroke="currentColor"
            strokeLinecap="round"
            d="M 14 100 A 86 86 0 0 1 14 92"
          />
        </g>
        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1300ms"
        />
      </svg>
    </div>
  )
}

export default Spinner
