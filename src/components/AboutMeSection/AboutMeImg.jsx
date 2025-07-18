const AboutMeImg = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[400px] rounded-[90px] absolute overflow-hidden">
        <img
          src="./aboutmepic.jpg"
          alt="About Me Image"
          className="h-full w-120 rounded-3xl rounded-br-[90px] rounded-tr-[90px] object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImg;