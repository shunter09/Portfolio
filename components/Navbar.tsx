export default function Navbar(){

    const transition =
        "rounded-2xl px-2 py-1.5 text-sm sm:px-3 sm:text-base transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:cursor-pointer focus-visible:bg-gray-100 focus-visible:outline-2 focus-visible:outline-indigo-500";

    return (
        <nav
            aria-label="Main"
            className=" fixed left-1/2 top-3 z-50 flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 items-center justify-around gap-1 rounded-2xl bg-white/80 p-2 text-black shadow-xl backdrop-blur sm:top-6 sm:gap-3"
        >
            <a href="#about" className={transition} >About</a>
            <a href="#projects" className={transition} >Projects</a>
            <a href="#contact" className={transition} >Resume</a>
            <a href="#contact" className={transition} >Contact</a>

        </nav>
    );


}