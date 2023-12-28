type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="px-10 2xl:px-[15%]">{children}</div>;
}

export default Container;
