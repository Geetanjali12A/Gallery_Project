import { Link } from "react-router-dom";
function Navbar() {
 

  return (
   <div className="bg-cyan-700 shadow-md py-4  flex items-center  justify-between px-6">
        <h2 className="text-white font-bold text-lg ">Geeta</h2>
        <div className="text-sm space-x-6 underline flex text-white">
            <Link className="text-lg font-bold" to='/'>Home</Link>
            <Link className="text-lg font-bold" to='/About'>About</Link>
            <Link className="text-lg font-bold" to='/Product'>Product</Link>
            <Link className="text-lg font-bold" to='/Courses'>Courses</Link>


        </div>
        
   </div>
  )
}

export default Navbar