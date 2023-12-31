import styles from "./Background.module.css";

const Background = ({
  path,
  children,
}: {
  path: string;
  readonly children: React.ReactNode;
}) => {
  return (
    <>
      <div className={styles.bgCard}>
        <video
          autoPlay
          muted
          loop
          id="backgroundVideo"
          className="fixed bottom-0 right-0 min-h-full min-w-full object-cover"
        >
          <source src={path} type="video/mp4" />
        </video>
      </div>
      <div className="fixed w-full bg-transparent">{children}</div>
    </>
  );
};

export default Background;
