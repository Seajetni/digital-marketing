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
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "จุดเริ่มต้นของความมั่งคั่งของธุรกิจ เกิดจาก",
      title: "Grow your audience",
      detail:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quihic atque tenetur quis eius quos ea neque sunt, accusantium solutaminus veniam tempora deserunt? Molestiae eius quidem quam repellat",
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "ธุรกิจที่กำลังอยู่ในขั้นวิกฤต",
      title: "Grow your audience",
      detail:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quihic atque tenetur quis eius quos ea neque sunt, accusantium solutaminus veniam tempora deserunt? Molestiae eius quidem quam repellat",
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "ถ้าวันนี้คุณเป็นเจ้าของธุรกิจคนหนึ่ง",
      title: "Grow your audience",
      detail:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quihic atque tenetur quis eius quos ea neque sunt, accusantium solutaminus veniam tempora deserunt? Molestiae eius quidem quam repellat",
    },
  ];

  return (
    <section className="">
      <div className="bg-gradient-to-tl rounded-3xl p-2 from-green-200 to-emerald-300">
        <div className="flex justify-center mt-10 ">
          <h1 className="  bg-emerald-600 text-white p-3 rounded-3xl text-4xl">
            ทำไมต้องเชี่ยวชาญแนว?
          </h1>
        </div>
        <div>
          {ทำไมต้องเชี่ยวชาญแนว.map((item, index) =>
            item.id ? (
              <div class="mx-auto max-w-screen-xl px-4 py-8  ">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* รูปที่เปลี่ยนตำแหน่งไปทางขวา */}
                  <div
                    class={`relative h-64 overflow-hidden rounded-lg ${
                      index % 2 === 1 ? "lg:order-last" : ""
                    } sm:h-80 lg:h-full`}
                  >
                    <Image
                      width={500}
                      height={100}
                      alt=""
                      src={item.img}
                      class="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  {/* เริ่มต้นด้วยข้อความทางซ้าย */}
                  <div class="lg:py-24">
                    <h2 class="text-3xl font-bold sm:text-xl bg-gradient-to-br rounded-3xl p-2 from-emerald-300 to-green text-w">{item.name}</h2>
                    <h3 class="text-3xl font-bold sm:text-3xl">{item.title}</h3>
                    <p class="mt-4 text-gray-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>..Loading....</div>
            )
          )}
        </div>
      </div>

      <div>
         <div></div>
      </div>


      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-full text-center">
          <h2 className="text-3xl font-bold sm:text-4xl w-">
            สิ่งที่คุณได้รับจากเชี่ยวชาญแนว
          </h2>

          <div className="mt-4   items-center flex  text-center justify-center">
            <p>
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
              <div className="block rounded-xl  p-8  " href="#">
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
