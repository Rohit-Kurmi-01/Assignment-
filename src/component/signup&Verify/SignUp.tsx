import  { useState } from "react";
import InputField from "../input/Input";
import Button from "../button/Button";
import emailJs from '@emailjs/browser';
import { Link, useNavigate } from "react-router-dom";
import { onSignUp } from "../../utils/apis";

function generateRandomOtp() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

interface LoginVerifyProps {
  onVerify: string;
  onSuccess:()=>void
}

function Login_Verify({ onVerify ,onSuccess}: LoginVerifyProps) {
  const [otpInput, setOtpInput] = useState(Array(8).fill(''));
  const navigate = useNavigate()

  const handleOtpChange = (value:string, index:number) => {
    const newOtpInput = [...otpInput];
    newOtpInput[index] = value;
    setOtpInput(newOtpInput);
  };

  const verifyOtp = () => {
    if (otpInput.join('') === onVerify) {
      onSuccess()
      alert('OTP verified successfully');
      // Redirect to signup completion or next steps
      navigate('/login')
      
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-10">
      <div className="bg-white border border-black rounded-lg p-8 shadow-md max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-8">Verify your email</h1>
        <p className="text-gray-700 text-center mb-6">
          Enter the 8 digit code you have received on <br /> dev***@revispy.com
        </p>
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {otpInput.map((_, index) => (
            <input 
              key={index} 
              type="text" 
              maxLength={1} 
              className="w-12 h-12 border border-gray-300 rounded text-center text-xl" 
              value={otpInput[index]}
              
              onChange={(e) => handleOtpChange(e.target.value, index)}
            />
          ))}
        </div>
        <Button type="button" onClick={verifyOtp}>VERIFY</Button>
      </div>
    </div>
  );
}

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleMsg = (e) => {
    e.preventDefault();

    const serviceId = 'service_ql1wj01';
    const templateID = 'template_olg6jok';
    const publicKey = 'iKfGbRrMUIoApoY8x';

    const generatedOtp = generateRandomOtp();
    setOtp(generatedOtp); // Store OTP for verification

    const otpMSG = `Your OTP is ${generatedOtp}`;
    const templateParams = {
      from_name: name,
      to: email,
      to_name: 'User',
      message: otpMSG,
    };

    emailJs.send(serviceId, templateID, templateParams, publicKey)
      .then(() => {
        setIsOtpSent(true);
        alert('OTP sent successfully to your email address');
      }, (error) => {
        console.log(error);
        alert('There was an error sending the OTP');
      });
  };

  const onSuccess = ()=>{
    onSignUp({email,password,name})
  } 

  return (
    <>
      {isOtpSent ? (
        <Login_Verify onVerify={otp} onSuccess={onSuccess}/>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-b border-black ">
            <h2 className="text-2xl font-bold text-center">Create your account</h2>
            <form onSubmit={handleMsg}>
              <div className="mb-4">
                <InputField 
                  onChange={(e) => setName(e.target.value)} 
                  label="Name" 
                  type="text" 
                  id="Name" 
                  placeholder="Enter your Name" 
                  value={name}
                />
              </div>
              <div className="mb-4">
                <InputField 
                  onChange={(e) => setEmail(e.target.value)} 
                  label="Email" 
                  type="Email" 
                  id="email" 
                  placeholder="Enter your Email" 
                  value={email}
                />
              </div>
              <div className="mb-4">
                <InputField 
                  onChange={(e) => setPassword(e.target.value)} 
                  label="Password" 
                  type="password" 
                  id="password" 
                  placeholder="Enter your Password" 
                  value={password}
                />
              </div>
              <Button type="submit">SEND OTP</Button>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-700">
                Have an Account? <Link to="/login" className="text-black font-bold">LOGIN</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
