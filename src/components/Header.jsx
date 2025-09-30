import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
        <div className="h-20 flex items-center justify-between">
          <div className="flex gap-2 items-center cursor-pointer">
            <img  onClick={() => navigate("/")} src={assets.classiq} alt="" className="h-10 hidden sm:block"  />
            
            <p
              onClick={() => navigate("/course")}
              className="text-[#3E3E3E] ml-9 text-lg hover:text-black transition-colors ease-linear cursor-pointer"
            >
              Courses
            </p>
          </div>
        </div>
        <div className="md:flex gap-x-4 hidden">
          <button
            onClick={() => navigate("/login")}
            className="font-semibold bg-black hover:bg-[#181818] text-white rounded-lg px-5 py-2.5 cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="font-semibold bg-black hover:bg-[#181818] text-white rounded-lg px-5 py-2.5 cursor-pointer"
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};
