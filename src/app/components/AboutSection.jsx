"use client"

import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Roboto } from 'next/font/google';

const roboto = Roboto ({
    weight: ['100', '100'],
    style: [ 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>ReactJs/NextJs</li>
                <li>NodesJs</li>
                <li>MySQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        )

    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li className="list-disc pl-2">STI College Global City</li>
                <li className={roboto.className}>BS Computer Engineering</li>
            </ul>
        )

    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul>
                <li className="list-disc pl-2">Responsive Web Design</li>
                <li className={roboto.className}>freecodecamp</li>

                <li className="list-disc pl-2">Web Development: Using HTML5 and CC3</li>
                <li className={roboto.className}>STI College</li>

                <li className="list-disc pl-2">PHP & MySQL Fundamental: Creating a Database Website</li>
                <li className={roboto.className}>STI College</li>

                <li className="list-disc pl-2">Android Development</li>
                <li className={roboto.className}>STI College</li>

                <li className="list-disc pl-2">MATRIX “Born to Code, Design to Assemble</li>
                <li className={roboto.className}>STI College</li>

                <li className="list-disc pl-2">Linux System Administratione</li>
                <li className={roboto.className}>STI College</li>
          
            </ul>
        )

    },
]

const AboutSection = () => {
    const [tab, setTab] = useState ("skills");
    const [isPending ,startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() => {
        setTab(id)
    });
    };



  return (
    <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">I am a front-end developer with passion for creating interactive and responsive web applications. I have basic knowledge with JavaScript, React, NodeJs, Express
            MySql, HTML, CSS and GIT. I am quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others
            to create amazing projects.
        </p>
        <div className="flex flex-row mt-8">
            <TabButton 
            selectTab={() => handleTabChange("skills")} 
            active={tab === "skills"}> 
            {""}Skills{""}
            </TabButton>

            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab === "education"}> 
            {""}Education{""}
            </TabButton>

            <TabButton 
            selectTab={() => handleTabChange("certification")} 
            active={tab === "certification"}> 
            {""}Certification{""}
            </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((w) => w.id === tab).content}</div>
        </div>
    </div>
    </section>
  )
}

export default AboutSection
