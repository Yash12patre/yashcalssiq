import { assets } from "../assets/assets";
import { Footer } from "../components/Footer";

export const Course = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
        <div className="my-20 bg-[#F5F5F5]">
          <div>
            <div className="flex gap-x-2 items-center">
              <h1 className="font-semibold text-lg text-[#3E3E3E]">
                All Courses
              </h1>
              <img src={assets.side_arrow} alt="" className="h-3.5" />
            </div>
            <div className="mt-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 w-full">
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                
                <div className="w-full">
                </div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                
                <div className="w-full">
                 
                 
                  
                </div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                <div className="w-full h-44">
                  
                </div>
                
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                <div className="w-full h-44">
                  
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
