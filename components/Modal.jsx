import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>I am a Modal</h1>

      {open && <p>Modal is Open</p>}
    </div>
  );
};

export default Modal;
