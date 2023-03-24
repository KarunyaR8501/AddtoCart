import logo from './logo.svg';
import './App.css';

import Cart from './Component/Cart'
import { useState } from 'react';



let products=[
{
id:1,
name:'Samsung',
price:'$25.00'
},
{
id:2,
name:'Apple',
price:'$25.00',

},{
  id:3,
  name:'Xiomi',
price:'$18.00',

},{
  id:4,
  name:'Iphone',
price:'$25.00',
},

{
  id:5,
  name:'Poco',
price:'$40.00',

},{
  id:6,
  name:'Vivo',
price:'$18.00',

},{
  id:7,
  name:'Oppo',
price:'$40.00',

},{
  id:8,
  name:'Moto',
price:'$40.00',

}
];


function App() {
  const[product,setProduct] = useState(products)
  const[cartList,setCartlist] = useState([])
 

  let buttonClick =(productObj)=>{
     setCartlist([...cartList,productObj])
    
  }
   
  let removeCart =(productObj)=>{
    let newCart = cartList.filter(obj=>obj.id !== productObj.id)
    setCartlist([...newCart])
//alert(productObj.id)
  }


  return (
  <>
  <header className="bg-dark py-2">
  <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
      </div>
  </div>
</header>
  <div className='container mt-5'>
    <div className='row'>
       <div className='col-lg-10'>
        <div className='row'>
        {
        product.map((product)=>{
          return <Cart ProductData={product}  cartList={cartList} handleClick={buttonClick}></Cart>
        })
      }
        </div>
       </div>
       <div className='col-lg-2'>
        
       <h1>Cart</h1>
             <ul class="list-group">
         {
          cartList.map((e)=>{
             return <li class="list-group-item d-flex justify-content-between align-items-center">{e.name}
 
                      <span class="badge badge-primary badge-pill">14</span>
                     <span>
                      <button className='btn btn-xs btn-danger' onClick={()=>{removeCart(e)}}>X

                      </button>
                     </span>
                 </li>
          })
         }
             </ul>
            
        </div>
        
       </div>
    </div>
    
  
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
 
 
  </>

    
  );
}

export default App;
