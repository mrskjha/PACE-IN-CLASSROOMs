

const About = () => {
    return (
      <div>
          <div className="w-full h-screen">
      
  
  
   
      <div className=" text-white min-h-screen flex flex-col items-center justify-center">
        <div className="relative max-w-5xl mx-auto p-8">
        
          <div className="absolute top-0 left-[-30%] w-32 h-32 rounded-full border-4 border-purple-900 bg-transparent" ><img src="\src\assets\home1.png"></img></div>
              
          
          <div className="absolute bottom-0 right-[-30%] w-32 h-32 rounded-full border-4 border-purple-900 bg-transparent" ><img src="\src\assets\home1.png"></img></div>
          
          
          <div className="flex flex-col md:flex-row items-center">
           
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="rounded-full overflow-hidden border-4 border-black ">
                <img
                  src="\src\assets\satellite.png"
                  alt="Modern Home"
                  className="object-cover h-72 w-72"
                />
              </div>
            </div>
            
           
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pace Satellite</h2>
              <p className="mb-4">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </p>
              <p className="mb-4">
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages.
              </p>
              
            </div>
          </div>
        </div>
      </div>
 
  
          </div>
      </div>
    )
  }
  
  export default About