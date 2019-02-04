import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato'); 
body {
   font-family: 'Lato', sans-serif;
   margin: 0px; 
   
background: linear-gradient(249deg, #6e8999, #292e49);
background-size: 5000%;



animation: AnimationName 30s ease infinite;
-webkit-animation: AnimationName 30s ease infinite;
-moz-animation: AnimationName 30s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 71%}
    50%{background-position:100% 30%}
    100%{background-position:0% 71%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 71%}
    50%{background-position:100% 30%}
    100%{background-position:0% 71%}
}
@keyframes AnimationName { 
    0%{background-position:0% 71%}
    50%{background-position:100% 30%}
    100%{background-position:0% 71%}
}
                  
   button {
   display: inline-block;
   border-radius: 3px;
   padding: 0.5rem 0;
   margin: 0.5rem 1rem;
   width: 14rem;
   height: 11rem;
   background: transparent;
   color: white;
   border: 2px solid white;
   text-decoration: none;
   }
 }
`;
