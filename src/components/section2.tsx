import advantage2 from "@/assets/channel_cover.png";
import advantage3 from "@/assets/custom_plan.png";
import advantage1 from "@/assets/data-driver.png";
import advantage4 from "@/assets/effect_ruler.png";
export function Section2() {
  return (
    <section className="w-[1200px] text-center" id="market">
      <div className="text-2xl">Marketing Services</div>
      <div className="h-px bg-gray-100 my-5 w-full flex justify-center">
        <div className="-mt-1.5 h-3 w-3 bg-gray-200 rotate-45"></div>
      </div>
      <div className="mb-10">
        We provide comprehensive marketing solutions to help enterprises enhance
        brand competitiveness, accurately reach target customers, and achieve
        sustainable growth. Through data-driven strategies, innovative marketing
        techniques, and an efficient execution team, we assist clients in
        standing out in a highly competitive market environment.
      </div>
      <div className="border border-b-0 border-gray-100 py-5 mb-10">
        <div className="text-2xl mb-1">Core Services</div>
      </div>
      <div className="grid grid-cols-5 gap-5 mb-20 text-left">
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">Market Research & Analysis</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- Industry trend research</div>
            <div>- Consumer behavior analysis</div>
            <div>- Competitor insights</div>
            <div>- Market opportunity exploration</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">Brand Strategy Planning</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- Brand positioning and image building</div>
            <div>- Brand storytelling</div>
            <div>- Brand communication strategies</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">Digital Marketing</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>
              - Social media marketing (WeChat, Weibo, Douyin, Xiaohongshu,
              etc.)
            </div>
            <div>
              - Search engine optimization (SEO) and search engine marketing
              (SEM)
            </div>
            <div>- Content marketing (copywriting, videos, graphics, etc.)</div>
            <div>- KOL/KOC collaborations and influencer marketing</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">Offline Marketing Activities</div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- Exhibition planning and execution</div>
            <div>- Product launch events</div>
            <div>- Promotional activities and ground promotions</div>
          </div>
        </div>
        <div className="border border-gray-100 p-5">
          <div className="text-lg mb-4">
            Customer Relationship Management (CRM)
          </div>
          <div className="text-sm text-left text-gray-500 leading-relaxed">
            <div>- Membership system development</div>
            <div>
              - Private traffic operation (communities, WeChat ecosystem)
            </div>
            <div>- Customer loyalty enhancement programs</div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="border border-b-0 border-gray-100 py-5 mb-10">
          <div className="text-2xl mb-1">Service Advantages</div>
          <div className="text-base text-gray-500">
            Based on a new starting point, creating a new situation
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 text-gray-500 border border-t-0 border-gray-100 pb-5">
          <div className="flex flex-col items-center gap-4">
            <img src={advantage1} alt="1" />
            <div>Data-driven</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Precise marketing strategies based on big data analysis.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage2} alt="2" />
            <div>Omni-channel coverage</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Integrated online and offline marketing to maximize brand
              exposure.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage3} alt="3" />
            <div>Customized solutions</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Personalized services tailored to enterprise needs.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={advantage4} alt="4" />
            <div>Measurable results</div>
            <div className="h-0.5 bg-gray-300 w-1/3" />
            <div className="text-sm">
              Real-time data monitoring to optimize ROI.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
