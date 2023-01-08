export function Contact() {
  return (
    <section id="scroll-contact" className="w-screen h-fit flex flex-col">
      <div className="w-full h-full flex flex-col items-center ">
        <h3 className="text-3xl sm:text-7xl font-bold text-white sm:text-left text-center">
          WANT TO GET IN TOUCH?
        </h3>
        <div className=" flex w-2/4 flex-col  m-10">
          <form
            action="https://formsubmit.co/b54ff88cd0354e87cf39b74e1a9a96f4"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col">
              <label className="text-white">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white ">Enter Your Message</label>
              <textarea
                type="text"
                placeholder="Your Message"
                className="textarea textarea-bordered"
                rows="4"
                name="message"
                required
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className=" font-bold align-left bg-white  w-fit p-2 rounded"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
