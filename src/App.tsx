import { Section1, Section2, Section3, Section4 } from "@/components";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-[1200px]">
      <header className="bg-primary py-10 text-white flex justify-center">
        <div className="flex justify-between items-center px-5 w-[1200px]">
          <div>
            Mianyang Economic Development Zone Chengxing Marketing Planning
            Studio
          </div>
          <div className="flex gap-8 text-sm font-bold">
            <a href="#home">Home</a>
            <a href="#market">Marketing Services</a>
            <a href="#ad">Advertising Services</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center gap-20">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <footer className="bg-primary flex justify-center">
        <div className="flex justify-between items-center w-[1200px] text-white/50 py-5 text-xs">
          <div className="w-1/4 leading-loose">
            <div className="text-base mb-3">
              Mianyang Economic Development Zone Chengxing Marketing Planning
              Studio
            </div>
            <div className="flex items-center gap-2">
              <LiaPhoneVolumeSolid className="text-base" /> Contact Hotline:
              18677315987
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMailOutline className="text-base" />
              Email: 310389047@qq.com
            </div>
            <div className="flex items-start gap-2">
              <MdOutlineLocationOn className="text-base shrink-0" />
              No. 1, 14th Floor, Building 18, Mianyang Economic Development Zone
              Wanda Plaza, No. 199, Middle Section of Mianzhou Avenue, Economic
              Development Zone, Mianyang City
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end gap-4">
            <div className="flex gap-2 text-xs divide-x-1">
              <div className="pr-2">
                <a href="#home">Home</a>
              </div>
              <div className="pr-2">
                <a href="#market">Marketing Services</a>
              </div>
              <div className="pr-2">
                <a href="#ad">Advertising Services</a>
              </div>
              <div>
                <a href="#contact">Contact Us</a>
              </div>
            </div>
            <div>Copyright @2025. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
