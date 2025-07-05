const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95 active:shadow-inner">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;