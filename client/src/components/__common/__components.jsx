import svgExports from "../../assets/svg/exports";

export const Modal = ({ children, id }) => {
  function closeModal() {
    document.getElementById(id).classList.add("hidden");
  }

  return (
    <div className="fixed inset-0 z-20">
      <div className="relative flex items-center justify-center w-screen h-screen">
        <div
          className="absolute z-10 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm"
          onClick={closeModal}
        >
          <p>hello</p>
        </div>
        <div className="max-w-[500px] bg-white p-6 rounded-lg z-20">
          <div className="flex items-center justify-end mb-4">
            <div className="w-4 h-4" onClick={closeModal}>
              <svgExports.CloseIcon />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export const DateTimePicker = () => {
  return <p>hello</p>;
};

export default DateTimePicker;
