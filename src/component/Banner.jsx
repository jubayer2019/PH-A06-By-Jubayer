import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white py-16 lg:py-0">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        
        <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-100/50 w-fit">
            <div className="w-2 h-2 rounded-full bg-purple-600 ring-4 ring-purple-300/50"></div>
            <span className="text-sm font-medium text-purple-700">
                New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#101727]">
            Supercharge Your
            <br className="hidden sm:block" />
            <span className="text-[#101727]">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white px-8 h-14 hover:shadow-lg transition-all">
              Explore Products
            </button>
            <button className="btn btn-outline border-purple-200 rounded-full text-purple-700 hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:border-transparent hover:text-white px-8 h-14 transition-all">
              <span><i className="fa-solid fa-play mr-2"></i></span> Watch Demo
            </button>
          </div>
        </div>

        
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-125 lg:max-w-none">
            
            <div className="absolute -inset-4 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            <img
              className="relative h-auto max-h-87.5 md:max-h-125 lg:max-h-150 w-full object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;