import React from "react";

import Masonry from "../components/ui-kits/Masonry";
import tinyBlocks from "../utils/tinyBlocks";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <section className="w-full h-screen col-span-1 overflow-hidden">
        <Masonry />

        <div className="mt-4">
          <Masonry />
        </div>
      </section>

      <div className="flex items-center justify-center w-full h-full">
        <section className="col-span-1 px-[156px] w-full">
          <p className="mb-1 text-xl font-semibold">Sign in to your account</p>
          <p className="mb-8 text-xs font-[300]">
            Does not have an account yet?{" "}
            <a href="" className="text-blue-500 font-[500] hover:underline">
              Create Account
            </a>
          </p>

          <form action="" className="flex flex-col w-full gap-4">
            <tinyBlocks.InputWLabel label="Username or Email" />
            <tinyBlocks.InputWLabel label="Password" type="password" />

            <div className="flex items-center justify-between mt-2">
              <div class="flex items-center ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-xs font-[400]  text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a href="" className="text-xs text-gray-500 hover:text-blue-500">
                Forgot Password?
              </a>
            </div>

            <button className="px-4 py-2 mt-6 text-sm text-white bg-blue-500 rounded">
              Sign in
            </button>
          </form>

          <div className="relative mt-16">
            <div className="flex justify-center">
              <span className="z-10 block w-48 h-auto text-xs text-center text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
            <div className="absolute z-0 w-full border-b top-2"></div>
          </div>

          <div className="flex justify-between gap-4 mt-6">
            <button className="w-full py-2 text-sm border rounded">
              Gmail
            </button>
            <button className="w-full py-2 text-sm border rounded">
              Facebook
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
