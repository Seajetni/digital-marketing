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
                <li className=" text-xl flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5  mr-2"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>{" "}
                  <p>แจ้งธุรกิจที่ต้องการให้เชี่ยวช่วยเติบโตบนโลกออนไลน์</p>
                </li>
              </ul>
              <div className=" my-10">
                <Link
                  href="#"
                  className="flex break-inside bg-[#2ea44f] text-white border-2  border-black  rounded-3xl px-6 py-3 mb-4 w-full"
                >
                  <div className="m-auto">
                    <div className="flex items-center justify-start flex-1 space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="s7bNhrkBpwUCoDDZerQ_xa_0ZWDaCvmIF4I_gr1"
                          x1="4.522"
                          x2="45.203"
                          y1="2.362"
                          y2="47.554"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#33c481"></stop>
                          <stop offset="1" stopColor="#21a366"></stop>
                        </linearGradient>
                        <path
                          fill="url(#s7bNhrkBpwUCoDDZerQ_xa_0ZWDaCvmIF4I_gr1)"
                          d="M8,42h32c1.105,0,2-0.895,2-2V8c0-1.105-0.895-2-2-2H8C6.895,6,6,6.895,6,8v32	C6,41.105,6.895,42,8,42z"
                        ></path>
                        <path
                          d="M23.284,37.758c-0.454,0-0.851-0.175-1.118-0.493c-0.46-0.548-0.338-1.245-0.286-1.542l0.191-1.144	c0.036-0.277,0.036-0.451,0.028-0.549c-0.08-0.037-0.22-0.091-0.45-0.14c-6.792-0.895-11.751-5.723-11.751-11.473	c0-6.417,6.329-11.637,14.108-11.637c7.779,0,14.107,5.22,14.107,11.637c0,2.593-1.005,4.954-3.073,7.218	c-2.801,3.227-9.098,7.206-10.647,7.858C23.97,37.672,23.607,37.758,23.284,37.758z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M23.284,37.258c-0.389,0-0.615-0.171-0.735-0.315c-0.311-0.371-0.22-0.888-0.176-1.136l0.191-1.146	c0.075-0.578,0.024-0.824-0.013-0.918c-0.017-0.038-0.202-0.214-0.796-0.342c-6.564-0.866-11.357-5.489-11.357-10.984	c0-6.141,6.104-11.137,13.608-11.137c7.503,0,13.607,4.996,13.607,11.137c0,2.462-0.962,4.713-2.942,6.881	c-2.76,3.179-8.95,7.094-10.472,7.734C23.838,37.185,23.539,37.258,23.284,37.258z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#fff"
                          d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637	c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185	c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001	C36.203,26.879,37.113,24.764,37.113,22.417z"
                        ></path>
                        <linearGradient
                          id="s7bNhrkBpwUCoDDZerQ_xb_0ZWDaCvmIF4I_gr2"
                          x1="18.372"
                          x2="36.968"
                          y1="13.013"
                          y2="27.439"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#33c481"></stop>
                          <stop offset="1" stopColor="#21a366"></stop>
                        </linearGradient>
                        <path
                          fill="url(#s7bNhrkBpwUCoDDZerQ_xb_0ZWDaCvmIF4I_gr2)"
                          d="M32.052,20.698c0.38,0,0.688-0.308,0.688-0.687s-0.309-0.687-0.688-0.687h-2.604 c-0.379,0-0.687,0.308-0.687,0.687c0,0.001,0,0.001,0,0.002v2.602c0,0,0,0,0,0.001v2.603c0,0.38,0.309,0.688,0.687,0.688h2.604 c0.379,0,0.688-0.309,0.688-0.688c0-0.379-0.309-0.687-0.688-0.687h-1.917v-1.23h1.917c0.38,0,0.688-0.308,0.688-0.687 c0-0.38-0.309-0.688-0.688-0.688v0.001h-1.917v-1.23H32.052z"
                        ></path>
                        <linearGradient
                          id="s7bNhrkBpwUCoDDZerQ_xc_0ZWDaCvmIF4I_gr3"
                          x1="16.286"
                          x2="34.882"
                          y1="15.702"
                          y2="30.128"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#33c481"></stop>
                          <stop offset="1" stopColor="#21a366"></stop>
                        </linearGradient>
                        <path
                          fill="url(#s7bNhrkBpwUCoDDZerQ_xc_0ZWDaCvmIF4I_gr3)"
                          d="M26.463,20.01v3.223l-2.67-3.635c-0.129-0.172-0.335-0.275-0.549-0.275 c-0.074,0-0.147,0.011-0.218,0.035c-0.281,0.094-0.47,0.356-0.47,0.652v5.209c0,0.38,0.309,0.688,0.688,0.688 c0.38,0,0.688-0.309,0.688-0.688v-3.222l2.669,3.635c0.129,0.172,0.334,0.275,0.549,0.275c0.073,0,0.147-0.012,0.218-0.036 c0.282-0.093,0.47-0.355,0.47-0.652V20.01c0-0.379-0.308-0.687-0.687-0.687S26.463,19.631,26.463,20.01z"
                        ></path>
                        <linearGradient
                          id="s7bNhrkBpwUCoDDZerQ_xd_0ZWDaCvmIF4I_gr4"
                          x1="12.933"
                          x2="31.529"
                          y1="20.025"
                          y2="34.451"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#33c481"></stop>
                          <stop offset="1" stopColor="#21a366"></stop>
                        </linearGradient>
                        <path
                          fill="url(#s7bNhrkBpwUCoDDZerQ_xd_0ZWDaCvmIF4I_gr4)"
                          d="M16.271,19.323c-0.379,0-0.687,0.308-0.687,0.687v5.209c0,0.38,0.308,0.688,0.687,0.688 h2.604c0.379,0,0.687-0.309,0.687-0.689c0-0.379-0.308-0.687-0.687-0.687h-1.917V20.01C16.958,19.631,16.65,19.323,16.271,19.323z"
                        ></path>
                        <linearGradient
                          id="s7bNhrkBpwUCoDDZerQ_xe_0ZWDaCvmIF4I_gr5"
                          x1="14.665"
                          x2="33.26"
                          y1="17.793"
                          y2="32.218"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#33c481"></stop>
                          <stop offset="1" stopColor="#21a366"></stop>
                        </linearGradient>
                        <path
                          fill="url(#s7bNhrkBpwUCoDDZerQ_xe_0ZWDaCvmIF4I_gr5)"
                          d="M20.194,20.01v5.209c0,0.38,0.308,0.688,0.687,0.688c0.379,0,0.687-0.309,0.687-0.688V20.01 c0-0.379-0.308-0.687-0.687-0.687C20.502,19.323,20.194,19.631,20.194,20.01z"
                        ></path>
                      </svg>
                      <span className="font-medium">Line</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
}
