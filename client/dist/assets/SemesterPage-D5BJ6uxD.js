import{r as l,j as e}from"./index-BT8whV2E.js";import{C as n}from"./CircularProgress-FbgZIR_H.js";import"./styled-TBYW8ZkR.js";function p(){const[a,i]=l.useState([]),[h,m]=l.useState(""),[t,c]=l.useState("Summer Semester");l.useEffect(()=>{(async()=>{try{const r=await fetch("https://student-management-system-zm51.onrender.com/courses");if(!r.ok)throw new Error("Failed to fetch students data");const o=await r.json();i(o)}catch{m("Failed to fetch students data")}})()},[]);const d=s=>{s.preventDefault();const r=s.target.value;c(r)};return e.jsx(e.Fragment,{children:e.jsx("main",{className:"section-title",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[t&&e.jsx("h1",{className:"mt-3",children:t}),e.jsxs("select",{onChange:d,className:"select-element",placeholder:"Choose a semester",children:[e.jsx("option",{value:"Summer Semester",children:"Summer semester"}),e.jsx("option",{value:"Spring Semester",children:"Spring semester"}),e.jsx("option",{value:"Fall Semester",children:"Fall semester"})]})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"semester-page-courses d-flex flex-column",children:a&&a.courses&&t?t==="Summer Semester"?a.courses.filter(s=>s.semester==="Summer Semester").map(s=>e.jsxs("div",{className:"mb-5 d-flex flex-row justify-content-between align-items-start",children:[e.jsxs("div",{className:"text-start",children:[e.jsx("h2",{children:s.course_name}),e.jsxs("p",{className:"taught-p",children:["Taught by: ",e.jsx("span",{className:"fw-bold",children:s.course_teacher})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"position-relative",children:[e.jsx("div",{className:"position-absolute semester_page_summary_content summary_content",children:e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"fw-bold",children:s.midterm_grade})," / 100"]})}),e.jsx(n,{thickness:1.5,size:"7em",variant:"determinate",className:"progressSummary",value:s.midterm_grade})]})})]},s._id)):t==="Spring Semester"?a.courses.filter(s=>s.semester==="Spring Semester").map(s=>e.jsxs("div",{className:"mb-5 d-flex flex-row justify-content-between align-items-start",children:[e.jsxs("div",{className:"text-start",children:[e.jsx("h2",{children:s.course_name}),e.jsxs("p",{className:"taught-p",children:["Taught by: ",e.jsx("span",{className:"fw-bold",children:s.course_teacher})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"position-relative",children:[e.jsx("div",{className:"position-absolute semester_page_summary_content summary_content",children:e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"fw-bold",children:s.midterm_grade})," / 100"]})}),e.jsx(n,{thickness:1.5,size:"7em",variant:"determinate",className:"progressSummary",value:s.midterm_grade})]})})]},s._id)):t==="Fall Semester"?a.courses.filter(s=>s.semester==="Fall Semester").map(s=>e.jsxs("div",{className:"mb-5 d-flex flex-row justify-content-between align-items-start",children:[e.jsxs("div",{className:"text-start",children:[e.jsx("h2",{children:s.course_name}),e.jsxs("p",{className:"taught-p",children:["Taught by: ",e.jsx("span",{className:"fw-bold",children:s.course_teacher})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"position-relative",children:[e.jsx("div",{className:"position-absolute semester_page_summary_content summary_content",children:e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"fw-bold",children:s.midterm_grade})," / 100"]})}),e.jsx(n,{thickness:1.5,size:"7em",variant:"determinate",className:"progressSummary",value:s.midterm_grade})]})})]},s._id)):null:null})})})]})})})}export{p as default};
