import React from "react";
import Image from "next/image";
export default function Card() {
    return (
        <section
            id="projects"
            className="flex min-h-dvh snap-start flex-col items-center justify-center gap-8 bg-[#faf5eb] px-5 py-16 text-[#0f172a] md:gap-10 md:px-9"
        >
            <h2 className="text-center text-4xl md:text-5xl">Featured Projects</h2>

            <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-10">
                <a
                    href="https://portfolio-six-phi-sibv806zj8.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-w-0 max-w-xl lg:w-1/2 lg:max-w-none"
                >
                    <div className="hover-3d h-full">
                        <figure className="flex h-full flex-col gap-4 rounded-xl bg-[#0f172a] p-3 text-[#faf5eb] shadow-xl md:p-4">
                            <h3 className="px-2 pt-2 font-sono text-xl text-[#fb7185] sm:text-2xl md:text-3xl">
                                MyPortfolio
                            </h3>
                            <Image
                                src="/website2.png"
                                alt="AvenueSeekers website preview"
                                width={1600}
                                height={900}
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="h-auto w-full rounded-lg"
                            />
                            <p className="text-sm md:text-base">
                                A Portfolio for others to get to know more about me, my featured projects, the languages, tools, and frameworks I know, my resume, and how to further contact me.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="w-20 badge badge-success">Next.js</div>
                            </div>
                            <div className="mt-auto flex flex-row flex-wrap items-center gap-x-4 gap-y-2 font-bold">
                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                                        />
                                    </svg>
                                    <h3>On-going</h3>
                                </div>

                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3l5.571-3m-11.142 0L2.25 7.5L12 2.25l9.75 5.25l-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75L2.25 16.5l4.179-2.25m11.142 0l-5.571 3l-5.571-3"
                                        />
                                    </svg>
                                    <h3>Frontend</h3>
                                </div>
                            </div>
                        </figure>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </a>


                <a
                    href="https://avenue-seekers.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-w-0 max-w-xl lg:w-1/2 lg:max-w-none"
                >
                    <div className="hover-3d h-full">
                        <figure className="flex h-full flex-col gap-4 rounded-xl bg-[#0f172a] p-3 text-[#faf5eb] shadow-xl md:p-4">
                            <h3 className="px-2 pt-2 font-sono text-xl text-[#fb7185] sm:text-2xl md:text-3xl">
                                AvenueSeekers
                            </h3>
                            <Image
                                src="/website.png"
                                alt="AvenueSeekers website preview"
                                width={1600}
                                height={900}
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="h-auto w-full rounded-lg"
                            />
                            <p className="text-sm md:text-base">
                                A website that allows users to find job, internship, and volunteer opportunities. Jobs,
                                Internships, and Volunteer posting are all aggregated using Zenrows Job Scraping API (or
                                other methods if needed) - which means there is no Sign-In or Log-In needed.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="w-20 badge badge-success ">Next.js</div>
                                <div className="w-23 badge badge-success ">Springboot</div>
                                <div className="w-23 badge badge-success ">PostgreSQL</div>
                                <div className="w-23 badge badge-success ">Zenrows API</div>
                                <div className="w-21 badge badge-success ">SonarQube</div>
                            </div>
                            <div className="mt-auto flex flex-row flex-wrap items-center gap-x-4 gap-y-2 font-bold">
                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                                        />
                                    </svg>
                                    <h3>On-going</h3>
                                </div>

                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3l5.571-3m-11.142 0L2.25 7.5L12 2.25l9.75 5.25l-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75L2.25 16.5l4.179-2.25m11.142 0l-5.571 3l-5.571-3"
                                        />
                                    </svg>
                                    <h3>Fullstack</h3>
                                </div>
                            </div>
                        </figure>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </a>
            </div>
        </section>
    );
}