export default function Navbar(){

    const transition = "font- rounded-2xl px-3 py-1.5 transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:cursor-pointer after:content-none ";
    return (

        <div className=" fixed left-1/2 top-6 z-50 -translate-x-1/2 flex justify-center gap-3 rounded-2xl bg-white/80 p-2 text-black shadow-lg backdrop-blur h-13 ">

            <a href="#section" className={transition} popoverTarget="e1">About</a>

            <a href="section" className={transition} popoverTarget="e2">Projects</a>


            <a href="section" className={transition} popoverTarget="e3">Resume</a>


            <a href="section" className={transition} popoverTarget="e4">Contact</a>

        </div>

    )
}