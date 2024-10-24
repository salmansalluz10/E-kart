import React from 'react'
import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem, wishlistSlice } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Wishlist() {
    const wishlistArray = useSelector((state)=>state.wishlist)
    console.log(wishlistArray);
    const dispatch = useDispatch()
    
    const wishes = (item)=>{
        dispatch(addItemToCart(item))
        dispatch(removeWishlistItem(item.id))
    }
    
  return (
    <>

    <h1 className='pt-32 text-center text-4xl'>WishList</h1>

   { wishlistArray?.length>0?
    <div className='mt-20 mb-10 px-10 md:grid grid-cols-4'>

{   wishlistArray?.map((item)=>(
    <div className='border border-black p-2'>
    <img src={item?.image} alt="" className='w-full'/>
    <h4 className='text-center text-3xl text-blue-700'>{item?.title.slice(0,25)}</h4>
    <p className='text-justify'>{item?.description.slice(0,150)}</p>
    <p className='text-2xl'>price: <span className='text-blue-700'>{item?.price}</span></p>
    <div className='flex justify-between'>
        <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='p-2 bg-red-600 text-white'><FontAwesomeIcon icon={faTrash}/></button>
        <button onClick={()=>wishes(item)} className='p-2 bg-green-700 text-white'>
            <FontAwesomeIcon icon={faCartShopping}/>
        </button>
    </div>
    </div>
))
    
}

    </div>

        :
    <div className='w-full mt-10 md:grid grid-cols-3'>
    <div></div>
    <div>
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
    </div>
    <div></div>
    </div>
    }
    </>
  )
}

export default Wishlist



