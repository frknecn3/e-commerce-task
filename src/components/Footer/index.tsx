import { FaGithub, FaLinkedin, FaSteam } from 'react-icons/fa6'
import './style.css'

const Footer = () => {
  return (
    <footer className=" bg-info d-flex flex-row align-items-center justify-content-between p-4 text-white">
        <div className='fs-5'>Made by Furkan Ercan with Passion.</div>
        <div className='fs-1 text-white d-flex justify-content-center align-items-center flex-row gap-3'>
          <span className='fs-4 mt-3'>FOLLOW US</span>
          <a href="https://www.github.com/frknecn3" target='_blank'><FaGithub/></a>
          <a href="https://www.linkedin.com/in/furkan-ercan-ultraviolet" target='_blank'><FaLinkedin/></a>
          <a href="https://www.steamcommunity.com/id/grobdeland" target='_blank'><FaSteam/></a>
        </div>
        <div>2024</div>
    </footer>
  )
}

export default Footer