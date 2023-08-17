import React from 'react'
import {ASSETS} from 'src/assets'

interface UserInfoProps {
  showUserName?: boolean;
}
const UserInfo = ({showUserName = true}: UserInfoProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <img src={ASSETS.USER_ICON} alt="User" className="w-6 h-6" />
        <span className="w-[10px] h-[10px] bg-app-green absolute bottom-0 rounded-full right-0"></span>
      </div>
      {showUserName &&
      <div className="text-base font-medium lg:block text-app-gray-600">Triin</div>
      }
    </div>
  )
}

export default UserInfo
