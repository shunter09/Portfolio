import PlexusBackground from "@/components/PlexusBackground";
import Image from "next/image";
import Card from "@/components/card";
import React from "react";

import TechnicalSkills from "@/components/tabs";
import Contact from "@/components/contact";


const sectStyle = "flex min-h-dvh snap-start flex-col items-center justify-center gap-8 bg-[#faf5eb] px-5 py-16 text-[#0f172a] md:gap-10 md:px-9"
export default function Home() {
    return (
        <main className="h-dvh snap-y snap-proximity overflow-y-scroll scroll-smooth bg-[#0f172a] text-[#faf5eb]">

            <section
                id="about"
                className="relative min-h-dvh flex snap-start items-center justify-center overflow-hidden bg-[#0f172a] px-5 py-10 md:px-9 md:py-0"
            >
                <PlexusBackground/>

                <div
                    className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 font-fredoka md:flex-row md:justify-center">
                    <Image
                        src="/headshot.png"
                        width={300}
                        height={300}
                        alt="Headshot Photo"
                        loading="eager"
                        className="h-auto w-56 rounded-full object-cover ring-4 ring-[#fb7185] md:w-72"
                    />

                    <div className="flex flex-col gap-3 text-center md:text-left">
                        <h1 className="text-5xl font-semibold text-[#faf5eb] md:text-6xl">
                            Sumirah Hunter
                        </h1>
                        <p className="text-lg text-[#fb7185] md:text-xl">
                            Aspiring Fullstack Software Engineer
                        </p>
                    </div>
                </div>
            </section>

            <Card/>

            <section className={sectStyle}>
                <h2 className="text-center text-4xl md:text-5xl">Technical Skills</h2>

                <TechnicalSkills/>

                    <Contact/>

            </section>


        </main>
    );
}