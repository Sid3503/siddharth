export default function TechnicalSkills() {
  const skills = [
    { category: "Languages", items: ["Python", "SQL", "C++"] },
    {
      category: "Tools / Frameworks",
      items: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "LangFlow",
        "n8n",
        "LangChain",
        "HuggingFace",
        "LangGraph",
        "LiveKit",
        "PipeCat",
      ],
    },
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
