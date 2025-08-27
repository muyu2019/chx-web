import ad1 from "@/assets/ad1.png";
import ad2 from "@/assets/ad2.png";
import ad3 from "@/assets/ad3.png";
import advantage2 from "@/assets/channel_cover.png";
import advantage3 from "@/assets/custom_plan.png";
import advantage1 from "@/assets/data-driver.png";
import advantage4 from "@/assets/effect_ruler.png";
import { GiComputing, GiPlatform } from "react-icons/gi";
import { TbCloudComputing, TbMessage2Search } from "react-icons/tb";
import { RiColorFilterLine } from "react-icons/ri";
import { MdDynamicFeed } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";

export function Section3() {
  return (
    <section id="ad" className="w-[1200px] text-center flex flex-col">
      <div className="text-2xl">Advertising Services</div>
      <div className="h-px bg-gray-100 my-5 w-full flex justify-center">
        <div className="-mt-1.5 h-3 w-3 bg-gray-200 rotate-45"></div>
      </div>
      <div className="mb-10">Advertising Design & Production</div>
      {/*  */}
      <div className="mb-20">
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">Service Scope</div>
          <div className="text-base text-gray-500">
            We provide end-to-end advertising design services from concept to
            execution
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <img src={advantage1} alt="1" />
            <div>Graphic design</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Posters, brochures, flyers, display boards, roll-up banners, etc.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage2} alt="2" />
            <div>Video production</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Promotional videos, TV commercials, short videos, animated ads
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage3} alt="3" />
            <div>Digital advertising materials</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">Feed ads, H5 pages, dynamic ads</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage4} alt="4" />
            <div>Brand visual design</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">LOGO, VI system, packaging design</div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border border-b-0 border-gray-100 py-5 mb-10">
        <div className="text-2xl mb-1">Service Process</div>
      </div>
      <div className="grid grid-cols-5 gap-5 mb-20">
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Requirement communication</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>Understand client brand tone and advertising goals</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Creative planning</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>Provide creative proposals and visual style concepts</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Design execution</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>High-quality design delivery by a professional team</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Revisions and optimization</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>Adjust details based on feedback</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Final delivery</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>
              Provide high-resolution source files and formats adapted for
              various platforms
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">Core Advantages</div>
        </div>
        <div className="grid grid-cols-3 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <img src={ad1} alt="1" />
            <div className="font-bold text-gray-700">Unique creativity</div>
            <div className="text-sm">
              Experienced design team creating differentiated visuals
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={ad2} alt="2" />
            <div className="font-bold text-gray-700">Efficient execution</div>
            <div className="text-sm">
              Quick response and strict adherence to deadlines
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={ad3} alt="3" />
            <div className="font-bold text-gray-700">
              Multi-scenario adaptation
            </div>
            <div className="text-sm">
              Ensure optimal display effects across different media
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mb-10">Internet Advertising Placement</div>
      {/*  */}
      <div className="mb-20">
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">Service Content</div>
          <div className="text-base text-gray-500">
            We help enterprises place targeted ads on mainstream internet
            platforms to enhance brand exposure and conversion:
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <div className="h-28 w-28 border-4 border-red-300 rounded-full flex justify-center items-center">
              <MdDynamicFeed fontSize={50} className="text-red-300" />
            </div>
            <div>Feed ads</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Tencent Guangdiantong, Ocean Engine, Kuaishou Magnet Engine, etc.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-28 w-28 border-4 border-blue-400 rounded-full flex justify-center items-center">
              <TbMessage2Search fontSize={50} className="text-blue-400" />
            </div>
            <div>Search engine ads</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">Baidu, 360, Sogou SEM</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-28 w-28 border-4 border-teal-400 rounded-full flex justify-center items-center">
              <IoShareSocialOutline fontSize={50} className="text-teal-400" />
            </div>
            <div>Social media ads</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">WeChat Moments, Weibo, Xiaohongshu</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-28 w-28 border-4 border-amber-400 rounded-full flex justify-center items-center">
              <CgShoppingBag fontSize={50} className="text-amber-400" />
            </div>
            <div>E-commerce ads</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Tmall, JD, Pinduoduo in-platform promotions
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-28 w-28 border-4 border-orange-400 rounded-full flex justify-center items-center">
              <GiComputing fontSize={50} className="text-orange-400" />
            </div>
            <div>Programmatic buying (DSP)</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Cross-platform intelligent ad placement
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border border-b-0 border-gray-100 py-5 mb-10">
        <div className="text-2xl mb-1">Placement Strategy</div>
      </div>
      <div className="grid grid-cols-4 gap-5 mb-20">
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Precise targeting</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>
              Lock target audiences based on user profiles (age, interests,
              location, etc.)
            </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">A/B testing</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>
              Optimize ad creatives and landing pages to improve click-through
              rates
            </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Data analysis</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>
              Real-time monitoring of ad performance and budget adjustment
            </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">Performance optimization</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>Reduce customer acquisition costs and improve ROI</div>
          </div>
        </div>
      </div>
      <div>
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">Service Advantages</div>
        </div>
        <div className="grid grid-cols-3 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <GiPlatform fontSize={60} className="text-primary" />
            <div className="font-bold text-gray-700">
              Rich platform resources
            </div>
            <div className="text-sm">
              Deep collaborations with major media platforms for premium traffic
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <TbCloudComputing fontSize={60} className="text-primary" />
            <div className="font-bold text-gray-700">Technology-enabled</div>
            <div className="text-sm">
              AI algorithm optimization for improved ad efficiency
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <RiColorFilterLine fontSize={60} className="text-primary" />
            <div className="font-bold text-gray-700">
              Transparent management
            </div>
            <div className="text-sm">
              Detailed data reporting for clear visibility of ad performance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
