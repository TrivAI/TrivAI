import Link from 'next/link'
import Starfield from './StarField';
export default function Nav() {

    return(
        <nav className='mb-2 flex flex-col items-center justify-center py-4 lg:flex-row lg:flex lg:items-center lg:flex-wrap lg:justify-between lg:px-4'>
          {/* <Starfield style="absolute pointer-events-none"  />  */}
          <Link className="coolText text-3xl mb-2" href="/"><b>Welcome to TrivAI</b></Link>
          <div className='grid grid-cols-5 gap-2 mb-2 lg:mb-0'>
            <Link className="text-black bg-[#f87171] p-2 text-center" href="/admin"><b>Admin</b></Link>
            <Link className="text-black bg-[#DD7DFF] p-2 text-center" href="/user"><b>User Results</b></Link>
            <Link className="text-black bg-[#39DBFF] p-2 text-center" href="/quiz"><b>Quiz Page</b></Link>
            <Link className="text-black bg-[#88FF8A] p-2 text-center" href="/about"><b>About Page</b></Link>
            <Link className="text-black bg-[#f4b709] p-2 text-center" href="/settings"><b>Settings Page</b></Link>
          </div>
        </nav>
    );
}