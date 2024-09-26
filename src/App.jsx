import { useState, useEffect } from "react";
import axios from "axios";
import Selection from "../src/pages/Selection";
import Temprature from "../src/pages/Temprature";
import Behave from "../src/pages/Behave";
import ImageTemp from "../src/pages/ImageTemp";
import UserProfile from "../src/pages/UserProfile";
import Active from "../src/pages/Active";
import WeatherAnalys from "../src/pages/WeatherAnalys";
import WeatherData from "../src/pages/WeatherData";
import ShowCountries from "../src/pages/showCountries";
function Main() {
  const [show, setShow] = useState("hidden");
  const [display, setDisplay] = useState("block");
  const [country, setCountry] = useState("Kabul");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=9fcbf2cb506b4e759fe63833242208&q=${country}&aqi=no`
    );
    setData(res.data.current);
  };
  useEffect(() => {
    fetchData();
  }, [country]);

  return (
    <div className="main">
      <div className={`${show} absolute z-40 bg-[#e39d19]`}>
        <ShowCountries
          changeDisplay={() => {
            setDisplay("block");
            setShow("hidden");
          }}
          chooseCountry={(event) => {
            setCountry(event);
          }}
        />
      </div>
      <div className={display + " xl:container mx-auto"}>
        <div className="flex justify-between items-center mb-[24px] header">
          <div className="flex flex-col gap-[100px]">
            <div>
              <Selection
                onSelectClick={() => {
                  setDisplay("hidden");
                  setShow("block");
                }}
                country={country}
              />
              <Behave condition={data.condition} />
            </div>
            <div>
              <Temprature temperature={data} updated={data.last_updated} />
            </div>
          </div>
          <div>
            <ImageTemp icon={data.condition} />
          </div>
        </div>
        <div className="flex justify-center items-center footer">
          <div className="grid text-[20px] grid-cols-[100px] grid-rows-[244px] gap-y-[31px] gap-x-[25px] footer__grid">
            <div className="row-span-2 w-[100px]">
              <UserProfile />
            </div>
            <div className="w-[884px] h-[244px]">
              <Active />
            </div>
            <div className="row-span-2 w-[884px] col-start-2 row-start-2">
              <WeatherAnalys />
            </div>
            <div className="col-start-3 row-start-1 row-span-2">
              <WeatherData data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
