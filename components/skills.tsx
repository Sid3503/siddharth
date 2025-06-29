export default function Skills() {
  const skills = [
    "Neural Networks",
    "Computer Vision",
    "NLP",
    "GenAI",
    "Artificial Intelligence",
    "Deep Learning",
    "Machine Learning",
    "SQL",
  ]

  return (
    <section className="mb-8">
      <ul className="list-disc pl-5 grid grid-cols-2 gap-2 text-black/90 dark:text-white/90">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
