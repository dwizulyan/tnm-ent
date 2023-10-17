import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div
      id="social"
      className="w-full min-h-[60vh] bg-base-100 flex flex-col lg:flex-row justify-between relative items-center p-5 lg:p-20 gap-5"
    >
      <div className="w-full h-[300px] py-10 lg:py-5 relative">
        <h1 className="text-2xl font-black uppercase text-plain w-max">
          Other Links
        </h1>
        <div className="flex flex-col gap-2 mt-3">
          <a 
            href="https://www.tnmbounty.rf.gd"
            className="text-plain font-medium hover:text-accent w-max transition-all">
            TNM Bounty List (Credit to faktur)
          </a>
          <a 
            href="https://open.spotify.com/show/3b7XhrvVHPyqX8lc0pHgwY" 
            className="text-plain font-medium hover:text-accent w-max transition-all">Lunatic Podcast</a>
          <a href="/tnm-ent/good-stuff" className="text-plain font-medium hover:text-accent transition-all">Good Stuff</a>
        </div>
      </div>
      <div className="w-full absolute left-0 bottom-0 p-5 lg:px-20">
        <h1 className="text-plain">Created by @illmindofdwi_</h1>
        <p className="text-plain">Thanks for visiting boii, btw give me a feedback lah, <Link to="/tnm-ent/feedback" className="text-accent underline">di sini</Link></p>
      </div>
    </div>
  );
};

export default Footer;
