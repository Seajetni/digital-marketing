import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Header = () => {

  const content = {
    h2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    p:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
    egestas tempus tellus etiam sed. Quam a scelerisque amet
    ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
    quisque ut interdum tincidunt duis.`
  }

  return (
    <>
      <header className="overflow-hidden  h-full bg-gray-50 sm:grid   sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {content.h2}
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
            {content.p}
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt=""
          src="/Profile.png"
          className=" object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          width={500}
          height={100}
        />
      </header>
    </>
  );
};
