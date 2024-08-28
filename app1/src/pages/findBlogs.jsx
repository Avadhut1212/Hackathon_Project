import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CategoryList from '../components/categoryList'
import MyblogList from '../components/myBlogList'
import { useState } from 'react'
import FindblogList from '../components/findBlogList'

function FindBlog() {
  // get the navigate object
  const navigate = useNavigate()
  const [search, seatSearch] = useState('')
  const onLogout = () => {
    // clear the session storage
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')

    // navigate to login page
    navigate('/login')
  }

  return (
    <div className='container' >
      <h2 className='page-title'>Find Blog</h2>
      <div style={{display:'flex'}}>
        <div >
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
        </div>
        <br />
        <div>
          <div className='col col-12' >
            <h4>search blog by title</h4>         
            {/* <input
                onChange={(e)=>{seatSearch(e.target.value)}}
            type="text" /> */}
            {/* <button className="btn btn-info ms-5">Search</button> */}
           <FindblogList
            search = {search}
           />
          </div>
        </div>
      </div>

    <div>
       
      </div>
    </div>
  )
}

export default FindBlog
