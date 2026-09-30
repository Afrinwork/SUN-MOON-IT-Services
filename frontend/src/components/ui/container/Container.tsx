import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export function Container({ children, className = "", ...props }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10 ${className}`} {...props}>{children}</div>;
}
