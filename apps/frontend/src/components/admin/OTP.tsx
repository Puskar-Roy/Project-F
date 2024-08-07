import log_img from'../../assets/otp.png'


export default function OTP() {
   
   
   
   
    return(
        <div className="w-full h-screen flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[350px]sm:max-w-[800px] rounded-2xl">
          <div className="w-full h-[350px] hidden md:block ">
            <img className="w-full h-[100%]" src={log_img} alt="/" />
          </div>
          <div className="p-4 flex flex-col justify-around">
              <h2 className="text-4xl font-medium poppins-medium text-center mb-4">
                Enter Your <span className="text-rose-400">OTP</span>
              </h2>

              <div className="flex flex-col space-y-12">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-[27rem]">
                    <div className="w-12 h-14">
                      <input
                        // ref={(el) => {
                        //   if (el && refs.current[index] !== el) {
                        //     refs.current[index] = el;
                        //   }
                        // }}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-rose-700"
                        type="text"
                        maxLength={1}
                      />
                    </div>
                </div>
              </div>
              <div className="mt-7">
                <button
                  className="ml-24 flex flex-row items-center justify-center text-center w-[200px] border rounded-3xl hover:bg-cyan-400 outline-none py-4 bg-cyan-500 border-none text-white shadow-sm text-base font-semibold poppins-extrabold"
                >
               <p>Verify Account</p>
                </button>
              </div>
          </div>
        </div>
      </div>
    );


}
