import { useNavigate } from "react-router-dom"

function Nav2() {
 
let navigate= useNavigate()
  return (
    
   <div>
    <button onClick={()=>{
        navigate('/')
    }}
    className="bg-emerald-600 text-white bold text-xl rounded px-5 m-2 py-2 cursor-pointer active:scale-90">
      Return to Home Page
      </button>
      <button  onClick={()=>{
        navigate(-1)
    }}
      className="bg-emerald-600 text-white bold text-xl rounded px-5 m-2 py-2 cursor-pointer active:scale-90">
      Back
      </button>
   </div>
  )
}

export default Nav2