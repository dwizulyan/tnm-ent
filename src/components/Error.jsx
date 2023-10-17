import {useRouteError,} from "react-router-dom";

const Error = ()=>{
  const err = useRouteError(); 
  return(
    <div className="w-full h-screen bg-base-100 flex items-center flex-col justify-center gap-5">
      <img src="/waduh.jpg" className="w-[200px] h-[200px]"/>
      <div className="flex items-center justify-center flex-col">
      <p className="text-plain text-3xl font-black">Waduh 	&#128517;</p>
      <p className="text-plain text-xl font-bold">Ada Error</p>
      <p className="text-plain text-lg">{err.error.message}</p>
</div>
    </div>
  )
}

export default Error;
