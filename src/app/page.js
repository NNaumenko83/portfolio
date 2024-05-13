import Image from 'next/image';

export default function Homepage() {
    return (
        <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 relative">
                <Image src="/hero.png" alt="" fill className="object-contain" />
            </div>
            {/* TEXT CONTAINER */}
            <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
                <h1 className="text-4xl font-bold">
                    Crafting Digital Experiences, Designing Tomorrow.
                </h1>
                {/* DESCRIPTION */}
                <p className="">
                    Welcome to my digital canvas, where innovation and
                    creativity converge. With a keen eye for aesthetics and a
                    mastery of code, my portfolio showcases a diverse collection
                    of projects that reflect my commitment to excellence.
                </p>
                {/* BUTTONS */}
                <div className=" flex gap-4">
                    <button className="p-4 rounded-lg ring ring-black bg-black text-white">
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
