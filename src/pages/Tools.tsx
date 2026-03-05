import { motion } from "motion/react";
import { 
  PenTool, 
  Type, 
  Image as ImageIcon, 
  Layers, 
  MousePointer2, 
  Square, 
  Circle, 
  Triangle,
  Move,
  ZoomIn,
  Download,
  Share2,
  Settings
} from "lucide-react";
import { useState } from "react";

export default function Tools() {
  const [activeTool, setActiveTool] = useState("select");

  const tools = [
    { id: "select", icon: MousePointer2, label: "Select (V)" },
    { id: "move", icon: Move, label: "Pan (Space)" },
    { id: "rectangle", icon: Square, label: "Rectangle (R)" },
    { id: "ellipse", icon: Circle, label: "Ellipse (O)" },
    { id: "polygon", icon: Triangle, label: "Polygon" },
    { id: "pen", icon: PenTool, label: "Pen (P)" },
    { id: "text", icon: Type, label: "Text (T)" },
    { id: "image", icon: ImageIcon, label: "Image (I)" },
  ];

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] overflow-hidden bg-zinc-100">
      {/* Top Toolbar */}
      <div className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-100 rounded-lg p-1 border border-zinc-200">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`p-2 rounded-md transition-colors ${
                  activeTool === tool.id 
                    ? "bg-white shadow-sm text-indigo-600" 
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
                }`}
                title={tool.label}
              >
                <tool.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
          <div className="h-6 w-px bg-zinc-300 mx-2"></div>
          <button className="p-2 text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors">
            <Layers className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-md border border-zinc-200">
            <ZoomIn className="w-4 h-4" />
            <span>100%</span>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Layers */}
        <div className="w-64 bg-white border-r border-zinc-200 flex flex-col shrink-0">
          <div className="p-3 border-b border-zinc-200 flex justify-between items-center">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Layers</h3>
            <button className="text-zinc-400 hover:text-zinc-600">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {["Hero Section", "Navigation", "Background", "Button Primary", "Text Content"].map((layer, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm cursor-pointer ${
                  i === 0 ? "bg-indigo-50 text-indigo-700" : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {i % 2 === 0 ? <Square className="w-3.5 h-3.5 text-zinc-400" /> : <Type className="w-3.5 h-3.5 text-zinc-400" />}
                <span className="truncate">{layer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-zinc-100 relative overflow-hidden flex items-center justify-center p-8">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Canvas Artboard */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl aspect-[16/9] bg-white shadow-xl ring-1 ring-zinc-200 relative overflow-hidden"
          >
            {/* Mock Design Elements */}
            <div className="absolute top-8 left-8 right-8 h-16 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center px-6 justify-between">
              <div className="w-32 h-6 bg-zinc-200 rounded"></div>
              <div className="flex gap-4">
                <div className="w-16 h-4 bg-zinc-200 rounded"></div>
                <div className="w-16 h-4 bg-zinc-200 rounded"></div>
                <div className="w-16 h-4 bg-zinc-200 rounded"></div>
              </div>
            </div>
            
            <div className="absolute top-32 left-8 w-1/2 h-64 bg-indigo-50 border border-indigo-100 rounded-xl p-8 flex flex-col justify-center">
              <div className="w-3/4 h-8 bg-indigo-200 rounded mb-4"></div>
              <div className="w-full h-4 bg-indigo-100 rounded mb-2"></div>
              <div className="w-5/6 h-4 bg-indigo-100 rounded mb-8"></div>
              <div className="w-32 h-10 bg-indigo-500 rounded-lg"></div>
            </div>
            
            <div className="absolute top-32 right-8 w-1/3 h-64 bg-zinc-100 rounded-full border-8 border-white shadow-inner flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-emerald-200 opacity-50"></div>
            </div>
            
            {/* Selection Box Mock */}
            <div className="absolute top-32 left-8 w-1/2 h-64 border-2 border-indigo-500 pointer-events-none">
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-72 bg-white border-l border-zinc-200 flex flex-col shrink-0">
          <div className="p-3 border-b border-zinc-200">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Design</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Alignment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-zinc-700">Alignment</span>
              </div>
              <div className="flex gap-1 bg-zinc-100 p-1 rounded-md border border-zinc-200">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-6 flex-1 bg-white rounded shadow-sm flex items-center justify-center">
                    <div className="w-3 h-3 border border-zinc-400 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Layout */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-zinc-700">Layout</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 border border-zinc-200 rounded px-2 py-1">
                  <span className="text-xs text-zinc-400">X</span>
                  <input type="text" value="120" className="w-full text-sm text-zinc-700 outline-none bg-transparent" readOnly />
                </div>
                <div className="flex items-center gap-2 border border-zinc-200 rounded px-2 py-1">
                  <span className="text-xs text-zinc-400">Y</span>
                  <input type="text" value="340" className="w-full text-sm text-zinc-700 outline-none bg-transparent" readOnly />
                </div>
                <div className="flex items-center gap-2 border border-zinc-200 rounded px-2 py-1">
                  <span className="text-xs text-zinc-400">W</span>
                  <input type="text" value="480" className="w-full text-sm text-zinc-700 outline-none bg-transparent" readOnly />
                </div>
                <div className="flex items-center gap-2 border border-zinc-200 rounded px-2 py-1">
                  <span className="text-xs text-zinc-400">H</span>
                  <input type="text" value="256" className="w-full text-sm text-zinc-700 outline-none bg-transparent" readOnly />
                </div>
              </div>
            </div>

            {/* Fill */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-zinc-700">Fill</span>
                <button className="text-zinc-400 hover:text-zinc-600">+</button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded border border-zinc-200 bg-indigo-50"></div>
                <div className="flex-1 border border-zinc-200 rounded px-2 py-1 text-sm text-zinc-700">
                  #EEF2FF
                </div>
                <div className="w-12 border border-zinc-200 rounded px-2 py-1 text-sm text-zinc-700 text-center">
                  100%
                </div>
              </div>
            </div>

            {/* Stroke */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-zinc-700">Stroke</span>
                <button className="text-zinc-400 hover:text-zinc-600">+</button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded border border-zinc-200 bg-indigo-100"></div>
                <div className="flex-1 border border-zinc-200 rounded px-2 py-1 text-sm text-zinc-700">
                  #E0E7FF
                </div>
                <div className="w-12 border border-zinc-200 rounded px-2 py-1 text-sm text-zinc-700 text-center">
                  1px
                </div>
              </div>
            </div>
            
            {/* Effects */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-zinc-700">Effects</span>
                <button className="text-zinc-400 hover:text-zinc-600">+</button>
              </div>
              <div className="text-sm text-zinc-500 italic">No effects applied</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
