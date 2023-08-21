import React from 'react'
import {useSelector} from 'react-redux'
import Icon from 'src/components/icons/Icon'
import {selectLikeItems} from 'src/store/selectors'

const LikeInfo = () => {
  const likeItems = useSelector(selectLikeItems)
  const likedQuantity = likeItems.length > 9 ? '+9' : likeItems.length

  return (
    <div className="relative group">
      <Icon icon="heart" className="cursor-pointer fill-app-gray-600 hover:fill-app-red" />
      {likeItems.length > 0 &&
        <span className="absolute group-hover:hidden top-[-6px] right-[-5px] flex items-center justify-center w-4 h-4 text-xs font-medium text-white rounded-full bg-app-red">
          {likedQuantity}
        </span>
      }
    </div>
  )
}

export default LikeInfo
