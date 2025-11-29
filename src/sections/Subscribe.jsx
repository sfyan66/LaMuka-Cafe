import { useState, useRef } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState({});
  const [inValidMessage, setInValidMessage] = useState("");
  const [validMessage, setValidMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [holder, setHolder] = useState("Your Email Address");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setEmail(e.target.value);
    setInValidMessage("");
  };
  const handleInValid = (e) => {
    e.preventDefault();
    setInValidMessage("Please Enter a Valid Email Address");
    inputRef.current.focus();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmails({ ...emails, email });
      setHolder(email);
      setIsDisabled(true);
      setValidMessage("Submiting....");
      setEmail("");
    } else {
      setInValidMessage("Please Enter Your Email Address");
      inputRef.current.focus();
    }
  };
  return (
    <div className='relative flex justify-center items-center pb-[100px] after:content[" "] after:bg-[var(--bg-card)] after:w-full after:h-[2px] after:absolute md:max-w-7xl max-w-5xl mx-auto after:md:max-w-7xl after:max-w-5xl'>
      <div className="relative  shadow-[0_0_5px_rgba(255,255,255,0.20)] backdrop-blur-xl rounded-xl max-w-[460px] flex-1 md:max-w-[min(75vw,650px)] flex flex-col items-center py-[48px] md:px-[64px] px-8 gap-[48px] z-10 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 blur-3xl opacity-40 overflow-hidden"></div>
        <p className="text-white text-[17px] sm:text-[21px] text-center opacity-100">
          Subscribe to our mailing list for
          <br />
          updates, news, and exclusive offers.
        </p>
        <form
          className="flex gap-[16px] w-full relative flex-col md:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder={holder}
            ref={inputRef}
            value={email}
            disabled={isDisabled}
            onChange={handleChange}
            onInvalid={handleInValid}
            className="flex-1 bg-slate-700/20 placeholder:text-[var(--text-main-c)]md:placeholder:text-lg placeholder:text-[16px] rounded-lg md:rounded-full py-3 md:py-5 px-6 sm:px-8 text-white text-lg outline-none shadow-[0_0_3px_rgba(255,255,255,0.15)]"
          />
          <button
            type="submit"
            disabled={isDisabled}
            className="bg-[var(--button-second-bg)] rounded-lg md:rounded-full py-3 md:py-5 md:px-[48px] md:absolute top-0 right-0 text-white md:text-[18px] text-lg cursor-pointer hover:bg-[var(--button-hover-bg)]"
          >
            Subscribe
          </button>
        </form>
        <div className="text-[#bf4042] mt-[-35px] text-[12px] sm:text-[16px]">
          {inValidMessage}
        </div>
        <div className="text-[var(--button-second-bg)] text-[14px] sm:text-[20px] mt-[-35px] flex-1 md:flex-0">
          {validMessage}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
