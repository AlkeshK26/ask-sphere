import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    
    <>
    <div className='p-[40px] pt-[90px]  mt-[20px] size-full'>
      {/**slides */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]  text-white italic rounded-2xl" >
            <div className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('../../carousel1.jpg')" }}></div>
            <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-blue-800 to-transparent rounded-2xl"></div>
              <div className="relative z-10  p-6 md:p-18 rounded-lg text-left ">
                <h1 className="text-6xl md:text-6xl font-bold bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">Ask. <br></br>Solve.<br/> Grow Together.</h1>
                <p className="mt-4 text-lg md:text-xl text-black md:text-white">Join a community of learners and problem solvers.</p>
                <a href="/queries" className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg">
                  Explore Queries
                </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]  text-white italic rounded-2xl" >
          <div className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('../../carousel2.jpg')" }}></div>
          <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-blue-800 to-transparent rounded-2xl"></div>
            <div className="relative z-10 p-6 md:p-18 rounded-lg text-left">
              <h1 className="text-6xl md:text-6xl font-bold bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">Got Questions?<br/> Get Answers!</h1>
              <p className="mt-4 text-lg md:text-xl text-black md:text-white">Collaborate and find solutions to coding & academic queries.</p>
              <a href="/post-query" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">
                Ask a Query
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]  text-white italic rounded-2xl" >
          <div className="absolute inset-0 bg-contain bg-center rounded-2xl" style={{ backgroundImage: "url('../../carousel3.jpg')" }}></div>
          <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-blue-800 to-transparent rounded-2xl"></div>
            <div className="relative z-10 p-6 md:p-18 rounded-lg text-left">
              <h1 className="text-6xl md:text-6xl font-bold bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">Help Others,<br/> Gain Knowledge!</h1>
              <p className="mt-4 text-lg md:text-xl text-black md:text-white">Share your expertise and make learning easier for others.</p>
              <a href="/solve-query" className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg">
                Start Solving
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/**Headline Section */}
      <div class="flex mt-8 pt-8 pb-8">
        <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          <div class="w-full">
            <img
              src="../../headline.jpg"
              alt="headline"
              class="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div class="h-full flex flex-col justify-center px-6 md:px-12 md:text-left ">
            <h1 class="text-3xl md:text-7xl font-[1000] bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">
              Your One-Stop Hub for Academic Queries
            </h1>
            <p class="text-gray-100 text-lg mt-4">
              Post your doubts, get solutions, and share knowledge with a growing
              community. Whether it's programming, theoretical concepts, or academic
              related - Solve it Here!
            </p>
          </div>
        </div>
      </div>

      
      {/**Benefits Section */}
      <h1 className="text-center text-2xl font-extrabold mt-8 text-white">
        Why AskSphere?
      </h1>
      <div className="flex flex-col md:flex-row text-white text-justify max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <div className="grid grid-cols-1 grid-rows-4 gap-4">
            
            {/* Community-Driven Learning */}
            <div className="p-6 border border-red-700 rounded md:rounded-l-2xl flex flex-col justify-between">
              <h2 className="text-xl font-semibold bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">Community-Driven Learning</h2>
              <h4 className="text-lg text-white">
                Engage with a supportive knowledge-sharing network
              </h4>
              <p className="text-gray-100">
                Learn from peers, discuss doubts, and contribute your expertise in an interactive environment.
              </p>
            </div>

            {/* Fast & Accurate Answers */}
            <div className="p-6 border border-red-700 rounded md:rounded-l-2xl flex flex-col justify-between">
              <h2 className="text-xl font-semibold bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">Fast & Accurate Answers</h2>
              <h4 className="text-lg text-white">Get expert solutions in no time</h4>
              <p className="text-gray-100">
                Post your query and receive precise, well-explained answers from experienced users and professionals.
              </p>
            </div>

            {/* Multimedia Support */}
            <div className="p-6 border border-red-700 rounded md:rounded-l-2xl flex flex-col justify-between">
              <h2 className="text-xl font-semibold bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">Multimedia Support</h2>
              <h4 className="text-lg text-white">Ask and answer with text, images, or videos</h4>
              <p className="text-gray-100">
                Enhance your learning experience by uploading screenshots, code snippets, or video explanations.
              </p>
            </div>

            {/* Stay Updated */}
            <div className="p-6 border border-red-700 rounded md:rounded-l-2xl flex flex-col justify-between">
              <h2 className="text-xl font-semibold bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">Stay Updated</h2>
              <h4 className="text-lg text-white">
                Discover trending queries and latest discussions
              </h4>
              <p className="text-gray-100">
                Stay ahead with the latest academic and coding trends, common doubts, and expert solutions.
              </p>
            </div>

          </div>

          {/* Right Side - Image */}
          <div className="w-full md:h-full h-64">
            <img
              src="../../benefits.jpg"
              alt="Benefits"
              className="w-full h-full object-cover rounded md:rounded-r-2xl md:shadow-lg "
            />
          </div>
        </div>
      </div>



      {/**navigation cards */}

      
      
    </div>
    </>
    
    
    
    
  )
}

export default Home;