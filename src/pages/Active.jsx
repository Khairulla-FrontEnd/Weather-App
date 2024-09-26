import { Data } from "/src/components/Data";

function Active() {
  return (
    <div className="rounded-[40px] bg-[rgba(255,255,255,0.20)] py-[20px]">
      <div className="flex items-center gap-[4px] mb-[36px] pl-[50px] text-white">
        <i className="bi bi-heart-fill text-[24px]"></i>
        <h1 className="text-[24px] font-medium">Activities in your area</h1>
      </div>
      <div className="flex justify-center items-center gap-[21px] active__cards">
        {Data.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <div className="w-[178px] h-[108px]">
                <img
                  src={item.imgSrc}
                  alt="cardImg"
                  className="w-full h-full rounded-lg object-cover"
                ></img>
              </div>
              <p className="text-black text-[12px]">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Active;
