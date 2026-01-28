export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
          Ready to kickstart your project?
        </p>

        <a
          href="mailto:info@bvdevs.com"
          className="text-4xl md:text-6xl font-bold text-zinc-300 hover:text-white transition-all duration-300 ease-in-out"
        >
          info@bvdevs.com
        </a>
        <div className="w-full h-px bg-zinc-900 my-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-[10px] text-zinc-500 gap-6 uppercase tracking-widest">
          <p>&copy; 2026 BVDevs. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <span>IČO: 12345678</span>
            <a
              href="#"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
