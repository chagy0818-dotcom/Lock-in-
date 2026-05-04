“use client”;
import { useState, useRef } from “react”;

const NEON_OPTIONS = [
{ label:“Pink”,   value:”#ff2d78” },
{ label:“Cyan”,   value:”#00eaff” },
{ label:“Green”,  value:”#00ff94” },
{ label:“Purple”, value:”#bf5fff” },
{ label:“Gold”,   value:”#ffd700” },
{ label:“Orange”, value:”#ff6b00” },
];

const DEFAULT_HABITS = [
{ id:1, label:“Wake up at 5AM”,  emoji:“☀️”, period:“Morning”   },
{ id:2, label:“Cold Shower”,     emoji:“🚿”, period:“Morning”   },
{ id:3, label:“Workout”,         emoji:“💪”, period:“Afternoon” },
{ id:4, label:“Eat Clean”,       emoji:“🥗”, period:“Afternoon” },
{ id:5, label:“Read 10 Pages”,   emoji:“📖”, period:“Evening”   },
{ id:6, label:“Sleep by 10PM”,   emoji:“🌙”, period:“Evening”   },
];

const PERIOD_LIST  = [“Morning”,“Afternoon”,“Evening”];
const PERIOD_ICONS = { Morning:“🌅”, Afternoon:“☀️”, Evening:“🌙” };
const DAY_NAMES    = [“Sun”,“Mon”,“Tue”,“Wed”,“Thu”,“Fri”,“Sat”];
const MONTH_NAMES  = [“Jan”,“Feb”,“Mar”,“Apr”,“May”,“Jun”,“Jul”,“Aug”,“Sep”,“Oct”,“Nov”,“Dec”];
const NEON1 = [”#ff2d78”,”#00ff94”,”#00eaff”,”#ffd700”,”#bf5fff”,”#ff6b00”,”#ff00ff”,”#00ff00”,”#ff4444”,”#00bfff”];
const NEON2 = [”#00eaff”,”#bf5fff”,”#ff2d78”,”#00ff94”,”#ff6b00”,”#ffd700”,”#ff4444”,”#ff00ff”,”#00bfff”,”#00ff00”];

const getDayKey   = (d) => d.toISOString().split(“T”)[0];
const getWeekDays = (c) => { const a=[]; for(let i=-3;i<=3;i++){const d=new Date(c);d.setDate(c.getDate()+i);a.push(d);} return a; };
const c1 = (h) => NEON1[h.id % NEON1.length];
const c2 = (h) => NEON2[h.id % NEON2.length];

const KEYFRAMES = `
@keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
@keyframes titlePulse {
0%,100%{text-shadow:0 0 30px var(–ac),0 0 12px var(–ac2),0 0 4px #fff}
50%{text-shadow:0 0 60px var(–ac),0 0 30px var(–ac2),0 0 80px var(–ac)}
}
@keyframes ringPulse {
0%,100%{box-shadow:0 0 30px var(–ac),inset 0 0 20px var(–ac2)}
50%{box-shadow:0 0 60px var(–ac),0 0 100px var(–ac),inset 0 0 40px var(–ac2)}
}
@keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

- { box-sizing: border-box; }
  input { font-family: Georgia, serif; }
  `;

function Onboarding({ onDone }) {
const [step, setStep]          = useState(0);
const [name, setName]          = useState(””);
const [accent, setAccent]      = useState(NEON_OPTIONS[0].value);
const [habits, setHabits]      = useState(DEFAULT_HABITS.map(h=>({…h})));
const [newLabel, setNewLabel]  = useState(””);
const [newEmoji, setNewEmoji]  = useState(“⭐”);
const [newPeriod, setNewPeriod]= useState(“Morning”);

const addHabit = () => {
if (!newLabel.trim()) return;
setHabits(prev=>[…prev,{id:Date.now(),label:newLabel.trim(),emoji:newEmoji,period:newPeriod}]);
setNewLabel(””); setNewEmoji(“⭐”);
};

return (
<div style={{minHeight:“100vh”,background:“radial-gradient(ellipse at 50% 0%,#3a0060 0%,#120020 45%,#000 100%)”,fontFamily:“Georgia,serif”,color:”#fff”}}>
<style>{KEYFRAMES}</style>
<div style={{minHeight:“100vh”,display:“flex”,flexDirection:“column”,alignItems:“center”,padding:“40px 20px 60px”}}>
<div style={{display:“flex”,gap:8,marginBottom:32}}>
{[“Name”,“Color”,“Habits”].map((s,i)=>(
<div key={i} style={{width:28,height:28,borderRadius:“50%”,border:`2px solid ${i<=step?accent:"rgba(255,255,255,0.2)"}`,background:i<step?accent:i===step?accent+“33”:“transparent”,display:“flex”,alignItems:“center”,justifyContent:“center”,fontSize:11,fontWeight:700,color:i<step?”#000”:i===step?accent:“rgba(255,255,255,0.3)”,boxShadow:i===step?`0 0 14px ${accent}`:“none”}}>
{i<step?“✓”:i+1}
</div>
))}
</div>

```
    <div style={{width:"100%",maxWidth:400,animation:"fadeIn 0.4s ease"}}>
      {step===0&&(
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:8}}>🔒</div>
          <div style={{fontSize:28,fontWeight:900,letterSpacing:2,marginBottom:6,textShadow:`0 0 20px ${accent}`}}>LOCK IN</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.5)",marginBottom:32}}>Your personal habit tracker</div>
          <div style={{fontSize:14,color:"rgba(255,255,255,0.6)",marginBottom:10,textAlign:"left"}}>What's your name?</div>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name..." style={{width:"100%",padding:"14px 16px",borderRadius:12,border:`1.5px solid ${accent}55`,background:"rgba(0,0,0,0.5)",color:"#fff",fontSize:16,outline:"none"}}/>
          <div onClick={()=>name.trim()&&setStep(1)} style={{marginTop:20,padding:"14px",borderRadius:12,background:name.trim()?`linear-gradient(135deg,${accent},${accent}99)`:"rgba(255,255,255,0.1)",textAlign:"center",fontWeight:700,fontSize:15,cursor:name.trim()?"pointer":"default",boxShadow:name.trim()?`0 0 20px ${accent}88`:"none"}}>
            Continue →
          </div>
        </div>
      )}

      {step===1&&(
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:22,fontWeight:900,letterSpacing:2,marginBottom:6,textShadow:`0 0 20px ${accent}`}}>PICK YOUR COLOR</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.5)",marginBottom:28}}>Choose your neon vibe</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:28}}>
            {NEON_OPTIONS.map(opt=>(
              <div key={opt.value} onClick={()=>setAccent(opt.value)} style={{padding:"18px 8px",borderRadius:14,border:`2px solid ${accent===opt.value?opt.value:"rgba(255,255,255,0.1)"}`,background:accent===opt.value?opt.value+"22":"rgba(0,0,0,0.3)",cursor:"pointer",boxShadow:accent===opt.value?`0 0 20px ${opt.value}99`:"none"}}>
                <div style={{width:28,height:28,borderRadius:"50%",background:opt.value,margin:"0 auto 8px",boxShadow:`0 0 14px ${opt.value}`}}/>
                <div style={{fontSize:12,fontWeight:700,color:accent===opt.value?opt.value:"rgba(255,255,255,0.6)"}}>{opt.label}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:10}}>
            <div onClick={()=>setStep(0)} style={{flex:1,padding:"13px",borderRadius:12,background:"rgba(255,255,255,0.08)",textAlign:"center",fontWeight:700,fontSize:14,cursor:"pointer",border:"1px solid rgba(255,255,255,0.1)"}}>← Back</div>
            <div onClick={()=>setStep(2)} style={{flex:2,padding:"13px",borderRadius:12,background:`linear-gradient(135deg,${accent},${accent}99)`,textAlign:"center",fontWeight:700,fontSize:14,cursor:"pointer",boxShadow:`0 0 20px ${accent}88`}}>Continue →</div>
          </div>
        </div>
      )}

      {step===2&&(
        <div>
          <div style={{fontSize:22,fontWeight:900,letterSpacing:2,marginBottom:6,textShadow:`0 0 20px ${accent}`,textAlign:"center"}}>YOUR HABITS</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.5)",marginBottom:20,textAlign:"center"}}>Add, remove, make it yours</div>
          {habits.map(h=>(
            <div key={h.id} style={{display:"flex",alignItems:"center",background:"rgba(0,0,0,0.4)",border:`1px solid ${accent}44`,borderRadius:12,padding:"10px 12px",marginBottom:8}}>
              <span style={{fontSize:18,marginRight:10}}>{h.emoji}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:600}}>{h.label}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>{h.period}</div>
              </div>
              <div onClick={()=>setHabits(prev=>prev.filter(x=>x.id!==h.id))} style={{fontSize:16,cursor:"pointer",color:"rgba(255,100,100,0.7)",padding:"0 4px"}}>✕</div>
            </div>
          ))}
          <div style={{background:"rgba(0,0,0,0.4)",border:`1px dashed ${accent}55`,borderRadius:12,padding:"14px",marginTop:12,marginBottom:20}}>
            <div style={{fontSize:11,color:accent,letterSpacing:2,marginBottom:10,fontFamily:"monospace"}}>+ ADD HABIT</div>
            <div style={{display:"flex",gap:8,marginBottom:8}}>
              <input value={newEmoji} onChange={e=>setNewEmoji(e.target.value)} style={{width:48,padding:"10px 8px",borderRadius:10,border:`1px solid ${accent}44`,background:"rgba(0,0,0,0.4)",color:"#fff",fontSize:18,textAlign:"center",outline:"none"}}/>
              <input value={newLabel} onChange={e=>setNewLabel(e.target.value)} placeholder="Habit name..." style={{flex:1,padding:"10px 12px",borderRadius:10,border:`1px solid ${accent}44`,background:"rgba(0,0,0,0.4)",color:"#fff",fontSize:13,outline:"none"}}/>
            </div>
            <div style={{display:"flex",gap:6,marginBottom:10}}>
              {PERIOD_LIST.map(p=>(
                <div key={p} onClick={()=>setNewPeriod(p)} style={{flex:1,padding:"7px 4px",borderRadius:8,border:`1px solid ${newPeriod===p?accent:"rgba(255,255,255,0.1)"}`,background:newPeriod===p?accent+"22":"transparent",fontSize:11,textAlign:"center",cursor:"pointer",color:newPeriod===p?accent:"rgba(255,255,255,0.5)",fontWeight:newPeriod===p?700:400}}>{p}</div>
              ))}
            </div>
            <div onClick={addHabit} style={{padding:"10px",borderRadius:10,background:newLabel.trim()?`linear-gradient(135deg,${accent},${accent}99)`:"rgba(255,255,255,0.08)",textAlign:"center",fontWeight:700,fontSize:13,cursor:newLabel.trim()?"pointer":"default"}}>Add Habit</div>
          </div>
          <div style={{display:"flex",gap:10}}>
            <div onClick={()=>setStep(1)} style={{flex:1,padding:"13px",borderRadius:12,background:"rgba(255,255,255,0.08)",textAlign:"center",fontWeight:700,fontSize:14,cursor:"pointer",border:"1px solid rgba(255,255,255,0.1)"}}>← Back</div>
            <div onClick={()=>habits.length>0&&onDone({name:name.trim()||"You",accent,habits})} style={{flex:2,padding:"13px",borderRadius:12,background:`linear-gradient(135deg,${accent},${accent}99)`,textAlign:"center",fontWeight:700,fontSize:15,cursor:"pointer",boxShadow:`0 0 24px ${accent}`}}>🔒 Lock In!</div>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
```

);
}

export default function LockIn() {
const [profile, setProfile]       = useState(null);
const [checked, setChecked]       = useState({});
const [tab, setTab]               = useState(“today”);
const [selectedDate, setSelectedDate] = useState(new Date());

if (!profile) return <Onboarding onDone={setProfile}/>;

const { name, accent, habits } = profile;
const accent2    = accent===”#ff2d78”?”#bf5fff”:”#ff2d78”;
const today      = new Date();
const dayKey     = getDayKey(selectedDate);
const dayChecked = checked[dayKey]||{};
const completed  = Object.values(dayChecked).filter(Boolean).length;
const pct        = Math.round((completed/habits.length)*100);
const weekDays   = getWeekDays(today);
const todayLabel = `${DAY_NAMES[selectedDate.getDay()]}, ${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}`;
const periods    = […new Set(habits.map(h=>h.period))].sort((a,b)=>PERIOD_LIST.indexOf(a)-PERIOD_LIST.indexOf(b));

const toggle = (id) => setChecked(prev=>({…prev,[dayKey]:{…(prev[dayKey]||{}),[id]:!prev[dayKey]?.[id]}}));

const statsData = weekDays.map(d=>{
const k=getDayKey(d);
const done=Object.values(checked[k]||{}).filter(Boolean).length;
return {label:DAY_NAMES[d.getDay()],pct:Math.round((done/habits.length)*100)};
});

return (
<div style={{minHeight:“100vh”,background:“radial-gradient(ellipse at 50% 0%,#3a0060 0%,#120020 45%,#000 100%)”,fontFamily:“Georgia,serif”,color:”#fff”}}>
<style>{KEYFRAMES+`:root{--ac:${accent};--ac2:${accent2}}`}</style>
<div style={{padding:“28px 16px 60px”}}>
<div style={{fontSize:11,letterSpacing:3,color:accent,fontFamily:“monospace”,marginBottom:4,textTransform:“uppercase”,textShadow:`0 0 10px ${accent}`}}>{todayLabel}</div>
<div style={{display:“flex”,alignItems:“center”,justifyContent:“space-between”,marginBottom:12}}>
<div>
<div style={{fontSize:12,color:“rgba(255,255,255,0.45)”,marginBottom:2}}>Welcome back,</div>
<div style={{fontSize:22,fontWeight:900,letterSpacing:2,animation:“titlePulse 2.5s ease-in-out infinite”}}>{name.toUpperCase()}’S GRIND 🔒</div>
</div>
<div style={{width:66,height:66,borderRadius:14,border:`2px solid ${accent}`,background:`${accent}22`,display:“flex”,flexDirection:“column”,alignItems:“center”,justifyContent:“center”,animation:“ringPulse 2s ease-in-out infinite”}}>
<div style={{fontSize:20,fontWeight:900,color:accent,textShadow:`0 0 14px ${accent}`,lineHeight:1}}>{pct}%</div>
<div style={{fontSize:9,color:“rgba(255,255,255,0.45)”,marginTop:2}}>{completed}/{habits.length}</div>
</div>
</div>

```
    <div style={{height:5,borderRadius:4,background:"rgba(255,255,255,0.08)",marginBottom:14,overflow:"hidden"}}>
      <div style={{height:"100%",borderRadius:4,width:`${pct}%`,background:`linear-gradient(90deg,${accent},${accent2},${accent})`,backgroundSize:"300% auto",boxShadow:`0 0 18px ${accent}`,transition:"width 0.4s ease",animation:"shimmer 2s linear infinite"}}/>
    </div>

    <div style={{display:"flex",gap:4,marginBottom:14}}>
      {weekDays.map((d,i)=>{
        const isToday=d.toDateString()===today.toDateString();
        const isSel=d.toDateString()===selectedDate.toDateString();
        const hasDot=Object.values(checked[getDayKey(d)]||{}).some(Boolean);
        return (
          <div key={i} onClick={()=>setSelectedDate(new Date(d))} style={{flex:1,textAlign:"center",padding:"7px 2px",borderRadius:10,cursor:"pointer",background:isSel?`${accent}28`:"rgba(0,0,0,0.38)",border:isSel?`1.5px solid ${accent}`:"1.5px solid rgba(255,255,255,0.1)",boxShadow:isSel?`0 0 16px ${accent}88`:"none"}}>
            <div style={{fontSize:8,color:isToday?accent:"rgba(255,255,255,0.4)",letterSpacing:1}}>{DAY_NAMES[d.getDay()].toUpperCase()}</div>
            <div style={{fontSize:14,fontWeight:700,color:isSel?"#fff":"rgba(255,255,255,0.7)",marginTop:2}}>{d.getDate()}</div>
            {hasDot&&<div style={{width:4,height:4,borderRadius:"50%",background:accent,boxShadow:`0 0 8px ${accent}`,margin:"3px auto 0"}}/>}
          </div>
        );
      })}
    </div>

    <div style={{display:"flex",gap:8,marginBottom:20}}>
      {["today","stats"].map(t=>(
        <div key={t} onClick={()=>setTab(t)} style={{flex:1,textAlign:"center",padding:"11px 0",borderRadius:12,cursor:"pointer",background:tab===t?`linear-gradient(135deg,${accent},${accent2})`:"rgba(0,0,0,0.42)",fontWeight:700,fontSize:13,color:tab===t?"#fff":"rgba(255,255,255,0.45)",boxShadow:tab===t?`0 0 24px ${accent}88`:"none",border:tab===t?"none":"1px solid rgba(255,255,255,0.1)",textTransform:"capitalize"}}>
          {t==="today"?"Today":"Stats"}
        </div>
      ))}
    </div>

    {tab==="today"&&periods.map(period=>{
      const ph=habits.filter(h=>h.period===period);
      if(!ph.length) return null;
      return (
        <div key={period} style={{marginBottom:6}}>
          <div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 4px 6px"}}>
            <span style={{fontSize:16}}>{PERIOD_ICONS[period]||"⏰"}</span>
            <span style={{fontSize:12,fontWeight:900,letterSpacing:3,color:accent,fontFamily:"monospace",textShadow:`0 0 18px ${accent}`}}>{period.toUpperCase()}</span>
          </div>
          {ph.map(h=>{
            const done=!!dayChecked[h.id];
            return (
              <div key={h.id} onClick={()=>toggle(h.id)} style={{display:"flex",alignItems:"center",borderRadius:14,padding:"13px 14px",marginBottom:8,cursor:"pointer",transition:"all 0.25s ease",background:done?`linear-gradient(90deg,${c1(h)}44,${c2(h)}44,${c1(h)}44)`:"rgba(0,0,0,0.4)",backgroundSize:done?"300% auto":"auto",animation:done?"shimmer 2s linear infinite":"none",border:`1.5px solid ${done?c1(h):"rgba(255,255,255,0.1)"}`,boxShadow:done?`0 0 22px ${c1(h)}88`:"none"}}>
                <span style={{fontSize:20,marginRight:12}}>{h.emoji}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:600,textDecoration:done?"line-through":"none",background:done?`linear-gradient(90deg,${c1(h)},${c2(h)},${c1(h)})`:"none",backgroundSize:done?"300% auto":"auto",WebkitBackgroundClip:done?"text":"unset",WebkitTextFillColor:done?"transparent":"rgba(255,255,255,0.92)",backgroundClip:done?"text":"unset",animation:done?"shimmer 2s linear infinite":"none"}}>{h.label}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:2}}>{h.period} • Daily</div>
                </div>
                <div style={{width:26,height:26,borderRadius:"50%",flexShrink:0,border:done?"none":"2px solid rgba(255,255,255,0.25)",background:done?`linear-gradient(90deg,${c1(h)},${c2(h)},${c1(h)})`:"transparent",backgroundSize:done?"300% auto":"auto",animation:done?"shimmer 1.5s linear infinite":"none",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:done?`0 0 20px ${c1(h)}`:"none"}}>
                  {done&&<span style={{fontSize:13,color:"#000",fontWeight:900}}>✓</span>}
                </div>
              </div>
            );
          })}
        </div>
      );
    })}

    {tab==="stats"&&(
      <div>
        <div style={{background:"rgba(0,0,0,0.52)",borderRadius:16,border:`1px solid ${accent}44`,padding:"18px 14px",marginBottom:16}}>
          <div style={{fontSize:10,color:accent,letterSpacing:3,fontFamily:"monospace",marginBottom:14,textShadow:`0 0 10px ${accent}`}}>WEEKLY COMPLETION</div>
          <div style={{display:"flex",alignItems:"flex-end",gap:6,height:90}}>
            {statsData.map((d,i)=>(
              <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                <div style={{fontSize:8,color:"rgba(255,255,255,0.45)"}}>{d.pct}%</div>
                <div style={{width:"100%",borderRadius:5,minHeight:4,height:`${Math.max(d.pct,4)}%`,background:d.pct>0?`linear-gradient(180deg,${accent},${accent2})`:"rgba(255,255,255,0.08)",boxShadow:d.pct>0?`0 0 16px ${accent}`:"none"}}/>
                <div style={{fontSize:8,color:"rgba(255,255,255,0.4)"}}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{fontSize:10,color:accent,letterSpacing:3,fontFamily:"monospace",marginBottom:10}}>HABIT STREAKS</div>
        {habits.map(h=>{
          let streak=0; const d=new Date(today);
          while(checked[getDayKey(d)]?.[h.id]){streak++;d.setDate(d.getDate()-1);}
          return (
            <div key={h.id} style={{display:"flex",alignItems:"center",background:"rgba(0,0,0,0.48)",borderRadius:12,border:`1px solid ${c1(h)}55`,padding:"11px 12px",marginBottom:7}}>
              <span style={{fontSize:16,marginRight:10}}>{h.emoji}</span>
              <div style={{flex:1,fontSize:12,color:"rgba(255,255,255,0.85)"}}>{h.label}</div>
              <div style={{background:streak>0?`linear-gradient(90deg,${c1(h)},${c2(h)},${c1(h)})`:"rgba(255,255,255,0.07)",backgroundSize:streak>0?"300% auto":"auto",animation:streak>0?"shimmer 2s linear infinite":"none",border:streak>0?`1px solid ${c1(h)}`:"1px solid transparent",borderRadius:7,padding:"3px 9px",fontSize:11,fontWeight:700,color:streak>0?"#000":"rgba(255,255,255,0.3)"}}>
                {streak>0?`🔥 ${streak}d`:"—"}
              </div>
            </div>
          );
        })}
        <div onClick={()=>{setProfile(null);setChecked({});}} style={{marginTop:24,padding:"12px",borderRadius:12,background:"rgba(255,50,50,0.1)",border:"1px solid rgba(255,50,50,0.3)",textAlign:"center",fontSize:12,color:"rgba(255,100,100,0.7)",cursor:"pointer"}}>↺ Reset & Edit Profile</div>
      </div>
    )}
  </div>
</div>
```

);
}
