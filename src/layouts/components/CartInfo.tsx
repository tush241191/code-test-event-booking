import React from 'react'
import {useSelector} from 'react-redux'
import Icon from 'src/components/icons/Icon'
import Tooltip from 'src/components/tooltip/Tooltip'
import {selectCartItems} from 'src/store/selectors'

const CartInfo = () => {
  const cartItems = useSelector(selectCartItems)
  const cartQuantity = cartItems.length > 9 ? '+9' : cartItems.length

  return (
    <div className="relative group" data-tooltip-id="cart-tooltip" data-tooltip-content="Shopping cart">
      <Icon icon="cart" className="cursor-pointer hover:fill-app-red" />
      <Tooltip id="cart-tooltip" />
      {cartItems.length > 0 &&
        <span className="absolute group-hover:hidden top-[-6px] right-[-5px] flex items-center justify-center w-4 h-4 text-xs font-medium text-white rounded-full bg-app-red">
          {cartQuantity}
        </span>
      }
    </div>
  )
}

export default CartInfo
