import ad1 from "@/assets/ad1.png";
import ad2 from "@/assets/ad2.png";
import ad3 from "@/assets/ad3.png";
import advantage2 from "@/assets/channel_cover.png";
import advantage3 from "@/assets/custom_plan.png";
import advantage1 from "@/assets/data-driver.png";
import advantage4 from "@/assets/effect_ruler.png";
export function Section3() {
  return (
    <section id="ad" className="w-[1200px] text-center flex flex-col">
      <div className="text-2xl">广告设计与制作</div>
      <div className="h-px bg-gray-100 my-5 w-full" />
      <div className="mb-10">Advertisement Design and Production</div>
      {/*  */}
      <div className="mb-20">
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">服务范围</div>
          <div className="text-base text-gray-500">
            我们提供从创意到落地的全流程广告设计服务
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <img src={advantage1} alt="1" />
            <div>平面广告设计</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">海报、画册、折页、展板、易拉宝等</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage2} alt="2" />
            <div>视频广告制作</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">宣传片、TVC广告、短视频、动画广告</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage3} alt="3" />
            <div>数字广告素材</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">信息流广告图、H5页面、动态广告</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage4} alt="4" />
            <div>品牌视觉设计</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">LOGO、VI系统、包装设计</div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border border-b-0 border-gray-100 py-5 mb-10">
        <div className="text-2xl mb-1">服务流程</div>
        <div className="text-lg text-gray-500">Service Process</div>
      </div>
      <div className="grid grid-cols-5 gap-5 mb-20">
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">需求沟通</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>了解客户品牌调性与广告目标 </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">创意策划</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>提供创意方案与视觉风格提案 </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">设计执行</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>专业团队完成高质量设计 </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">修改优化</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>根据反馈调整细节</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5 border-b-0">
          <div className="text-lg mb-4">成品交付</div>
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>提供高清源文件及适配各平台的格式</div>
          </div>
        </div>
      </div>
      <div>
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">我们的优势</div>
          <div className="text-base text-gray-500">OUR ADVANTAGE</div>
        </div>
        <div className="grid grid-cols-3 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <img src={ad1} alt="1" />
            <div className="font-bold text-gray-700">创意独特</div>
            <div className="text-sm">资深设计师团队，打造差异化视觉</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={ad2} alt="2" />
            <div className="font-bold text-gray-700">高效执行</div>
            <div className="text-sm">快速响应，严格把控交付时间</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={ad3} alt="3" />
            <div className="font-bold text-gray-700">多场景适配</div>
            <div className="text-sm">确保广告在不同媒介的展示效果</div>
          </div>
        </div>
      </div>
    </section>
  );
}
