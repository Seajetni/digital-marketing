import React, { useState } from "react";
import Image from "next/image";
export default function Review() {
  const [startIndex, setStartIndex] = useState(0);

  const handleForward = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 5, content.length - 1));
  };

  const handleRewind = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  // ถ้าเกิน 3 id จะมีปุ่มเพิ่มออกให้กดเลื่อนนะคับ เพิ่มได้เรื่อยๆ

  const ตัวอย่างผลลัพธ์ = [
    {
      id: "1",
      name: "test",
      img: "/3.png",
    },
    {
      id: "2",
      name: "test",
      img: "/3.png",
    },
    {
      id: "3",
      name: "test",
      img: "/3.png",
    },
    
  ];

  // ถ้าเกิน 8 id มือถือ เกิน 6 id จะมีปุ่มเพิ่มออกให้กดเลื่อนนะคับ เพิ่มได้เรื่อยๆ

  const review = [
    {
      id: "1",
      name: "test",
      img: "/3.png",
    },
    {
      id: "2",
      name: "test",
      img: "/3.png",
    },
    {
      id: "3",
      name: "test",
      img: "/3.png",
    },
    {
      id: "4",
      name: "test",
      img: "/3.png",
    },
    {
      id: "5",
      name: "test",
      img: "/3.png",
    },
    {
      id: "6",
      name: "test",
      img: "/3.png",
    },
    {
      id: "7",
      name: "test",
      img: "/3.png",
    },
    {
      id: "8",
      name: "test",
      img: "/3.png",
    },
  ];

  return (
    <div>
      <div>
        <div className="flex-col  flex items-center">
          <h2 className="justify-center flex text-2xl   lg:text-4xl bg-green-500 rounded-3xl p-3 text-white shadow-2xl run   mb-12">
            ตัวอย่างผลลัพธ์
          </h2>
        </div>
        <div>
          <ul className="flex mt-1 overflow-x-auto justify-center">
            {ตัวอย่างผลลัพธ์
              .slice(startIndex, startIndex + 3)
              .map((item, index) => (
                <li key={index} className="mx-2">
                  <Image
                    width={400}
                    height={100}
                    alt={item.name}
                    src={item.img}
                  />
                </li>
              ))}
          </ul>

          {ตัวอย่างผลลัพธ์.length > 3 && (
            <div className="flex justify-center mt-2 ">
              {[...Array(Math.ceil(ตัวอย่างผลลัพธ์.length / 3)).keys()].map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setStartIndex(num * 3)}
                    className={`mx-1 p-1 rounded-full focus:outline-none ${
                      startIndex === num * 3
                        ? "bg-green-500 text-white  "
                        : "bg-gray-300 "
                    }`}
                  >
                    {""}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
      <div className=" mt-10 mb-8">
        <div className="flex-col  flex items-center">
          <h2 className="justify-center flex text-2xl   lg:text-4xl bg-green-500 rounded-3xl p-3 text-white shadow-2xl run   mb-12">
            รีวิวจากลูกค้าจริง
          </h2>
        </div>
        <div>
          <div className="flex   justify-center  ">
            <ul className="grid grid-cols-2">
              {review.slice(startIndex, startIndex + 8).map((item, index) => (
                <li key={index}>
                  {" "}
                  {/* Remember to add a unique key to each list item */}
                  <Image
                    width={400}
                    height={100}
                    alt={item.name}
                    src={item.img}
                    className=" mx-5"
                  />
                </li>
              ))}
            </ul>
          </div>
          {review.length > 8 && (
              <div className="flex justify-center mt-2 ">
                {[...Array(Math.ceil(review.length / 8)).keys()].map(
                  (num) => (
                    <button
                      key={num}
                      onClick={() => setStartIndex(num * 8)}
                      className={`mx-1 p-1 rounded-full focus:outline-none ${
                        startIndex === num * 8
                          ? "bg-green-500 text-white  "
                          : "bg-gray-300  "
                      }`}
                    >
                      {""}
                    </button>
                  )
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
