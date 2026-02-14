const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex items-center justify-between py-5 h-14 px-4">
        <div className="logo font-bold text-2xl">
            <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-green-500">OP/&gt;</span>
            
            </div>
        <button className="text-white bg-green-700 my-5 rounded-full flex justify-between items-center">
          <img className="invert w-10 p-1" src="/icons/github.svg" alt="" />
          <span className="font-bold px-4">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
