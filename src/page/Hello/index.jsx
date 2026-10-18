const Hello = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center p-[20px] gap-y-[10px]">
      <h1 className="text-[36px] font-[500] text-[#F8FAFC]">안녕하세요👋🏽​​</h1>
      <p className="text-[14px] font-[400] text-[#615FFF]">&gt;&gt; UI 시스템을 설계하고 구성하는 것을 좋아하는 윤정미입니다.</p>
      <br /> <br /> <br />
      <p className="text-[14px] font-[400] text-[#90A1B9]">// 깃허브:</p>
      <p className="text-[14px] font-[400] text-[#F8FAFC]">
        <span className="text-[#615FFF]">const</span>&nbsp;
        <span className="text-[#00D5BE]">githubLink</span> = 
        <a href="https://github.com/yunjeongmi1004" target="_blank" className="text-[#FFA1AD] max-sm:text-[11px]"> “https://github.com/yunjeongmi1004”</a>
      </p>
      <br /> 
      <p className="text-[14px] font-[400] text-[#90A1B9]">// 이력서:</p>
      <p className="text-[14px] font-[400] text-[#F8FAFC]">
        <span className="text-[#615FFF]">const</span>&nbsp;
        <span className="text-[#00D5BE]">resumeLink</span> = 
        <a href="https://yunjeongmi1004.github.io/mingo-resume/" target="_blank" className="text-[#FFA1AD] max-sm:text-[11px]"> “https://yunjeongmi1004.github.io/mingo-resume/”</a>
      </p>
    </section>
  )
}

export default Hello; 