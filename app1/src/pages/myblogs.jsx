import { useNavigate } from 'react-router-dom'
import { Link,Navigate } from 'react-router-dom'
import CategoryList from '../components/categoryList'
import MyblogList from '../components/myBlogList'

function MyBlogs() {
  // get the navigate object
  const navigate = useNavigate()

  const onLogout = () => {
    // clear the session storage
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')

    // navigate to login page
    navigate('/login')
  }

  return (
    <div className='container' >
      <h2 className='page-title'>My Blog</h2>
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
           <MyblogList/>
          </div>
        </div>
      </div>

    <div>
       
      </div>
    </div>
  )
}

export default MyBlogs
