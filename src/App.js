// import {BrowserRouter, Routes, Route} from "react-router-dom"

// import Layout from "./Layout"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Service from "./pages/Service"

// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         <Route path="service" element={<Service/>}/>

//       </Route>
//     </Routes>
//     </BrowserRouter>
//     )
// }

    
// import React from 'react'
// import Counter from './Counter'

// export default function App() {
//   return (
//     <div><Counter/></div>
//   )
// }
// import React from 'react'
// import Effect from './Effect'

// export default function App() {
//   return (
//     <div><Effect/></div>
//   )
// }
// import React from 'react'
// import Reducer from './Reducer'

// export default function App() {
//   return (
//     <div><Reducer/></div>
//   )
// }
import React from 'react'
import Callbacks from './Callbacks'
import CounterComponent from './CounterComponent'
import Memo from './Memo'

export default function App() {
  return (
    <div><Callbacks/><CounterComponent/><Memo/></div>
  )
}
