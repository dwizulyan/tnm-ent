import PropTypes from "prop-types";

const OurTeam = () => {
  return (
    <div id="ourteam" className="w-full min-h-screen bg-primary p-5 py-20 lg:p-20 flex flex-col">
      <h1 className="text-xl lg:text-4xl text-plain font-black">OUR TEAM</h1>
      <TeamCard
        name="YANTOO"
        delay={100}
        description="Talent utama TNM, gamer, wibu, anomaly yang kalo ngejoke bunyinya gerrrr gerrrrrr geerrrr"
      />
      <TeamCard
        name="ALL MIGHTY CURATOR"
        delay={300}
        description="Curator nya bang andri, ibu negara, jokes uiuiuiui"
      />
      <TeamCard
        name="BANG EDITOR (GTW NAMANYA)"
        delay={300}
        description="Editornya si Anomaly, konon dulunya editor ini bernama Windu."
      />
      <TeamCard
        name="BANG SCRIPT WRITER (GTW NAMANYA)"
        delay={600}
        description="Script Writernya Tuan Yanto, wibu"
      />
    </div>
  );
};

const TeamCard = ({ name, description, delay }) => {
  return (
    <div
      data-aos="fade-right"
      className="w-full isolate overflow-hidden bg-base-100 mt-5 h-[200px] team-andri relative"
    >
      <img 
        data-aos="fade-left"
        data-aos-delay={600 + delay}
        src="/logo.jpg" className="z-[-1] h-[200%] rounded-full right-[-25%] lg:right-0 lg:top-[-50%] top-[-25%] absolute right-0"/>
      <div
        data-aos="fade-right"
        data-aos-delay={400 + delay}
        className="bg-gradient-to-r p-5 from-[rgba(0,0,0,1)] h-full to-[rgba(0,0,0,0.1)]"
      >
        <h1
          data-aos="fade-right"
          data-aos-delay={600 + delay}
          className="text-2xl lg:text-4xl text-plain font-bold "
        >
          {name}
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay={800 + delay}
          className="text-lg lg:text-xl mt-1 lg:mt-5 lg:w-[60%] text-plain font-medium"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  delay: PropTypes.number,
};

export default OurTeam;
