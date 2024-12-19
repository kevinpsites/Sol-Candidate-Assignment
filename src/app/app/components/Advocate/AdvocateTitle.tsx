import React from "react";

interface AdvocateTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const AdvocateTitle: React.FC<AdvocateTitleProps> = ({
  children,
  className = "",
}) => {
  return <h4 className={`font-bold text-xl ${className}`}>{children}</h4>;
};

export default AdvocateTitle;
