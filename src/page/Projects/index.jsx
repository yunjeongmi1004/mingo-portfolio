import Card from "./Card";
// import personalProject from "../../shared/api/personalproject";
import workProject from "../../shared/api/workproject";

const Projects = () => {
  return (
    <section className="w-full h-full flex flex-col p-[20px] font-nanum">
      {/* <div>
        <strong className="text-[18px] font-[700] text-[#F8FAFC]">💡 개인프로젝트</strong>
        <div className="flex flex-wrap gap-y-[20px]">
        {personalProject.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>

      </div> */}
      <div>
        <strong className="text-[18px] font-[700] text-[#F8FAFC]">💡 Work</strong>
        <div className="flex flex-wrap gap-y-[20px]">
        {workProject.map((project) => (
          <Card key={project.id} project={project} />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;