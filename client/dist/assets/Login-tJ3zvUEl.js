import{r as t,u as p,b as f,j as s}from"./index-xj9Tvarp.js";function j(){const a=t.useRef(null);return t.useEffect(function(){a.current.focus()},[]),a}function v(){const a=p(),[n,r]=t.useState(""),[c,d]=t.useState(""),[i,o]=t.useState("password"),{login:u,isAuthenticated:l,loading:m}=f(),h=j();function x(e){e.preventDefault(),n&&c&&!m&&u(n,c)}return t.useEffect(function(){l&&a("/dashboard",{replace:!0}),l||a("/login",{replace:!0})},[l,a]),s.jsx("div",{className:"container",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center vh-100",children:[s.jsx("h1",{children:"Student Management System"}),s.jsxs("div",{className:"login-wrap position-relative",children:[s.jsxs("form",{className:"d-flex flex-column",children:[s.jsx("input",{ref:h,className:"mb-3",type:"text",placeholder:"Email *",value:n,onChange:e=>r(e.target.value)}),s.jsx("input",{className:"mb-3",type:i,placeholder:"Password *",value:c,onChange:e=>d(e.target.value)})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"showPassword",children:"Show Password"}),s.jsx("input",{className:"ms-3",type:"checkbox",id:"showPassword",name:"show",onClick:()=>o(i==="password"?"text":"password")})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{className:"button",onClick:e=>x(e),children:"Log in"})})]}),s.jsxs("div",{className:"mt-5",children:[s.jsx("p",{children:"Test credentials:"}),s.jsx("p",{className:"m-0",children:"Email: jessica@gmail.com"}),s.jsx("p",{className:"m-0",children:"Password: 123jessica"})]})]})})})})}export{v as default};
