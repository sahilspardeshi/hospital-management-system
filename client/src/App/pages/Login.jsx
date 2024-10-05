import Logimg from '../assets/images/Logimg.png'
import sailogo from '../assets/images/sailogo.png'
import pass from '../assets/images/pass.png'

export default function Login() {
    return (
        <> 
         <div className="min-h-screen  bg-gradient-to-b from-purple-200 via-orange-100 to-gray-200 flex justify-center items-center">

      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full  max-w-full max-h-full overflow-y-auto flex flex-col justify-start items-center mx-5 my-5 px-5 py-5">
            <div className="lg:shadow-xl  lg:border-gray-50 h-5/6 w-4/5 m-auto my-20 bg-white flex justify-evenly rounded-xl">
                <div className=' h-[80vh] m-auto hidden lg:flex '>
                    <img src={Logimg} className='h-[65vh]  my-12' />
                </div>
                <div className='border border-blue-200 h-[65vh] sm:h-[550px] lg:w-[450px] w-[650px] p-2 m-auto  shadow-lg shadow-blue-300/50 rounded-lg'>
                    <div><img src={sailogo} className='h-40 block m-auto ' />
                        <h1 className='text-3xl font-semibold text-center mb-6'>Login</h1>
                    </div>
                    <form className='m-auto  w-96'>

                        <label className="block text-zinc-500 dark:text-zinc-500 mb-2">
                            User Id
                        </label>
                        <input
                            type="text"
                            placeholder='User id'
                            className="w-[380px] p-2 border-zinc-300 text-black rounded-lg mb-4  border-[1px] dark:bg-input  transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <label className="block text-zinc-500 dark:text-zinc-500 mb-2">
                            Password
                        </label>

                        <div className='flex  m-auto mb-4 border-2 rounded-lg h-[6vh] items-center  dark:bg-input  transition duration-150 hover:border-blue-500 '>
                            <input
                                type="password"
                                placeholder='@#*%'
                                className="relative w-[380px] h-[4vh] p-2 outline-0 text-black border-r-2   "
                                required
                            /><img src={pass} className='h-5 block right-64 m-3' />
                        </div>

                        <div className='flex justify-between mb-3'>
                            <div className='flex '> <input type='checkbox' /><p className='text-sm ml-3 text-gray-500'> Remember me</p></div>
                            <div><a href='#'>Forgot Password?</a></div>
                        </div>
                        <button className='text-center border w-96 py-2 my-3 rounded-lg bg-green-500 font-bold text-white'>Login</button>
                    </form>
                </div>

            </div>
            </div>
            </div>
        </>
    )
}
