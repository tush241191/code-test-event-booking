import React from 'react'
import Icon from 'src/components/icons/Icon'

interface UserInfoProps {
  showUserName?: boolean;
}
const UserInfo = ({showUserName = true}: UserInfoProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Icon icon="user" className="cursor-pointer fill-app-gray-600 hover:fill-app-red" />
        <span className="w-[10px] h-[10px] bg-app-green-400 absolute bottom-0 rounded-full right-0"></span>
      </div>
      {showUserName &&
      <div className="text-base font-medium lg:block text-app-gray-600">Triin</div>
      }
    </div>
  )
}

export default UserInfo
