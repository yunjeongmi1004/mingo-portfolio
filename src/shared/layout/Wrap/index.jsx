

const Wrap = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#515151] bg-cover bg-center">
      <div className="relative w-[90%] h-[90%] max-w-[1268px] max-h-[818px] rounded-[10px] overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default Wrap;