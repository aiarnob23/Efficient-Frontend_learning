import gsap from "gsap";
import "./GsapSvg.scss";
import { finalPath } from "./svgConstant";

const GsapSvg = () => {
  const string = document.querySelector(".string");

  const onMouseMove = (dets: MouseEvent) => {
    console.log("mouse moved");
    const path = `M 10 100 Q 250 ${dets.clientY} 490 100`;
    console.log(path);
    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to("svg path", {
      attr: { d: finalPath },
      duration: 12.5,
      ease: "elastic.out(1,0.2)",
    });
  };

    if (string) {
    string.addEventListener("mousemove", onMouseMove as EventListener);
    string.addEventListener("mouseleave", onMouseLeave as EventListener);
  }


  return (
    <div className="bg-white w-dvw">
      <div>
        <div className="string">
          <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 100 Q 250 100 490 100"
              stroke="white"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GsapSvg;
