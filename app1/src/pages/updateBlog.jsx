import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { addBlog } from "../services/blog";
import axios from 'axios'
import config from "../config";
import { toast } from "react-toastify";

function UpdateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const id = sessionStorage.getItem('blogId')
  const navigate = useNavigate()
//   const [category, setCategory] = useState("");
// const [options, setOptions] = useState([]);
  
//     useEffect(() => {
//       axios.get(`${config.url}/blog/editblog`)
//         .then(response => {
//           setOptions(response.data['data']);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }, []);
// //   console.log(options);
//     const handleChange = (event) => {
//       // Handle the change event here
//     };

useEffect(() => {
    setTitle(sessionStorage.getItem('blogTitle'))
    setContent(sessionStorage.getItem('blogDesc'))
}, [])
 


  const onAdd = () => {
    updateblog();
    console.log('onAdd');
    
  };

//   const token = sessionStorage.getItem('token')
  async function updateblog() {
    const body = {title,'contents':content,'id':id}
    const result =  await axios.post(`${config.url}/blog/editblog`, body);
    console.log(result);
    if(result.data['status']==='success'){
        toast.success("edit succcessful")
    }
    
    navigate('/myblogs')
  }

//   console.log(title, content);

  return (
    <div>
      <h1>Add Blog</h1>
      <div style={{ display: "flex" }}>
      <div style={{}}>
          <ul>
                <li><Link to={'/addblog'}>New Blog</Link></li>
                <li><Link to={'/myblogs'}>My Blog</Link></li>
                <li><Link to={'/home'}>All Blogs</Link></li>
                <li><Link to={'/findblog'}>Find Blogs</Link></li>              
                <li><Link to={'/categoryPage'}>Categories</Link></li>              
                <li><Link to={'/'}>Logout</Link></li>              
                
                {/* <li>Logout</li> */}
              </ul>
          </div>
        <div className="ms-5">
        {/* <select onChange={handleChange}>
            {options.map((option)=>{
                return (<option key={option.id} value={option.title}>
                {option.title}
              </option>)
            })}
        
      </select> */}
      {/* <select onChange={(e)=>{setCategory(parseInt(e.target.value)); console.log(category);}} name="" id="">
        
      {options.map((fruit) => <option  value={fruit.id}>{fruit.title}</option>)
        
      }
      </select> */}
          <h4 className="mt-5 ">Enter blog title</h4>
          <input 
          value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
          />

          <h4 className="mt-5">Enter blog content</h4>
          <textarea
          value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type="text"
            rows="5"
            cols="50"
          />
            <br />
          <button onClick={onAdd} className="btn btn-info">Update Blog</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlog;
