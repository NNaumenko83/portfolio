'use client';
import Brain from '@/components/brain';
import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

const AboutPage = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });
    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="flex flex-col gap-24 p-4 text-xl sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER*/}
                    <div className="flex flex-col justify-center gap-12">
                        {/*BIOGRAPHY TITLE */}
                        <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
                        {/*BIOGRAPHY DESCRIPTION */}
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti impedit odit dolorum voluptas
                            officiis quo laborum sapiente est nobis iste
                            voluptatem itaque doloribus, reiciendis vero
                            blanditiis quibusdam eius. Voluptatibus aspernatur
                            nemo necessitatibus officia asperiores. Deserunt.
                        </p>
                    </div>
                    {/*BIOGRAPHY QUOTE */}
                    <span className="italic">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </span>
                    {/*SIGNATURE */}
                    <div className="self-end">
                        <svg
                            width="291"
                            height="235"
                            viewBox="0 0 291 235"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14 176C9.93537 166.639 2.20231 153.52 2.00001 143C1.77875 131.495 12.837 149 18 149C24.0333 149 20.4317 129.241 20 126.778C19.6322 124.679 15.9995 112.043 19.3333 119.444C26.0332 134.318 29.5725 150.279 33.7778 166C38.094 182.136 43.7875 198.221 47.5556 214.444C48.612 218.993 50 224.268 50 229C50 249.123 46.794 188.875 45.7778 168.778C45.0896 155.168 42.6667 141.799 41.7778 128.222C41.733 127.538 41.3705 117.911 41.8889 118.667C45.5953 124.067 47.1899 131.792 49.2222 137.889C54.8979 154.916 61.315 171.431 66 188.778C66.853 191.936 68.0372 195.038 68.7778 198.222C69.5107 201.374 68.2902 191.766 67.8889 188.556C64.8867 164.538 61.7794 139.693 61.0556 115.444C60.9036 110.354 58.8256 95.6729 61.2222 100.167C68.5247 113.859 72.7817 131.206 77 146.111C81.0579 160.449 84.116 174.755 84.9445 189.667C85.1504 193.373 83.9337 191.05 82.7778 188.944C79.0086 182.079 75.901 174.822 72.6111 167.722C66.5887 154.727 60.9452 142.83 59.0556 128.5C57.8948 119.698 55.0892 104.138 60 96C62.1345 92.4629 66.3059 89.9014 70 88.2222C75.4792 85.7317 83.2937 100.726 85 104C88.3884 110.502 94.2866 120.852 88.1111 127.444C80.1864 135.905 70.1362 141.751 64.6667 152.333C61.1085 159.218 62.9421 146.947 65.8889 144C74.2143 135.675 89.0195 132.085 100.111 129.444C107.508 127.683 112.918 135.359 116.556 140.556C124.808 152.344 131.377 168.221 130.833 182.889C130.081 203.207 93.9478 199.842 84.5 187.944C77.808 179.518 69.1721 153.246 89.8889 157.389C103.287 160.069 113.762 168.052 126.167 172.778C129.567 174.073 133.652 153.99 134.833 151.333C136.431 147.738 139.682 149.521 141.5 151.944C143.326 154.379 145.8 151.956 147.444 150.611C149.263 149.123 152.073 150.738 153.889 151.444C157.783 152.959 158.625 148.662 159.944 145.611C165.131 133.617 167.525 150.521 169.611 148.667C173.212 145.466 171.937 135.179 175.556 133.111C177.939 131.749 181.001 135.318 183 135.889C186.263 136.821 188.26 126.431 189.444 124.278C191.451 120.629 195.823 128.656 198 129C201.211 129.507 200.682 123.47 202 121.667C203.59 119.491 204.917 127.01 206 123.889C207.278 120.207 210.643 104.372 207.333 101.444C205.595 99.9067 198.58 102.461 197.667 101C197.236 100.311 198.779 99.8158 199.333 99.2222C201.462 96.9436 203.522 94.5631 205.444 92.1111C212.527 83.0785 218.578 73.6894 221.222 62.3333C224.199 49.5454 224.159 35.7529 222.556 22.7778C221.783 16.5306 221.06 8.33566 218.222 2.55556C215.572 -2.84284 217.014 14.5418 217 20.5556C216.941 46.2191 217.232 71.8975 216.556 97.5556C215.842 124.653 214.344 151.882 208.556 178.444C205.006 194.731 200.029 212.378 190.056 226.056C183.596 234.914 186.832 209.362 187 208.333C190.24 188.488 199.108 169.445 210.056 152.722C213.799 147.004 220.782 135.807 227.722 132.722C231.798 130.911 237.535 144.216 239.444 136.056C240.669 130.823 240.188 120.825 246.5 128.667C250.597 133.757 252.915 139.23 257.333 131.056C258.895 128.166 267.067 105.483 272.611 109.722C273.559 110.447 278.27 117.089 279.5 115.722C281.327 113.692 281.762 108.957 282.556 106.5C284.147 101.573 286.025 98.0902 289 94"
                                stroke="black"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M12 6V14"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </svg>
                    {/* SKILLS CONTAINER*/}
                    <div className="flex flex-col justify-center gap-12">
                        {/*SKILLS TITLE */}
                        <h1 className="text-2xl font-bold">SKILLS</h1>
                        {/* SKILL LIST */}
                        <div className="flex flex-wrap gap-4">
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                TypeScript
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                SCSS
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                MongoDB
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                Express.js
                            </div>
                            <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                                Redux
                            </div>
                        </div>

                        {/* SCROLL SVG */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M12 6V14"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </svg>
                    </div>
                    {/* EXPERIENCE CONTAINER*/}
                    <div className="flex flex-col justify-center gap-12 pb-48">
                        {/*EXPERIENCE TITLE */}
                        <h1 className="text-2xl font-bold">EXPERIENCE</h1>
                        {/*EXPERIENCE LIST */}
                        <div className="">
                            {/*EXPERIENCE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">
                                    {/* JOB TITLE */}
                                    <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                                        Senior JavaScript Engineer
                                    </div>
                                    {/* JOB DESCRIPTION */}
                                    <div className="p-3 text-sm italic">
                                        My current employment. Way better than
                                        the position before
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-sm font-semibold text-red-400">
                                        2024-Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                                        Apple
                                    </div>
                                </div>

                                {/* CENTER */}
                                <div className="flex justify-center w-1/6">
                                    {/* LINE */}
                                    <div className="relative w-1 h-full bg-gray-600 rounded">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3"></div>
                            </div>
                            {/*EXPERIENCE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3"></div>

                                {/* CENTER */}
                                <div className="flex justify-center w-1/6">
                                    {/* LINE */}
                                    <div className="relative w-1 h-full bg-gray-600 rounded">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3">
                                    {/* JOB TITLE */}
                                    <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                                        Senior JavaScript Engineer
                                    </div>
                                    {/* JOB DESCRIPTION */}
                                    <div className="p-3 text-sm italic">
                                        My current employment. Way better than
                                        the position before
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-sm font-semibold text-red-400">
                                        2024-Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                                        Apple
                                    </div>
                                </div>
                            </div>
                            {/*EXPERIENCE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">
                                    {/* JOB TITLE */}
                                    <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                                        Senior JavaScript Engineer
                                    </div>
                                    {/* JOB DESCRIPTION */}
                                    <div className="p-3 text-sm italic">
                                        My current employment. Way better than
                                        the position before
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-sm font-semibold text-red-400">
                                        2024-Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                                        Apple
                                    </div>
                                </div>

                                {/* CENTER */}
                                <div className="flex justify-center w-1/6">
                                    {/* LINE */}
                                    <div className="relative w-1 h-full bg-gray-600 rounded">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
