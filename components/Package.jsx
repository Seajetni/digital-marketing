import React from "react";
import Link from "next/link";
export default function Package() {
  const Package = [
    {
      id: "1",
      title: "Name Package",
      price: "30000",
      detail1: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail2: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail3: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail4: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
    },
    {
      id: "2",
      title: "Name Package",
      price: "40000",
      detail1: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail2: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail3: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail4: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
    },
    {
      id: "3",
      title: "Name Package",
      price: "50000",
      detail1: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail2: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail3: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
      detail4: "Lorem ipsum dolor, sit amet consectetur adipisicing elitacere.",
    },
  ];

  return (
    <>
      <div className="mx-auto w-full h-screen flex  flex-col  bg-gradient-to-l from-lime-100 to-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex  flex-col mb-10">
          <div className="flex  justify-center">
            <h2 className="text-3xl    text-white rounded-3xl bg-emerald-600 p-3  md:mr-4">
              แพ็คเกจเบื้องต้น
            </h2>
          </div>

          <p className="text-lg  text-center mt-10  sm:mt-2 ">
            เป็นเพียงรายละเอียดแพ็กเกจคร่าวๆ เพราะเรามีแพ็กเกจอีกมากมายที่ออก
            แบบมาให้เหมาะสมกับทุกธุรกิจและขนาดองค์กรที่คุณเลือกได้
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
          {Package.map((item, index) =>
            item.id ? (
              <div
                key={index}
                className="rounded-2xl border border-green-500 bg-white p-6 shadow-sm ring-1 ring-green-500 sm:order-last sm:px-8 lg:p-12"
              >
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.title}
                    <span className="sr-only">Plan</span>
                  </h2>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                      {item.price}
                    </strong>

                    <span className="text-sm font-medium text-gray-700">
                      /month
                    </span>
                  </p>
                </div>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> {item.detail1} </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> {item.detail2} </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> {item.detail3} </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> {item.detail4} </span>
                  </li>
                </ul>

                <Link 
                  href="#"
                  className="mt-8 block rounded-full border border-green-500 bg-green-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-green-700 hover:ring-1 hover:ring-green-700 focus:outline-none focus:ring active:text-green-500"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <div key={index}>Loading....</div>
            )
          )}
        </div>
      </div>
    </>
  );
}
