import bgImg from "@/assets/contact_bg.jpg";
import { APILoader, InfoWindow, Map } from "@uiw/react-baidu-map";
import { useState } from "react";

export function Section4() {
  const [visiable, setVisiable] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [content, setContent] = useState(
    "上海市 <del>青浦区</del> 徐泾镇盈港东路",
  );

  function infoWindowRef(props) {
    if (props && props.infoWindow) {
      console.log("infoWindow:", props.infoWindow, props.map, props.BMap);
    }
  }
  return (
    <section id="contact" className="text-center w-full">
      <div
        className="w-full h-[200px] flex items-center justify-center flex-col text-primary"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-2xl font-bold mb-2">Contact Us</div>
        <div className="text-sm">
          Based on a new starting point, create a new situation
        </div>
      </div>
      <div className="flex justify-between items-center w-[1200px] mx-auto flex-col">
        <div className="w-full bg-amber-50">
          <APILoader akay="Qhfw6KkSVThiwcps8wv5fBkPv0KMQp9a">
            <Map
              center={{ lng: 121.424333, lat: 31.228604 }}
              style={{ width: "100%", height: "400px" }}
            >
              <InfoWindow
                isOpen
                // ref={infoWindowRef}
                // visiable={visiable}
                // isOpen={isOpen}
                // onClose={() => {
                //   console.log(":onClose");
                // }}
                position={{ lng: 121.424333, lat: 31.228604 }}
                // content={content}
                // title="地址信息一"
              >
                <div>
                  <div>12313</div>
                  <div>12313</div>
                  <div>12313</div>
                </div>
              </InfoWindow>
            </Map>
          </APILoader>
        </div>
        <div className="text-center py-10 shadow-lg mb-10 w-[900px] -mt-[100px] z-10 bg-white">
          <div className="mb-10">
            <div className="text-5xl text-primary/10">CONTACT US</div>
            <div className="text-primary -mt-4 text-xl">
              contact information
            </div>
          </div>
          <div className="w-1/2 text-sm text-gray-500 text-left mx-auto">
            <div>Service hours: Monday to Sunday (9:00-18:00)</div>
            <div>Contact Hotline: 18677315987</div>
            <div>Company email: cc5820125@qq.com</div>
            <div>
              Company Address: No. 1, 14th Floor, Building 18, Mianyang Economic
              Development Zone Wanda Plaza, No. 199, Middle Section of Mianzhou
              Avenue, Economic Development Zone, Mianyang City
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
