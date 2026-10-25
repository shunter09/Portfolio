import React from "react";
import { Mail } from "lucide-react";
import GithubIcon from "@/components/GitHubIcon";
import LinkedinIcon from "@/components/LinkedinICON";
import { Separator } from "@/components/ui/separator"
import ResumeIcon from "@/components/File";


const iconLink =
    "flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 hover:bg-[#faf5eb]/10 hover:text-[#fb7185] focus-visible:bg-[#faf5eb]/10 focus-visible:outline-2 focus-visible:outline-[#fb7185]";

export default function Contact() {
    return (
        <footer
            id="contact"
            className="flex snap-start flex-col items-center justify-center gap-8 rounded-xl bg-[#0f172a] px-5 py-16 text-center text-[#faf5eb] md:px-9 "
        >
            <div className="flex max-w-xl flex-col gap-4">
                <h2 className="font-sono text-4xl tracking-tight md:text-5xl">
                    Let&apos;s work together
                </h2>
                <p className="text-base text-[#faf5eb]/70 md:text-lg">
                    I&apos;m open to internships, entry-level roles, and collaborations.
                    Have an idea or a project? I&#39;d love to hear about it.
                </p>
            </div>

            <a
                href="mailto:sumirahhunter@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#fb7185] px-8 py-3 font-semibold text-[#0f172a] transition-colors duration-300 hover:bg-[#fda4af] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#faf5eb]"
            >
                <Mail className="h-5 w-5" aria-hidden="true" focusable="false" />
                Reach Out
            </a>
            <a
                href="/Sumirah%20Hunter-1.png" target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#fb7185] px-8 py-3 font-semibold text-[#0f172a] transition-colors duration-300 hover:bg-[#fda4af] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#faf5eb]"
            >
                <ResumeIcon/>
                View Resume
            </a>

            <ul className="flex flex-wrap items-center justify-center gap-3">
                <li>
                    <a
                        href="https://github.com/shunter09"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconLink}
                    >
                        <GithubIcon />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/sumirah-hunter-0498b2446"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 items-center rounded-2xl px-4 text-sm transition-colors duration-300 hover:bg-[#faf5eb]/10 hover:text-[#fb7185] focus-visible:bg-[#faf5eb]/10 focus-visible:outline-2 focus-visible:outline-[#fb7185]"
                    >
                        <LinkedinIcon/>
                    </a>
                </li>
            </ul>

            <p className=" text-xs text-[#faf5eb]/50">
                Usually reply within a day or two.
            </p>
            <Separator/>
            <p className=" text-xs text-[#faf5eb]/50">&#169;2026 All Rights Reserved</p>
        </footer>
    );
}