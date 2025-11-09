import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl grid grid-cols-12 gap-8 items-stretch">
        {/* Left panel */}
        <aside className="col-span-12 md:col-span-7 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg shadow-lg p-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-4">
            CREATE YOUR ACCOUNT
          </h1>
          <p className="text-neutral-600 mb-6">
            Start building your personalized workout plans today. Track your
            progress, stay consistent, and achieve your fitness goals.
          </p>
          <ul className="text-sm text-neutral-600 space-y-2">
            <li>✓ Save custom workouts and routines</li>
            <li>✓ Track sets, reps, and load easily</li>
            <li>✓ Monitor your weekly progress</li>
          </ul>
        </aside>

        {/* Right panel (Signup form) */}
        <main className="col-span-12 md:col-span-5 bg-white rounded-lg shadow-lg p-10 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Sign up for free
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-neutral-600"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                required
                type="text"
                placeholder="Choose a unique username"
                className="mt-2 block w-full border-b border-neutral-300 px-1 py-2 bg-transparent outline-none focus:border-green-400 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-600"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="you@domain.com"
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

            {/* <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-neutral-600"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                required
                type="password"
                placeholder="••••••••"
                className="mt-2 block w-full border-b border-neutral-300 px-1 py-2 bg-transparent outline-none focus:border-green-400 transition-colors"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow transition-colors"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <a
                href="login"
                className="text-green-600 font-medium hover:underline"
              >
                Login
              </a>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Signup;
