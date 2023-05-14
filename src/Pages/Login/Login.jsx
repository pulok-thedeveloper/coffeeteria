import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImage from "../../assets/Menu/background.jpeg";
import Logo from "../Home/Logo/Logo";
import { useForm } from "react-hook-form";
import {FcGoogle} from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const {signInwithGoogle, login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    login(data.email, data.password)
    .then((result) => {
      const user = result.user;
      navigate(from, {replace: true});
      console.log(user);
    })
    .catch(err => console.log(err.message))
  };

  const handleGoogleSignIn = () =>{
    signInwithGoogle()
    .then(result => {
        console.log(result.user)
        navigate(from, { replace: true });
    })
    .catch(error=> console.error(error))
}

  return (
    <div
      className="min-h-screen w-full bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-[#000000a9] w-full min-h-screen grid place-items-center">
        <div className="md:w-1/4 w-1/2 grid place-items-center">
          <Logo></Logo>
          <form
            className="font-jost w-full mt-10 grid gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label className="uppercase font-medium text-sm" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type here ..."
                className="bg-[#010103] border px-5 py-2 text-sm focus:bg-[#ffffff3a] outline-none border-primary rounded w-full"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <span className="text-xs text-red-500">Email is required</span>
            )}
            <div className="flex flex-col gap-2">
              <label className="uppercase font-medium text-sm" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Type here ..."
                className="bg-[#010103] border px-5 py-2 text-sm focus:bg-[#ffffff3a] outline-none border-primary rounded w-full"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && (
              <span className="text-xs text-red-500">Password is required</span>
            )}

            <input
              className="text-sm px-3 py-2 cursor-pointer border border-primary hover:bg-[#96682D] transition bg-primary uppercase text-black"
              type="submit"
              value="login"
            />
          </form>
          <div className="divider grid justify-center mt-5">
            <p className="text-gray-500 font-jost">
              ----------- OR ------------
            </p>
          </div>
          <button onClick={handleGoogleSignIn} className="google-btn bg-[#4285F4] hover:bg-white hover:text-[#4285F4] transition border border-[#4285F4] rounded py-2 px-5 w-full mt-5 cursor-pointer text-white font-jost font-semibold flex justify-center items-center gap-3">
            <FcGoogle className="bg-white rounded text-xl"/> Sign in with Google
          </button>
          <p className="mt-5 font-jost">Need an account? <Link className="text-primary font-medium" to="/signup">Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
