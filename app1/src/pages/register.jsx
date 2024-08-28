import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/user'

function RegisterUser() {
  // create state members
  const [firstName, setFirstName] = useState('')

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  // get a hook to navigate
  // - navigate is referring a function which is used for navigation
  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/login')
  }

  const onRegister = async () => {
    // client side validation
    if (firstName.length === 0) {
      alert('enter first name')
     } else if (email.length === 0) {
      alert('enter email')
    } else if (password.length === 0) {
      alert('enter password')
    }else {
      // make the API call and receive the result
      const result = await register(firstName, email, phone, password)
      console.log(result['status']);
      if (result['status'] === 'success') {
        alert('successfully registered a user')
        navigate('/login')
      } else {
        alert('Failed to register the user')
      }
    }
  }

  return (
    <div>
      <h2 className='page-title'>Register</h2>

      <div className='row mt-5'>
        <div className='col-2'></div>

        <div className='col'>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Full Name</label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>

            
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type='email'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Phone Number</label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                  type='tel'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type='password'
                  className='form-control'
                />
              </div>
            </div>

          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                Already have account ? <Link to='/login'>Login here</Link>
              </div>

              <button onClick={onRegister} className='btn btn-success'>
                Register
              </button>
              <button onClick={onCancel} className='btn btn-danger ms-2'>
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className='col-2'></div>
      </div>
    </div>
  )
}

export default RegisterUser
