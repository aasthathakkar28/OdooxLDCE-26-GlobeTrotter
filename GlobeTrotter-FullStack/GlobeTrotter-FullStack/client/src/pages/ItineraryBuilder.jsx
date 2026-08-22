import {useState} from "react";
import {CalendarDays,Plus,Trash2} from "lucide-react";
import PageHeader from "../components/common/PageHeader";

const initialSections=[
 {description:"All the necessary information about this section.\nThis can be anything like travel section, hotel or any other activity",start:"",end:"",budget:""},
 {description:"All the necessary information about this section.\nThis can be anything like travel section, hotel or any other activity",start:"",end:"",budget:""},
 {description:"All the necessary information about this section.\nThis can be anything like travel section, hotel or any other activity",start:"",end:"",budget:""}
];

export default function ItineraryBuilder(){
 const[sections,setSections]=useState(initialSections);
 const update=(index,key,value)=>setSections(current=>current.map((section,item)=>item===index?{...section,[key]:value}:section));
 const addSection=()=>setSections(current=>[...current,{description:"All the necessary information about this section.\nThis can be anything like travel section, hotel or any other activity",start:"",end:"",budget:""}]);
 const removeSection=index=>setSections(current=>current.length>1?current.filter((_,item)=>item!==index):current);
 return <section className="page builder-screen"><PageHeader title="Build itinerary" subtitle="Organize the important details of every part of your trip."/><div className="builder-board"><div className="builder-board-title"><span className="eyebrow">Your trip plan</span><h2>Itinerary sections</h2><p>Add a travel leg, hotel stay, or activity to each section.</p></div><div className="builder-sections">{sections.map((section,index)=><article className="builder-section" key={index}><div className="builder-section-heading"><div className="section-label"><span>{index+1}</span><b>Section {index+1}</b></div><button className="builder-delete" title="Remove section" onClick={()=>removeSection(index)}><Trash2 size={15}/></button></div><textarea value={section.description} onChange={event=>update(index,"description",event.target.value)} aria-label={`Section ${index+1} description`}/><div className="builder-fields"><label><CalendarDays size={15}/> Date range<div className="date-range"><input type="date" value={section.start} onChange={event=>update(index,"start",event.target.value)}/><span>to</span><input type="date" value={section.end} onChange={event=>update(index,"end",event.target.value)}/></div></label><label>Budget of this section<div className="builder-budget"><span>$</span><input type="number" min="0" value={section.budget} onChange={event=>update(index,"budget",event.target.value)} placeholder="0.00"/></div></label></div></article>)}</div><button className="add-section-button" onClick={addSection}><Plus size={19}/> Add another Section</button></div></section>
}