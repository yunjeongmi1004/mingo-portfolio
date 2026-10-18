const Container = ({ children }) => {
  return (
    <div className="max-sm:left-[0] max-sm:top-[140px] max-sm:w-full max-sm:h-[calc(100%-162px)] absolute top-[70px] left-[348px] w-[calc(100%-348px)] h-[calc(100%-70px-22px)] bg-[rgba(24,26,31,0.8)] overflow-y-auto">
      {children}
    </div>
  )
}

export default Container;