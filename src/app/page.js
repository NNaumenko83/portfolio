'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Homepage() {
    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
                {/* IMAGE CONTAINER */}
                <div className="relative lg:h-full lg:w-1/2 h-1/2">
                    <Image
                        src="/hero.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
                {/* TEXT CONTAINER */}
                <div className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2">
                    <h1 className="text-4xl font-bold md:text-6xl">
                        Crafting Digital Experiences, Designing Tomorrow.
                    </h1>
                    {/* DESCRIPTION */}
                    <p className="md:text-xl">
                        Welcome to my digital canvas, where innovation and
                        creativity converge. With a keen eye for aesthetics and
                        a mastery of code, my portfolio showcases a diverse
                        collection of projects that reflect my commitment to
                        excellence.
                    </p>
                    {/* BUTTONS */}
                    <div className="flex w-full gap-4">
                        <Link
                            href="/portfolio"
                            className="p-4 text-white bg-black rounded-lg ring ring-black"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="p-4 rounded-lg ring ring-black"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
