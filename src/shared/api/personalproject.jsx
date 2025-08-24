import project1 from "/project1.jpg";
import project2 from "/project2.jpg";
import project3 from "/project3.jpg";
import project13 from "/project13.jpg";
import icoreact from "/icon_react.svg";
import icohtml from "/icon_html.svg";

const personalProject = [
  {
    id: 1,
    title: "Project 1",
    description: "REACT, STYLED-COMPONENTS, ZUSTAND",
    content: "Fsd Pattern, React Hooks 적용으로 효율적인 구조 설계에 집중",
    image: project1,
    icon: icoreact,
    link: "https://yunjeongmi1004.github.io/mingo-egg-timer/",
    github: "https://github.com/yunjeongmi1004/mingo-egg-timer",
  },
  {
    id: 2,
    title: "Project 2",
    description: "NEXT.JS, TAILWIND, MONGODB",
    content: "회원가입/로그인/로그아웃/회원탈퇴/글쓰기/글읽기/글수정/글삭제 구현",
    image: project13,
    icon: icoreact,
    link: "https://mingo-blog.vercel.app/",
    github: "https://github.com/yunjeongmi1004/mingo-blog",
  },
  {
    id: 3,
    title: "Project 3",
    description: "SCSS",
    content: "Mixins/Variables/Extend/Nesting/BEM/Functions/Responsive 적용 구조적 설계",
    image: project3,
    icon: icohtml,
    link: "https://yunjeongmi1004.github.io/scss-responsive/pages/login.html",
    github: "https://github.com/yunjeongmi1004/scss-responsive",
  },
];

export default personalProject;