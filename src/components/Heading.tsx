type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps) => {
  return (
    <div>
      <div className="text-2xl font-bold m-2">{title}</div>
      <div className="h-1 w-12 ml-2 bg-emerald-400 opacity-60 rounded-full mb-8"></div>
    </div>
  );
};

export default Heading;
