export default function TechnicalSkills() {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "C++", "SQL"],
    },
    {
      category: "Frameworks & Technologies",
      items: ["Streamlit", "Flask", "LangChain", "LangFlow", "Hugging Face Transformers", "n8n"],
    },
    {
      category: "AI & ML Tools",
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV"],
    },
    {
      category: "Cloud & Deployment",
      items: ["GCP", "Vercel", "Render", "Flask"],
    },
    {
      category: "Data & Vector Stores",
      items: ["FAISS", "DataStax", "SQLite", "Pandas"],
    },
  ];

  return (
    <section className="mb-8">
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-semibold">{skill.category}:</h3>
            <p>{skill.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
