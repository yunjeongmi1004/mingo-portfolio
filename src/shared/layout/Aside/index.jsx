import { useNavigate } from 'react-router-dom'
import fileList from '../../api/fileList'
import iconList from '../../api/icon'
import useToggle from './model/useToggle'


const Aside = () => {
  const navigate = useNavigate()
  const { isOpen, toggle } = useToggle(true)


  return (
    <aside className="absolute top-[35px] left-0 flex h-[calc(100%-35px-22px)] max-h-[761px] max-w-[348px]">
      <ul className="w-[48px] h-full flex flex-col gap-[10px] bg-[rgba(24,26,31,0.7)]">
        {Object.keys(iconList).slice(0,5).map((key) => (
          <li key={key}>
            <img src={iconList[key]} alt={key} />
          </li>
        ))}
        <li className="mt-[auto] flex flex-col gap-[10px]">
            {Object.keys(iconList).slice(5,7).map((key) => (
              <button key={key}>
                <img src={iconList[key]} alt={key} />
              </button>
            ))}
        </li>
      </ul>
      <div className="w-[300px] h-full bg-[rgba(19,22,25,0.6)]">
        <div className="w-full h-[40px] flex justify-between items-center">
          <p className="text-[12px] text-[rgba(204,204,204,1)] pl-[20px]">EXPLORER</p>
          <span className="flex gap-[3px] pr-[20px]">
          {Array(3).fill(0).map((_, index) => (
            <em key={index} className="w-[4px] h-[4px] bg-[rgba(204,204,204,1)] rounded-full"></em>
          ))}
          </span>
        </div>
        <div className="w-full h-[calc(100%-40px)]">
          <button onClick={toggle} className="w-full h-[22px] flex items-center pl-[4px]">
            <span className="w-[20px] h-[20px] flex justify-center items-center" 
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease-in-out'
              }}>
              <svg className="w-6 h-6 text-[rgba(204,204,204,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            <span className="text-[12px] text-[rgba(235,235,235,1)] font-[300]">PORTFOLIO</span>
          </button>
       
          <ul className="flex flex-col gap-[5px] pl-[12px] pr-[12px] mt-[12px]"
          style={{
            opacity: isOpen ? '1' : '0',
            transition: 'all 0.3s ease-in-out'
          }}>
            {fileList.map((file, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <em className={`text-[14px] font-[500] tracking-[-0.5px] w-[14px]`} style={{ color: file.color }}>{file.icon}</em>
                <button className="w-full h-[25px] text-[14px] text-[rgba(235,235,235,1)] font-[400] text-left" onClick={() => navigate(file.link)}>{file.name}</button>
                </li>
              ))}
            </ul>
      
        </div>
      </div>

    </aside>
  )
}

export default Aside;