import { useGSAP } from "@gsap/react";
import "./Scroll.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Scroll1 = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll(".box").forEach((card) => {
      gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          markers: true,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen mt-[200px] min-w-dvw flex flex-col gap-[170px] justify-center items-center">
      <div
        className="box sticky flex flex-col  top-[200px] space-y-3 text-center bg-slate-800 px-10 py-20 rounded-lg"
      >
        <img
          className="h-[40vh] w-[30vw] rounded-lg"
          src="/img/test1.png"
          alt=""
        />
        <h1 className="text-3xl my-5 font-bold text-teal-400">Diverse Blog</h1>
        <p className="text-xl font-semibold text-teal-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="box sticky top-[200px] flex flex-col space-y-3 text-center bg-slate-800 px-10 py-20 rounded-lg">
        <img
          className="h-[40vh] w-[30vw] rounded-lg"
          src="/img/test2.png"
          alt=""
        />
        <h1 className="text-3xl my-5 font-bold text-teal-400">Diverse Blog</h1>
        <p className="text-xl font-semibold text-teal-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="box sticky top-[200px] flex flex-col space-y-3 text-center bg-slate-800 px-10 py-20 rounded-lg">
        <img
          className="h-[40vh] w-[30vw] rounded-lg"
          src="/img/test3.png"
          alt=""
        />
        <h1 className="text-3xl my-5 font-bold text-teal-400">Diverse Blog</h1>
        <p className="text-xl font-semibold text-teal-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="box sticky top-[200px] flex flex-col space-y-3 text-center bg-slate-800 px-10 py-20 rounded-lg">
        <img
          className="h-[40vh] w-[30vw] rounded-lg"
          src="/img/test3.png"
          alt=""
        />
        <h1 className="text-3xl my-5 font-bold text-teal-400">Diverse Blog</h1>
        <p className="text-xl font-semibold text-teal-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Scroll1;
