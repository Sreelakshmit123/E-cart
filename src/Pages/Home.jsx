import React, { useEffect } from 'react'
import { Card,Row,Col,Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Slices/productSlice'
import { addToWishlist } from '../Slices/wishlistSlice'
import { addtoCart } from '../Slices/cartSlice'
import Header from '../Components/Header'


function Home() {
  const dispatch = useDispatch()
  const {loading,products,error} = useSelector((state)=>state.productSlice)
  const {wishlist} = useSelector (state=>state.wishlistSlice)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Please already exist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  return (
 <>
 <Header insideHome/>
    <div style={{marginTop:'60px'}}>
     
      {
        !loading&&error ? <div  className='mt-5 mb-5 text-center text-danger fw-bolder'>{error}</div>:null
      }
      {
        loading?<div className='d-flex justify-content-center mt-5'><Spinner className='me-3' animation="border" variant="danger" />Loading</div>:
         <Row className='mt-5 container-fluid '>
           { products.length>0?products.map((product,index)=>(<Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                  <Card className='shadow rounded' style={{ width: '18rem' }}>
                  <Link to={`/View/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
                  <Card.Body>
                    <Card.Title> {product.title.slice(0,20)}...</Card.Title>
                   <div className='d-flex justify-content-between'>
                        <button onClick={()=>handleWishlist(product)} className='btn btn-light fs-5'><i className="fa-solid fa-heart text-danger"></i></button>
                        <button onClick={()=>dispatch(addtoCart(product))} className='btn btn-light fs-5'><i className="fa-solid fa-cart-plus text-success"></i></button>
                   </div>
                  </Card.Body>
                </Card>
           </Col>)): !error&&<div className='mt-5 mb-5 text-center text-danger fw-bolder'>Product Not Found</div>}
         </Row>
         }
    </div>
 </>
  )
}

export default Home