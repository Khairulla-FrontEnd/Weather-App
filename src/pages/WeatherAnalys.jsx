import Data2 from "/src/components/Data2";

function WeatherAnalys() {
  return (
    <div className="flex flex-col items-start justify-center gap-[5px] bg-[rgba(255,255,255,0.20)] text-white p-[20px] rounded-[40px]">
      <div className="flex items-center gap-[5px]">
        <i className="bi bi-clock-fill text-[16px]"></i>
        <h1 className="text-[14px] font-bold">24-hour forecast</h1>
      </div>
      {Data2.map((item, index) => {
        return (
          <div
            className="flex justify-center items-center text-[14px]"
            key={index}
          >
            <p className="pr-[20px]">
              {item.celcius}
              <sup>°</sup>
            </p>
            <progress
              value={item.celcius}
              max="50"
              className="w-[550px]"
            ></progress>
            <div className="flex items-center gap-[20px] pl-[20px]">
              <i className={item.icon + " text-[24px]"}></i>
              <p>{item.kmh}</p>
              <p>{item.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default WeatherAnalys;
