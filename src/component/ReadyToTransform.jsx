const ReadyToTransform = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] sm:h-80 md:h-121.75 w-full">
        {/* <div className="w-[60%] mx-auto text-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-3 divide-white/30 items-center h-full ">
            <div className="text-center">
                <h2 className="text-4xl font-bold">50K+</h2>
                <p>Active Users</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">200+</h2>
                <p>Premium Tools</p>
            </div>
            
        </div> */}

        <div className="text-center text-white mx-w-2xl mx-auto space-y-6 items-center h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold">Ready to Transform Your Workflow?</h2>
            <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="btn rounded-full text-purple-700">Explore Products</button>
                <button className="btn btn-outline rounded-full hover:text-purple-700">View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    </div>

  )
}

export default ReadyToTransform