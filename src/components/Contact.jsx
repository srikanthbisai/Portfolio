function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h2>Contact Me</h2>
      <div className="flex flex-col justify-center items-center space-x-10">
        <div className="flex justify-start">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&to=srikanthbisai2110@email.com"
            className="flex justify-center items-center space-x-3 text-4xl"
          >
            <p>Gmail</p>
            <img src="gmail.png" alt="" className="w-[50px]" />
          </a>
        </div>

        <div className="flex justify-start">
          <a
            href="https://www.linkedin.com/in/srikanthbisai/"
            className="flex justify-center items-center space-x-3 text-4xl"
          >
            <p>Linkedin</p>
            <img src="linkedin.png" alt="" className="w-[50px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
