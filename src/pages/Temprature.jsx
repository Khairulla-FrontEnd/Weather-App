function Temprature(props) {
  const year = props.updated && props.updated.slice(0, 4);
  let month = props.updated && props.updated.slice(5, 7);
  const day = props.updated && props.updated.slice(8, 11);
  let week = "";
  const date = new Date();
  const dayOfTheWeek = date.getDay();
  switch (dayOfTheWeek) {
    case 0:
      week = "Sun";
      break;
    case 1:
      week = "Mon";
      break;
    case 2:
      week = "Tue";
      break;
    case 3:
      week = "Wed";
      break;
    case 4:
      week = "Thu";
      break;
    case 5:
      week = "Fri";
      break;
    case 6:
      week = "Sat";
      break;
  }
  switch (month) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "Jul";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }
  return (
    <div className="text-white flex flex-col gap-[10px]">
      <h1 className="text-[64px] font-medium weather__title">
        {props.temperature && props.temperature.temp_c}
        <sup>°</sup>C
      </h1>
      <div>
        <p className="text-[18px] weather__date">{`${week} | ${day} ${month} ${year}`}</p>
      </div>
    </div>
  );
}
export default Temprature;
