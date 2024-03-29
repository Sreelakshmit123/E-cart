import React from 'react'
import { Card,Button,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Slices/wishlistSlice'
import { addtoCart } from '../Slices/cartSlice'
import Header from '../Components/Header'


function Wishlist() {
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)
  
  const handleCart =(product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addtoCart(product))
  }
  return (
<>
    <Header/>
      <div style={{marginTop:'60px'}}>
      <Row className='mt-3 container'>
      { wishlist?.length>0?wishlist?.map(product=>(
       <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
               <Card className='shadow rounded' style={{ width: '18rem' }}>
               <Link to={`/View/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
               <Card.Body>
                    <Card.Title> {product.title.slice(0,20)}...</Card.Title>
                   <div className='d-flex justify-content-between'>
                        <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light fs-5'><i className="fa-solid fa-heart-circle-xmark text-danger"></i></Button>
                        <Button onClick={()=>handleCart(product)} className='btn btn-light fs-5'><i className="fa-solid fa-cart-plus text-success"></i></Button>
                   </div>
               </Card.Body>
             </Card>
        </Col>
           )):<div className='text-center ms-5 ps-5 mb-5 '>
            <img width={'55%'} height={'400px'} src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="" />
            <h1 className='mt-3'>Your Whislist is Empty</h1>
           </div>
        }
      </Row>
  </div>
</>

  )
}

export default Wishlist