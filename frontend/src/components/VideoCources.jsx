function VideoCourses() {
    return (
      <div className="min-h-screen w-screen bg-black py-10 top-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-10  text-white">
            Video Courses
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Lecture 1 */}
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold  text-white mb-4 text-center">
                Lecture-1
              </h2>
              <div className="w-full h-52 flex justify-center items-center">
                <video
                  src="./src/assets/Section 1.mp4"
                  className="w-full h-full object-cover rounded-lg shadow-lg border-red-400"
                   
                  controls
                />
              </div>
            </div>
  
            {/* Lecture 2 */}
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold  text-white mb-4 text-center">
                Lecture-2
              </h2>
              <div className="w-full h-52 flex justify-center items-center">
                <video
                  src="./src/assets/Section 2.mp4"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                   
                  controls
                />
              </div>
            </div>
  
            {/* Lecture 3 */}
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold  text-white mb-4 text-center">
                Lecture-3
              </h2>
              <div className="w-full h-52 flex justify-center items-center">
                <video
                  src="./src/assets/Section 3.mp4"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                   
                  controls
                />
              </div>
            </div>
  
            {/* Lecture 4 */}
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold  text-white mb-4 text-center">
                Lecture-4
              </h2>
              <div className="w-full h-52 flex justify-center items-center">
                <video
                  src="./src/assets/Section 4.mp4"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                   
                  controls
                />
              </div>
            </div>
  
            {/* Lecture 5 */}
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold  text-white mb-4 text-center">
                Lecture-5
              </h2>
              <div className="w-full h-52 flex justify-center items-center">
                <video
                  src="./src/assets/Section 5.mp4"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                   
                  controls
                />
              </div>
            </div>
          </div>
          <p className="mt-10 text-center text-gray-600">
            This is the Video Courses page.
          </p>
        </div>
      </div>
    );
  }
  
  export default VideoCourses;
  