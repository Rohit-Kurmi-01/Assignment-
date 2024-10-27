import Button from '../button/Button';

export default function Login_Verify() {
  return (
    <div className="flex justify-center items-center bg-gray-100 mt-10">
      <div className="bg-white border border-black rounded-lg p-8 shadow-md max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-8">Verify your email</h1>
        <p className="text-gray-700 text-center mb-6">
          Enter the 8 digit code you have received on <br /> dev***@revispy.com
        </p>
        <label htmlFor="code" className="block text-gray-700 mb-2">
          Code
        </label>
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {Array(8).fill(0).map((_, index) => (
            <input 
              key={index} 
              type="text" 
              maxLength={1} 
              className="w-12 h-12 border border-gray-300 rounded text-center text-xl" 
            />
          ))}
        </div>
        <Button type="submit">VERIFY</Button>
      </div>
    </div>
  );
}
