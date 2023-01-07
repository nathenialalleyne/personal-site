export function Contact() {
  return (
    <section className="w-screen h-fit flex flex-col">
      <div className="w-full h-full flex flex-col items-center ">
        <h3 className="text-8xl font-bold text-white ">
          WANT TO GET IN TOUCH?
        </h3>
        <div className=" flex w-2/4 flex-col  m-10">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-white">Name</label>
              <input
                className="border-2 h-10 outline-0 p-1"
                placeholder="Name"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-white">Email</label>
              <input
                className="border-2 h-10 outline-0 p-1"
                placeholder="Email"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-white ">Enter Your Message</label>
              <textarea
                className="w-full outline-0 p-1"
                placeholder="Your Message"
                rows="8"
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <button className=" font-bold align-left bg-white  w-fit p-2 rounded">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
