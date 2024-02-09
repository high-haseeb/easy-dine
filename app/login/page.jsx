import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-sideBarcol w-screen h-screen">
      <div className="flex items-center justify-center text-iconcol text-4xl w-full h-2/3">
        <Image
          src={"/png/pic_1.png"}
          width={400}
          height={100}
          alt="logo"
          className="object-cover"
        />
        <div className="flex flex-col gap-4 w-1/3  ">
          <div>Login Kunden</div>

          <form className="flex  text-sm gap-4 items-start justify-center mt-4">
            <fieldset className="input">
              <legend>Kunden nr.</legend>
              <input type="text" className="bg-sideBarcol p-1 w-full" />
            </fieldset>
            <fieldset className="input">
              <legend>Email</legend>
              <input type="text" className="bg-sideBarcol p-1 w-full" />
            </fieldset>
            <div className="flex flex-col gap-2">
              <fieldset className="input">
                <legend>Password</legend>
                <input type="text" className="bg-sideBarcol p-1 w-full mr-4" />
              </fieldset>
              <button className="font-bold">Forgot password?</button>
            </div>
            <button
              type="submit"
              className="rounded-md bg-brAqua px-4 py-0 text-white font-bold border border-white h-10 ml-10 mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
const Footer = () => {
  return (
    <div className="bg-backColor h-1/3 w-screen text-iconcol text-sm p-8 flex items-end justify-center">
      <div className="flex items-center justify-between w-full">
        <div className="logo flex gap-4 font-bold">
          Powered by
          <Image
            src={"/smatik_logo.png"}
            width={80}
            height={100}
            className="object-cover invert"
            alt="smatik-logo"
          />
        </div>
        <div className="flex gap-4">
          <button>Cookies Policy</button>
          <button>Privacy Policy</button>
          <button>Terms & Conditions</button>
        </div>
      </div>
    </div>
  );
};
