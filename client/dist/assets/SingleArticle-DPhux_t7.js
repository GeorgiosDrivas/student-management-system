import{u as l,a as m,r as e,j as t}from"./index-CJ3Sh8ZD.js";function x(){const r=l(),{id:c}=m(),[s,n]=e.useState([]),[h,o]=e.useState("");return e.useEffect(()=>{(async()=>{try{const a=await fetch(`https://student-management-system-zm51.onrender.com/news/${c}`);if(!a.ok)throw new Error("Failed to fetch post data");const d=await a.json();n(d)}catch{o("Failed to fetch post data")}})()},[]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"mt-5 px-5",children:[t.jsx("h2",{className:"text-center mb-5",children:s.news_title}),t.jsx("p",{children:s.news_desc}),t.jsx("div",{children:t.jsx("button",{className:"button mt-5",onClick:()=>r(-1),children:"← Back to News"})})]})})}export{x as default};
