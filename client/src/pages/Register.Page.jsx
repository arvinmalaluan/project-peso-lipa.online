import React, { useContext, useState } from "react";
import svgExports from "../assets/svg/exports";
import InputWithIconPass from "../components/common/input-box/InputWithIconPass";
import InputWithIcon from "../components/common/input-box/InputWithIcon";
import PrimaryButton from "../components/common/button/PrimaryButton";
import { Link } from "react-router-dom";
import generalRegisterContext from "../context/authentication/generalRegisterContext";
import { signup } from "../apis/post.api";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [visible, setVisible] = useState(0);
  const [role, setRole] = useState(null);
  const { register, updateRegister } = useContext(generalRegisterContext);

  function changeVisibility(value) {
    if (value === 1) {
      try {
        const role = document.querySelector(
          'input[name="user-type"]:checked'
        ).value;

        setRole(role);
        updateRegister({ role: role });
        setVisible(value);
      } catch (e) {
        alert("please select role");
      }
    }

    if (value === 0) {
      setVisible(0);
    }
  }

  function registerUser(event) {
    event.preventDefault();

    const payload = {
      email: register.email,
      password: register.password,
      fkid_role: register.role,
    };

    if (register.password === register.confirm_password) {
      signup(payload)
        .then((data) => {
          if (data.success) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("not matched");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-[500px] relative  h-screen p-8 bg-gray-50 flex flex-col justify-center">
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
                  {role == 2 ? "Job Seeker" : "Job Recruiter"}
                </span>
              </p>

              <form action="">
                <InputWithIcon
                  id="signup-email"
                  label="Active Email"
                  icon={<svgExports.EmailIcon />}
                  placeholder="arvinmalaluan@gmail.com"
                  name="email"
                  set={updateRegister}
                />

                <InputWithIconPass
                  id="signup-password"
                  label="Set Password"
                  icon={<svgExports.PasswordIcon />}
                  placeholder="D9RWpTAXinJN06G"
                  name="password"
                  set={updateRegister}
                />

                <InputWithIconPass
                  id="signup-confirm-password"
                  label="Confirm Password"
                  icon={<svgExports.PasswordIcon />}
                  placeholder="D9RWpTAXinJN06G"
                  name="confirm_password"
                  set={updateRegister}
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

                <PrimaryButton label="Sign up" onclick={registerUser} />
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
                  value="3"
                />
                <RadioList
                  type="Job Seeker"
                  caption="Are you here to find your dream job or find the perfect job for you?"
                  id="seeker-option"
                  value="2"
                />
              </ul>

              <button
                className="w-full py-2 mt-4 text-white rounded bg-secondary-900"
                onClick={() => changeVisibility(1)}
              >
                Next
              </button>
            </div>
          )}
        </div>

        <p className="mt-10 text-sm text-darkBackground-500 ">
          Already have an account?{" "}
          <Link
            to="/"
            className="cursor-pointer hover:underline font-[500] hover:text-secondary-900"
          >
            Sign in
          </Link>
        </p>

        <div className="flex gap-4 mt-8 text-sm">
          <Link
            to="/dashboard"
            className="cursor-pointer hover:underline font-[500] hover:text-secondary-900"
          >
            Go to recruiters
          </Link>

          <Link
            to="/home"
            className="cursor-pointer hover:underline font-[500] hover:text-secondary-900"
          >
            Go to seekers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
