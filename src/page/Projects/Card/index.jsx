const Card = (props) => {
  const { project } = props;
  
  const handleViewProject = () => {
    if (project.link === null || project.link === undefined || project.link === '') {
      alert('내부 비공개 링크거나 오래된 작업 내용이여서 확인이 불가합니다.');
      return;
    }
    window.open(project.link, '_blank');
  };

  const handleViewGithub = () => {
    window.open(project.github, '_blank');
  };

  return (
    <div className="w-[33%] mt-[20px]">
      <strong className="block text-[12px] font-[600] text-[#615FFF]">{project.title} <br />
        <span className="text-[#90A1B9] font-[400] text-[12px]">// {project.description}</span>
      </strong>
      <div className="relative flex flex-col rounded-[20px] w-[90%] border-[#1D293D] border-[1px] overflow-hidden mt-[10px]">
        <img src={project.icon} alt={project.title} className="w-[20px] h-[20px] absolute top-[10px] right-[10px]" />
        <img src={project.image} alt={project.title} className="w-full h-[145px] object-cover" />
        <div className="flex flex-col gap-[10px] bg-[#020618] border-t-[#1D293D] p-[10px] h-[96px]">
          <p className="h-[36px] text-[12px] font-[400] text-[#90A1B9]" dangerouslySetInnerHTML={{ __html: project.content }}></p>
            
          <div className="flex gap-[10px]">
          {project.link && (
            <button onClick={handleViewProject} className="w-[100px] h-[30px] bg-[#45556C] text-[12px] font-[400] rounded-[8px] text-[#F8FAFC]">view-project</button>
          )}
          {project.github && (
            <button onClick={handleViewGithub} className="w-[100px] h-[30px] bg-[#45556C] text-[12px] font-[400] rounded-[8px] text-[#F8FAFC]">view-github</button>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;