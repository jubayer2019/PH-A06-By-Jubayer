import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        <div className="space-y-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-100/50">
        <div className="w-2 h-2 rounded-full bg-purple-600 ring-4 ring-purple-300/50"></div>
        <span className="text-sm font-medium text-purple-700">
            New: AI-Powered Tools Available
        </span>

        </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span className="">
              Digital Workflow
            </span>
          </h1>

          <p className="text-[18px] text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
              Explore Products
            </button>
            <button className="btn btn-outline border rounded-full text-purple-700 hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white">
             <span><i class="fa-solid fa-play"></i></span> Watch Demo
            </button>
          </div>
          
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
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