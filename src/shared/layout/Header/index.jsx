const Header = () => {
  return (
    <header className="flex items-center w-full h-[35px] bg-[#131619B2] gap-[10px] p-[10px]">
     <button className="w-[14px] h-[14px] bg-[#F23B2A] rounded-full" area-label="닫기"></button>
     <button className="w-[14px] h-[14px] bg-[rgb(245,176,40)] rounded-full" area-label="최소화"></button>
     <button className="w-[14px] h-[14px] bg-[#3BD027] rounded-full" area-label="최대화"></button>
    </header>
  )
}

export default Header;