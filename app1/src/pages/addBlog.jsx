import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addBlog } from "../services/blog";
import axios from 'axios'
import config from "../config";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
const [options, setOptions] = useState([]);
const navigate = useNavigate()
  
    useEffect(() => {
      axios.get(`${config.url}/category`)
        .then(response => {
          setOptions(response.data['data']);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
//   console.log(options);
    const handleChange = (event) => {
      // Handle the change event here
    };
  
   


  const onAdd = () => {
    addblog();
    console.log('onAdd');
  };

//   const token = sessionStorage.getItem('token')
  async function addblog() {
    const result = await addBlog(title, content,category);
    console.log(result);
    if(result['status']==='success'){
        // alert('success')
        // <toast className="success"></toast>()
        navigate('/myblogs')
    }
    
    
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
      <select onChange={(e)=>{setCategory(parseInt(e.target.value)); console.log(category);}} name="" id="">
        
      {options.map((fruit) => <option  value={fruit.id}>{fruit.title}</option>)
        
      }
      </select>
          <h4 className="mt-5 ">Enter blog title</h4>
          <input 
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
          />

          <h4 className="mt-5">Enter blog content</h4>
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type="text"
            rows="5"
            cols="50"
          />
            <br />
          <button onClick={onAdd} className="btn btn-info">Add Blog</button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
