import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [SignUpCredentials,setSignUpCredentials] = useState({ name:"",email : "", password: ""});
  let navigate=useNavigate()
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: SignUpCredentials.email,
        password: SignUpCredentials.password,
        name:SignUpCredentials.name
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //Redirect the user to His/her notes page.
      localStorage.setItem('token',json.authtoken);
      navigate('/');
    }
    else{
      alert('Invalid credentials!');
      
    }
  };
  const handleChange = (e) => {
    setSignUpCredentials({ ...SignUpCredentials, [e.target.name]: e.target.value });
  };
  return (
    <>
    
    <div>
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full sm:w-96 container my-14 sticky">
        <h1 className="text-3xl font-semibold text-center mb-6 text-purple-600">Sign Up</h1>
        <form onSubmit={handleSignUpSubmit}  className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-600">User Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300" placeholder="Enter your username" required/>
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300" placeholder="Enter your email" required/>
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300" placeholder="Enter your password" required/>
            </div>
            
            <button type="submit"  className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition duration-300">Sign Up</button>
        </form>
        <p className="text-gray-600 mt-4 text-center">Already have an account? <a href="/login" className="text-purple-600 hover:underline">Log In</a></p>
    </div>



  </div>
    </>
  )
}

export default SignUp

