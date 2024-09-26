function Selection(props) {
  return (
    <div>
      <div
        className="flex items-center mt-[51px] mb-[40px] text-white cursor-pointer hover:text-black active:text-white"
        title="Select a country"
        onClick={props.onSelectClick}
      >
        <i className="bi bi-geo-alt-fill text-[24px] selection__icon"></i>
        <h1 className="text-[24px] selection__icon">{props.country}</h1>
        <i className="bi bi-arrow-right-short text-[24px] selection__icon"></i>
      </div>
    </div>
  );
}
export default Selection;
