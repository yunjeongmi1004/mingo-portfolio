import closeIcon from './assets/close.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import fileList from '../../api/fileList'
import iconList from '../../api/icon'

const Nav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <nav className="absolute top-[35px] right-[0] flex justify-between h-[35px] w-[calc(100%-348px)] bg-[#131619B2] ">
      <ul className="h-full flex items-center gap-[1px]">
        {fileList.map((file, index) => {
          const isActive = location.pathname === file.link
          return (
            <li key={index}>
              <button className="h-[35px] pl-[20px] pr-[20px] bg-[rgba(24,26,31,0.6)] flex items-center gap-[10px]" onClick={() => navigate(file.link)}>
                <em className={`text-[14px] font-[700] tracking-[-0.5px]`} style={{ color: file.color }}>{file.icon}</em>
                <span className={`text-[14px] ${isActive ? 'text-[rgba(204,204,204,1)] font-[500]' : 'text-[rgba(204,204,204,.5)] font-[300]'}`}>
                  {file.name}
                </span>
                <i className={`w-[16px] h-[16px] flex justify-center items-center ${isActive ? 'opacity-100' : 'opacity-50'}`} aria-label="닫기버튼">
                  <img src={closeIcon} alt="close" />
                </i>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="flex items-center gap-[10px] mr-[10px]">
        {Object.keys(iconList).slice(7,10).map((key) => (
          <button key={key}>
            <img src={iconList[key]} alt={key} />
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Nav;