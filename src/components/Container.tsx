type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="px-10">{children}</div>;
}

export default Container;
