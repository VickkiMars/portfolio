import '@fontsource/inconsolata';
import '@fontsource/inconsolata/700.css';

export default function Landing() {
  return (
    <div>
      {/* Top Section */}
      <div className="font-inconsolata max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#f9f5ef]">
        <div className="flex justify-between items-center">
          <div className='text-[#6b4c3b] font-bold text-2xl'>
            神
          </div>
          <nav className='md:flex space-x-6 items-center '>
            <a className='hover:underline hover:text-red-500'>Home</a>
            <a className='hover:underline hover:text-red-500'>Projects</a>
            <a className='hover:underline hover:text-red-500'>Blog</a>
            <a className='hover:underline hover:text-red-500'>Contact</a>
          </nav>
        </div>
        <div className='mt-20'>
          <h1 className='text-7xl font-bold text-[#6b4c3b] mb-4'>victor martin</h1>
          <p className='text-sm text-[#b0a79d] mb-8'>software engineer • ml/ai •  </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className='font-inconsolata flex flex-col md:flex-row mt-12 px-4 sm:px-6 lg:px-8 items-start justify-center gap-6 max-w-4xl mx-auto'>
        
        {/* Projects Card */}
        <div className='flex-2'>
          <div className='bg-[#f9f5ef] p-6 rounded-lg shadow-md w-full'>
            <h2 className='text-2xl font-bold text-[#6b4c3b] mb-4'>Projects</h2>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="pb-2 pr-6 text-[#6b4c3b] font-medium"></th>
                    <th className="pb-2 text-center">
                      {/* Jigsaw SVG for Still Building */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                      </svg>
                    </th>
                    <th className="pb-2 text-center">
                      {/* Globe SVG for Hosted */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#6b4c3b]">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-6"><a className='hover:text-red-500' href='https://inquisitor.onrender.com'>inquisitor</a></td>
                    <td className="text-center text-2xl">✓</td>
                    <td className="text-center text-2xl">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-6"><a className='hover:text-red-500' href='https://github.com/VickkiMars/clarify'>clarify</a></td>
                    <td className="text-center text-2xl">✓</td>
                    <td className="text-center text-2xl">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-6"><a className='hover:text-red-500' href='https://github.com/VickkiMars/licin'>lisin</a></td>
                    <td className="text-center text-2xl">✓</td>
                    <td className="text-center text-2xl">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-6"><a className='hover:text-red-500' href='https://mots-one.vercel.app'>mots</a></td>
                    <td className="text-center text-2xl">-</td>
                    <td className="text-center text-2xl">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="flex justify-start gap-4 mt-4 text-xs text-[#b0a79d]">
              <div className="flex items-center gap-1">
                {/* Jigsaw icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
                <span>Still Building</span>
              </div>
              <div className="flex items-center gap-1">
                {/* Globe icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span>Hosted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card */}
        <div className='flex-1'>
          <div className='bg-[#f9f5ef] p-6 rounded-lg shadow-md hover:shadow-xl transition w-full'>
            <h2 className='text-2xl font-bold text-[#6b4c3b] mb-4'>Blog</h2>
            <p className='text-sm text-[#b0a79d]'>soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
