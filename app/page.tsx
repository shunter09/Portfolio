import PlexusBackground from "@/components/PlexusBackground";


export default function Home() {
  return (
      <header className="relative md:snap-start h-238.5 overflow-hidden bg-black px-5 py-12 md:px-9 md:py-0 flex items-center justify-center">
          <PlexusBackground />

          <div className="relative z-10 w-full max-w-2xl font-fredoka text-white text-center">
              {/* your form and content */}
          </div>
      </header>
  );
}
