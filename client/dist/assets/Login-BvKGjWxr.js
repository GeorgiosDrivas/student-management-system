import{u as x,r as a,b as p,j as s}from"./index-DAUGfAUW.js";function w(){const t=x(),[l,r]=a.useState(""),[n,d]=a.useState(""),[i,o]=a.useState("password"),{login:m,isAuthenticated:c,loading:h}=p();function u(e){e.preventDefault(),l&&n&&!h&&m(l,n)}return a.useEffect(function(){c&&t("/dashboard",{replace:!0}),c||t("/login",{replace:!0})},[c,t]),s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center vh-100",children:[s.jsx("h1",{children:"Student Management System"}),s.jsxs("div",{className:"login-wrap position-relative",children:[s.jsxs("form",{className:"d-flex flex-column",children:[s.jsx("input",{className:"mb-3",type:"text",placeholder:"Email *",value:l,onChange:e=>r(e.target.value)}),s.jsx("input",{className:"mb-3",type:i,placeholder:"Password *",value:n,onChange:e=>d(e.target.value)})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"showPassword",children:"Show Password"}),s.jsx("input",{className:"ms-3",type:"checkbox",id:"showPassword",name:"show",onClick:()=>o(i==="password"?"text":"password")})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{className:"button",onClick:e=>u(e),children:"Log in"})})]})]})})}),s.jsx("div",{className:"row",children:s.jsxs("div",{className:"col-12",children:[s.jsx("p",{children:"Test credentials:"}),s.jsx("p",{className:"m-0",children:"Email: jessica@gmail.com"}),s.jsx("p",{className:"m-0",children:"Password: 123jessica"})]})})]})}export{w as default};