import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import swal from "sweetalert";
import toast from "react-hot-toast";

const Register = () => {
  let { createUser, logOut, update } = useContext(authContext);
  let navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  let handleRegister = (e) => {
    setLoader(true);
    e.preventDefault();
    let name = e.target.name.value;
    let photo = e.target.image.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:;<>,.?/~`])(.{6,})$/;
    const validPassword = regex.test(password);

    if (!validPassword) {
      swal(
        "Oops",
        "Password must be at least 6 characters long, containing at least one upper case and special character",
        "error"
      );
      setLoader(false);
      return;
    }

    createUser(email, password)
      .then(() => {
        update(name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        logOut()
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        toast.success("Registration Successfull!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        toast.error("Something went wrong!!");
      });

    e.target.name.value = "";
    e.target.image.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div>
      <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/k0zdHbT/pexels-stephan-seeber-1261728.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>

        <div className="relative max-w-lg px-4 mx-auto sm:px-0">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Create a free account
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already joined?{" "}
                  <Link
                    to="/login"
                    title=""
                    className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                  >
                    Sign in now
                  </Link>
                </p>
              </div>

              <form onSubmit={handleRegister} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      First & Last name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Your Photo URL{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="image"
                        placeholder="Enter your Photo URL"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter a valid email"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      {loader ? (
                        <span className="loading loading-bars loading-md"></span>
                      ) : (
                        " Sign up"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
