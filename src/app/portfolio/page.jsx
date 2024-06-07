'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRef } from 'react';

const items = [
    {
        id: 1,
        color: 'from-red-300 to-blue-300',
        title: 'StarRunner',
        desc: 'StarRunner Token Staking is a web3 application that allows you to stake tokens, claim rewards, and withdraw tokens from the staking pool at any time.',
        img: '/projects_img/StarRunner.jpg',
        link: 'https://dexola-web3.vercel.app/',
    },
    {
        id: 2,
        color: 'from-blue-300 to-violet-300',
        title: 'GooseTrack',
        desc: 'Application for task planning. Role: Developer (The calendar table that accurately displayed tasks and events. Feedback feature, allowing users to provide valuable feedback and ratings).',
        img: '/projects_img/Goose.jpg',
        link: 'https://a-pinchuk.github.io/githack-GooseTrack-app',
    },
    {
        id: 3,
        color: 'from-violet-300 to-purple-300',
        title: 'DexolaCamp',
        desc: 'Landing page.',
        img: '/projects_img/DexolaCamp.jpg',
        link: 'https://dexola-camp.vercel.app/',
    },
    {
        id: 4,
        color: 'from-purple-300 to-red-300',
        title: 'NovaPoshta',
        desc: 'Test task. Web application that allows users to track their shipments and find Nova Poshta branches based on various criteria.',
        img: '/projects_img/NovaPoshta.jpg',
        link: 'https://nova-poshta-test-task-sooty.vercel.app/',
    },
    {
        id: 5,
        color: 'from-purple-300 to-red-300',
        title: 'Filmoteka',
        desc: 'Application for choosing a movie. Role: Developer | Сreating the Header for the main page and implementing the functionality to load and display movies on the library page.',
        img: '/projects_img/Filmoteka.jpg',
        link: 'https://kyrylo2.github.io/filmoteka/',
    },
    {
        id: 6,
        color: 'from-purple-300 to-red-300',
        title: 'IceCream',
        desc: 'Ice Cream company website with responsive layout, burger menu, modal window and attractive design. Role: Developer | Сreating the Header and Hero sections',
        img: '/projects_img/IceCream.jpg',
        link: 'https://nnaumenko83.github.io/Ice-cream-shop-TEAM-1-/',
    },
    {
        id: 7,
        color: 'from-purple-300 to-red-300',
        title: 'PHARMA POINT',
        desc: 'Test task. Web application where users can order medicine delivery from various shops. The Medicine Delivery app allows users to: order medicines, choose delivery address from map or input field, view order history, view order details, use discounts.',
        img: '/projects_img/PharmaPoint.jpg',
        link: 'https://pharma-point.vercel.app/',
    },
    {
        id: 8,
        color: 'from-purple-300 to-red-300',
        title: 'Quiz',
        desc: 'Test task. Web application that allows users to choose their preferred language at the beginning of the quiz, answer questions, and enter their email. After completing the quiz, users have the option to download a CSV file with the answers and retake the quiz.',
        img: '/projects_img/Quiz.jpg',
        link: 'https://quiz-test-task.vercel.app/',
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-89%']);

    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className="h-[1100vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My works
                </div>
                <div className="sticky top-0 flex items-center h-screen gap-4 overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-purple-300 to-red-300" />

                        {items.map(item => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-w">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl ">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[50px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] ld:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <Link
                                        href={item.link}
                                        className="flex justify-end"
                                        target="blank"
                                    >
                                        <button className="p-2 m-4 text-sm font-semibold text-gray-600 bg-white rounded md:p-4 md:text-md lg:p-8 lg:text-lg">
                                            See Demo
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 text-center">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:h-[400px]  md:w-[400px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath
                                xlinkHref="#circlePath"
                                className="text-3xl"
                            >
                                Full-Stack Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-16 h-16 m-auto text-white bg-black rounded-full md:h-28 md:w-28"
                    >
                        Hire me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;
