import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useEffect, useRef } from "react";

const Dialogue = ({
  children,
  title,
  onClose,
}: {
  children: ReactNode;
  title: string;
  onClose: any;
}) => {
  const dialogueRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const dialogue = dialogueRef.current as any;
      dialogue.style.height = "300px";
    }, 200);
  }, [dialogueRef]);

  const handleDialogueClose = () => {
    const dialogue = dialogueRef.current as any;
    dialogue.style.height = "0";
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#ff9c1a4e] flex items-center justify-center z-50">
      <div
        ref={dialogueRef}
        className="bg-white m-4 w-auto sm:w-[500px] lg:w-[650px] rounded-[20px] overflow-hidden transition-all duration-700 h-0"
      >
        <div className="flex items-center justify-between gap-3 py-2 px-6 theme-gradient">
          <h6 className="font-semibold text-md md:text-lg">{title}</h6>
          <button className="block" onClick={handleDialogueClose}>
            <FontAwesomeIcon
              className="text-xl md:text-3xl"
              icon={faCircleXmark}
            />
          </button>
        </div>
        <div className="p-4 flex items-center h-[60%]">{children}</div>
        <button
          type="button"
          className="block px-7 py-2 ml-auto mr-8 mb-5 theme-gradient text:sm md:text-lg font-bold rounded-lg"
          onClick={handleDialogueClose}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default Dialogue;
