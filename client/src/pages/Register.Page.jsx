import React, { useState } from "react";
import svgExports from "../assets/svg/exports";
import InputWithIconPass from "../components/common/input-box/InputWithIconPass";
import InputWithIcon from "../components/common/input-box/InputWithIcon";
import PrimaryButton from "../components/common/button/PrimaryButton";

function RadioList(props) {
  return (
    <li>
      <input
        type="radio"
        name="user-type"
        id={props.id}
        value={props.value}
        className="hidden peer"
      />
      <label
        htmlFor={props.id}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="block">
          <div className="w-full text-lg font-semibold">{props.type}</div>
          <div className="w-full text-sm">{props.caption}</div>
        </div>
      </label>
    </li>
  );
}

const Register = () => {
  const [visible, setVisible] = useState(0);
  const [role, setRole] = useState(null);

  function changeVisibility(value) {
    if (value === 1) {
      try {
        const role = document.querySelector(
          'input[name="user-type"]:checked'
        ).value;

        setRole(role);
        setVisible(value);
      } catch (e) {
        alert("please select role");
      }
    }

    if (value === 0) {
      setVisible(0);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-[500px] relative  h-screen p-8 bg-gray-100 flex flex-col justify-center">
        <div className="flex items-center">
          {visible ? (
            <div className="w-full">
              <p
                className="flex items-center gap-2 mb-4 text-sm cursor-pointer text-darkBackground-500 hover:text-secondary-900 hover:underline"
                onClick={(e) => changeVisibility(0)}
              >
                <svgExports.LongArrow />
                <span>Back</span>
              </p>
              <p className="mb-8 text-2xl font-semibold">Sign up</p>

              <p className="absolute text-sm opacity-50 top-5">
                Selected Role:{" "}
                <span className="font-semibold">
                  {role == 3 ? "Job Seeker" : "Job Recruiter"}
                </span>
              </p>

              <form action="">
                <InputWithIcon
                  id="signup-email"
                  label="Active Email"
                  icon={<svgExports.EmailIcon />}
                  placeholder="arvinmalaluan@gmail.com"
                />

                <InputWithIconPass
                  id="signup-password"
                  label="Set Password"
                  icon={<svgExports.PasswordIcon />}
                  placeholder="D9RWpTAXinJN06G"
                />

                <InputWithIconPass
                  id="signup-confirm-password"
                  label="Confirm Password"
                  icon={<svgExports.PasswordIcon />}
                  placeholder="D9RWpTAXinJN06G"
                />

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-sm font-normal text-gray-900 ms-2 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>

                <PrimaryButton label="Sign up" />
              </form>
            </div>
          ) : (
            <div className="">
              <p className="mb-8 text-2xl font-semibold">Sign up</p>
              <p className="mb-2">What would be your role?</p>

              <ul className="flex flex-col w-full gap-2 mb-8">
                <RadioList
                  type="Job Recruiter"
                  caption="Are you here to find potential candidates for job vacancies?"
                  id="recruiter-option"
                  value="2"
                />
                <RadioList
                  type="Job Seeker"
                  caption="Are you here to find your dream job or find the perfect job for you?"
                  id="seeker-option"
                  value="3"
                />
              </ul>

              <PrimaryButton label="Next" onclick={changeVisibility} />
            </div>
          )}
        </div>

        <p className="mt-10 text-sm text-darkBackground-500 ">
          Already have an account?{" "}
          <a
            href=""
            className="font-semibold hover:text-secondary-900 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
