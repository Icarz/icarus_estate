import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      } else {
        console.log(data); // Handle successful response
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-slate-600">
        Sign in
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
        <input
          className="border p-3 rounded-lg outline-none"
          type="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg outline-none"
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-600 text-white rounded-lg p-3 uppercase
         hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loading please wait ..." : "LOG IN"}
        </button>
      </form>
      {/* Use error state here */}
      {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign_up"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
