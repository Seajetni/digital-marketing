import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CellMe() {
  return (
    <section className=" mt-10">
      <div className="flex-col  flex items-center">
        <h2 className="justify-center flex text-3xl   lg:text-4xl bg-green-500 rounded-3xl p-3 text-white shadow-2xl   mb-12">
          สนใจปรึกษา
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-xl  text-center  ">
              ให้เราเป็นเพื่อนคู่คิด ช่วยเติบโตธุรกิจของคุณบนโลกออนไลน์
              ติดต่อเราได้ 2 ช่องทาง
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold  text-center"> ช่องทางที่ 1</h3>

              <ul className="mt-2 not-italic text-2xl">
                ติดต่อผ่านทาง Line Official หากต้องการปรึกษาหรือสอบถามเพิ่มเติม
                <li className=" text-xl flex items-center ">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5  mr-2"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>{" "}
                  <p>แอดไลน์เชี่ยวชาญแนว</p>
                </li>
                <li className=" text-xl flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5  mr-2"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>{" "}
                  <p>พิมพ์ "สนใจทำคอนเทนต์"</p>
                </li>
1
              </ul>
              <div className=" my-10">
             
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
}
