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
      <Box
        sx={{
          "&:after": {
            content: "''",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "transparent",
          },
        }}
      >
        <video
          autoPlay
          muted
          loop
          id="backgroundVideo"
          className="fixed bottom-0 right-0 min-h-full min-w-full object-cover"
        >
          <source src={path} type="video/mp4" />
        </video>
      </Box>
      <Box className="fixed w-full">{children}</Box>
    </>
  );
};

export default Background;
