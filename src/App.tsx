import { Section1, Section2, Section3, Section4 } from "@/components";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-[1200px]">
      <header className="bg-primary py-10 text-white flex justify-center">
        <div className="flex justify-between items-center px-5 w-[1200px]">
          <div>name</div>
          <div className="flex gap-10 text-sm font-bold">
            <a href="#home">首页</a>
            <a href="#market">市场营销服务</a>
            <a href="#ad">广告业务</a>
            <a href="#contact">联系我们</a>
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
            <div className="text-base">
              Mianyang Economic Development Zone Chengxing Marketing Planning
              Studio
            </div>
            <div>Contact Hotline: 18677315987</div>
            <div>Email: cc5820125@qq.com</div>
            <div>
              Company Address: No. 1, 14th Floor, Building 18, Mianyang Economic
              Development Zone Wanda Plaza, No. 199, Middle Section of Mianzhou
              Avenue, Economic Development Zone, Mianyang City
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end gap-4">
            <div className="flex gap-2 text-xs">
              <div>Home</div>
              <div>Market Marketing Services</div>
              <div>Advertising Services</div>
              <div>Contact Us</div>
            </div>
            <div>Copyright @ 2018 . All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
