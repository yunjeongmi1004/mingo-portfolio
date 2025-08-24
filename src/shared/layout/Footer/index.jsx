import footer1 from '../../../../public/footer_1.svg';
import footer2 from '../../../../public/footer_2.svg';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center absolute bottom-[0] left-[0] w-full h-[22px] bg-[rgba(42,42,42,0.5)]">
      <img src={footer1} alt="footer" className="ml-[10px]"/>
      <img src={footer2} alt="footer" className="mr-[10px]"/>
    </footer>
  )
}

export default Footer;