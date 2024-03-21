import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Section() {
  // เพิ่มได้เรื่อยๆ
  const สิ่งที่คุณได้รับจากเชี่ยวชาญแนว = [
    {
      id: "1",
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>`,
      title: "Digital marketing",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      id: "2",
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>`,
      title: "Digital marketing",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      id: "3",
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>`,
      title: "Digital marketing",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      id: "4",
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>`,
      title: "Digital marketing",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      id: "5",
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>`,
      title: "Digital marketing",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      id: "6",
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>`,
      title: "Digital marketing",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
  ];

  const ทำไมต้องเชี่ยวชาญแนว = [
    {
      id: "1",
      img: "/1.png",
      name: "จุดเริ่มต้นของความมั่งคั่งของธุรกิจ เกิดจาก",
      title: "ความสัมพันธ์อันดีงามระหว่างคุณและลูกค้า",
      detail:
        "ตั้งแต่นุ่นเริ่มต้นให้คำปรึกษาและให้บริการการทำ Content Marketing กับเข้าของธุรกิจมากว่า 88 บริษัทในอุตสาหกรรมที่แตกต่างกัน นุ่นพูดได้เต็มปากว่า สิ่งเดียวที่ตัดสินความเป็นอยู่ของธุรกิจคือ ความสัมพันธ์ระหว่างคุณและลูกค้า",
    },
    {
      id: "2",
      img: "/2.png",
      name: "ธุรกิจที่กำลังอยู่ในขั้นวิกฤต",
      title: "ค่าแอดแพงลูกค้าน้อย",
      detail:
        " แถมลูกค้าที่น้อยยังไม่มีคุณภาพ ยอดขายน้อยถึงน้อยมาก บางเดือนเอายอดขายหักค่าแอดแล้วติดลบ เพราะแบบนั้นเราเน้นการทำ Value Contentเพื่อสื่อสารไปที่ลูกค้าใหม่ และเรียกลูกค้าเก่าให้กลับมาสนใจเพจ Content คุณภาพสูงถูกปล่อยออกมาแทบทุกวัน จากเพจที่เคยเงียบก็กลับมาคึกคัก",
    },
    {
      id: "3",
      img: "/3.png",
      title: "ที่อยากให้ธุรกิจเติบโต",
      detail:
        " อยากมีเวลาในการคิดถึงวิสัยทัศน์ของบริษัท หรือ สนุกกับการคิดนวัตกรรม และสินค้าใหม่ๆ ไม่อยากเอาเวลาที่มีค่า มาเครียดกับปัญหาค่าแอดแพงหรือทำ Content ไปแทบตายก็ไม่มียอดขาย นุ่นและทีมงานพร้อมที่จะเข้าไปช่วยแก้ปัญหาตรงนี้ค่ะ",
    },
  ];

  return (
    <section className="">
      {/* ทำไมต้องเชี่ยวชาญแนว? */}
      <div className="">
        <div className="flex justify-center mt-10">
          <h1 className="bg-green-500 p-2 text-white shadow-2xl rounded-3xl text-2xl sm:text-3xl ">
            ทำไมต้องเชี่ยวชาญแนว?
          </h1>
        </div>
        <div>
          {ทำไมต้องเชี่ยวชาญแนว.map((item, index) =>
            item.id ? (
              <div key={index} className="mx-auto max-w-screen-xl px-4 py-8  ">
                <div className="  grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  ">
                  <div
                    className={`   shadow-2xl  relative h-64 overflow-hidden  rounded-3xl ${
                      index % 2 === 1 ? "" : "lg:order-last"
                    } sm:h-80 lg:h-full`}
                  >
                    <Image
                      width={500}
                      height={60}
                      alt=""
                      src={item.img}
                      className="absolute inset-0 h-full w-full object-cover   "
                    />
                  </div>

                  <div className="lg:py-24">
                    <h3 className="text-2xl  font-semibold sm:text-2xl text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-4 ">{item.detail}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>..Loading....</div>
            )
          )}
        </div>
      </div>
      {/* ใครเหมาะกับบริการของเรา? */}
      <div className=" ">
        <div className="flex justify-center">
          <h2 className="   justify-center flex text-2xl lg:text-4xl bg-green-500 rounded-3xl p-2 text-white shadow-2xl run  mt-10">
            ใครเหมาะกับบริการของเรา?
          </h2>
        </div>

        <div className="  flex  justify-center ">
          <ul className=" p-10">
            <li className="flex items-center mt-2 mb-2 bg-white rounded-xl shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
                className=" w-[180px] h-[80px] lg:w-[80px]"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z"></path>
              </svg>
              <p className="text-lg lg:text-xl p-2 ">
                เจ้าของธุรกิจที่เติบโตมาแบบออฟไลน์
                แต่อยากเพิ่มยอดขายและขยายธุรกิจบนโลกออนไลน์
              </p>
            </li>
            <li className="flex items-center bg-white rounded-xl   shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
                className=" w-[180px] h-[80px]  lg:w-[80px]"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z"></path>
              </svg>
              <p className="text-lg lg:text-xl p-2">
                เจ้าของธุรกิจที่ไม่อยากเอาเวลาที่มีค่า มาเครียดกับปัญหาค่าแอดแพง
                หรือทำ Content ไปแทบตายก็ไม่มียอดขาย
              </p>
            </li>
            <li className="flex items-center mt-2 mb-2 bg-white rounded-xl shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
                className=" w-[180px] h-[80px]  lg:w-[80px]"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z"></path>
              </svg>
              <p className="text-lg lg:text-xl p-2">
                เจ้าของธุรกิจที่อยากให้ธุรกิจเติบโต
                อยากมีเวลาในการคิดถึงวิสัยทัศน์ของบริษัท
                หรือสนุกกับการคิดนวัตกรรม และสินค้าใหม่ๆ
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* สิ่งที่คุณได้รับจากเชี่ยวชาญแนว */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-full text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            สิ่งที่คุณได้รับจากเชี่ยวชาญแนว
          </h2>

          <div className="mt-4   items-center flex  text-center justify-center">
            <p className="text-xl p-2">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saeprem ipsum, dolor sit amet consectetur
              adipisicing elit. Consequuntur aliquam doloribus nesciunt eos
              fugiat. Vitae aperiam fugit consequuntur saepe laborum.e laborum.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {สิ่งที่คุณได้รับจากเชี่ยวชาญแนว.map((item, index) =>
            item.id ? (
              <div key={index} className="block rounded-xl  p-8  " href="#">
                <div
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                  className="w-12 h-10"
                />

                <h2 className="mt-4 text-xl font-bold ">{item.title}</h2>

                <p className="mt-1 text-sm ">{item.detail}</p>
              </div>
            ) : (
              <div>Loading...</div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
