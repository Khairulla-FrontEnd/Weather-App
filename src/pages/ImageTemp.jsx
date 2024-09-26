function ImageTemp(props) {
  return (
    <div className="w-[321px] h-[254px] weather__img">
      {props.icon && (
        <img
          src={props.icon.icon}
          alt="iconImg"
          className="w-full h-full object-contain"
        ></img>
      )}
    </div>
  );
}
export default ImageTemp;
