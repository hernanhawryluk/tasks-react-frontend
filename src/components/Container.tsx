import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="px-8">{children}</div>;
}

export default Container;
