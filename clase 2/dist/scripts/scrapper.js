(()=>{function n(e,t=document.body){return t.querySelector(e)}function o(e,t=document.body){return[...t.querySelectorAll(e)]}var r={name:"h1",experienceElements:" #experience ~ .pvs-list__outer-container > ul > li"};var l=n(r.name).textContent,i=o("profileSelectors.experienceElements"),c=[];i.forEach(e=>{let t=n("span[aria-hidden]",e);c.push(t.textContent)});var p={name:l,experienceTitles:c};console.table(p);})();