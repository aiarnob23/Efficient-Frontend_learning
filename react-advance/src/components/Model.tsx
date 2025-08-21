import { useEffect } from "react";

interface ModalProps {
  isShow: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isShow, onClose }) => {
  if (!isShow) {
    return null;
  }
  useEffect(() => {
    let timer: number;
    if (isShow) {
      timer = setTimeout(() => {
        onClose();
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isShow, onClose]);
  return (
    <div className="fixed left-0 bottom-0 flex justify-center items-center z-50">
      <div className=" max-w-sm w-full bg-green-700">
        <h2>There is a notification for you....</h2>
      </div>
    </div>
  );
};

export default Modal;
