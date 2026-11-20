(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],t=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],n=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],r=[`S`,`M`,`T`,`W`,`T`,`F`,`S`];function i(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,r]=e.split(`-`).map(Number);if(t<2e3||t>2100)return!1;let i=new Date(Date.UTC(t,n-1,r));return i.getUTCFullYear()===t&&i.getUTCMonth()===n-1&&i.getUTCDate()===r}function a(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function o(e,t){let[n,r,i]=e.split(`-`).map(Number),a=new Date(Date.UTC(n,r-1,i+t));return`${a.getUTCFullYear()}-${String(a.getUTCMonth()+1).padStart(2,`0`)}-${String(a.getUTCDate()).padStart(2,`0`)}`}function s(e,t,n){if(e>t)return;let r=0;for(let i=e;i<=t;i=o(i,1))if(n(i),++r>4e4)throw Error(`Date range too large`)}function c(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(Date.UTC(t,n-1,r)).getUTCDay()}function l(e,t=0){return o(e,-((c(e)-t+7)%7))}function u(e,t){let[n,r]=e.split(`-`).map(Number),i=new Date(Date.UTC(n,r-1+t,1));return`${i.getUTCFullYear()}-${String(i.getUTCMonth()+1).padStart(2,`0`)}`}function d(e){let t=`${e}-01`;if(!i(t))return[];let[n,r]=e.split(`-`).map(Number),a=new Date(Date.UTC(n,r,0)).getUTCDate(),o=[];for(let e=0;e<c(t);e+=1)o.push(null);for(let t=1;t<=a;t+=1)o.push(`${e}-${String(t).padStart(2,`0`)}`);for(;o.length%7!=0;)o.push(null);return o}function f(e){let[t,n,r]=e.split(`-`).map(Number);return[t,n,r]}function ee(t){let[n,r,i]=f(t);return`${e[r-1]} ${i}, ${n}`}function p(e){let[n,r,i]=f(e);return`${t[r-1]} ${i}, ${n}`}function te(t){let[,r,i]=f(t);return`${n[c(t)]}, ${e[r-1]} ${i}`}function ne(t){let[n,r]=t.split(`-`).map(Number);return`${e[r-1]} ${n}`}function re(e,n){if(e===n)return p(e);let[r,i,a]=f(e),[o,s,c]=f(n);return r===o&&i===s?`${t[i-1]} ${a}–${c}, ${r}`:r===o?`${t[i-1]} ${a} – ${t[s-1]} ${c}, ${r}`:`${p(e)} – ${p(n)}`}function m(e){return e.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;default:return`&#39;`}})}function h(e){let t=e.trim();if(!t)return``;if(typeof Intl<`u`&&`Segmenter`in Intl){let e=new Intl.Segmenter(void 0,{granularity:`grapheme`});for(let n of e.segment(t))return n.segment}return Array.from(t)[0]??``}function g(e,t){return`${e} ${t}${e===1?``:`s`}`}function _(e){return e.habits.filter(e=>!e.archived).sort((e,t)=>e.order-t.order||e.name.localeCompare(t.name))}function ie(e){return e.habits.filter(e=>e.archived).sort((e,t)=>e.name.localeCompare(t.name))}function v(e,t){return e.habits.find(e=>e.id===t)}function ae(e,t,n,r){if(!i(n)||n>r)return e;let a=v(e,t);if(!a)return e;let o=a.completed.includes(n)?a.completed.filter(e=>e!==n):[...a.completed,n].sort();return{...e,habits:e.habits.map(e=>e.id===t?{...e,completed:o}:e)}}function oe(e,t,n){let r=_(e),i=r.findIndex(e=>e.id===t),a=i+n;if(i<0||a<0||a>=r.length)return e;let o=r.slice(),[s]=o.splice(i,1);o.splice(a,0,s);let c=new Map(o.map((e,t)=>[e.id,t]));return{...e,habits:e.habits.map(e=>c.has(e.id)?{...e,order:c.get(e.id)}:e)}}function se(e,t,n){let r=v(e,t);if(!r||r.archived===n)return e;let i=e.habits.filter(e=>!e.archived&&e.id!==t).reduce((e,t)=>Math.max(e,t.order),-1);return{...e,habits:e.habits.map(e=>e.id===t?n?{...e,archived:!0}:{...e,archived:!1,order:i+1}:e)}}function ce(e,t){return v(e,t)?{...e,habits:e.habits.filter(e=>e.id!==t)}:e}function le(e,t,n,r=()=>crypto.randomUUID()){let i=t.name.trim().replace(/\s+/g,` `);if(!i)return{data:e,id:t.id??null,error:`Give the habit a name.`};if(i.length>40)return{data:e,id:t.id??null,error:`Keep the name under 40 characters.`};let a=h(t.emoji)||`✅`;if(t.id)return v(e,t.id)?{data:{...e,habits:e.habits.map(e=>e.id===t.id?{...e,name:i,emoji:a}:e)},id:t.id,error:null}:{data:e,id:t.id,error:`That habit is gone.`};let o=_(e).reduce((e,t)=>Math.max(e,t.order),-1)+1,s=r(),c={id:s,name:i,emoji:a,createdOn:n,archived:!1,order:o,completed:[]};return{data:{...e,habits:[...e.habits,c]},id:s,error:null}}function y(){return`friends`}function b(){return y()===`friends`?`Ember Friends`:`Ember`}var ue=y()===`friends`?`ember.friends.profile.v1`:`ember.profile.v1`,de=40;function x(e){return e.trim().replace(/\s+/g,` `).slice(0,de)}function fe(e){return e?.name?e.name:`Hello`}function pe(e){if(e===null)return null;let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!=`object`||Array.isArray(t))return null;let n=t.name;return typeof n==`string`?{name:x(n)}:null}function me(e,t=ue){try{return pe(e.getItem(t))}catch{return null}}function he(e,t,n=ue){try{return e.setItem(n,JSON.stringify({name:x(t.name)})),!0}catch{return!1}}var ge=500,_e=2e4,ve=2e6;function ye(e,t=new Date().toISOString()){return JSON.stringify({...e,exportedAt:t},null,2)}function S(e){if(e.length>ve)return{ok:!1,error:`That backup is too large to import.`};let t;try{t=JSON.parse(e)}catch{return{ok:!1,error:`That file isn't JSON.`}}if(!t||typeof t!=`object`||Array.isArray(t))return{ok:!1,error:`That file isn't an Ember backup.`};let n=t;if(n.app!==void 0&&n.app!==`ember`)return{ok:!1,error:`That file isn't an Ember backup.`};if(n.version!==1)return{ok:!1,error:`This backup is from a different Ember version and can't be read here.`};if(!Array.isArray(n.habits))return{ok:!1,error:`That file isn't an Ember backup.`};if(n.habits.length>ge)return{ok:!1,error:`That backup has more habits than Ember will import.`};let r=[],i=new Set;for(let e of n.habits){let t=be(e);if(typeof t==`string`)return{ok:!1,error:t};if(i.has(t.id))return{ok:!1,error:`That backup lists the same habit twice.`};i.add(t.id),r.push(t)}let a={app:`ember`,version:1,habits:r};if(n.name!==void 0){if(typeof n.name!=`string`)return{ok:!1,error:`That backup has a name Ember can't read.`};a.name=x(n.name)}return{ok:!0,data:a}}function be(e){if(!e||typeof e!=`object`||Array.isArray(e))return`A habit in that backup is unreadable.`;let t=e;if(typeof t.id!=`string`||!/^[A-Za-z0-9_-]{1,80}$/.test(t.id))return`A habit in that backup is missing a usable id.`;if(typeof t.name!=`string`)return`A habit in that backup is missing its name.`;let n=t.name.trim().replace(/\s+/g,` `).slice(0,40);if(!n)return`A habit in that backup is missing its name.`;if(typeof t.emoji!=`string`||!h(t.emoji))return`${n} is missing an emoji.`;if(typeof t.createdOn!=`string`||!i(t.createdOn))return`${n} has a start date Ember can't read.`;if(t.archived!==void 0&&typeof t.archived!=`boolean`)return`${n} has an unreadable archive flag.`;let r=typeof t.order==`number`&&Number.isFinite(t.order)?t.order:0,a=xe(t.completed,n);return typeof a==`string`?a:{id:t.id,name:n,emoji:h(t.emoji),createdOn:t.createdOn,archived:t.archived===!0,order:r,completed:a}}function xe(e,t){if(e===void 0)return[];if(!Array.isArray(e))return`${t} has an unreadable list of days.`;if(e.length>_e)return`${t} has more logged days than Ember will import.`;let n=new Set;for(let t of e)typeof t==`string`&&i(t)&&n.add(t);return[...n].sort()}function C(){return`<svg class="flame" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z"/></svg>`}function Se(){return`<svg class="tick" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.6 9.2 16.8 19 7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function w(e){return`<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="${e===`left`?`M14.5 5 7.5 12l7 7`:`M9.5 5l7 7-7 7`}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function Ce(e){return`<svg class="tab-icon" viewBox="0 0 24 24" aria-hidden="true">${{today:`<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m8.6 12.2 2.4 2.4 4.5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,habits:`<path d="M8 7h11M8 12h11M8 17h11M4.8 7h.01M4.8 12h.01M4.8 17h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,settings:`<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 3.6v2M12 18.4v2M3.6 12h2M18.4 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`}[e]}</svg>`}function T(e){return e.name===`home`||e.name===`habits`||e.name===`settings`}function E(e,t=``,n){let r=`#/habit/${encodeURIComponent(e)}${t}`;return n?`${r}?m=${n}`:r}function we(e,t){let n=t.slice(0,7);return!e||!i(`${e}-01`)||e>n?n:e<`2000-01`?`2000-01`:e}function D(e,t){let[n,r=``]=e.replace(/^#/,``).split(`?`),i=n.split(`/`).filter(Boolean).map(e=>decodeURIComponent(e)),a=new URLSearchParams(r);if(i.length===0)return{name:`home`};if(i[0]===`habits`)return{name:`habits`};if(i[0]===`settings`)return{name:`settings`};if(i[0]===`new`)return{name:`new`};if(i[0]===`habit`&&i[1]){let e=i[1];return i[2]===`edit`?{name:`edit`,id:e}:i[2]===`history`?{name:`history`,id:e}:{name:`detail`,id:e,month:we(a.get(`m`),t)}}return{name:`home`}}function O(e){if(!i(e.today))throw Error(`Invalid today: ${e.today}`);let t=new Set;for(let n of e.completed)i(n)&&n<=e.today&&t.add(n);let n=i(e.createdOn)&&e.createdOn<=e.today?e.createdOn:e.today;for(let e of t)e<n&&(n=e);return{windowStart:n,completed:t}}function k(e,t,n){return i(n)?n>t?`future`:e.completed.has(n)?`complete`:n===t?`pending`:n<e.windowStart?`inactive`:`miss`:`inactive`}function A(e,t,n,r,i){let a=e>r?e:r,o=t<i?t:i;if(a>o)return{completed:0,elapsed:0,percent:0};let c=0,l=0;return s(a,o,e=>{c+=1,n.has(e)&&(l+=1)}),{completed:l,elapsed:c,percent:c===0?0:Math.round(l/c*100)}}function j(e){let t=O(e),n=e.today,r=[],i=null,a=null,o=0,c=(e,t)=>{i&&a&&o!==0&&(r.push({start:i,end:a,length:o,brokenOn:e,active:t}),i=null,a=null,o=0)};s(t.windowStart,n,e=>{let r=k(t,n,e);r===`complete`?(i||=e,a=e,o+=1):r===`miss`&&i&&c(e,!1)}),i&&c(null,!0);let u=0;for(let e of r)u=Math.max(u,e.length);let d=r[r.length-1],f=l(n,e.weekStartsOn??0),ee=`${n.slice(0,7)}-01`;return{current:d?.active?d.length:0,best:u,total:t.completed.size,runs:r.slice().reverse(),week:A(t.windowStart,n,t.completed,f,n),month:A(t.windowStart,n,t.completed,ee,n)}}var M=`📚.💧.💪.🏃.📖.🏋️.🧘.🚶.✍️.🎯.🧠.🙏.☀️.🌙.💊.🥗.😴.🦷.🥤.🚴.🏊.🎨.🎸.🧹.🌿.📝.💻.🍎.❤️.🔥`.split(`.`);function Te(e,t){let n=b();if(!t)return n;if(e.name===`home`)return`Today · ${n}`;if(e.name===`habits`)return`Habits · ${n}`;if(e.name===`settings`)return`Settings · ${n}`;if(e.name===`new`)return`New habit · ${n}`;let r=v(t,e.id)?.name??`Habit`;return e.name===`edit`?`Edit ${r} · ${n}`:e.name===`history`?`${r} streaks · ${n}`:`${r} · ${n}`}function Ee(e){return e.loadError||!e.data?N(Re(e.loadError),!1,e):e.profile===null?N(Ie(e),!1,e):N(De(e,e.data),T(e.route),e)}function N(e,t,n){return`<div class="app${t?` has-tabs`:``}">${e}</div>${t?ze(n.route):``}${Be(n)}${He(n)}`}function De(e,t){switch(e.route.name){case`home`:return Oe(e,t);case`habits`:return Pe(t);case`settings`:return Le(e);case`new`:return Fe(e,null);case`edit`:return Fe(e,v(t,e.route.id)??null);case`detail`:return Ae(e,v(t,e.route.id)??null);case`history`:return Me(v(t,e.route.id)??null,e.today)}}function Oe(e,t){let n=_(t),r=n.filter(t=>t.completed.includes(e.today)).length,i=n.length,a=i===0?0:Math.round(r/i*100),o=i===0?`No active habits`:r===i?`All ${i} done today`:`${r} of ${i} today`,s=t.habits.some(e=>e.archived),c=n.map(t=>ke(t,e.today,e.popId)).join(``),l=n.length?``:`<div class="empty">
        <h2>${s?`Nothing on today`:`No habits yet`}</h2>
        <p>${s?`Restore one you archived, or add a new one.`:`Add one. There's no five-habit cap.`}</p>
      </div>`;return`<header class="header">
      <p class="brand">${b()}</p>
      <p class="when">${te(e.today)}</p>
      <h1 class="hello">${m(fe(e.profile))}</h1>
      <p class="sub">${o}</p>
      <div class="progress" aria-hidden="true"><span style="width:${a}%"></span></div>
    </header>
    <main>
      ${l}
      ${c}
      <div class="stack">
        <button type="button" class="btn secondary" data-action="nav" data-nav="#/new">Add a habit</button>
      </div>
    </main>`}function ke(e,t,n){let r=j({today:t,createdOn:e.createdOn,completed:e.completed}),i=e.completed.includes(t),a=r.current>0;return`<article class="habit">
      <button type="button" class="habit-open" data-action="nav" data-nav="${m(E(e.id))}">
        <span class="emoji" aria-hidden="true">${m(e.emoji)}</span>
        <span class="copy">
          <span class="name">${m(e.name)}</span>
          <span class="streak ${a?`hot`:`cold`}">${C()}<span>${r.current}</span><span class="sr">${g(r.current,`day`)} streak</span></span>
        </span>
        ${w(`right`)}
      </button>
      <button type="button" class="check${i?` on`:``}${n===e.id?` pop`:``}" data-action="toggle" data-id="${m(e.id)}" aria-pressed="${i?`true`:`false`}" aria-label="${m(i?`Mark ${e.name} not done today`:`Mark ${e.name} done today`)}">${i?Se():``}</button>
    </article>`}function Ae(e,t){if(!t||e.route.name!==`detail`)return P();let n=j({today:e.today,createdOn:t.createdOn,completed:t.completed}),r=je(t,e.today,e.route.month);return`${F(`Back`,`#/`,`Edit`,E(t.id,`/edit`))}
    <main>
      ${t.archived?`<p class="banner">Archived. It stays off Today until you restore it.</p>`:``}
      <section class="hero">
        <div class="hero-emoji" aria-hidden="true">${m(t.emoji)}</div>
        <h1>${m(t.name)}</h1>
        <p class="hero-streak ${n.current>0?`hot`:`cold`}">${C()}<strong>${n.current}</strong></p>
        <p class="hero-unit">day streak</p>
        <p class="hero-caption">${m(We(n,e.today))}</p>
      </section>
      <section class="stats">
        ${L(`Best`,String(n.best),g(n.best,`day`))}
        ${L(`Total`,String(n.total),g(n.total,`day`))}
        ${L(`This week`,`${n.week.percent}%`,Ue(n.week.completed,n.week.elapsed))}
        ${L(`This month`,`${n.month.percent}%`,Ue(n.month.completed,n.month.elapsed))}
      </section>
      <p class="fine">This week is Sunday through today. This month is the 1st through today. Days before the first logged day are left out.</p>
      ${r}
      <button type="button" class="link-row" data-action="nav" data-nav="${m(E(t.id,`/history`))}">
        <span>
          <strong>Streak history</strong>
          <span>${n.runs.length===0?`No runs yet`:g(n.runs.length,`run`)}</span>
        </span>
        ${w(`right`)}
      </button>
      ${t.archived?`<div class="stack"><button type="button" class="btn secondary" data-action="restore" data-id="${m(t.id)}">Restore habit</button></div>`:``}
    </main>`}function je(e,t,n){let i=O({today:t,createdOn:e.createdOn,completed:e.completed}),a=d(n),o=t.slice(0,7),s=u(n,-1),c=u(n,1),l=s>=`2000-01`,f=c<=o,p=!1,te=a.map(n=>{if(!n)return`<span class="day-pad"></span>`;let r=k(i,t,n);r===`inactive`&&(p=!0);let a=String(Number(n.slice(-2)));if(r===`future`)return`<span class="day-num">${a}</span>`;let o=r===`complete`&&n===t?`complete today`:r===`complete`?`complete`:r===`pending`?`today`:r===`miss`?`miss`:`inactive`,s=r===`complete`&&n===t?`done today`:r===`complete`?`done`:r===`pending`?`today, not done yet`:r===`miss`?`missed`:`not tracked yet`;return`<button type="button" class="day-btn ${o}" data-action="toggle-day" data-id="${m(e.id)}" data-date="${n}" aria-pressed="${r===`complete`?`true`:`false`}" aria-label="${m(`${ee(n)}, ${s}`)}">${a}</button>`}).join(``),re=r.map(e=>`<span class="dow">${e}</span>`).join(``);return`<section class="card cal-card">
      <div class="month-bar">
        <button type="button" class="icon-btn" data-action="nav" data-nav="${m(E(e.id,``,s))}" aria-label="Previous month" ${l?``:`disabled`}>${w(`left`)}</button>
        <h2>${ne(n)}</h2>
        <button type="button" class="icon-btn" data-action="nav" data-nav="${m(E(e.id,``,c))}" aria-label="Next month" ${f?``:`disabled`}>${w(`right`)}</button>
      </div>
      <div class="cal">${re}${te}</div>
      <div class="legend">
        <span><i class="swatch done"></i>Done</span>
        <span><i class="swatch miss"></i>Missed</span>
        <span><i class="swatch today"></i>Today</span>
      </div>
      <p class="fine">Tap a past day to mark it done or missed.${p?` Blank days are before this habit. Tap one to log it.`:``}</p>
    </section>`}function Me(e,t){if(!e)return P();let n=j({today:t,createdOn:e.createdOn,completed:e.completed}),r=n.runs.length?n.runs.map(e=>Ne(e,n)).join(``):`<div class="empty"><h2>No streaks yet</h2><p>Check in, and Ember will keep every run you hold and the day it breaks.</p></div>`;return`${F(`Back`,E(e.id),``,``)}
    <main>
      <p class="eyebrow">${m(e.emoji)} ${m(e.name)}</p>
      <h1 class="page-title">Every run</h1>
      <p class="sub">${n.runs.length===0?`Nothing logged yet.`:`${g(n.runs.length,`run`)} · best ${g(n.best,`day`)}`}</p>
      <div class="runs">${r}</div>
    </main>`}function Ne(e,t){let n=[e.active?`<span class="chip hot">Active</span>`:``,t.runs.length>1&&e.length===t.best?`<span class="chip">Best</span>`:``].join(``),r=e.active?`Still going`:e.brokenOn?`Broken ${p(e.brokenOn)}`:`Ended`;return`<article class="run${e.active?` live`:``}">
      <div>
        ${n?`<div class="chips">${n}</div>`:``}
        <p class="run-range">${re(e.start,e.end)}</p>
        <p class="run-note">${r}</p>
      </div>
      <p class="run-len"><strong>${e.length}</strong><span>${e.length===1?`day`:`days`}</span></p>
    </article>`}function Pe(e){let t=_(e),n=ie(e);return`<header class="header">
      <div class="split">
        <h1 class="page-title">Habits</h1>
        <button type="button" class="bar-action" data-action="nav" data-nav="#/new">Add</button>
      </div>
    </header>
    <main>
      <h2 class="section">Active</h2>
      ${t.length?t.map((e,n)=>`<div class="manage">
            <button type="button" class="nudge" data-action="move" data-id="${m(e.id)}" data-dir="-1" aria-label="${m(`Move ${e.name} up`)}" ${n===0?`disabled`:``}>↑</button>
            <button type="button" class="nudge" data-action="move" data-id="${m(e.id)}" data-dir="1" aria-label="${m(`Move ${e.name} down`)}" ${n===t.length-1?`disabled`:``}>↓</button>
            <button type="button" class="habit-open" data-action="nav" data-nav="${m(E(e.id))}">
              <span class="emoji" aria-hidden="true">${m(e.emoji)}</span>
              <span class="name">${m(e.name)}</span>
            </button>
            <button type="button" class="text-btn" data-action="nav" data-nav="${m(E(e.id,`/edit`))}">Edit</button>
          </div>`).join(``):`<div class="empty"><h2>No active habits</h2><p>Add one, or restore one from the archive.</p></div>`}
      ${n.length?`<h2 class="section">Archived</h2>${n.map(e=>`<div class="manage archive-row">
            <button type="button" class="habit-open" data-action="nav" data-nav="${m(E(e.id))}">
              <span class="emoji" aria-hidden="true">${m(e.emoji)}</span>
              <span class="name">${m(e.name)}</span>
            </button>
            <button type="button" class="text-btn" data-action="restore" data-id="${m(e.id)}">Restore</button>
            <button type="button" class="text-btn danger-text" data-action="ask-delete" data-id="${m(e.id)}">Delete</button>
          </div>`).join(``)}`:``}
    </main>`}function Fe(e,t){if(e.route.name===`edit`&&!t)return P();let n=e.ui.draft,r=n?.name??t?.name??``,i=n?.emoji||t?.emoji||`📚`,a=M.includes(i)?``:i,o=t?`Edit`:`New habit`,s=t?E(t.id):`#/`,c=M.map(e=>`<button type="button" class="emoji-opt${e===i?` on`:``}" data-action="pick-emoji" data-emoji="${e}" aria-label="${e}" aria-pressed="${e===i?`true`:`false`}">${e}</button>`).join(``),l=t?`<div class="stack danger-zone">
        ${t.archived?``:`<button type="button" class="btn secondary" data-action="archive" data-id="${m(t.id)}">Archive habit</button>`}
        ${t.archived?`<button type="button" class="btn secondary" data-action="restore" data-id="${m(t.id)}">Restore habit</button>`:``}
        <button type="button" class="btn danger" data-action="ask-delete" data-id="${m(t.id)}">Delete habit</button>
      </div>`:``;return`${F(`Back`,s,``,``)}
    <main>
      <h1 class="page-title">${o}</h1>
      <form id="habit-form" data-id="${t?m(t.id):``}" autocomplete="off">
        <div class="emoji-preview" id="emoji-preview">${m(i)}</div>
        <input type="hidden" id="habit-emoji" value="${m(i)}" />
        <div class="field">
          <label class="lbl" for="habit-name">Name</label>
          <input id="habit-name" type="text" maxlength="40" autocapitalize="words" autocomplete="off" enterkeyhint="done" value="${m(r)}" placeholder="Read daily" />
        </div>
        <div class="field">
          <span class="lbl" id="emoji-label">Emoji</span>
          <div class="emoji-grid" role="group" aria-labelledby="emoji-label">${c}</div>
          <label class="lbl custom-label" for="emoji-custom">Or type one</label>
          <input id="emoji-custom" type="text" maxlength="8" autocomplete="off" autocapitalize="off" value="${m(a)}" placeholder="😀" />
        </div>
        <p class="error">${m(e.ui.formError??``)}</p>
        <div class="stack">
          <button type="submit" class="btn">${t?`Save changes`:`Save habit`}</button>
        </div>
      </form>
      ${l}
    </main>`}function Ie(e){let t=e.ui.formError?e.ui.draft?.name??``:``;return`<header class="header">
      <p class="brand">${b()}</p>
    </header>
    <main class="welcome">
      <h1 class="page-title">What's your name?</h1>
      <p class="prose">So ${b()} knows what to call you. You can change it later in Settings.</p>
      <form id="welcome-form" autocomplete="off">
        <div class="field">
          <label class="lbl" for="welcome-name">Name</label>
          <input id="welcome-name" type="text" maxlength="40" autocapitalize="words" autocomplete="off" enterkeyhint="done" value="${m(t)}" />
        </div>
        <p class="error">${m(e.ui.formError??``)}</p>
        <div class="stack">
          <button type="submit" class="btn">Continue</button>
          <button type="button" class="btn secondary" data-action="skip-name">Skip</button>
        </div>
      </form>
    </main>`}function Le(e){let t=typeof navigator<`u`&&typeof navigator.share==`function`;return`<header class="header">
      <h1 class="page-title">Settings</h1>
    </header>
    <main>
      <section class="card pad">
        <h2>Your name</h2>
        <p class="prose">This is the greeting on Today. Leave it blank for a simple hello.</p>
        <form id="name-form" autocomplete="off">
          <div class="field">
            <label class="lbl" for="profile-name">Your name</label>
            <input id="profile-name" type="text" maxlength="40" autocapitalize="words" autocomplete="given-name" enterkeyhint="done" value="${m(e.profile?.name??``)}" />
          </div>
          <button type="submit" class="btn">Save name</button>
        </form>
      </section>
      <section class="card pad">
        <h2>Backup</h2>
        <p class="prose">Export every habit and streak to a JSON file. Import it on a new phone. Ember has no account, so this file is the copy that survives a reset.</p>
        <div class="stack">
          ${t?`<button type="button" class="btn" data-action="share-backup">Share backup</button>`:``}
          <button type="button" class="btn secondary" data-action="download-backup">Download JSON</button>
          <button type="button" class="btn secondary" data-action="copy-backup">Copy JSON</button>
        </div>
      </section>
      <section class="card pad">
        <h2>Import</h2>
        <p class="prose">Choose a backup file, or paste the JSON. Importing replaces the habits on this phone. If the file includes a name, that greeting is restored too.</p>
        <div class="stack">
          <label class="btn secondary file-btn">Choose JSON file<input id="import-file" type="file" accept="application/json,.json" /></label>
        </div>
        <form id="import-form">
          <div class="field">
            <label class="lbl" for="import-json">Paste backup JSON</label>
            <textarea id="import-json" spellcheck="false" placeholder='{"app":"ember","version":1,"habits":[]}'>${m(e.ui.paste)}</textarea>
          </div>
          <p class="error">${m(e.ui.importError??``)}</p>
          <button type="submit" class="btn">Import pasted backup</button>
        </form>
      </section>
      <section class="card pad">
        <h2>Add to your iPhone</h2>
        <p class="prose">In Chrome or Safari, tap Share, then Add to Home Screen. Ember opens full screen, uses the area around the notch, and still opens with no signal after the first load.</p>
      </section>
      <section class="card pad">
        <h2>About</h2>
        <p class="prose">${b()} keeps habits on this phone. Unlimited habits. A streak stays alive through today until you miss a day. The history keeps the start, the end, the length, and the date it broke. Nothing leaves this phone.</p>
        <p class="fine">Export a backup before you change phones or remove the home screen icon. iPhone can clear saved habits when the icon is deleted.</p>
      </section>
    </main>`}function P(){return`${F(`Back`,`#/`,``,``)}
    <main>
      <div class="empty">
        <h2>That habit isn't on this phone.</h2>
        <p>It may have been deleted.</p>
        <div class="stack"><button type="button" class="btn secondary" data-action="nav" data-nav="#/">Back to today</button></div>
      </div>
    </main>`}function Re(e){let t=e?.error===`storage-unavailable`,n=y()===`friends`?`start over with the starter habit`:`start over with the five starter habits`,r=t?`This phone isn't letting Ember save. Turn off private browsing, then open Ember again.`:`Ember couldn't read the habits saved on this phone. You can copy the saved text, or ${n}.`,i=e?.raw?`<button type="button" class="btn secondary" data-action="copy-raw">Copy saved text</button>`:``;return`<header class="header"><p class="brand">${b()}</p><h1 class="page-title">Can't open habits</h1></header>
    <main>
      <p class="prose">${r}</p>
      <div class="stack">
        ${i}
        ${t?``:`<button type="button" class="btn danger" data-action="reset">Reset starter habits</button>`}
      </div>
    </main>`}function F(e,t,n,r){let i=n?`<button type="button" class="bar-action" data-action="nav" data-nav="${m(r)}">${m(n)}</button>`:`<span></span>`;return`<header class="header bar">
      <button type="button" class="icon-btn" data-action="nav" data-nav="${m(t)}" aria-label="${m(e)}">${w(`left`)}</button>
      <span></span>
      ${i}
    </header>`}function ze(e){return`<nav class="tabbar" aria-label="Primary">
      ${I(`Today`,`#/`,`today`,e.name===`home`)}
      ${I(`Habits`,`#/habits`,`habits`,e.name===`habits`)}
      ${I(`Settings`,`#/settings`,`settings`,e.name===`settings`)}
    </nav>`}function I(e,t,n,r){return`<button type="button" class="tab${r?` on`:``}" ${r?`aria-current="page"`:``} data-action="nav" data-nav="${t}">${Ce(n)}<span>${e}</span></button>`}function Be(e){let t=e.ui.dialog;if(!t||!e.data)return``;if(t.kind===`delete`)return Ve(`<h2 id="dialog-title">Delete ${m(v(e.data,t.id)?.name??`this habit`)}?</h2>
      <p>This removes the habit and its streak history from this phone.</p>
      <div class="stack">
        <button type="button" class="btn danger" data-action="confirm-delete" data-id="${m(t.id)}">Delete</button>
        <button type="button" class="btn secondary" data-action="dismiss">Keep</button>
      </div>`);let n=t.data.habits.length;return Ve(`<h2 id="dialog-title">Replace habits on this phone?</h2>
    <p>This backup has ${g(n,`habit`)}. Importing overwrites every habit and streak saved here.</p>
    <div class="stack">
      <button type="button" class="btn" data-action="confirm-import">Import backup</button>
      <button type="button" class="btn secondary" data-action="dismiss">Cancel</button>
    </div>`)}function Ve(e){return`<div class="overlay" data-action="dismiss"><div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" data-action="noop">${e}</div></div>`}function He(e){return e.ui.toast?`<div class="toast${T(e.route)?` above-tabs`:``}" role="status">${m(e.ui.toast)}</div>`:``}function L(e,t,n){return`<div class="stat"><span>${e}</span><b>${t}</b><small>${n}</small></div>`}function Ue(e,t){return t===0?`No days yet`:`${e} of ${t}`}function We(e,t){if(e.current>0){let n=e.runs.find(e=>e.active);return!n||n.start===t?`Started today`:`Since ${p(n.start)}`}let n=e.runs[0];return n?.brokenOn?`Broke on ${p(n.brokenOn)}`:`Check in today to start`}var Ge=[{emoji:`📚`,name:`Read daily`},{emoji:`💧`,name:`Drink Water`},{emoji:`💪`,name:`Lift Weights`},{emoji:`🏃`,name:`Run`},{emoji:`📖`,name:`Scriptures`}],Ke=[{emoji:`🌈`,name:`Your Gay`}];function qe(e,t=`main`){return{app:`ember`,version:1,habits:(t===`friends`?Ke:Ge).map((t,n)=>({id:`seed-${n+1}`,name:t.name,emoji:t.emoji,createdOn:e,archived:!1,order:n,completed:[]}))}}var Je=y()===`friends`?`ember.friends.habits.v1`:`ember.habits.v1`;function Ye(e,t,n={}){let r=n.key??Je,i=n.variant??y(),a;try{a=e.getItem(r)}catch{return{ok:!1,error:`storage-unavailable`,raw:null}}if(a===null){let n=qe(t,i);try{e.setItem(r,JSON.stringify(n))}catch{return{ok:!1,error:`storage-unavailable`,raw:null}}return{ok:!0,data:n,seeded:!0}}let o=S(a);return o.ok?{ok:!0,data:o.data,seeded:!1}:{ok:!1,error:o.error,raw:a}}function R(e,t){try{return e.setItem(Je,JSON.stringify(t)),!0}catch{return!1}}function Xe(e){return ye(e)}function Ze(){return{toast:null,formError:null,importError:null,paste:``,draft:null,dialog:null}}var z=document.querySelector(`#app`);if(!z)throw Error(`Missing #app`);var B=Ze(),V=null,H=null,U=null,W=null,Qe=0,G=D(location.hash,a());`scrollRestoration`in history&&(history.scrollRestoration=`manual`),$e(),K({scroll:`top`}),window.addEventListener(`hashchange`,()=>{let e=D(location.hash,a()),t=G.name===`detail`&&e.name===`detail`&&G.id===e.id;B.dialog=null,B.formError=null,B.draft=null,K({scroll:t?`keep`:`top`})}),z.addEventListener(`click`,e=>{let t=e.target?.closest(`[data-action]`);if(!t)return;let n=t.dataset.action??``;if(n!==`noop`){if(n===`dismiss`)B.dialog=null,K({scroll:`keep`});else if(n===`copy-raw`)tt();else if(n===`reset`)et();else if(n===`skip-name`)J(``)&&(B.formError=null,B.draft=null,K({scroll:`top`}));else if(V){if(n===`nav`){let e=t.dataset.nav;e&&q(e)}else if(n===`toggle`){let e=t.dataset.id;if(!e)return;let n=a(),r=v(V,e)?.completed.includes(n)??!1;V=ae(V,e,n,n),W=r?null:e,Y(),K({scroll:`keep`})}else if(n===`toggle-day`){let e=t.dataset.id,n=t.dataset.date;if(!e||!n)return;let r=a();V=ae(V,e,n,r),Y(),K({scroll:`keep`})}else if(n===`move`){let e=t.dataset.id;if(!e)return;let n=t.dataset.dir===`-1`?-1:1;V=oe(V,e,n),Y(),K({scroll:`keep`})}else if(n===`archive`||n===`restore`){let e=t.dataset.id;if(!e)return;let r=v(V,e)?.name??`Habit`;V=se(V,e,n===`archive`),Y()&&X(n===`archive`?`Archived ${r}`:`Restored ${r}`),n===`archive`?q(`#/habits`):K({scroll:`keep`})}else if(n===`ask-delete`){let e=t.dataset.id;if(!e)return;B.dialog={kind:`delete`,id:e},K({scroll:`keep`})}else if(n===`confirm-delete`){let e=B.dialog?.kind===`delete`?B.dialog.id:t.dataset.id;if(!e)return;let n=v(V,e)?.name??`Habit`;V=ce(V,e),B.dialog=null,Y()&&X(`Deleted ${n}`),q(`#/`)}else if(n===`confirm-import`){if(B.dialog?.kind!==`import`)return;let e=B.dialog.data;V={app:`ember`,version:1,habits:e.habits};let t=R(localStorage,V),n=e.name===void 0||J(e.name),r=t&&n;B.dialog=null,B.paste=``,B.importError=null,X(r?`Backup restored`:`Couldn't save on this phone.`),r?q(`#/`):K({scroll:`keep`})}else if(n===`download-backup`)Q();else if(n===`copy-backup`)nt();else if(n===`share-backup`)rt();else if(n===`pick-emoji`){let e=t.dataset.emoji??``,n=z.querySelector(`#habit-emoji`),r=z.querySelector(`#emoji-preview`),i=z.querySelector(`#emoji-custom`);n&&(n.value=e),r&&(r.textContent=e),i&&(i.value=``),z.querySelectorAll(`.emoji-opt`).forEach(e=>{let n=e===t;e.classList.toggle(`on`,n),e.setAttribute(`aria-pressed`,n?`true`:`false`)})}}}}),z.addEventListener(`input`,e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||t.id!==`emoji-custom`)return;let n=h(t.value);n&&t.value!==n&&(t.value=n);let r=z.querySelector(`#habit-emoji`),i=z.querySelector(`#emoji-preview`);r&&n&&(r.value=n),i&&n&&(i.textContent=n),z.querySelectorAll(`.emoji-opt`).forEach(e=>{let t=e.dataset.emoji===n;e.classList.toggle(`on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)})}),z.addEventListener(`change`,e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||t.id!==`import-file`)return;let n=t.files?.[0];t.value=``,n&&(n.size>2e6?(B.importError=`That backup is too large to import.`,K({scroll:`keep`})):n.text().then(e=>$(e)))}),z.addEventListener(`submit`,e=>{let t=e.target;if(t instanceof HTMLFormElement&&V){if(e.preventDefault(),t.id===`welcome-form`){let e=x(t.querySelector(`#welcome-name`)?.value??``);if(!e){B.formError=`Enter a name, or skip.`,B.draft={name:t.querySelector(`#welcome-name`)?.value??``,emoji:``},K({scroll:`keep`});return}J(e)&&(B.formError=null,B.draft=null,K({scroll:`top`}))}else if(t.id===`name-form`){let e=x(t.querySelector(`#profile-name`)?.value??``);J(e)&&(X(e?`Name saved`:`Greeting cleared`),K({scroll:`keep`}))}else if(t.id===`habit-form`){let e=t.querySelector(`#habit-name`)?.value??``,n=t.querySelector(`#habit-emoji`)?.value??``,r=t.dataset.id||void 0,i=le(V,{id:r,name:e,emoji:n},a());if(i.error){B.formError=i.error,B.draft={name:e,emoji:n},K({scroll:`keep`});return}V=i.data;let o=R(localStorage,V);B.formError=null,B.draft=null,X(o?r?`Habit updated`:`Habit added`:`Couldn't save on this phone.`),q(r?E(r):`#/`)}else t.id===`import-form`&&$(t.querySelector(`#import-json`)?.value??``)}});function $e(){let e=Ye(localStorage,a());e.ok?(V={app:`ember`,version:1,habits:e.data.habits},H=me(localStorage),U=null):(V=null,U={error:e.error,raw:e.raw})}function K(e){let t=D(location.hash,a());G=t;let n=W;W=null;let r=e?.scroll===`top`?0:window.scrollY;z.innerHTML=Ee({data:V,profile:H,loadError:U,route:t,today:a(),ui:B,popId:n}),document.title=Te(t,V),window.scrollTo(0,e?.scroll===`top`?0:r)}function q(e){(location.hash===``||location.hash===`#`?`#/`:location.hash)===e?(B.dialog=null,B.formError=null,B.draft=null,K({scroll:`top`})):location.hash=e}function J(e){let t={name:x(e)};return he(localStorage,t)?(H=t,!0):(X(`Couldn't save on this phone.`),K({scroll:`keep`}),!1)}function Y(){if(!V)return!1;let e=R(localStorage,V);return e||X(`Couldn't save on this phone.`),e}function X(e){B.toast=e,window.clearTimeout(Qe),Qe=window.setTimeout(()=>{B.toast===e&&(B.toast=null,document.querySelector(`.toast`)?.remove())},2600)}function et(){let e=qe(a(),y());R(localStorage,e)?(V=e,U=null,X(`Starter habits restored`),q(`#/`)):(X(`Couldn't save on this phone.`),K({scroll:`keep`}))}async function tt(){if(U?.raw){try{await navigator.clipboard.writeText(U.raw),X(`Saved text copied`)}catch{X(`Couldn't copy the saved text.`)}K({scroll:`keep`})}}function Z(){return V?{name:`${y()===`friends`?`ember-friends-backup`:`ember-backup`}-${a()}.json`,json:Xe({...V,name:H?.name??``})}:null}function Q(){let e=Z();if(!e)return;let t=new Blob([e.json],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e.name,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(n),X(`Backup downloading`),K({scroll:`keep`})}async function nt(){let e=Z();if(e){try{await navigator.clipboard.writeText(e.json),X(`Backup copied`)}catch{X(`Couldn't copy. Try Download.`)}K({scroll:`keep`})}}async function rt(){let e=Z();if(!e)return;let t=new File([e.json],e.name,{type:`application/json`});try{if(navigator.canShare?.({files:[t]}))await navigator.share({files:[t],title:`${b()} backup`});else if(navigator.share)await navigator.share({title:`${b()} backup`,text:e.json});else{Q();return}X(`Backup shared`),K({scroll:`keep`})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;Q()}}function $(e){B.paste=e;let t=S(e);t.ok?(B.importError=null,B.dialog={kind:`import`,data:t.data},K({scroll:`keep`})):(B.importError=t.error,B.dialog=null,K({scroll:`keep`}))}