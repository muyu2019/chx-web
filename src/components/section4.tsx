import bgImg from "@/assets/contact_bg.jpg";
import { APILoader, InfoWindow, Map } from "@uiw/react-baidu-map";
import {
  MdAccessTime,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export function Section4() {
  const location = { lng: 104.79, lat: 31.41 };
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
            <Map center={location} style={{ width: "100%", height: "400px" }}>
              <InfoWindow isOpen position={location}>
                <div className="text-xs">
                  <div>
                    No. 1, 14th Floor, Building 18, Mianyang Economic
                    Development Zone Wanda Plaza, No. 199, Middle Section of
                    Mianzhou Avenue, Economic Development Zone, Mianyang City
                  </div>
                </div>
              </InfoWindow>
            </Map>
          </APILoader>
        </div>
        <div className="text-center py-20 shadow-lg mb-10 w-[900px] -mt-[100px] z-10 bg-white">
          <div className="mb-10">
            <div className="text-[60px] text-primary/10 tracking-wider ">CONTACT US</div>
            <div className="text-primary -mt-12 text-3xl tracking-wide">
              contact information
            </div>
          </div>
          <div className="w-1/2 text-sm text-gray-500 text-left mx-auto flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MdAccessTime className="shrink-0 text-primary text-lg" /> Service
              hours: Monday to Sunday (9:00-18:00)
            </div>
            <div className="flex items-center gap-2">
              <LiaPhoneVolumeSolid className="shrink-0 text-primary text-lg" />{" "}
              Contact Hotline: 18677315987
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMailOutline className="shrink-0 text-primary text-lg" />{" "}
              Company email: 310389047@qq.com
            </div>
            <div className="flex items-start gap-1">
              <MdOutlineLocationOn className="shrink-0 text-primary text-lg" />
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
