import { useEffect, useState } from 'react'
import { getCategories } from '../services/category'
import Category from './category'

function CategoryList() {
  // create state member
  const [blogs, setBlogs] = useState([])

  // used to perform action(s) after component gets loaded
  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const result = await getCategories()
    if (result['status'] === 'success') {
      setBlogs(result['data'])
    }
  }

  return (
    <div>
      <div>
      <table border={1} className='table table-stripped'>
           
       
      <thead>
            <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Contents</th>
      <th scope="col">User</th>
      <th scope="col">Category</th>
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
            />
           
          )
        })}
         </tbody>
           </table>
      </div>
    </div>
  )
}

export default CategoryList
