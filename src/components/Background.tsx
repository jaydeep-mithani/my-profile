const Background = ({
  path,
  children,
}: {
  path: string;
  readonly children: React.ReactNode;
}) => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="backgroundVideo"
        className="fixed bottom-0 right-0"
      >
        <source src={path} type="video/mp4" />
      </video>
      <div className="fixed">{children}</div>
    </>
  );
};

export default Background;
