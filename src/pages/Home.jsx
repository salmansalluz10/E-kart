import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Home() {
    const data = useFetch('https://fakestoreapi.com/products')
    console.log(data);
    const dispatch = useDispatch()
    
  return (
    <div className='mt-20 mb-10 px-10 md:grid grid-cols-4'>

{  data?.length>0 &&
    data?.map((item)=>(
        <div className='border border-black p-2'>
    <img src={item?.image} alt="" className='w-full'/>
    <h4 className='text-center text-2xl text-red-700'>{item?.title.slice(0,25)}</h4>
    <p className='text-justify'>{item?.description.slice(0,150)}</p>
    <p className='text-2xl'>price: <span className='text-blue-700'>{item?.price}</span></p>
    <div className='flex justify-between'>
        <button onClick={()=>dispatch(addWishlistItem(item))} className='p-2 bg-red-600 text-white'><FontAwesomeIcon icon={faHeart}/></button>
        <button onClick={()=>dispatch(addItemToCart(item))} className='p-2 bg-green-700 text-white'>
            <FontAwesomeIcon icon={faCartShopping}/>
        </button>
    </div>
</div>
    ))
    
}



    </div>
  )
}

export default Home