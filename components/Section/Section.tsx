import React from "react";

const Section = ({
  children,
  noPadding,
  secondary,
  extraClasses,
  id
}: {
  children?: React.ReactNode;
  id?: string;
  noPadding?: boolean;
  secondary?: boolean;
  extraClasses?: string;
}) => {
  return (
    <section
      id={id}
      className={`h-screen flex ${!noPadding && "pt-[var(--header-height)]"} ${secondary && "bg-secondary"} ${secondary && "text-primary"} ${extraClasses}`}
    >
      {children}
    </section>
  );
};

export default Section;
