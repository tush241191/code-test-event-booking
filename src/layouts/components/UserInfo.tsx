import React from 'react'
import Icon from 'src/components/icons/Icon'
import Tooltip from 'src/components/tooltip/Tooltip'
import {useUser} from 'src/contexts/UserContext'

interface UserInfoProps {
  showUserName?: boolean;
}
const UserInfo = ({showUserName = true}: UserInfoProps) => {
  const {isAuthenticated, user} = useUser()

  return (
    <div className="flex items-center space-x-4">
      <div className="relative" data-tooltip-id="user-tooltip" data-tooltip-content="Login">
        <Icon
          icon="user"
          className="cursor-pointer fill-app-gray-600 hover:fill-app-red"
        />
        <Tooltip id="user-tooltip" />
        {isAuthenticated &&
          <span className="w-[10px] h-[10px] bg-app-green-400 absolute bottom-0 rounded-full right-0"></span>
        }
      </div>
      {showUserName &&
        <div className="text-base font-medium lg:block text-app-gray-600">{user?.firstName}</div>
      }
    </div>
  )
}

export default UserInfo
