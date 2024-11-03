import{S as y,i as o}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();const h="46865646-27ce533d0a2b530f03419db89",L="https://pixabay.com/api/";let v={image_type:"photo",orientation:"horizontal",safesearch:"true",min_width:"360",max_height:"200"};function w(r){let e=new URLSearchParams(v);return`${L}?key=${h}&q=${r}&${e}`}function b(r){return fetch(w(r),{})}const p=document.querySelector(".gallery"),c="Likes",g="Views",d="Comments",u="Downloads";let f=null;p.classList.add("gallery");let $=r=>r.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.previewURL}"
            alt="${e.description}"
          />
          <span class="gallery-legend">
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${c}</p>
                <p class="gallery-legend-item-value">${e[c.toLocaleLowerCase()]}</p>
             </div>
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${g}</p>
                <p class="gallery-legend-item-value">${e[g.toLocaleLowerCase()]}</p>
             </div>
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${d}</p>
                <p class="gallery-legend-item-value">${e[d.toLocaleLowerCase()]}</p>
             </div>
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${u}</p>
                <p class="gallery-legend-item-value">${e[u.toLocaleLowerCase()]}</p>
             </div>
          </span>
        </a>
      </li>
    `).join("");function S(r){p.insertAdjacentHTML("beforeend",$(r)),T(),E()}function T(){f=new y(".gallery a",{})}function E(){f.refresh()}const m=document.querySelector("form"),I=document.querySelector(".loader"),O=document.querySelector(".gallery");function i(){I.classList.toggle("hidden")}m.addEventListener("submit",r=>{const e=r.target.elements.search;if(r.preventDefault(),O.innerHTML="",i(),e.value.trim().length===0){i(),o.warning({position:"topRight",message:"Please enter a valid search!"});return}b(e.value.trim()).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}).then(s=>{s.hits.length<1&&o.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),S(s.hits)}).catch(s=>{throw o.error({position:"topRight",message:"Query failed!"}),new Error(s.message)}).finally(()=>{i()}),m.reset()});
//# sourceMappingURL=index.js.map
