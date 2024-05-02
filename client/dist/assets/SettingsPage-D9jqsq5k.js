import{u as b,b as f,r as t,j as e}from"./index-BvcDZUxZ.js";function N(){const i=b(),{logout:h}=f(),o="65d24a7691bee0a0e12e7840",[r,m]=t.useState(""),[l,p]=t.useState(""),[c,d]=t.useState("password");function g(){h()}const u=async(s,n)=>{try{const a=await fetch(`https://student-management-system-zm51.onrender.com/students/${s}/update-email`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})})}catch(a){console.error("Error updating email:",a.message)}},w=async()=>{u(o,r),i("/login",{replace:!0})},x=async(s,n)=>{try{const a=await fetch(`https://student-management-system-zm51.onrender.com/students/${s}/update-password`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n})})}catch(a){console.error("Error updating email:",a.message)}},j=async()=>{x(o,l),i("/login",{replace:!0})};return e.jsx(e.Fragment,{children:e.jsx("main",{className:"section-title pe-lg-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-12",children:[e.jsx("h1",{className:"mb-5",children:"Settings"}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Change Email"}),e.jsxs("p",{children:["In this section you can change the email of your profile.",e.jsx("br",{}),"After changing your email, the page will refresh and you will have to log in again."]}),e.jsx("div",{className:"setting-form-wrap",children:e.jsxs("form",{className:"d-flex flex-column newCourseForm",children:[e.jsx("input",{type:"text",value:r,onChange:s=>m(s.target.value),placeholder:"New Email"}),e.jsx("button",{className:"mt-3 button",onClick:w,children:"Change email"})]})})]})}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Change Password"}),e.jsxs("p",{children:["In this section you can change the password of your profile.",e.jsx("br",{}),"After changing your password, the page will refresh and you will have to log in again."]}),e.jsxs("div",{className:"setting-form-wrap",children:[e.jsx("form",{className:"newCourseForm d-flex flex-column",children:e.jsx("input",{type:c,value:l,onChange:s=>p(s.target.value),placeholder:"New Password"})}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"showPassword",children:"Show Password"}),e.jsx("input",{className:"ms-3",type:"checkbox",id:"showPassword",name:"show",onClick:()=>d(c==="password"?"text":"password")})]}),e.jsx("button",{className:"mt-3 button",onClick:j,children:"Change password"})]})]})}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Logout"}),e.jsxs("p",{children:["Click this button to log-out. Every change will be saved in the database.",e.jsx("br",{}),"After logging out, you will be redirected in the login page."]}),e.jsx("button",{className:"button",onClick:g,children:"Logout"})]})}),e.jsx("section",{className:"settings-section",children:e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3",children:"Credits"}),e.jsxs("p",{children:["This web application was developed by Georgios Drivas. ",e.jsx("br",{}),e.jsx("br",{}),"Junior Front-End Developer with nearly 2 years of professional experience in developing, supporting and maintaining websites, 6 months of it being an internship. Strong technical skills such as Javascript, React, Typescript, PHP, Bootstrap and Tailwind, as well as soft skills such as problem solving, quick learning, and working as a team member."]}),e.jsxs("p",{className:"m-0",children:["My linkedIn profile:",e.jsx("a",{className:"social-link",target:"_blank",href:"https://www.linkedin.com/in/drivasgeorgios/",title:"LinkedIn profile",children:" www.linkedin.com/in/drivasgeorgios"})]}),e.jsxs("p",{children:["My Github profile:",e.jsx("a",{className:"social-link",target:"_blank",href:"https://github.com/GeorgiosDrivas",title:"GitHub profile",children:" www.github.com/GeorgiosDrivas"})]})]})})]})})})})})}export{N as default};