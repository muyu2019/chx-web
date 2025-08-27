import advantage2 from "@/assets/channel_cover.png";
import advantage3 from "@/assets/custom_plan.png";
import advantage1 from "@/assets/data-driver.png";
import advantage4 from "@/assets/effect_ruler.png";
export function Section2() {
  return (
    <section className="w-[1200px] text-center" id="market">
      <div className="text-2xl">市场营销服务</div>
      <div className="h-px bg-gray-100 my-5 w-full" />
      <div className="mb-10">
        我们为企业提供全方位的市场营销解决方案，助力品牌提升市场竞争力，精准触达目标客户，实现可持续增长。通过数据驱动策略、创新营销手段和高效的执行团队，我们帮助客户在激烈的市场环境中脱颖而出。
      </div>
      <div className="border border-b-0 border-gray-100 py-5 mb-10">
        <div className="text-2xl mb-1">核心服务</div>
        <div className="text-lg text-gray-500">Core Services</div>
      </div>
      <div className="grid grid-cols-5 gap-5 mb-20">
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">市场调研与分析</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- 行业趋势研究 </div>
            <div>- 消费者行为分析 </div>
            <div>- 竞争对手洞察 </div>
            <div>- 市场机会挖掘 </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">品牌战略规划</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- 品牌定位与形象塑造 </div>
            <div>- 品牌故事打造 </div>
            <div>- 品牌传播策略 </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">数字营销</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- 社交媒体营销（微信、微博、抖音、小红书等） </div>
            <div>- 搜索引擎优化（SEO）与搜索引擎营销（SEM） </div>
            <div>- 内容营销（文案、视频、图文等） </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">线下营销活动</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- 展会策划与执行 </div>
            <div>- 产品发布会 </div>
            <div>- 促销活动与地推 </div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">客户关系管理（CRM）</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- 会员体系搭建 </div>
            <div>- 私域流量运营（社群、微信生态） </div>
            <div>- 客户忠诚度提升方案 </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">我们的优势</div>
          <div className="text-base text-gray-500">立足新起点，开创新局面</div>
        </div>
        <div className="grid grid-cols-4 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <img src={advantage1} alt="1" />
            <div>数据驱动</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">基于大数据分析，精准制定营销策略。</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage2} alt="2" />
            <div>全渠道覆盖</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">线上线下整合营销，最大化品牌曝光。</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage3} alt="3" />
            <div>定制化方案</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">根据企业需求，提供个性化服务。</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage4} alt="4" />
            <div>效果可衡量</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">实时监测数据，优化投放ROI。</div>
          </div>
        </div>
      </div>
    </section>
  );
}
