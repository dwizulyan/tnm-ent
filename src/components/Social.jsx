import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="py-20 w-full h-[30vh] bg-plain flex items-center justify-center">
      <p data-aos="fade-left" className="p-4 text-3xl border-2 border-base-100">
        SOCIAL
      </p>
      <div 
        data-aos="fade-right"
        data-aos-delay={500}
        className="flex gap-5 p-5 bg-base-100"
      >
        <a href="https://twitter.com/lunatictwister" data-aos="fade-up" data-aos-delay="1000">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl text-plain" />
        </a>
        <a href="https://www.instagram.com/lunatictwister/" data-aos="fade-up" data-aos-delay="1200">
          <FontAwesomeIcon icon={faTwitter} className="text-3xl text-plain" />
        </a>
      </div>
    </div>
  );
};
export default Social;
