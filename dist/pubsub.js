(()=>{"use strict";var r={};(()=>{var s=r;Object.defineProperty(s,"__esModule",{value:!0}),s.unsubscribe=s.subscribe=s.publish=void 0;const e={};s.subscribe=(r,s)=>{e[r]?e[r].push(s):e[r]=[s]},s.unsubscribe=(r,s)=>{if(e[r])for(let i=0;i<e[r].length;i+=1)if(e[r][i].toString()===s.toString()){e[r].splice(i,1);break}},s.publish=(r,...s)=>{const i=e[r];Array.isArray(i)&&i.forEach((r=>{r(...s)}))}})(),module.exports=r})();