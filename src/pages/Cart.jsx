import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {

    const [total,setTotal] = useState(0)

    const cartArray = useSelector((state)=>state.cartItem)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getTotal = ()=>{
     if(cartArray.length>0)
      { setTotal(cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))}
    }

    const handleCheckout = ()=>{
      alert('Order placed successfully')
      dispatch(emptyCart())
      navigate('/')
    }

    useEffect(()=>{
      getTotal()
    },[cartArray])

  return (
    <>
    <div className='pt-32'>
    <h1 className='text-center text-4xl'>Cart</h1>

    { cartArray?.length>0?
      <div className='md:grid grid-cols-[2fr_1fr] my-10'>

    <div className='md:py-5 md:px-20'>
      <table className='w-full border border-black'>
        <thead>
          <tr>
            <th className='border border-gray-100 p-3 bg-gray-400'>#</th>
            <th className='border border-gray-100 p-3 bg-gray-400'>Title</th>
            <th className='border border-gray-100 p-3 bg-gray-400'>Image</th>
            <th className='border border-gray-100 p-3 bg-gray-400'>Price</th>
            <th className='border border-gray-100 p-3 bg-gray-400'>Action</th>
          </tr>
        </thead>
        <tbody>
        { cartArray?.map((item,index)=>(
          <tr>
          <td className='border border-gray-100 p-3'>{index+1}</td>
          <td className='border border-gray-100 p-3'>{item?.title}</td>
          <td className='border border-gray-100 p-3'><img src={item?.image} alt="no image" style={{width:'150px',height:'150px'}}/></td>
          <td className='border border-gray-100 p-3'>{item?.price}</td>
          <td className='border border-gray-100 p-3 text-center'><button onClick={()=>dispatch(removeCartItem(item?.id))} className='bg-red-700'><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
        )) 
        
        }
        </tbody>
      </table>
    </div>
    <div className='pt-5 px-10'>
        <div className='p-3 shadow-lg'>
          <h1 className='text-center text-2xl'>Cart summary</h1>
          <p className='mt-4 text-xl'>Total number of products : {cartArray?.length}</p>
          <p className='mt-4 text-xl'>Grand Total : $ {total}</p>
          <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>Checkout</button>
        </div>
    </div>

    </div>

        :
    <div className='w-full mt-10 md:grid grid-cols-3 mb-10'>
    <div></div>
    <div className='flex justify-center items-center flex-col'>
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
        <p className=' text-violet-800 pb-5 text-2xl'>Your cart is empty</p>
       <Link to={'/'}> <button className='bg-green-600 text-white p-3 rounded'><FontAwesomeIcon icon={faBackward}  className='me-2'/>Back Home</button></Link>
    </div>
    <div></div>
    </div>
    }


    </div>


    </>
  )
}

export default Cart