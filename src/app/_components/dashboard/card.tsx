const Card = ({ children = null, className = "" }: { children?: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] rounded-2xl border border-border ${className}`}>
      {children}
    </div>
  )
}

export default Card