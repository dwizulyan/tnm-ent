const About = ()=>{
  return(
    <div className="bg-accent w-full min-h-screen flex items-center justify-center py-20" id="about">
      <div className="grid grid-rows-4 grid-cols-1 overflow-hidden lg:grid-cols-2 lg:grid-rows-2 gap-10">
        <div className="max-w-[300px] h-[160px]">
          <h1 
            data-aos="fade-right"
            className="text-plain text-xl font-bold uppercase after:content-[''] after:block after:w-full after:h-[15px] isolate after:z-[-1] after:bg-base-100 w-max after:bottom-0 after:absolute relative left-0">WHO ARE WE ?</h1>
          <p 
            data-aos="fade-right"
            data-aos-delay="200"
            className="mt-3 text-plain font-medium">TNM adalah salah satu channel youtube entertainment dan berita, yang berfokus pada fenomena fenomena diluar nalar yang ada di bumi ini.</p>
        </div>
        <div 
          className="max-w-[300px] h-[160px]">
          <h1 
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-plain text-xl font-bold uppercase after:content-[''] after:block after:w-full after:h-[15px] isolate after:z-[-1] after:bg-base-100 w-max after:bottom-0 after:absolute relative left-0">How We Created ?</h1>
          <p 
            data-aos="fade-left"
            data-aos-delay="600"
            className="mt-3 text-plain font-medium">Gatau Karna gwejh bukan yang bikin TNM, nanti tanya banh Yanto</p>
        </div>
        <div className="max-w-[300px] h-[160px]">
          <h1 
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-plain text-xl font-bold uppercase after:content-[''] after:block after:w-full after:h-[15px] isolate after:z-[-1] after:bg-base-100 w-max after:bottom-0 after:absolute relative left-0">Why TNM ?</h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="1000"
            className="mt-3 text-plain font-medium">Disini anda bisa bertemu dengan komunitas TNM yang ajaib, juga baik hati, gorgeous, dan tydack sombong. (dan wibu)</p>
        </div>
        <div className="max-w-[300px] h-[160px]">
          <h1 
            data-aos="fade-up"
            data-aos-delay="1200"
            className="text-plain text-xl font-bold uppercase after:content-[''] after:block after:w-full after:h-[15px] isolate after:z-[-1] after:bg-base-100 w-max after:bottom-0 after:absolute relative left-0">YANTO</h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="1400"
            className="mt-3 text-plain font-medium">Abang Abang bekasi gemoy.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
