import { useState } from "react";
import Data4 from "/src/components/Data4";
import { Data5 } from "/src/components/Data5";

function WeatherData(props) {
  const [justify, setJustify] = useState("justify-center");
  function moveLeft() {
    setJustify("justify-start");
  }
  function moveRight() {
    setJustify("justify-end");
  }
  return (
    <div className="bg-[rgba(255,255,255,0.20)] text-white py-[35px] px-[15px] rounded-[40px] weather__data">
      <div className="weather__thing">
        <div className="flex items-center w-[323px] mb-[15px]">
          <i
            className="bi bi-arrow-left cursor-pointer arrow"
            onClick={moveLeft}
          ></i>
          <div
            className={`flex items-center ${justify} gap-[30px] overflow-hidden weather__data__icons`}
          >
            {Data4.map((item, index) => {
              return (
                <div
                  className={`flex flex-col items-center justify-center`}
                  key={index}
                >
                  <i className={item.icon}></i>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
          <i
            className="bi bi-arrow-right cursor-pointer arrow"
            onClick={moveRight}
          ></i>
        </div>

        <div className="flex justify-center items-center gap-[5px] mb-[34px]">
          <i className="bi bi-clock-fill"></i>
          <h1 className="text-[17px] font-bold">8:00PM GMT</h1>
        </div>
      </div>

      <div>
        <h1 className="mb-[20px] text-[14px] font-bold">AIR CONDITIONS</h1>
        <div className="flex flex-col gap-[45px]">
          {Data5.map((item, index) => {
            if (index === 1) {
              return (
                <div key={index} className="flex">
                  <i className={item.icon + " text-[25px]"}></i>
                  <div>
                    <h1 className="text-[12px]">{item.title}</h1>
                    <p className="font-bold">
                      {props.data && props.data.wind_kph} km/hr
                    </p>
                  </div>
                </div>
              );
            } else if (index === 0) {
              return (
                <div key={index} className="flex">
                  <i className={item.icon + " text-[25px]"}></i>
                  <div>
                    <h1 className="text-[12px]">{item.title}</h1>
                    <p className="font-bold">
                      {props.data && props.data.feelslike_c}°
                    </p>
                  </div>
                </div>
              );
            } else if (index === 3) {
              return (
                <div key={index} className="flex">
                  <i className={item.icon + " text-[25px]"}></i>
                  <div>
                    <h1 className="text-[12px]">{item.title}</h1>
                    <p className="font-bold">{props.data && props.data.uv}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex">
                  <i className={item.icon + " text-[25px]"}></i>
                  <div>
                    <h1 className="text-[12px]">{item.title}</h1>
                    <p className="font-bold">{item.subtitle}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default WeatherData;
