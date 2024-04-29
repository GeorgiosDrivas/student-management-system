import{u as w,b as j,r as l,j as e}from"./index-CJ3Sh8ZD.js";function f(){const t=w(),{logout:c}=j(),i="65d24a7691bee0a0e12e7840",[o,d]=l.useState(""),[r,h]=l.useState("");function m(){c()}const g=async(s,a)=>{try{const n=await fetch(`https://student-management-system-zm51.onrender.com/students/${s}/update-email`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})})}catch(n){console.error("Error updating email:",n.message)}},p=async()=>{g(i,o),t("/login",{replace:!0})},u=async(s,a)=>{try{const n=await fetch(`https://student-management-system-zm51.onrender.com/students/${s}/update-password`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a})})}catch(n){console.error("Error updating email:",n.message)}},x=async()=>{u(i,r),t("/login",{replace:!0})};return e.jsx(e.Fragment,{children:e.jsxs("main",{className:"section-title pe-5",children:[e.jsx("h1",{className:"mb-5",children:"Settings"}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Change Email"}),e.jsxs("p",{children:["In this section you can change the email of your profile.",e.jsx("br",{}),"After changing your email, the page will refresh and you will have to log in again."]}),e.jsx("div",{className:"setting-form-wrap",children:e.jsxs("form",{className:"d-flex flex-column newCourseForm",children:[e.jsx("input",{type:"text",value:o,onChange:s=>d(s.target.value),placeholder:"New Email"}),e.jsx("button",{className:"mt-3 button",onClick:p,children:"Change email"})]})})]})}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Change Password"}),e.jsxs("p",{children:["In this section you can change the password of your profile.",e.jsx("br",{}),"After changing your password, the page will refresh and you will have to log in again."]}),e.jsx("div",{className:"setting-form-wrap",children:e.jsxs("form",{className:"newCourseForm d-flex flex-column",children:[e.jsx("input",{type:"password",value:r,onChange:s=>h(s.target.value),placeholder:"New Password"}),e.jsx("button",{className:"mt-3 button",onClick:x,children:"Change password"})]})})]})}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Logout"}),e.jsxs("p",{children:["Click this button to log-out. Every change will be saved in the database.",e.jsx("br",{}),"After logging out, you will be redirected in the login page."]}),e.jsx("button",{className:"button",onClick:m,children:"Logout"})]})}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Credits"}),e.jsxs("p",{children:["This web application was developed by Georgios Drivas. ",e.jsx("br",{}),e.jsx("br",{}),"Junior Front-End Developer with nearly 2 years of professional experience in developing, supporting and maintaining websites, 6 months of it being an internship. Strong technical skills such as Javascript, React, Typescript, PHP, Bootstrap and Tailwind, as well as soft skills such as problem solving, quick learning, and working as a team member."]}),e.jsxs("p",{className:"m-0",children:["My linkedIn profile:",e.jsx("a",{className:"social-link",target:"_blank",href:"https://www.linkedin.com/in/drivasgeorgios/",title:"LinkedIn profile",children:" www.linkedin.com/in/drivasgeorgios"})]}),e.jsxs("p",{children:["My Github profile:",e.jsx("a",{className:"social-link",target:"_blank",href:"https://github.com/GeorgiosDrivas",title:"GitHub profile",children:" www.github.com/GeorgiosDrivas"})]})]})})]})})}export{f as default};
