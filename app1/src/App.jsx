import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import LoginUser from './pages/login'
import RegisterUser from './pages/register'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddBlog from './pages/addBlog'
import MyBlogs from './pages/myblogs'
import FindBlog from './pages/findBlogs'
import DetailsPage from './pages/detailsPage'
import CategoriesPage from './pages/categoriesPage'
import BlogCategories from './components/blogCategoryList'
import UpdateBlog from './pages/updateBlog'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<LoginUser />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addblog' element={<AddBlog/>} />
        <Route path='/myblogs' element={<MyBlogs/>} />
        <Route path='/findblog' element={<FindBlog/>} />
        <Route path='/detailsPage' element={<DetailsPage/>} />
        <Route path='/categoryPage' element={<BlogCategories/>} />
        <Route path='/updateBlog' element={<UpdateBlog/>} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
