import { useNavigate } from 'react-router-dom'
// import config from '../config'
import axios from 'axios'
import config from '../config'
import { toast } from 'react-toastify'

function Category({id, title, details,user,category,isMine}) {
  const navigate = useNavigate()

  const onDelete= async()=>{
    const body = {id}
    const result = await axios.post(`${config.url}/blog/deleteblog`, body);
    console.log(result.data);
    if (result.data["status"] === "success") {
      toast.success("deleted")
      // setBlogs(result["data"]["data"]);
      // console.log(blogs);
    }
    navigate('/home')
  }

  const onEdit = ()=>{
    navigate('/updateBlog')
    sessionStorage.setItem('blogId',id)
    sessionStorage.setItem('blogTitle',title)
    sessionStorage.setItem('blogDesc',details)
  }

  const onTitle=()=>{
    sessionStorage.setItem('blogId',id)
    navigate('/detailsPage')

  }
  return (
    
     
       
         
          <tr>
          <td>{id}</td>
            <td onClick={onTitle}>{title}</td>
            <td>{details}</td>
            <td>{user}</td>
            <td>{category}</td>
            {isMine &&
              <td>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
              </td>
              
            }
            {/* <td>{details}</td> */}
          </tr>
        
     
    
  )
}

export default Category
