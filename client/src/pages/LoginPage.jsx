import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[500px] h-screen p-8 bg-gray-50 rounded flex items-center">
        <form className="flex flex-col w-full gap-2">
          <p className="mb-4 text-2xl font-semibold text-secondary-900">
            Sign in
          </p>

          <div>
            <label
              htmlFor=""
              className="text-sm font-[500] mb-1 text-darkBackground-500"
            >
              Username/Email
            </label>
            <input
              type="text"
              placeholder="Username/Email"
              className="w-full px-4 py-2 text-sm border rounded outline-none"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="text-sm font-[500] mb-1 text-darkBackground-500"
            >
              Password
            </label>
            <input
              type="text"
              placeholder="Password"
              className="w-full px-4 py-2 text-sm border rounded outline-none"
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember-me" />
              <label
                htmlFor="remember-me"
                className="text-xs font-[500] text-darkBackground-500 hover:text-primary-900"
              >
                Keep me signed in
              </label>
            </div>

            <a
              href=""
              className="text-xs font-[500] text-darkBackground-500 hover:text-primary-900"
            >
              Forgot password?
            </a>
          </div>

          <input
            type="submit"
            className="w-full py-2 mt-8 text-sm text-white rounded cursor-pointer bg-secondary-900"
          />

          <p className="mt-8 text-sm text-darkBackground-500">
            Does not have an account yet?{" "}
            <a
              href=""
              className="cursor-pointer hover:underline font-[500] hover:text-primary-900"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
