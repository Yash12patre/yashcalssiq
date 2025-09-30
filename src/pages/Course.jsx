import { assets } from "../assets/assets";
import { Footer } from "../components/Footer";

export const Course = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
        <div className="my-16 sm:my-20 bg-[#F5F5F5]">
          <div>
            <div className="flex gap-x-2 items-center">
              <h1 className="font-semibold text-lg text-[#3E3E3E]">
                All Courses
              </h1>
              <img src={assets.side_arrow} alt="" className="h-3.5" />
            </div>
            <div className="mt-8 sm:mt-10 h-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-9 w-full">
              <div className="bg-[#ECEDEF] w-full rounded-md p-3 sm:p-4">
                <div className="w-full h-40 sm:h-44 bg-white/20 rounded"></div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md p-3 sm:p-4">
                <div className="w-full h-40 sm:h-44 bg-white/20 rounded"></div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md p-3 sm:p-4">
                <div className="w-full h-40 sm:h-44 bg-white/20 rounded"></div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md p-3 sm:p-4">
                <div className="w-full h-40 sm:h-44 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
