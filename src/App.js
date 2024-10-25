import React from "react";

const App = () => {
  return (
    <div className="overflow-auto bg-[#FFDD55]">
      <div className="flex flex-col h-screen px-4 pt-40 gap-4 sm:pt-16 sm:justify-center lg:5/6 lg:mx-auto">
        <header className="bg-[#000000] w-full flex justify-between items-center rounded-b-[35.6px] absolute top-0 left-0 py-5 px-8">
          <a href="#">
            <img src="/logo.png" alt="LOGO" />
          </a>
          <ul className="md:flex gap-6 hidden text-white font-semibold text-[36px] lg:gap-8 lg:pr-4">
            <li>
              <a href="#" className="hover:text-[#FFDD55] duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFDD55] duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFDD55] duration-300">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFDD55] duration-300">
                Team
              </a>
            </li>
          </ul>
          <a href="#" className="md:hidden inline">
            <img src="/Hamburger_MD.png" alt="MENU" />
          </a>
        </header>

        {/* İçerik */}
        <div className="flex flex-col h-screen gap-[16px] pt-[32px] sm:justify-center lg:w-5/6 lg:mx-auto">
          <h1 className="font-extrabold text-[64px] flex flex-col leading:tight">
            Hello,<span>I'm</span>
          </h1>

          <div className="font-semibold text-[#474A57] text-[25px] xl:flex">
            <h2>UI/UX Designer</h2>
            <span className="hidden xl:inline">,&nbsp;</span>
            <h2>React developer</h2>
          </div>

          {/* İkonlar */}
          <div className="flex justify-start items-end gap-2 max-w-[511px] sm:absolute right-6 sm:max-w-[296px] md:max-w-[396px] lg:max-w-[420px] xl:max-w-[480px] lg:right-36 xl:right-48">
            <div>
              <img src="/profil.png" alt="avatar" />
            </div>
            <div className="flex flex-col gap-3 pb-4">
              <div>
                <a href="#">
                  <img src="/insta color.png" alt="instagram" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="/facebook color.png" alt="facebook" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="/twitter color.png" alt="twitter" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="/youtube color.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>

          {/* Butonlar */}
          <div className="text-white text-[18px] font-bold gap-6 flex pt-6 z-10">
            <a
              href="#"
              className="shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200 bg-black rounded-[15px] py-3 px-5"
            >
              Hire me
            </a>
            <a
              href="#"
              className="shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200 bg-black rounded-[15px] py-4 px-5"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="overflow-hidden h-screen flex justify-center items-center p-10">
        <div className="bg-[#106EE8] w-full flex items-center rounded-[20px] py-28 px-20 gap-20">
          <div className="w-full max-w-[385.08px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[480px]">
            <img src="/avatar.png" alt="avatarr" className="w-full" />
          </div>

          <div className="text-[#FFFFFF] text-[64px] font-extrabold flex flex-col gap-4">
            <h2>About me</h2>
            <div className="text-[#FFDD55] text-[32px] font-bold leading-tight">
              <h3>UI/UX Designer</h3>
              <h3>React Developer</h3>
            </div>
            <p className="text-[24px] text-[#FFFFFF] font-bold max-w-[664px]">
              Hello! I'm a UI/UX designer and React developer. Dive into my
              portfolio to discover a fusion of elegant design and seamless
              React development. Welcome to a world where creativity meets
              functionality!
            </p>
            <div className="text-white text-[18px] font-bold gap-6 flex pt-6 z-10">
              <a
                href="#"
                className="shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200 bg-black rounded-[15px] py-3 px-5"
              >
                Hire me
              </a>
              <a
                href="#"
                className="shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200 bg-black rounded-[15px] py-4 px-5"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="overflow-hidden bg-[#EB7711] h-screen flex flex-col justify-center items-center p-20 gap-20 mt-[100px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-extrabold text-black text-[64px]">Services</h2>
          <p className="text-[24px] text-[#FFFFFF] font-bold text-center w-3/4">
            Embark on a journey of digital transformation with services that
            blend design brilliance with cutting-edge development. Let's create
            experiences that resonate and applications that captivate.
          </p>
        </div>

        <div className="w-full flex justify-center items-stretch gap-40 text-white">
          <div className="bg-[#A259FF] w-2/3 gap-6 flex flex-col justify-center items-center relative pt-20 p-10 border-[3px] border-black shadow-[5px_5px_0_rgba(0,0,0,1)] rounded-[20px]">
            <div className="absolute text-[96px] font-extrabold flex justify-center items-center -top-16 left-[50%] -translate-x-[50%] w-[132px] h-[132px] rounded-full text-white bg-[#0ACF83]">
              1
            </div>
            <h3 className="text-center text-[40px] font-extrabold">
              UI/UX Designer
            </h3>
            <p className="font-bold text-[26px]">
              Crafting captivating interfaces that resonate. From wireframes to
              polished designs, I make sure your digital presence stands out
              with user-centric creativity.
            </p>
            <button className="text-[#000000] bg-[#FFDD55] text-2xl py-3 px-5 w-5/6 rounded-[10px] text-[32px] font-bold">
              Learn More
            </button>
          </div>

          <div className="bg-[#A259FF] w-2/3 gap-6 flex flex-col justify-center items-center relative pt-20 p-10 border-[3px] border-black shadow-[5px_5px_0_rgba(0,0,0,1)] rounded-[20px]">
            <div className="absolute text-[96px] font-extrabold flex justify-center items-center -top-16 left-[50%] -translate-x-[50%] w-[132px] h-[132px] rounded-full text-white bg-[#0ACF83]">
              2
            </div>
            <h3 className="text-center text-[40px] font-extrabold">
              React Developer
            </h3>
            <p className="font-bold text-[26px]">
              Turning app ideas into reality. As a React developer, I build
              sleek, cross-platform applications for a seamless user experience
              and efficient performance.
            </p>
            <button className="text-[#000000] bg-[#FFDD55] text-2xl py-3 px-5 w-5/6 rounded-[10px] text-[32px] font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-screen flex justify-center items-center bg-[#FFDD55]">
        <div className="flex flex-col bg-[#0ACF83] w-full h-4/6 p-10 justify-center items-center text-center text-white gap-10 ">
          <p className="text-[42px] font-extrabold">
            If You have any Query or Project ideas feel free to{" "}
          </p>
          <button className="text-black text-[64px] shadow-[-25px_33px_4.2px_rgba(0,0,0,1)] bg-[#FFDD55] rounded-[47px] py-4 px-32 font-bold">
            Contact Me
          </button>
        </div>
      </div>

      <div className="h-screen relative overflow-hidden flex flex-col justify-center items-center gap-10 bg-[#FFDD55]">
        <div className="flex justify-center items-center gap-10">
          <div className="w-[100px] h-[100px] text-[64px] font-extrabold text-center text-[#18191F]">
            <div className="relative h-[96px] w-[96px] rounded-full bg-white border-[1.56px] border-black">
              <div className="absolute h-[96px] w-[96px] rounded-full bg-[#FFDD55] border-[1.56px] border-black bottom-1 right-1 z-10">
                A
              </div>
            </div>
          </div>
          <h2 className="text-[48px] font-extrabold">Namık Korona</h2>
        </div>
        <p className="text-[40px] font-bold w-2/3 text-center">
          I Make as soon as Possible .You really like my work contact me and
          let’s Work Together.
        </p>

        <div className="flex gap-5 pt-7 justify-center items-center">
          <div>
            <a href="#">
              <img src="/insta color.png" alt="instagram" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/facebook color.png" alt="facebook" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/twitter color.png" alt="twitter" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/youtube color.png" alt="youtube" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-200 flex justify-between w-full font-medium py-4 px-6 text-sm md:text-[25px] bg-[#FFDD55] ">
        <div className="flex justify-start items-center gap-2 grow-[3]">
          <div>
            <img src="/Vector.png" alt="konum" />
          </div>
          <span>Türkiye</span>
        </div>

        <span className="grow-[2] text-center">
          © 2024, All rights reserved by Doge.
        </span>

        <ul className="flex gap-5 text-[#3B5999]">
          <li>
            <a href="#">Guides</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
