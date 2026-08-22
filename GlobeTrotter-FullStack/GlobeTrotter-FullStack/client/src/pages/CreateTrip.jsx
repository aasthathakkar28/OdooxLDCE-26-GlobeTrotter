import {useState} from "react";
import {ArrowRight,CalendarDays,Clock3,ImagePlus,MapPin,Save} from "lucide-react";
import {useNavigate} from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import {activities,cities} from "../data/mockData";
import {tripAPI} from "../services/api";

const initialForm={name:"",startDate:"",endDate:"",startTime:"",endTime:"",description:"",cover:"",place:""};

export default function CreateTrip(){
 const nav=useNavigate();
 const[form,setForm]=useState(initialForm);
 const[error,setError]=useState("");
 const update=(key,value)=>setForm(current=>({...current,[key]:value}));
 const submit=async event=>{
  event.preventDefault();
  setError("");
  if(form.endDate<form.startDate||(form.startDate===form.endDate&&form.endTime&&form.startTime&&form.endTime<=form.startTime)){
   setError("End date and time must be after the start date and time.");
   return;
  }
  try{const trip=await tripAPI.create(form);nav(`/trips/${trip.id}/builder`)}catch(exception){setError(exception.message)}
 };
 return <section className="page create-page"><PageHeader title="Plan a new trip" subtitle="Start with the essentials, then build a route around what excites you."/><div className="create-workspace"><div><form className="section-card create-form" onSubmit={submit}><div className="form-section-heading"><span className="step-badge">01</span><div><span className="eyebrow">Trip details</span><h2>Give your journey a beginning</h2><p>These details can always be edited as your plans take shape.</p></div></div><label>Trip name<span className="required">*</span><input value={form.name} onChange={event=>update("name",event.target.value)} placeholder="e.g. A week in Italy" required/></label><label>Choose a place<span className="required">*</span><div className="input-with-icon"><MapPin size={16}/><input value={form.place} onChange={event=>update("place",event.target.value)} placeholder="Search for your first destination" required/></div></label><div className="form-grid"><label><CalendarDays size={15}/> Start date<span className="required">*</span><input type="date" value={form.startDate} onChange={event=>update("startDate",event.target.value)} required/></label><label><CalendarDays size={15}/> End date<span className="required">*</span><input type="date" value={form.endDate} onChange={event=>update("endDate",event.target.value)} min={form.startDate||undefined} required/></label><label><Clock3 size={15}/> Start time<input type="time" value={form.startTime} onChange={event=>update("startTime",event.target.value)}/></label><label><Clock3 size={15}/> End time<input type="time" value={form.endTime} onChange={event=>update("endTime",event.target.value)}/></label></div><label>Trip description<textarea value={form.description} onChange={event=>update("description",event.target.value)} placeholder="What do you want to see, taste, or feel?" rows="4"/></label><div className="cover-upload"><ImagePlus size={20}/><div><b>Add a cover photo</b><small>Optional · JPG or PNG</small></div><label className="btn btn-outline small">Browse<input type="file" accept="image/*" onChange={event=>update("cover",event.target.files?.[0]?.name||"")}/></label></div>{error&&<div className="error-text">{error}</div>}<div className="form-actions"><button type="button" className="btn btn-outline" onClick={()=>nav("/")}>Cancel</button><button className="btn btn-primary"><Save size={16}/> Save & continue <ArrowRight size={15}/></button></div></form></div><aside className="suggestions-panel"><div className="suggestion-heading"><span className="eyebrow">A little inspiration</span><h2>Suggestions for places to visit</h2><p>Start with a destination or an experience. You can add more in your itinerary.</p></div><div className="suggestion-grid">{cities.slice(0,6).map(city=><button type="button" className={`suggestion-card ${form.place===city.name?"selected":""}`} key={city.name} onClick={()=>update("place",city.name)}><span className="suggestion-art">{city.emoji}</span><span><b>{city.name}</b><small>{city.country}</small></span><ArrowRight size={15}/></button>)}</div><div className="activity-callout"><span>✦</span><div><b>Make it personal</b><p>After saving, add experiences like {activities[0].name.toLowerCase()} or a local food tour.</p></div></div></aside></div></section>;
}
