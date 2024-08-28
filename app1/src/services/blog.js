import axios from 'axios'
import config from '../config';



export async function addBlog(title, contents,catId){
    const user_id = sessionStorage.getItem('id')
    const body = {title,contents,
    user_id,
    category_id:catId
    }
    const token = sessionStorage.getItem('token')
    const response = await axios.post(`${config.url}/blog/addblog`,body,{
        headers:token
    })

    console.log(response);
    

    return response.data
}