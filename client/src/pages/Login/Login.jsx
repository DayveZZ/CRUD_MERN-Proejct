import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl grid grid-cols-12 gap-8 items-stretch">
        {/* Left panel */}
        <aside className="col-span-12 md:col-span-7 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg shadow-lg p-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-4">
            YOUR WORKOUT PLANS
          </h1>
          <p className="text-neutral-600 mb-6">
            Keep track of your exercises, reps and loads. Build consistency,
            track progress, and crush your goals.
          </p>
          <ul className="text-sm text-neutral-600 space-y-2">
            <li>✓ Create & save custom workouts</li>
            <li>✓ Track sets, reps and load</li>
            <li>✓ Responsive & mobile friendly</li>
          </ul>
        </aside>

        {/* Right panel (Login form) */}
        <main className="col-span-12 md:col-span-5 bg-white rounded-lg shadow-lg p-10 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Sign in to your account
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-neutral-600"
              >
                Username or Email
              </label>
              <input
                id="identifier"
                name="identifier"
                required
                type="text"
                placeholder="Enter your username or email"
                className="mt-2 block w-full border-b border-neutral-300 px-1 py-2 bg-transparent outline-none focus:border-green-400 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-600"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                required
                type="password"
                placeholder="••••••••"
                className="mt-2 block w-full border-b border-neutral-300 px-1 py-2 bg-transparent outline-none focus:border-green-400 transition-colors"
              />
            </div>

            {/* <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-neutral-600">
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot password?
              </a>
            </div> */}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow transition-colors"
            >
              Login
            </button>

            <div className="text-center text-sm text-neutral-500">
              Don’t have an account?{" "}
              <a
                href="signup"
                className="text-green-600 font-medium hover:underline"
              >
                Sign up
              </a>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
export default Login;
