function Behave(props) {
  return (
    <h1 className="text-[48px] font-medium text-white text-nowrap weather__title">
      {props.condition && props.condition.text}
    </h1>
  );
}
export default Behave;
