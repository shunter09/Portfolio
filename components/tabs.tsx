'use client';

import React, { useRef, useState } from 'react';

const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    frameworks: ['React', 'Next.js', 'Springboot', 'TailwindCSS', 'Sass'],
    tools: ['PostgreSQL', 'Git', 'Vercel', 'SonarQube'],
    others: [] as string[],
};

const tabs = [
    { id: 'all', label: 'All', items: Object.values(skills).flat() },
    { id: 'languages', label: 'Languages', items: skills.languages },
    { id: 'frameworks', label: 'Frameworks', items: skills.frameworks },
    { id: 'tools', label: 'Tools', items: skills.tools },
    { id: 'others', label: 'Others', items: skills.others },
];

export default function TechnicalSkills() {
    const [active, setActive] = useState(0);
    const refs = useRef<(HTMLButtonElement | null)[]>([]);

    const move = (index: number) => {
        const next = (index + tabs.length) % tabs.length;
        setActive(next);
        refs.current[next]?.focus();
    };

    const onKeyDown = (e: React.KeyboardEvent, i: number) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); move(i + 1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); move(i - 1); }
        else if (e.key === 'Home') { e.preventDefault(); move(0); }
        else if (e.key === 'End') { e.preventDefault(); move(tabs.length - 1); }
    };

    return (
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">


            <div
                role="tablist"
                aria-label="Technical skills"
                className="tabs tabs-border max-w-full justify-center overflow-x-auto"
            >
                {tabs.map((t, i) => (
                    <button
                        key={t.id}
                        ref={(el) => { refs.current[i] = el; }}
                        type="button"
                        role="tab"
                        id={`tab-${t.id}`}
                        aria-selected={active === i}
                        aria-controls={`panel-${t.id}`}
                        tabIndex={active === i ? 0 : -1}
                        onClick={() => setActive(i)}
                        onKeyDown={(e) => onKeyDown(e, i)}
                        className={`tab whitespace-nowrap ${active === i ? 'tab-active' : ''}`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {tabs.map((t, i) => (
                <div
                    key={t.id}
                    role="tabpanel"
                    id={`panel-${t.id}`}
                    aria-labelledby={`tab-${t.id}`}
                    hidden={active !== i}
                    className="min-h-32 w-full p-4"
                >
                    {t.items.length > 0 ? (
                        <ul className="flex flex-wrap justify-center gap-2">
                            {t.items.map((item) => (
                                <li key={item} className="badge badge-success badge-lg min-w-28 justify-center px-5 py-4 text-base">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm opacity-70">Nothing here yet.</p>
                    )}
                </div>
            ))}
        </div>
    );
}