import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16 text-center ">
<div className="max-w-7xl mx-auto">
    
      <h1 className="md:text-6xl font-bold sm:text-4xl">KeenKeeper</h1>


      <p className="mt-3 lg:text-md text-gray-200  mx-auto font-semibold sm:text-xl">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>


      <div className="mt-6">
        <p className="mb-3 text-sm ">Social Links</p>

        <div className="flex justify-center gap-4 ">
          <a
            href="#"
            target="_blank"
            className="bg-white text-black p-3 rounded-full hover:scale-105 transition"
          >
            <FaYoutube />
          </a>

          <a
            href="#"
            target="_blank"
            className="bg-white text-black p-3 rounded-full hover:scale-105 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            target="_blank"
            className="bg-white text-black p-3 rounded-full hover:scale-105 transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>


      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 px-6 lg:border-t lg:border-[#1A8862] md:border-t md:border-[#1A8862] p-5">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="md:flex gap-6 mt-3 md:mt-3 sm:grid sm:grid-cols-1">
          <a href="#" target="_blank" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" target="_blank" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" target="_blank" className="hover:underline">
            Cookies
          </a>
        </div>
      </div>
</div>
    </footer>
  );
};

export default Footer;