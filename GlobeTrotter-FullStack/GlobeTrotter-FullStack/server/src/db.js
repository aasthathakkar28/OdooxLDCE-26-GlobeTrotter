import fs from "fs"; import path from "path"; import { fileURLToPath } from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url)); const dir=path.join(__dirname,"../data"); const file=path.join(dir,"db.json");
const seed={users:[],trips:[]};
export function readDB(){if(!fs.existsSync(dir))fs.mkdirSync(dir,{recursive:true});if(!fs.existsSync(file))fs.writeFileSync(file,JSON.stringify(seed,null,2));try{const parsed=JSON.parse(fs.readFileSync(file,"utf8"));return{users:Array.isArray(parsed.users)?parsed.users:[],trips:Array.isArray(parsed.trips)?parsed.trips:[]}}catch{writeDB(seed);return{users:[],trips:[]}}}
export function writeDB(db){fs.writeFileSync(file,JSON.stringify(db,null,2))}
export function updateDB(fn){const db=readDB();const result=fn(db);writeDB(db);return result}
