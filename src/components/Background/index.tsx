import { Box } from "@mui/material";

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
        className="fixed bottom-0 right-0 min-h-full min-w-full object-cover"
      >
        <source src={path} type="video/mp4" />
      </video>
      <Box className="fixed w-full">{children}</Box>
    </>
  );
};

export default Background;
