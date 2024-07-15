function About() {
  function openResume() {
    window.open("Resume.pdf", "_blank");
  }

  function openGitHub() {
    window.open('https://www.github.com/srikanthbisai', '_blank');
  }

  return (
    <div className="min-h-screen flex">
     {/* left */}
      <div className="imgContainer w-1/2 flex justify-center items-center">
        <img src="/profile_pic.png" alt="" className="w-2/3 rounded-[100px] " />
      </div>


          {/* right  */}
      <div className="title w-1/2 flex flex-col justify-center">
        <div className="text_container space-y-6">
          <h1 className="font-bold text-2xl">Hi, I am Srikanth Bisai</h1>
          <p className="font-thin">
            {" "}
            I am a{" "}
            <span className="text-yellow-500">
              Fullstack Software Developer . I have worked on different variety
              of projects . My strong problem solving skills contribute in
              creating robust applications.{" "}
            </span>
          </p>
        </div>

        <div className="button_container mt-5 space-x-3">
        <button onClick={openResume} className="bg-red-500 text-black w-max rounded-lg p-2">View Resume</button>
        <button onClick={openGitHub} className="bg-red-500 text-black w-max rounded-lg p-2">Github</button>

        </div>

      </div>
    </div>
  );
}

export default About;
