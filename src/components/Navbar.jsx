export const Navbar = () => {
  return (
    <div className=" flex sticky top-4 z-50 items-center justify-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">Karan.</h1> */}
      <ul className="flex backdrop-blur  rounded-3xl focus:scroll-auto">
        <li className="px-10 py-4 text-lg rounded-3xl">
          <div className="px-6 py-1 bg-[#5c5c5c40] rounded-3xl">Home</div>
        </li>
        <li className="px-10 py-4 text-lg rounded-3xl">
          <a href="#about"> About</a>
        </li>
        <li className="px-10 py-4 text-lg rounded-3xl">
          <a href="#experience"> Experience</a>
        </li>
        <li className="px-10 py-4 text-lg rounded-3xl">Work</li>
        <li className="px-10 py-4 text-lg rounded-3xl">
          <a href="#" className=" scroll-smooth">
            Contact
          </a>
        </li>
      </ul>
      {/* <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Karan.</h1>

            <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Experience</li>
            <li className='p-4 border-b border-gray-600'>Work</li>
            <li className='p-4'>Contact</li>
            </ul> 
        </div> */}
    </div>
  );
};
export default Navbar;
