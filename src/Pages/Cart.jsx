import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, incQuantity,decQuantity, removeCart } from '../Slices/cartSlice'
import Header from '../Components/Header'




function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state=>state.cartReducer)
    const[ cartAmount, setCartAmount] = useState(0)
    useEffect(()=>{
        if(cart?.length>0){
            setCartAmount(cart?.map(product=>product?.totalPrice).reduce((p1,p2)=>p1+p2))
        }else{
            setCartAmount(0)
        }
    },[cart])
    const handleCheckout =()=>{
        alert("Your order has successfully placed... Thankyou for Purchasing with us!!!")
        dispatch(emptyCart())
        navigate('/')
    }
  return (
 <>
 <Header/>
        <div className='container mt-5'>
          {cart?.length>0?  <div className="row mt-5">
                <div className="col-lg-8">
                    <h3 className='mt-5'>Cart Summary</h3>
                    <table className='table shadow mt-3'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.map((product,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{product.title}</td>
                                <td><img style={{height:'60px',width:'60px'}} src={product.thumbnail}alt="" /></td>
                                <td><div className='d-flex'>
                                    <button onClick={()=>dispatch(decQuantity(product))}  className='btn fw-bolder'>-</button>
                                    <input style={{width:'45px'}} className='form-control' type="text" value={product.quantity} readOnly />
                                    <button onClick={()=>dispatch(incQuantity(product))} className='btn fw-bolder'>+</button>
                                    </div>
                               </td>
                                <td>$ {product.totalPrice}</td>
                                <td><button onClick={()=>dispatch(removeCart(product.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="float-end mb-5">
                        <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Cart</button>
                        <Link to={'/'} className='btn btn-primary'>Shop More</Link>
                    </div>
                </div>
                <div style={{marginBottom:'50px'}} className="col-lg-4 mt-5">
                    <div className="shadow border rounded p-4">
                        <h5>Total Products: <span>{cart?.length}</span></h5>
                        <h1>Total Amount: <span className='fw-bolder text-danger'>$ {cartAmount}</span></h1>
                        <hr />
                        <div className="d-grid">
                            <button onClick={()=>(handleCheckout())} className='btn btn-success'>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>:
            <div className='text-center  me-5  mb-5'>
            <img width={'55%'} height={'400px'} src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="" />
            <h1 className='mt-3'>Your Cart is Empty</h1>
           <Link to={'/'} className='btn btn-success'>Click here to Shop More</Link>
           </div>
            }
        </div>
 </>

  )
}

export default Cart