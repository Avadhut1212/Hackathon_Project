import { useEffect, useState } from 'react'
// import { getCategories } from '../services/category'
import Category from './category'
import axios from 'axios'
import config from '../config'

function  MyblogList() {
  // create state member
  const [blogs, setBlogs] = useState([])

  // used to perform action(s) after component gets loaded
  useEffect(() => {
    loadCategories()
  }, [])
  const id = sessionStorage.getItem('id');

  const loadCategories = async () => {
    const body = {"id":id}

    const result = await axios.post(`${config.url}/blog/myblogs`, body)
    console.log(result.data['status']);
    if (result.data['status'] === 'success') {
      setBlogs(result['data']['data'])
        // console.log(blogs);
    }
  }

  return (
    <div className='mt-5'>
      <div >
      <table border={1} className='tabel table-stripped'>
      <thead>
            <th scope='col'>id</th>
            <th scope='col'>title</th>
            <th scope='col'>details</th>
            <th scope='col'>user</th>
            <th scope='col'>category</th>
            <th scope='col'>Action</th>
          </thead>
        <tbody>
        {blogs.map((blog) => { 
          return (
            <Category
                id={blog.id}
              title={blog.title}
              details={blog.contents}
              user={blog.full_name}
              category={blog.category}
              isMine={true}
              // image={category.image}
            />
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default MyblogList
