import { useEffect, useState } from "react";
import { getCategories } from "../services/category";
import Category from "./category";
import axios from "axios";
import config from "../config";
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";

function BlogCategories() {
  // create state member
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate()

  // used to perform action(s) after component gets loaded
  useEffect(() => {
    loadCategories();
  }, []);
  const onAdd= async()=>{
    const body = {
        title,
        "description":desc
    }
    const result = await axios.post(`${config.url}/category`,body);
    console.log(result.data["status"]);
    if (result.data["status"] === "success") {
    //   setBlogs(result.data["data"]);
    toast.success('category added')
        navigate('/categoryPage')
        loadCategories();
      //   console.log(result.data);
    }
  }
  const loadCategories = async () => {
    const result = await axios.get(`${config.url}/category`);
    console.log(result.data["status"]);
    if (result.data["status"] === "success") {
      setBlogs(result.data["data"]);
      //   console.log(result.data);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{}}>
        <ul>
          <li>
            <Link to={"/addblog"}>New Blog</Link>
          </li>
          <li>
            <Link to={"/myblogs"}>My Blog</Link>
          </li>
          <li>
            <Link to={"/home"}>All Blogs</Link>
          </li>
          <li>
            <Link to={"/findblog"}>Find Blogs</Link>
          </li>
          <li>
            <Link to={"/categoryPage"}>Categories</Link>
          </li>

          <li>Logout</li>
        </ul>
      </div>
      <div className="ms-5">
        <h3>Categories</h3>
        <table border={1} className="table table-stripped">
          <thead>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Contents</th>
          </thead>
          <tbody>
            {blogs.map((blog) => {
              return (
                <tr>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
            <h5>Add Category</h5>
            <h6>Enter Title</h6>
            <input
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
            type="text" />
            <h6>Enter Description</h6>
            <input 
            onChange={(e)=>{
                setDesc(e.target.value)
            }}
            type="text" />
            <br />
            <br />
            <button onClick={onAdd} className="btn btn-info">Add </button>
      </div>
    </div>
  );
}

export default BlogCategories;
