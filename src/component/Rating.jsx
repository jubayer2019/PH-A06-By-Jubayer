const Rating = () => {
  return (

    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] min-h-62.5 md:h-64 w-full flex items-center py-10 md:py-0">
      
    
      <div className="w-[90%] lg:w-[80%] mx-auto text-white grid grid-cols-1 md:grid-cols-3 items-center h-full gap-8 md:gap-0">
        
    
        <div className="text-center md:border-r md:border-white/20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
          <p className="text-white/80 text-lg uppercase tracking-wider">Active Users</p>
        </div>

    
        <div className="text-center md:border-r md:border-white/20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
          <p className="text-white/80 text-lg uppercase tracking-wider">Premium Tools</p>
        </div>

    
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-2">
            4.9 <span className="text-yellow-400 text-2xl"></span>
          </h2>
          <p className="text-white/80 text-lg uppercase tracking-wider">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;