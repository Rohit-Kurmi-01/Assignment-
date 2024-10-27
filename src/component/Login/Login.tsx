
import InputField from '../input/Input'
import Button from '../button/Button'
import { FormEvent, useState } from 'react'
import { signIn } from '../../utils/apis'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState('')
  
  const onLogin = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const resp  = signIn({email,password})
    if(resp.success){
      navigate('/interests')
    }
  }

  return (
    <div className='flex justify-center items-center mt-10'>
       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-b border-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <p className="text-center font-bold">
          Welcome back to ECOMMERCE </p>
          
          <p className='text-center mb-6 '>
          The next gen business marketplace
        </p>
        <form onSubmit={onLogin}>
          <div className="mb-4">
          <InputField label="Email" type="text" id="email" placeholder="Enter your email"  value={email} onChange={(e)=>setEmail(e.target.value as string)}/>
          </div>
          <div className="mb-4">
          <InputField label="Password" type="Password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value as string)}/>
            
          </div>
          <Button type="submit">LOGIN</Button>
        </form>
        <p className="text-center mt-4">
          Don't have an Account? <a href="/" className="text-black">SIGN UP</a>
        </p>
      </div>
    </div>
  )
}
