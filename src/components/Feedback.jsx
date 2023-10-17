const Feedback = () => {
  return (
    <div className="w-full min-h-screen bg-base-100 p-5 flex items-center flex-col">
      <h1 className="text-4xl font-bold text-plain text-center">Feedback</h1>
      <form className="w-full max-w-[600px] min-h-screen flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1">
          <label for="name" className="text-plain text-base">
            Name
          </label>
          <input type="text" id="name" className="p-2" />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label for="name" className="text-plain text-base">
            Menurutmu apakah kombinasi warnanya sudah bagus ?, jika belum berilah saran kamu.
          </label>
          <textarea type="text" id="name" className="p-2" rows="5"></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label for="name" className="text-plain text-base">
            Apakah Animasinya sudah bagus ?, jika belum berikan pendapat anda. 
          </label>
          <textarea type="text" id="name" className="p-2" rows='3'></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label for="name" className="text-plain text-lg">
            Punya pendapat lain ?
          </label>
          <textarea type="text" id="name" className="p-2" rows='15'></textarea>
        </div>
        <button className="p-3 bg-plain text-base-100 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
