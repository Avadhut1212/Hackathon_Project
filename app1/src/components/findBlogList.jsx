import { useState } from "react";
// import {  useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { search } from "../services/customer";
// import {getCustomers} from "../services/customer";
import axios from "axios";
import config from "../config";

function SearchPage() {
  // const navigate = useNavigate()
  const [customerList, setBlogs] = useState([]);
  const [search, setId] = useState("");

  // useEffect(() => {
  //   loadCustomer();
  // }, []);
  console.log(customerList);
  const onAdd = () => {
    loadCategories();
  };
  const loadCategories = async () => {
    const body = { search };
    const result = await axios.post(`${config.url}/blog/search`, body);
    console.log(result.data["status"]);
    if (result.data["status"] === "success") {
      setBlogs(result["data"]["data"]);
      // console.log(blogs);
    }
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
        type="text"
      />
      <button onClick={onAdd}>Search</button>
      <table className="table table-stripped" border={1}>
        <thead>
        <th>Id</th>
          <th>Title</th>
          <th>Contents</th>
          <th>User</th>
          <th>Category</th>
        </thead>
        <tbody>
          {customerList.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.contents}</td>
                <td>{e.full_name}</td>
                <td>{e.category}</td>
                {/* <td>{e.address}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />

      {/* <button><Link to={'/'}>Home</Link></button> */}
    </div>
  );
}

export default SearchPage;
