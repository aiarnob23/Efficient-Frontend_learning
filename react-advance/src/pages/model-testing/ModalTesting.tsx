import { useEffect, useState } from "react";
import Modal from "../../components/Model";

const ModalTesting = () => {
  const initialCountStr = localStorage.getItem("practise_count");
  const initialCount: number = initialCountStr !== null ? parseInt(initialCountStr) : 0;
  const [count, setcount] = useState<number>(initialCount);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(()=>{
    try{
        localStorage.setItem("practise_count", count.toString());
    }catch(erroor){
        console.log(erroor);
    }
  },[count])


 const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
 }
  return (
    <div className="max-w-[1280px] mx-auto flex justify-center items-center ">
      <div className="text-3xl text-blue-600 font-bold ">{count}</div>
      <button
        onClick={() => setcount(count + 1)}
        className="text-xl font-semibold cursor-pointer px-2 py-1 bg-amber-300 w-[100px] flex justify-center items-center rounded-lg hover:scale-110"
      >
        click
      </button>
      {/* -------------- */}
      <button onClick={toggleModal} className="cursor-pointer">{isModalOpen ? 'Close modal' : 'Open model'}</button>
      <Modal isShow={isModalOpen} onClose={toggleModal}/>
    </div>
  );
};

export default ModalTesting;
