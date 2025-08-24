const Hello = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center p-[20px] gap-y-[10px]">
      <p className="text-[14px] font-[400] text-[#90A1B9]">Hi all. I am</p>
      <h1 className="text-[36px] font-[500] text-[#F8FAFC]">Yunjeongmi</h1>
      <p className="text-[14px] font-[400] text-[#615FFF]">&gt;&gt; UI 시스템을 설계하고 구성하는 것을 좋아합니다.</p>
      <br /> <br /> <br />
      <p className="text-[14px] font-[400] text-[#90A1B9]">// find my Github:</p>
      <p className="text-[14px] font-[400] text-[#F8FAFC]">
        <span className="text-[#615FFF]">const</span>&nbsp;
        <span className="text-[#00D5BE]">githubLink</span> = 
        <a href="https://github.com/yunjeongmi1004" target="_blank" className="text-[#FFA1AD]"> “https://github.com/yunjeongmi1004”</a>
      </p>
      <br /> 
      <p className="text-[14px] font-[400] text-[#90A1B9]">// find my Resume:</p>
      <p className="text-[14px] font-[400] text-[#F8FAFC]">
        <span className="text-[#615FFF]">const</span>&nbsp;
        <span className="text-[#00D5BE]">resumeLink</span> = 
        <a href="https://yunjeongmi1004.github.io/mingo-resume/" target="_blank" className="text-[#FFA1AD]"> “https://yunjeongmi1004.github.io/mingo-resume/”</a>
      </p>
    </section>
  )
}

export default Hello; 