import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Footer } from "../components/Footer";
export const Home = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
          <div className="flex items-center justify-around min-h-[80vh] font-poppins">
            <div className="w-1/2">
              <h1 className="font-light text-6xl leading-tight">
                Empower Your Learning Journey with{" "}
                <span className="font-semibold ml-3 relative">
                  ClassIQ{" "}
                  <img
                    className="absolute right-0 bottom-0"
                    src={assets.main_line}
                  />
                </span>
              </h1>
              <p className="text-[#595959] text-sm py-6 pr-3">
                Unlock a world of knowledge and skills with our innovative
                online courses, expert instructors, and interactive learning
                tools.and skills with our innovative online courses, expert
                instructors, and interactive learning tools. Explore Courses
              </p>
              <div  onClick={() => navigate("/course")} className=" font-semibold text-[#3E3E3E] text-sm inline-block px-3 rounded-lg bg-[#C2F578] hover:bg-[#a5d064] transition-colors ease-linear py-2.5 cursor-pointer">
                Explore Courses
              </div>
            </div>
            <div className="w-1/2">
              <div className="h-full w-full relative">
                <img
                  className="relative z-10 w-full object-cover"
                  src={assets.main_img}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
          <div className=" pt-16  flex-col font-medium text-[#565656] flex justify-center items-center">
            <p>Trusted by 5,000+ Companies Worldwide</p>
            <div className="flex my-12 items-center justify-evenly h-8 w-full">
              <img src={assets.google} className="h-full object-cover" />
              <img src={assets.netflix} className="h-full object-cover" />
              <img src={assets.airbnb} className="h-full object-cover" />
              <img src={assets.amazon} className="h-full object-cover" />
              <img src={assets.facebook} className="h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
          <div className="flex flex-col text-[#373636] items-center justify-center pt-20">
            <p>
              Certified Cources for{" "}
              <span className="font-bold">Professionals</span>
            </p>
            <div className="my-12 flex justify-between items-center w-full gap-x-14">
              <div className="border bg-[#ECEDEF] w-72 p-6 flex items-center flex-col rounded-lg">
                <div className="w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center">
                  <img src={assets.courselogo} alt="" />
                </div>
                <h2 className="my-4 font-semibold text-[#373636]">
                  Web Development
                </h2>
                <div className="mt-3 bg-[#C2F578] rounded-lg px-4 text-xs font-semibold text-[#373636] shadow py-2.5 cursor-pointer">
                  View Course
                </div>
              </div>
              <div className="border bg-[#ECEDEF] w-72 p-6 flex items-center flex-col rounded-lg">
                <div className="w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center">
                  <img src={assets.courselogo} alt="" />
                </div>
                <h2 className="my-4 font-semibold text-[#373636]">
                  Data Science
                </h2>
                <div className="mt-3 bg-[#C2F578] rounded-lg px-4 text-xs font-semibold text-[#373636] shadow py-2.5 cursor-pointer">
                  View Course
                </div>
              </div>
              <div className="border bg-[#ECEDEF] w-72 p-6 flex items-center flex-col rounded-lg">
                <div className="w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center">
                  <img src={assets.courselogo} alt="" />
                </div>
                <h2 className="my-4 font-semibold text-[#373636]">
                  App Development
                </h2>
                <div className="mt-3 bg-[#C2F578] rounded-lg px-4 text-xs font-semibold text-[#373636] shadow py-2.5 cursor-pointer">
                  View Course
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
          <div className="flex pt-20 items-center justify-between h-[70vh]  gap-x-14">
            <div className="md:w-3/7 h-full overflow-hidden bg-[#ECEDEF] w-full flex justify-center items-end rounded-2xl relative">
              <img src={assets.second_img} />
            </div>
            <div className="md:w-4/7 w-full">
              <h1 className="text-3xl font-bold text-[#373636]">
                All-In-One Solution
              </h1>
              <div className="space-y-5">
                <div className="flex gap-x-2 mt-4 items-center">
                  <div className="w-14 h-14 shadow-md rounded-full bg-[#ECEDEF] flex justify-center items-center">
                    <img src={assets.flexible} alt="" />
                  </div>
                  <h2 className="text-[#545454] text-xl font-medium">
                    Flexible Learning
                  </h2>
                </div>
                <div className="flex gap-x-2 mt-4 items-center">
                  <div className="w-14 h-14 shadow-md rounded-full bg-[#ECEDEF] flex justify-center items-center">
                    <img src={assets.expert} alt="" />
                  </div>
                  <h2 className="text-[#545454] text-xl font-medium">
                    Expert Instructor
                  </h2>
                </div>
                <div className="flex gap-x-2 mt-4 items-center">
                  <div className="w-14 h-14 shadow-md rounded-full bg-[#ECEDEF] flex justify-center items-center">
                    <img src={assets.intractive} alt="" />
                  </div>
                  <h2 className="text-[#545454] text-xl font-medium">
                    Intractive Community
                  </h2>
                </div>
              </div>
              <div className="mt-8 font-semibold text-[#3E3E3E] flex items-center gap-x-2 bg-[#C2F578] px-5 rounded-lg w-max hover:bg-[#a5d064] transition-colors ease-linear py-2.5 cursor-pointer">
                <img src={assets.side_arrow} alt="" />
                Join Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
