import ReactTypingEffect from "react-typing-effect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="hero overflow-hidden bg-base-100 w-full h-screen">
      <div 
        data-aos="fade-down"
        data-aos-delay={2000}
        className="w-[2px] h-screen overflow-hidden absolute bg-primary absolute left-[15%] lg:left-[35%] top-0">
        <span className="h-[5%] w-full bg-accent block animationToBottom absolute top-0"></span>
      </div>
      <div 
        data-aos="fade-up"
        data-aos-delay={2200}
        className="w-[2px] h-screen overflow-hidden absolute bg-primary absolute right-[15%] lg:right-[35%] top-0">
        <span className="h-[5%] bottom-0 w-full bg-accent block animationToTop absolute"></span>
      </div>
      <div className="w-full overflow-hidden h-screen flex items-center justify-center relative isolate flex-col">
        <div className="w-full h-[200px] absolute z-[-1] flex">
          <div
            data-aos="fade-right"
            data-aos-delay={2200}
            className="w-2/4 h-[2px] bg-[rgb(56,61,68)] self-end relative"
          >
            <span className="w-[20%] lg:w-[5%] h-full bg-accent block animationToRight absolute top-0"></span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay={1800}
            className="w-2/4 h-[2px] bg-[rgb(56,61,68)] relative"
          >
            <span className="w-[20%] lg:w-[5%] h-full bg-accent block animationToLeft absolute top-0"></span>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center absolute left-0 top-0 z-[-1]"></div>
        <div className="w-[225px] h-[225px]"></div>
        <div
          data-aos="zoom-in"
          data-aos-delay={1200}
          className="w-[225px] h-[225px] border-4 border-plain overflow-hidden rounded-full"
        >
          <img src="./logo.jpg" />
        </div>
        <div className="w-[420px] h-[200px] flex flex-col items-center mt-5 justify-start">
          <h1
            data-aos="fade-up"
            data-aos-delay={1500}
            className="text-2xl lg:text-3xl font-black text-plain z-[99]"
          >
            TEMPAT NYARI{" "}
            <ReactTypingEffect
              className="text-accent"
              text={["", "MUSUH", "MISUHAN"]}
              speed={200}
              eraseSpeed={200}
              eraseDelay={2000}
              typingDelay={400}
            />
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay={1700}
            className="text-plain font-black text-2xl lg:text-3xl"
          >ENTERTAINMENT</h1>
          <FontAwesomeIcon 
            data-aos="fade-up"
            data-aos-delay={
              2000
            }
            icon={faChevronDown} 
            onClick={()=>{
              window.location.href="/#about"
            }}
            className="hover:cursor-pointer hover:mt-6 transition-all px-2 py-1 text-plain text-lg mt-4"/>
        </div>
      </div>
    </div>
  );
};


export default Hero;
