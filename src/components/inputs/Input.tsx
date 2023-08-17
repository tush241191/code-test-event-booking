import classNames from 'classnames'
import React from 'react'

type InputType = 'text' | 'search'

interface InputProps {
  value?: string;
  type: InputType;
  placeholderText?: string;
  className?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
}

const Input = (props: InputProps) => {
  const {value = '', type, placeholderText = 'Enter...', className, onChange, onClick} = props

  const inputClasses = classNames(
    'block w-full py-2 text-app-gray-500 border border-app-gray-300 ring-0 placeholder:text-app-gray-400 focus:ring-transparent focus:border-app-gray-300 text-base leading-5',
    {
      'pr-11 rounded-md px-3': type === 'text',
      'rounded-none rounded-l-full pl-3 pr-[10px] lg:pl-5 lg:pr-[14px] lg:pt-3 pb-[11px] border-r-0 lg:border-r': type === 'search'
    }, className
  )

  return (
    <div className="flex rounded-full shadow-sm">
      <input
        type="text"
        className={inputClasses}
        placeholder={placeholderText}
        value={value}
        onChange={event => onChange?.(event.target.value)}
      />
      {type === 'search' &&
        <button onClick={onClick} type="button" className="w-8 lg:w-14 relative -ml-px inline-flex items-center rounded-r-full pr-3 lg:px-4 lg:py-[10px] lg:bg-app-red border border-l-0 border-app-gray-300 lg:border-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-app-gray-600 lg:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      }
    </div>
  )
}

export default Input
