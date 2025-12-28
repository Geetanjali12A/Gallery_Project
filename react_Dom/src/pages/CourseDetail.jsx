import { useParams } from "react-router-dom"

function CourseDetail() {
 
  const params=useParams()
  
  return (

   <div>
    <h1>{params.id} CourseDetail</h1>
   </div>
  )
}

export default CourseDetail