import{j as e,r as n}from"./index-BExzwnyI.js";import{i as N}from"./styled-w-B3J0jJ.js";import{r as y}from"./createSvgIcon-WBqdh8H9.js";var _={},w=N;Object.defineProperty(_,"__esModule",{value:!0});var E=_.default=void 0,k=w(y()),P=e;E=_.default=(0,k.default)((0,P.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function D({exercise:t,setShowArticle:l}){const{data:r}=n.useContext(S),[i,v]=n.useState(!1),[u,j]=n.useState(t.exercise_name),[d,p]=n.useState(t.exercise_content),[m,C]=n.useState(t.exercise_subject),[o,x]=n.useState(t.status),g=async s=>{try{s.preventDefault(),(await fetch(`https://student-management-system-zm51.onrender.com/exercises/${t._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({exercise_name:u,exercise_subject:m,exercise_content:d,status:o})})).ok?(v(!1),t.exercise_name=u,t.exercise_content=d,t.exercise_subject=m,t.status=o):console.error("Failed to update exercise")}catch(f){console.error("Error updating exercise:",f)}};function h(s){g(s)}return e.jsxs("div",{className:"single-article-details",children:[e.jsx("div",{className:"mb-4",children:e.jsx("button",{className:"single-article-close-icon",onClick:()=>l(!1),children:e.jsx(E,{})})}),e.jsx("h2",{className:"text-center mb-5",children:t.exercise_name}),e.jsx("p",{children:t.exercise_content}),t.status==="Draft"?e.jsx("button",{className:"button mb-5",onClick:()=>v(!i),children:"Edit"}):null,i?e.jsxs("form",{className:"d-flex flex-column newCourseForm",children:[e.jsx("input",{type:"text",placeholder:"Title",value:u,onChange:s=>j(s.target.value)}),e.jsx("textarea",{placeholder:"Content",value:d,onChange:s=>p(s.target.value)}),e.jsx("select",{className:"select-element mb-3",value:m,onChange:s=>C(s.target.value),children:r.courses&&r.courses.length>0?r.courses.filter(s=>s.semester==="Summer Semester").map(s=>e.jsx("option",{value:s.course_name,children:s.course_name},s._id)):null}),e.jsxs("select",{className:"select-element",value:o,onChange:s=>x(s.target.value),children:[e.jsx("option",{value:"Published",children:"Published"}),e.jsx("option",{value:"Draft",children:"Draft"})]}),e.jsx("div",{className:"my-4",children:e.jsx("button",{className:"button",onClick:s=>h(s),children:"Submit"})})]}):null]})}function F(){const{exercise:t}=n.useContext(S),[l,r]=n.useState(!1);function i(){r(!l),window.scrollTo(0,0)}return e.jsxs("div",{className:"col-12",children:[e.jsxs("div",{className:"article-wrap position-relative",onClick:i,children:[e.jsx("div",{className:"position-absolute exercise-color",style:{backgroundColor:t.status==="Published"?"green":"grey"}}),e.jsx("h3",{children:t.exercise_name}),e.jsx("p",{children:t.exercise_subject}),e.jsxs("p",{children:["Status: ",t.status]}),e.jsx("p",{children:t.exercise_content.slice(0,200)})]}),l&&e.jsx(D,{exercise:t,setShowArticle:r})]},t._id)}const S=n.createContext();function O(){const[t,l]=n.useState("Introduction to Biology"),[r,i]=n.useState("Published"),[v,u]=n.useState(!1),[j,d]=n.useState(""),[p,m]=n.useState(""),[C,o]=n.useState(""),[x,g]=n.useState([]),[h,s]=n.useState([]);n.useEffect(()=>{(async()=>{try{const c=await fetch("https://student-management-system-zm51.onrender.com/courses");if(!c.ok)throw new Error("Failed to fetch students data");const b=await c.json();g(b)}catch{o("Failed to fetch students data")}})()},[]),n.useEffect(()=>{(async()=>{try{const c=await fetch("https://student-management-system-zm51.onrender.com/exercises");if(!c.ok)throw new Error("Failed to fetch students data");const b=await c.json();s(b)}catch{o("Failed to fetch students data")}})()},[]);const f=async a=>{u(!0);try{const c=await fetch("https://student-management-system-zm51.onrender.com/exercises",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({exercise_name:j,exercise_subject:t,exercise_content:p,status:r})});d(""),m("")}catch(c){o("Failed to add student"),console.log(c)}finally{u(!1)}};return e.jsx("main",{className:"section-title",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-12",children:[e.jsx("h2",{className:"mb-5",children:"Submitted Exercises"}),e.jsx("div",{children:h&&h.exercises&&h.exercises.map(a=>e.jsx(S.Provider,{value:{exercise:a,data:x},children:e.jsx(F,{})},a._id))})]})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsx("h2",{className:"mb-5",children:"Add Exercise"})}),e.jsx("div",{className:"col-12",children:e.jsxs("form",{className:"newCourseForm",children:[e.jsx("select",{className:"select-element mb-5 me-5",onChange:a=>l(a.target.value),children:x.courses&&x.courses.length>0?x.courses.filter(a=>a.semester==="Summer Semester").map(a=>e.jsx("option",{value:a.course_name,children:a.course_name},a._id)):null}),e.jsxs("select",{className:"select-element",value:r,onChange:a=>i(a.target.value),children:[e.jsx("option",{value:"Publish",children:"Publish"}),e.jsx("option",{value:"Draft",children:"Draft"})]}),e.jsx("input",{type:"text",placeholder:"Exercise title",value:j,onChange:a=>d(a.target.value)}),e.jsx("input",{type:"textarea",placeholder:"Exercise content",value:p,onChange:a=>m(a.target.value)}),e.jsx("button",{className:"button",onClick:f,children:"Submit"})]})})]})]})})}export{S as ExerciseContext,O as default};