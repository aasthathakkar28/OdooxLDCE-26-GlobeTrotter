import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }) {
  return <div className="app-shell"><Sidebar /><main className="main-area"><Topbar />{children}</main></div>;
}