import homeBg from "@/assets/home_bg.jpg";

export function Section1() {
  return (
    <section
      id="home"
      className="aspect-1920/860 w-[1200px] flex flex-col justify-center items-center text-white/80"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-[600px] text-center">
        <div className="text-2xl mb-2">
          Professional marketing and advertising production promotion agencies
        </div>
        <div className="text-sm">
          Apply scientific methods to identify suitable marketing strategies for
          businesses, propose feasible solutions to improve their market
          promotion, and enhance their overall marketing level.
        </div>
      </div>
    </section>
  );
}
