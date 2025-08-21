import { useGSAP } from "@gsap/react";
import "./Animation.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FadeIn } from "../../components/FadeIn";
const Animation = () => {
  const gsapRef = useRef(null);
  const rotateRef = useRef(null);
  const { contextSafe } = useGSAP();
  // useGSAP(() => {
  //   gsap.from(rotateRef.current, {
  //     x: 1300,
  //     rotate: 360,
  //     duration: 2,
  //   });
  //   gsap.to(gsapRef.current, {
  //     x: x,
  //     duration: 2,
  //   });
  // }, [gsapRef, rotateRef, x, random]);
  useEffect(() => {
    rotateBox();
  }, []);

  const rotateBox = contextSafe(function () {
    gsap.from(rotateRef.current, {
      x: 1300,
      rotate: 360,
      duration: 2,
    });
    gsap.to(gsapRef.current, {
      x: 1200,
      duration: 2,
    });
  });
  return (
    <div className="animate-container">
      <div className="boxes">
        {/* <div className="box-1">
          <h1>boxxxxx</h1>
        </div> */}
        <div ref={gsapRef} className="box-2">
          Gsap
        </div>
        <div ref={rotateRef} className="box-2">
          Gsap
        </div>
        <div>
          <button
            onClick={() => {
              rotateBox();
            }}
            className="button-animate"
          >
            Animate
          </button>
        </div>
        <div className="text-white">
          <FadeIn>
            <p>Test fade in</p>
            <p>With stagger effect</p>
          </FadeIn>
        </div>
        <div className="text-white">
          <FadeIn
            as="div"
            className="my-container"
            scrollTrigger={{ start: "top 90%", scrub: true }}
            vars={{ y: 100, opacity: 0 ,rotation:360}}
          >
            <div>Content that fades in on scroll</div>
          </FadeIn>
        </div>
        <div className="text-white">
          //{" "}
          <FadeIn
            vars={{ scale: 0.5, rotation: 180 }}
            onComplete={() => console.log("Animation finished!")}
          >
            <button>Animated Button</button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
export default Animation;
