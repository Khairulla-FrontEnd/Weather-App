import { useState, useEffect } from "react";
import axios from "axios";

function ShowCountries(props) {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://freetestapi.com/api/v1/countries");
    let countriesData = res.data.map((item) => item.capital);
    setCountries(countriesData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center items-center gap-[20px] text-white font-bold relative my-[20px]">
      <div
        className="bi bi-arrow-left text-[30px] border-2 hover:border-white hover:bg-white hover:text-yellow-500 rounded-xl
      cursor-pointer p-[5px]"
        onClick={() => props.changeDisplay()}
      ></div>
      {countries &&
        countries.map((item, index) => {
          return (
            <p
              key={index}
              className="text-[24px] p-[5px] border-2 border-[rgba(255,255,255,0.30)] bg-[rgba(255,255,255,0.30)] rounded-md w-[300px] hover:bg-white hover:text-yellow-500
              cursor-pointer active:bg-[rgba(255,255,255,0.30)] active:text-white"
              onClick={(e) => {
                props.chooseCountry(e.target.textContent);
                props.changeDisplay();
              }}
            >
              {item}
            </p>
          );
        })}
    </div>
  );
}
export default ShowCountries;
