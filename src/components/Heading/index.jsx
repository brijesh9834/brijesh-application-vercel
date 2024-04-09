import React from "react";

const sizes = {
  "3xl": "text-6xl font-bold md:text-[52px] sm:text-[46px]",
  "2xl": "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  xl: "text-[42px] font-semibold md:text-[38px] sm:text-[32px]",
  s: "text-[22px] font-semibold",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-base font-semibold",
  lg: "text-[38px] font-semibold md:text-4xl sm:text-[34px]",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-deep_purple-600 font-garnettsemibold ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
