import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import AddProducts from "./Pages/AddProducts"
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import UserHome from './Pages/usersPage/UserHome'
import UserProductDetail from './Pages/usersPage/UserProductDetail'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/products/detail/:productId' element={<UserProductDetail/>}/>
 
        <Route  path='/admin/' element={<Home/>}/>
        <Route  path='/admin/products/add' element={<AddProducts/>}/>
        <Route  path='/admin/products/detail/:productId'  element={<ProductDetail/>}/>
      </Routes> 


    </div>


  )
}

export default App


// import React, { use, useState } from 'react'
// import "./App.css"

// //dikhta html h par h nahi
// const App = () => {
//   const [number, setnumber] = useState(5)
//   const [array, setarray] = useState([1,2,3,4,5,6,7,8,9])
//   const increment=()=>{
//     setnumber((prev)=>prev+1)
//   }
//   const decrement=()=>{
//     setnumber((prev)=>prev-1)
//   }

//   const deleteItem=()=>{
//     setarray(()=>{
//       // return array.filter((elem,index)=>{index!==array.length})
//       return array.filter((elem)=>elem !==array.length)
//     })
//   }

//   return (
//     <div>
//       <h1>Hello world</h1>
//       {/* <h1>{number}</h1> */}
//       <h1>{array}</h1>
//       <div>
//         {
//           // array.map((elem,index)=>{
//           //   return <li>{elem}</li>
//           // })
//           array.map((elem,index)=>{
//             return <li key ={index}>{elem}</li>
//           })
//         }
//         <button onClick={deleteItem}>delete</button>
//       </div>

//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       {/* <button onClick={()=>{setnumber(number-1)}}>-</button> */}
//       {/* <button onClick={()=>{setnumber(number+1)}}>+</button> */}
//     </div>
//   )
// }

// export default App