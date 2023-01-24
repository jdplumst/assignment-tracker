import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    await signup(email, password);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center pt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-10 bg-white w-1/2 h-1/3">
        <h3 className="text-xl mb-5 font-bold">Sign Up</h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="p-2 mb-5 border-solid border-2 border-slate-200 focus:border-slate-500 focus:outline-none rounded-lg block w-full"
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="p-2 mb-5 border-solid border-2 border-slate-200 focus:border-slate-500 focus:outline-none rounded-lg block w-full"
        />
        <button
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white p-4 rounded-lg font-bold w-1/4 mx-auto">
          Sign Up
        </button>
        {error && (
          <div className="bg-pink-200 border-solid border-4 border-pink-300 mt-5 p-2 w-4/5">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
