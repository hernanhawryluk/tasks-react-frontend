function Background() {
  return (
    <div className="relative bg-gray-800">
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="absolute top-[5rem] right-[-7rem] h-[55vh] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#905263] 2xl:right-[22rem] 2xl:blur-[20rem] 2xl:top-[-4rem]"
      />
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="absolute top-[5rem] left-[-35rem] h-[50vh] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[10rem] bg-[#676394] 2xl:blur-[16rem]"
      />
    </div>
  );
}

export default Background;
