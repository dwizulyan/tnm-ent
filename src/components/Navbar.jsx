import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const handleActive = ()=>{
    !isActive ? setIsActive(true) : setIsActive(false)
  }
  return (
    <nav className="navbar w-full fixed top-0 left-0 z-[99] h-16 flex justify-between px-5 lg:px-20 items-center bg-base-100">
      <div className="w-[33%] flex gap-2 items-center">
        <FontAwesomeIcon
          onClick={()=> handleActive()}
          data-aos="fade-right"
          data-aos-delay={500}
          icon={faBars} 
          className="text-plain text-2xl lg:hidden"/>
        <Link
          to="/tnm-ent/"
          data-aos-once="true"
          data-aos="fade-down" 
          className="text-plain font-black text-2xl hover:cursor-pointer">TNM</Link>
      </div>
      <div className={isActive ? (`w-full justify-center z-[-1] items-center lg:w-[35%] absolute h-screen bg-accent lg:bg-transparent lg:relative left-0 top-0 lg:h-full flex gap-16 lg:left-0 text-3xl lg:flex-row flex-col lg:text-base transition-all lg:justify-between lg:items-center`):(`w-full justify-center z-[-1] items-center lg:w-[35%] absolute h-screen bg-accent lg:bg-transparent lg:relative left-[-100%] top-0 lg:h-full lg:left-0 flex gap-16 text-3xl lg:flex-row flex-col lg:text-base transition-all lg:justify-between lg:items-center`)}>
        <HashLink
          to="/tnm-ent/#about"
          onClick={()=>{
            setIsActive(false)
          }}
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay={200}          
          className="link font-medium text-plain hover:text-accent transition-all">
          About
        </HashLink>
        <HashLink 
          to="/tnm-ent/#ourteam"
          onClick={()=>{
            setIsActive(false)
          }}
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay={400}
          className="link font-medium text-plain hover:text-accent transition-all">
          Team
        </HashLink>
        <HashLink
          to="/tnm-ent/#content"
          onClick={()=>{
            setIsActive(false)
          }}
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay={400}
          className="link font-medium text-plain hover:text-accent transition-all">
          Content
        </HashLink>
        <HashLink
          to="/tnm-ent/#social"
          onClick={()=>{
            setIsActive(false)
          }}
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay={600}
          className="link font-medium text-plain hover:text-accent transition-all">
          Social
        </HashLink>
      </div>
      <div className="w-[33%] h-full flex items-center justify-end">
        <button 
          onClick={()=>{
            window.location.href="https://www.youtube.com/@andriTNM"
          }}
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-delay={1000}
          className="font-bold py-2 px-3 bg-plain text-base-100 text-sm transition-all hover:bg-accent hover:text-plain">
            SUBSCRIBE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
