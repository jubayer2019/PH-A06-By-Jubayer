const ReadyToTransform = () => {
  return (
    // Replaced fixed h-121.75 with min-h and py-20 for better mobile scaling
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] min-h-100 md:min-h-125 w-full flex items-center px-4 py-20">
      
      {/* Fixed typo: changed mx-w-2xl to max-w-2xl */}
      <div className="text-center text-white max-w-3xl mx-auto space-y-8 flex flex-col items-center justify-center">
        
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          Ready to Transform <br className="hidden md:block" /> Your Workflow?
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button className="btn btn-lg rounded-full bg-white text-[#4F39F6] border-none hover:bg-slate-100 px-10 transition-transform hover:scale-105 shadow-xl">
            Explore Products
          </button>
          <button className="btn btn-lg btn-outline rounded-full border-white text-white hover:bg-white hover:text-[#4F39F6] px-10 transition-transform hover:scale-105">
            View Pricing
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium text-white/80">
          <span className="flex items-center gap-2">
            14-day free trial
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            No credit card required
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            Cancel anytime
          </span>
        </div>

      </div>
    </div>
  );
};

export default ReadyToTransform;