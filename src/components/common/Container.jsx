function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-64px)] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
