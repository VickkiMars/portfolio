import '@fontsource/caveat';
import '@fontsource/caveat/700.css';
import AppsIcon from '@mui/icons-material/Apps';
import CallIcon from '@mui/icons-material/Call';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import bg1 from '../assets/a-dinner-table-at-night-1884-paint-john-singer-sargent.jpg';

export default function Landing() {
  const weight = "{";
  const weight_ = "}";
  return (
    <div className="font-caveat">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-none shadow">
        <div className="text-2xl font-bold text-gray-800">
          Victor Martin
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button className="md:hidden text-gray-700">
          ☰
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left side: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I’m Victor Martin
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            I’m a developer passionate about building...and buildings...and <span className='text-blue-700'>more</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="flex items-center justify-center gap-2 bg-[#B09F21] text-lg text-white px-5 py-2 rounded-tl-md rounded-bl-full shadow hover:bg-[#D6C229] transition"
            >
              <AppsIcon className="text-base" /> 
              Projects
            </button>

            <button
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#B04A39] text-lg text-white px-5 py-2 shadow hover:bg-[#9E4333] transition"
            >
              <CallIcon className="text-base" /> 
              Contact
            </button>

            <button
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#3DA1A3] text-lg text-white px-5 py-2 rounded-tr-lg rounded-br-full shadow hover:bg-[#45B8BA] transition"
            >
              <DriveFileRenameOutlineIcon className="text-base" /> 
              Blog
            </button>
          </div>

        </div>

        {/* Right side: Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Background image (only on md+) */}
          <img
            src="face1.png"
            alt="Victor Martin background"
            className="hidden md:block absolute inset-0 m-auto w-96 rounded-full filter grayscale opacity-20 -z-10 scale-[2.2]"
          />

          {/* Foreground image */}
          <img
            src="face1.png"
            alt="Victor Martin"
            className="w-64 md:w-80 rounded-full relative z-10"
          />
        </div>

      </section>

      <section className='p-4 w-100 rounded-md hidden'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between items-center bg-[#1B1E1F] px-2 rounded-t-xl '>
            <div className='flex flex-row space-x-2'>
              <div className='w-4 h-4 bg-red-500 rounded-full'></div>
              <div className='w-4 h-4 bg-yellow-500 rounded-full'></div>
              <div className='w-4 h-4 bg-green-500 rounded-full'></div>
            </div>
            <div className='font-bold text-lg text-white'>
              Card.json
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div>

          <div className='flex flex-row justify-between bg-[#171A1D] p-2'>
            <div className='flex flex-row space-x-2 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>
            </div>
            <div className='text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
          </div>

          <div className='flex flex-col bg-black text-white p-2 rounded-b-xl'>
            <div className='flex space-x-4'>
              <span>1</span>
              <p className='font-default'>{weight}</p>
            </div>
            <div className='flex space-x-8'>
              <span>2</span>
              <p className='font-default text-[#FFF700]'><span className='text-[#FF7B00]'>"name"</span> : "@_kamikage",</p>
            </div>
            <div className='flex space-x-8'>
              <span>3</span>
              <p className='font-default text-[#FFF700]'><span className='text-[#FF7B00]'>"title"</span> : "developer. creator.",</p>
            </div>
            <div className='flex space-x-8'>
              <span>4</span>
              <p className='font-default text-[#FFF700]'><span className='text-[#FF7B00]'>"email"</span> : "victorumoreng@gmail.com",</p>
            </div>
            <div className='flex space-x-4'>
              <span>5</span>
              <p className='font-default'>{weight_}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 with Local Image */}
          <div className="bg-[#ED451A] rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={bg1} 
                alt="Colorful gradient"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Beautiful Colors</h3>
              <p className="text-white mb-4">Experience the vibrant spectrum of colors in this stunning gradient display.</p>
              <button className="bg-[#FF834D] hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full">
                View More
              </button>
            </div>
          </div>

          {/* Card 2 with Local Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={bg1} 
                alt="Nature scene"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Natural Beauty</h3>
              <p className="text-gray-600 mb-4">Immerse yourself in the serene beauty of natural landscapes and environments.</p>
              <button className="bg-[#DD9F4A] hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full">
                Explore
              </button>
            </div>
          </div>

          {/* Card 3 with Local Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={bg1} 
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mountain Adventure</h3>
              <p className="text-gray-600 mb-4">Explore the breathtaking beauty of mountain ranges and natural landscapes.</p>
              <button className="bg-[#340D0D] hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full">
                Hike
              </button>
            </div>
          </div>

          {/* Card 4 with Local Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={bg1} 
                alt="City skyline"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Urban Skyline</h3>
              <p className="text-gray-600 mb-4">Discover the modern architecture and vibrant life of city skylines at dusk.</p>
              <button className="bg-[#E4BC5E] hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
