import React from 'react'
import {useSelector} from 'react-redux'
import Icon from 'src/components/icons/Icon'
import Tooltip from 'src/components/tooltip/Tooltip'
import {selectLikeItems} from 'src/store/selectors'

const LikeInfo = () => {
  const likeItems = useSelector(selectLikeItems)
  const likedQuantity = likeItems.length > 9 ? '+9' : likeItems.length

  return (
    <div className="relative group" data-tooltip-id="favourite-tooltip" data-tooltip-content="Favourites">
      <Icon icon="heart" className="cursor-pointer fill-app-gray-600 hover:fill-app-red" />
      <Tooltip id="favourite-tooltip" />
      {likeItems.length > 0 &&
        <span className="absolute group-hover:hidden top-[-6px] right-[-5px] flex items-center justify-center w-4 h-4 text-xs font-medium text-white rounded-full bg-app-red">
          {likedQuantity}
        </span>
      }
    </div>
  )
}

export default LikeInfo
