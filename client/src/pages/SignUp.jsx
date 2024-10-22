import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-slate-600">
        Sign up
      </h1>
      <form className="flex flex-col gap-3" action="">
        <input
          className="border p-3 rounded-lg outline-none"
          type="text"
          id="username"
          placeholder="username"
        />
        <input
          className="border p-3 rounded-lg outline-none"
          type="email"
          id="email"
          placeholder="email"
        />
        <input
          className="border p-3 rounded-lg outline-none"
          type="password"
          id="password"
          placeholder="password"
        />
        <button
          className="bg-slate-600 text-white rounded-lg p-3 uppercase
         hover:opacity-95 disabled:opacity-80"
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p >have an account?</p>
        <Link to={"/sign_in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
