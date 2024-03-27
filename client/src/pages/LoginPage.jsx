import React from "react";
import InputWithIcon from "../components/common/input-box/InputWithIcon";
import InputWithIconPass from "../components/common/input-box/InputWithIconPass";
import svgExports from "../assets/svg/exports";
import PrimaryButton from "../components/common/button/PrimaryButton";

const LoginPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[500px] h-screen p-8 bg-gray-50 rounded flex items-center">
        <form className="flex flex-col w-full ">
          <p className="mb-8 text-2xl font-semibold text-secondary-900">
            Sign in
          </p>

          <InputWithIcon
            id="signup-email"
            label="Email or Username"
            icon={<svgExports.EmailIcon />}
            placeholder="arvinmalaluan@gmail.com"
          />

          <InputWithIconPass
            id="signup-password"
            label="Set Password"
            icon={<svgExports.PasswordIcon />}
            placeholder="D9RWpTAXinJN06G"
          />

          <div className="flex items-center justify-between mt-2 mb-8">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="text-sm font-normal text-gray-900 ms-2 dark:text-gray-300"
              >
                Keep me signed in.
              </label>
            </div>

            <a
              href=""
              className="text-xs font-[500] text-darkBackground-500 hover:text-secondary-900 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <PrimaryButton label="Submit" />

          <p className="mt-8 text-sm text-darkBackground-500">
            Does not have an account yet?{" "}
            <a
              href=""
              className="cursor-pointer hover:underline font-[500] hover:text-secondary-900"
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
