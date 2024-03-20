import { AiOutlineInfoCircle } from 'react-icons/ai';
import { promises as fs } from 'fs';
import Navbar from "./components/Navbar";import { BsFillPlayFill } from 'react-icons/bs';
 "./components/Navbar"


async function load(){
  return null
}
export default async function page(){
  const file = await fs.readFile(process.cwd()+'/movie.json','utf8')

  const data = JSON.parse(file)
  const numbers = [1, 2, 3, 4, 5]



  console.log(data[1]);
  return ( 
    <>
      <Navbar/>
      <div className='relative h-[56.25vw]'>
        <video 
          className='
          w-full
          h-[56.25vw]
          object-cover
          brightness-[60%]
          '

          autoPlay
          muted
          loop
          poster={data[1]?.thumbnailUrl}
          src={data[1]?.videoUrl}>

        </video>
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          <p className='text-white 
          text-1xl 
          md:text-5xl 
          h-full 
          w-[50%] 
          lg:text-6xl 
          font-bold 
          drop-shadow-xl'>
            {data[1]?.title}
          </p>
          <p className='
            text-white
            text-[8px]
            md:text-lg
            mt-3
            md:mt-8
            w-[90%]
            md:w-[80%]
            lg:w-[50%]
            drop-shadow-xl'>
              {data[1]?.description}
          </p>
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">

          <button className="
            bg-white
            text-black
            rounded-md
            py-1 md:py-2
            px-2 md:px-4
            w-auto
            text-xs lg:text-lg
            font-semibold
            flex 
            flex-row
            items-center
            hover:bg-white/20
            transition">
              <BsFillPlayFill className='mr-1'/>
              play
            </button>
            <button className="
            bg-white/30
            text-white
            rounded-md
            py-1 md:py-2
            px-2 md:px-4
            w-auto
            text-xs lg:text-lg
            font-semibold
            flex 
            flex-row
            items-center
            hover:bg-white/20
            transition">
              <AiOutlineInfoCircle className='mr-1'/>
              More info
            </button>
           
          </div>

        </div>
        <div className='pb-40'>
          <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
              <p className="text-white text-md md:text-xl lg:text-2xl font-semibol">
                Trending now
              </p>
              <div className="grid grid-cols-4 gap-2">
                {
                  data.map((d) => (
          
                
                <div className="group bg-zinc-900 col-span relative h-[12vw]">
                  
                <img className="
                  cursor-pointer
                  object-cover
                  transition
                  duration
                  shadow-xl
                  rounded-md
                  group-hover:opacity-90
                  sm:group-hover:opacity-0
                  delay-300
                  w-full
                  h-[12vw]
                  
                "src={d.thumbnailUrl} alt="thumbnail" />
                <div className='
                  opacity-9
                  absolute
                  top-0
                  transition
                  duration-200
                  z-10
                  invisible
                  sm:visible
                  delay-300
                  w-full
                  scale-0
                  group-hover:scale-110
                  group-hover:-translate-y-[6vw]
                  group-hover:translate-x-[2vw]
                  group-hover:opacity-100
                '>
                  <img src={d.thumbnailUrl} alt="" className="
                  cursor-pointer
                  object-cover
                  transition
                  duration
                  shadow-xl
                  rounded-t-md
                  w-full
                  h-[12vw]" />
                  <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className='flex flex-row items-center gap-3'>
                      <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center hover:bg-neutral-300 " >
                        <BsFillPlayFill size={30}/>
                      </div>
                      
                      <p className='text-green-400 font-semibold mt-4'>
                        New <span className='text-white'>2023</span>
                      </p>

                      <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className="text-white text-[10px] lg:text-sm">{d.duration}</p>
                      </div>

                      <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className="text-white text-[10px] lg:text-sm">{d.genre}</p>
                      </div>

                    </div>
                  </div>
                </div>
                </div>
                
                    ))
                  }
              </div>


            </div>
          </div>
        </div>

      </div>



    </>
  )



}
