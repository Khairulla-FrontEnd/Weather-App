import Data3 from "/src/components/Data3";

function UserProfile() {
  return (
    <div className="flex flex-col items-center gap-[99px] p-[20px] rounded-[40px] bg-[rgba(255,255,255,0.20)] text-white user__profile">
      <div className="w-[60px] h-[60px]">
        <img
          src="https://avatars.mds.yandex.net/i?id=3c1d6264f051eee72701d33b44d305a7_l-5239342-images-thumbs&n=13"
          alt="avatarImg"
          className="w-full h-full object-cover rounded-full cursor-pointer user__img"
        ></img>
      </div>
      <div className="flex flex-col items-center gap-[22px] user__icons">
        {Data3.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center cursor-pointer"
              key={index}
            >
              <div>
                <i className={item.icon + " text-[40px]"}></i>
              </div>
              <h1 className="text-[14px] font-bold">{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default UserProfile;
