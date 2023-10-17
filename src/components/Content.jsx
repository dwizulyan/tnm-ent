import PropTypes from "prop-types";

const Content = () => {
  return (
    <div
      className="w-full min-h-screen bg-base-100 lg:p-20 px-5 py-20"
      id="content"
    >
      <h1 className="text-plain mb-5 text-2xl font-black uppercase">Content</h1>
      <div className="w-full h-full flex flex-col items-center lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-5">
        <ContentCard name={"tnm live"}/>
        <ContentCard name={"subathon"} delay={200}/>
        <ContentCard name={"lunatic podcast"} delay={400}/>
        <ContentCard name={"lunatic podcast special"} delay={600}/>
        <ContentCard name={"exclusive membership"} delay={800}/>
        <ContentCard name={"kdsbbs"} delay={1000}/>
      </div>
    </div>
  );
};

const ContentCard = ({name,delay}) =>{
  return(
<div 
      data-aos={"fade-right"}
      data-aos-delay={delay}
      className="w-full p-5 lg:p-20 h-[250px] mt-5 lg:mt-1 flex items-center justify-center bg-primary ">
          <h1 className="text-plain font-black text-4xl uppercase text-center">{name}</h1>
        </div>
  )
}

ContentCard.propTypes = {
  name : PropTypes.string,
}

export default Content;
