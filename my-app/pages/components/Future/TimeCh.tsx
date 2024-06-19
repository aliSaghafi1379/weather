type State = {
  show: boolean;
  setShow: Function;
};

const TimeCh = ({ show, setShow }: State) => {
  return (
    <div className="w-full border-b border-[#c0c4ce] relative overflow-hidden whitespace-nowrap">
      <div className="w-full flex flex-row-reverse text-[rgb(77,84,103)] text-sm">
        <button className="w-1/2 p-2" onClick={() => setShow(true)}>
          <p>روزانه</p>
        </button>
        <button className="w-1/2 p-2" onClick={() => setShow(false)}>
          <p>ساعتی</p>
        </button>
      </div>
      <span
        className={`w-1/2 h-[2px] bg-[rgb(120,155,208)] absolute transition-[all_300ms_cubic-bezier(0.4,0,0.2,1)_0ms] bottom-[0px] ${
          show ? "left-1/2" : "left-0"
        }`}
      ></span>
    </div>
  );
};

export default TimeCh;
