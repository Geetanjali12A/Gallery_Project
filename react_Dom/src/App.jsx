import { Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav2 from "./pages/Nav2"
import Product from "./pages/Product"
import Courses from "./pages/Courses"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import NotFound from "./pages/NotFound"
import Men from "./pages/men"
import Women from "./pages/women"
import Kids from "./pages/kids"
import CourseDetail from "./pages/CourseDetail"
function App() {
 
  
  return (
   <div>
      
      <Navbar/>
      <Nav2/>

      <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/Courses' element={<Courses/>}/>
           {/* for anything after corses */}
           <Route path="/Courses/:id" element={<CourseDetail/>}/>
          <Route path= '*' element={<NotFound/>}/>
          <Route path= '/About' element={<About/>}/>

          <Route path= '/Product' element={<Product/>}>
               <Route path= 'Men' element={<Men/>}/>
              <Route path= 'Women' element={<Women/>}/>
              <Route path= 'Kids' element={<Kids/>}/>

          </Route>
          


      </Routes>
      <Footer/>
   </div>
  )
}

export default App
