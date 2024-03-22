import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CellMe() {
  return (
    <div className=" mt-10">
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

              <div className=" my-10">
             
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
}
