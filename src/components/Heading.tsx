type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="z-[1] relative">
      <div className="text-2xl mb-2 font-bold">{title}</div>
      <div className="h-1 w-12 bg-emerald-400 opacity-60 rounded-full"></div>
    </div>
  );
};

export default Heading;
