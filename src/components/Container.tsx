type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="px-6 sm:px-8 2xl:px-[15%]">{children}</div>;
}

export default Container;
