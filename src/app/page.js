import Image from 'next/image';

export default function Homepage() {
    return (
        <div className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
            {/* IMAGE CONTAINER */}
            <div className="relative lg:h-full lg:w-1/2 h-1/2">
                <Image src="/hero.png" alt="" fill className="object-contain" />
            </div>
            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2">
                <h1 className="text-4xl font-bold md:text-6xl">
                    Crafting Digital Experiences, Designing Tomorrow.
                </h1>
                {/* DESCRIPTION */}
                <p className="md:text-xl">
                    Welcome to my digital canvas, where innovation and
                    creativity converge. With a keen eye for aesthetics and a
                    mastery of code, my portfolio showcases a diverse collection
                    of projects that reflect my commitment to excellence.
                </p>
                {/* BUTTONS */}
                <div className="flex w-full gap-4">
                    <button className="p-4 text-white bg-black rounded-lg ring ring-black">
                        View My Work
                    </button>
                    <button className="p-4 rounded-lg ring ring-black">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
}
