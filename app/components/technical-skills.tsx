export default function TechnicalSkills() {
  const skills = [
    { category: "Languages", items: ["Python", "C++", "SQL"] },
    { category: "Developer Tools", items: ["Streamlit", "AWS", "Hugging Face", "Gen AI", "YOLO"] },
    { category: "Technologies/Frameworks", items: ["LangFlow", "DataStax", "LangChain", "Flask"] },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-semibold">{skill.category}:</h3>
            <p>{skill.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

