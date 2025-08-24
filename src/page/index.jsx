import { Routes, Route } from "react-router-dom"
import Hello from "./Hello"
import About from "./About"
import Projects from "./Projects"

const Page = () => {
    return (
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    )
}

export default Page;