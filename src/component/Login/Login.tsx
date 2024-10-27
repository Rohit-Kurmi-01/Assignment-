
import InputField from '../input/Input'
import Button from '../button/Button'

export default function Login() {
  return (
    <div className='flex justify-center items-center mt-10'>
       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-b border-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <p className="text-center font-bold">
          Welcome back to ECOMMERCE </p>
          
          <p className='text-center mb-6 '>
          The next gen business marketplace
        </p>
        <form>
          <div className="mb-4">
          <InputField label="UserName" type="text" id="Name" placeholder="Enter your Username"  />
          </div>
          <div className="mb-4">
          <InputField label="Password" type="Password" id="password" placeholder="Enter your password" />
            
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
