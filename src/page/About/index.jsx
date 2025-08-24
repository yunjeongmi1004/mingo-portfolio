const About = () => {
  return (
    <section className="w-full h-full flex flex-col p-[20px] font-nanum">
      <h1 className="text-[18px] font-[700] text-[#F8FAFC]">💡 UI를 통해 사용자와 소통합니다</h1>
      <p className="mt-[10px] text-[14px] font-[400] text-[#90A1B9]">
      다양한 산업의 디지털 플랫폼 UI 구축 경험을 보유하고 있습니다.<br />
      퍼블리싱 경력이 전반적이지만, 꾸준한 학습을 통해 <br />
      React State, Hooks, Routing의 개념을 이해하고 사용하며, <br />
      API 명세서를 기반으로 async/await를 활용한 백엔드 데이터 연동 구현이 가능합니다.
      </p>
      <h2 className="text-[14px] font-[700] text-[#d8e8fd] mt-[20px]">✅ 스킬</h2>
      <ul className="list-disc pl-[20px] text-[#d8e8fd] mt-[10px]">
        <li>HTML, CSS, JavaScript</li>
        <li>프레임워크: React, Vue.js, Next.js</li>
        <li>상태 관리 라이브러리: Recoil, Zustand </li>
        <li>CSS : Tailwind CSS, Styled-components, Scss, Bootstrap</li>
        <li>AWS, MariaDB, MongoDB, Git</li>
      </ul>
      <h2 className="text-[14px] font-[700] text-[#d8e8fd] mt-[30px]">✅ 경력</h2>
      <ul className="list-disc pl-[20px] text-[#d8e8fd] mt-[10px]">
        <li>2021.11 ~ ING | KB부동산 VUE.JS환경 UI 구축/운영</li>
        <li>2020.09 ~ 2021.08 | NE능률 에듀테크 웹퍼블리셔</li>
        <li>2018.08 ~ 2020.06 | 하나투어 이커머스 웹퍼블리셔</li>
        <li>2017.06 ~ 2018.06 | 러쉬코리아 자사몰 리뉴얼 및 운영 웹퍼블리셔</li>
        <li>2014.11 ~ 2017.05 | 천재교육 밀크T 서비스 구축 웹퍼블리셔</li> 
      </ul>
      <button onClick={() => window.open("https://yunjeongmi1004.github.io/mingo-resume/")} className="w-[142px] font-nanum h-[40px] bg-[#FFB86A] text-[#020618] rounded-[5px] mt-[30px] font-[600]">이력서 보러가기</button>
    </section>
  )
}

export default About;