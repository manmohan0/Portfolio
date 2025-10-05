import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { cn } from './utils/classes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={cn(
      "fixed bg-black inset-0 -z-10 w-full", 
      "bg-[linear-gradient(to_right,#73737340_2px,transparent_1px),linear-gradient(to_bottom,#73737340_2px,transparent_1px)] bg-[size:20px_20px] lg:bg-[size:40px_40px]"  
    )}/>
    <App />
  </StrictMode>,
)
