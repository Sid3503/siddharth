export default function TechnicalSkills() {
  const skills = [
    { category: "Languages", items: ["Python", "C++", "SQL"] },
    { category: "Developer Tools", items: ["Streamlit", "Hugging Face", "Gen AI", "Meta API"] },
    { category: "Technologies/Frameworks", items: ["LangFlow", "n8n", "LangChain", "LangGraph", "LiveKit"] },
  ]

  return (
    <section className="mb-8">
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-semibold text-black dark:text-white">{skill.category}:</h3>
            <p className="text-black/90 dark:text-white/90">{skill.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
