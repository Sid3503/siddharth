export default function Projects() {
  const projects = [
    {
      title: "Demand Forecasting Model",
      tags: ["Time Series Forecasting", "NBeats", "Generative AI"],
      description: [
        "Predicted sales trends, <b>reducing overstocking</b> and cutting excess costs by <b>15%</b>, optimizing supply chains.",
        "Provided <b>90-day forecasts</b>, helping businesses plan inventory and purchasing efficiently, minimizing last-minute orders.",
        "Built an <b>Q&A Bot</b> to simplify sales trend analysis and insights, making real-time decision-making easier.",
        "Enhanced forecast accuracy using <b>deep learning</b>, outperforming traditional statistical models.",
      ],
    },
    {
      title: "Textract",
      tags: ["PDF Processing", "Automation", "Computer Vision"],
      description: [
        "Automated PDF data extraction, <b>reducing manual work by 75%</b> and eliminating human errors in processing.",
        "Streamlined compliance, documentation, and data entry for businesses, <b>saving hours of labor</b>.",
        "Enabled <b>quick keyword searches</b> inside PDFs, making information retrieval as easy as a Google search.",
        "Integrated <b>Generative AI</b> to summarize extracted content, providing quick document insights.",
      ],
    },
    {
      title: "Cancero",
      tags: ["CNN", "Medical Imaging", "Gemini API", "Healthcare Tech"],
      description: [
        "Achieved <b>92% accuracy</b> in cancer detection from MRI and CT scans, improving early diagnosis rates.",
        "Reduced screening costs by <b>prioritizing high-risk patients</b> efficiently, optimizing resource allocation.",
        "Expanded <b>AI-powered diagnostics</b> to rural and underserved clinics, increasing accessibility to expert-level analysis.",
        "Integrated <b>ChatBot</b> to provide explanations for AI-generated diagnoses, assisting doctors in decision-making.",
      ],
    },
  ]

  return (
    <section className="mb-8">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm italic text-gray-600 mb-2">{project.tags.join(", ")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {project.description.map((item, idx) => (
                <li key={idx} className="text-sm" dangerouslySetInnerHTML={{ __html: item }}>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
