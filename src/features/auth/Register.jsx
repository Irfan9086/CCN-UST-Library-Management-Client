

const Register = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form  className="w-full max-w-md space-y-4 bg-white p-8 rounded-xl shadow-xl border text-black">
        <h1 className="text-3xl font-bold text-center text-indigo-700">Register</h1>
       
        <input
          value={name}
          required
          placeholder="Name"
          className="p-3 border rounded w-full"
        />
        <input
         
         
          required
          placeholder="Email"
          className="p-3 border rounded w-full"
        />
        <input
          type="password"
          
       
          required
          placeholder="Password"
          className="p-3 border rounded w-full"
        />
        <div>
          <label className="mr-2">Role:</label>
          <input
            type="radio"
            name="role"
            value="student"
          
          
          />
          Student
          <input
            type="radio"
            name="role"
            value="admin"
           
         
          />
          Admin
        </div>
        <button
       
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded font-bold"
        >
         Register
        </button>
      </form>
    </div>
  );
};

export default Register;
