export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,142,247,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,142,247,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-700/4 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-600/4 rounded-full blur-[80px]" />
    </div>
  )
}
