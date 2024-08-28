import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import config from "../config";

export default function DetailsPage() {
  const blogId = sessionStorage.getItem("blogId");

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    const body = { id: blogId };
    console.log(body);
    const result = await axios.post(`${config.url}/blog/details`, body);
    console.log(result.data["status"]);
    if (result.data["status"] === "success") {
      setBlogs(result["data"]["data"][0]);
      // console.log(blogs);
    }
  };

  return (
    <div style={{display:'flex'}}>
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
        <h2>{blogs.title}</h2>
        <h5>{blogs.category}</h5>
        <p>{blogs.contents}</p>
      </div>
    </div>
  );
}
