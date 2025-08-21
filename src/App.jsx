import "./App.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import darkmode from "./assets/dark_mode_24dp_232428_FILL0_wght400_GRAD0_opsz24.svg";
import lightmode from "./assets/light_mode_24dp_E7E6E9_FILL0_wght400_GRAD0_opsz24.svg";
import { formSchema } from "./ValidationSchema";

function App() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <section
        className={` flex  px-4 sm:px-14 md:px-0 justify-center items-center min-h-screen ${
          theme === "dark" ? "bg-[#E7E6E9]" : "bg-[#232428]"
        }`}
      >
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className={`w-full my-10 sm:my-0 md:w-[530px] p-4 rounded-lg   ${
            theme === "dark"
              ? "bg-white text-[#0D0D0D]"
              : "text-[#D1D1D1] bg-[#0D0D0D]"
          }`}
        >
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col justify-between sm:flex-row gap-x-3 gap-y-3 ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  className={`w-full py-2 px-4 rounded-lg  text-base font-normal ${
                    errors.firstName ? "border-1 dark:border-[#EC5E5E]" : ""
                  }  ${
                    theme === "dark"
                      ? "bg-[#F7F7F7] border-1 border-gray-400 focus:outline focus:border-gray-400 focus:outline-gray-400 focus:outline-shadow-md"
                      : " bg-[#151515] focus:outline-none "
                  }`}
                  {...register("firstName")}
                />
                <span className="text-xs mt-[-3px] italic font-medium text-[#EC5E5E]">
                  {errors.firstName?.message}
                </span>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  Last Name *
                </label>
                <input
                  type="text"
                  className={`w-full py-2 px-4 rounded-lg text-base font-normal ${
                    errors.lastName ? "border-1 dark:border-[#EC5E5E]" : ""
                  }  ${
                    theme === "dark"
                      ? "bg-[#F7F7F7] border-1 border-gray-400 focus:outline focus:border-gray-400 focus:outline-gray-400 focus:outline-shadow-md"
                      : " bg-[#151515] focus:outline-none"
                  }`}
                  {...register("lastName")}
                />
                <span className="text-xs mt-[-3px] italic font-medium text-[#EC5E5E]">
                  {errors.lastName?.message}
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="" className="text-sm font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                name=""
                id=""
                className={`w-full py-2 px-4 rounded-lg text-base font-normal ${
                  errors.mobileNumber ? "border-1 dark:border-[#EC5E5E]" : ""
                }  ${
                  theme === "dark"
                    ? "bg-[#F7F7F7] border-1 border-gray-400 focus:outline focus:border-gray-400 focus:outline-gray-400 focus:outline-shadow-md"
                    : " bg-[#151515] focus:outline-none"
                }`}
                {...register("mobileNumber")}
              />
              <span className="text-xs mt-[-3px] italic font-medium text-[#EC5E5E]">
                {errors.mobileNumber?.message}
              </span>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-medium">
                Email Address *
              </label>
              <input
                type="email"
                name=""
                id=""
                className={`w-full py-2 px-4 rounded-lg text-base font-normal ${
                  errors.email ? "border-1 dark:border-[#EC5E5E]" : ""
                }  ${
                  theme === "dark"
                    ? "bg-[#F7F7F7] border-1 border-gray-400 focus:outline focus:border-gray-400 focus:outline-gray-400 focus:outline-shadow-md"
                    : " bg-[#151515] focus:outline-none"
                }`}
                {...register("email")}
              />
              <span className="text-xs mt-[-3px] italic font-medium text-[#EC5E5E]">
                {errors.email?.message}
              </span>
            </div>
            <div className="flex flex-col justify-between sm:flex-row gap-x-3 gap-y-3 ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  Gender *
                </label>
                <select
                  name=""
                  className={`w-full py-2 px-4  rounded-lg focus:outline text-base font-normal ${
                    errors.gender ? "border-1 dark:border-[#EC5E5E]" : ""
                  }  ${
                    theme === "dark"
                      ? "bg-[#F7F7F7] border-1 border-gray-400 focus:outline focus:border-gray-400 focus:outline-gray-400 focus:outline-shadow-md"
                      : " bg-[#151515] focus:outline-none"
                  }`}
                  {...register("gender")}
                >
                  <option value="" selected disabled>
                    Select
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <span className="text-xs mt-[-3px] italic font-medium text-[#EC5E5E]">
                    {errors.gender?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  Password *
                </label>
                <input
                  type="password"
                  className={`w-full  py-2 px-4 rounded-lg focus:outline text-base font-medium ${
                    errors.password ? "border-1 dark:border-[#EC5E5E]" : ""
                  }  ${
                    theme === "dark"
                      ? "bg-[#F7F7F7] border-1 border-gray-400 focus:border-gray-400 focus:outline-gray-400 focus:outline-shadow-md"
                      : " bg-[#151515] focus:outline-none"
                  }`}
                  {...register("password")}
                />
                <span className="text-xs mt-[-3px] font-inter font-medium text-[#EC5E5E]">
                  {errors.password?.message}
                </span>
              </div>
            </div>
            <div className="flex mt-2 flex-col gap-1 w-full sm:w-1/2">
              <label htmlFor="" className="text-sm font-medium">
                Upload Your CV *
              </label>
              <input
                type="file"
                name=""
                id=""
                className="file:mr-4 file:rounded-full file:border-0 file:bg-green-600 file:px-4 file:py-2 file:text-sm  file:font-medium file:text-white file:cursor-pointer  ..."
                {...register("file")}
              />
              {errors.file && (
                <span className="text-xs mt-[-3px] italic font-medium text-[#EC5E5E]">
                  {errors.file?.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-6 w-full py-3 text-sm rounded-xl text-white font-medium ${
              theme === "dark" ? "bg-green-600 " : "bg-neutral-700 "
            } `}
          >
            Submit
          </button>
        </form>
        <div
          onClick={toggleTheme}
          className={`fixed flex gap-2 rounded-full p-2 transition-all duration-500  bottom-3 right-5   ${
            theme === "light" ? " bg-white" : " bg-black"
          }`}
        >
          <img
            src={theme === "light" ? darkmode : lightmode}
            alt=""
            className="w-5 h-5"
          />
        </div>
      </section>
    </>
  );
}

export default App;
