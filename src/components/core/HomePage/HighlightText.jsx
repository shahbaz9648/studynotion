const HighlightText = ({ text }) => {
  const space = " "
  return (
    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text font-bold text-transparent">
      {space}
      {text}
    </span>
  )
}

export default HighlightText
