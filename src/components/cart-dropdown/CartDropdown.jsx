import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'

export default function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className='items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
