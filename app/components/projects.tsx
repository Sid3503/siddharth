export default function Projects() {
  const projects = [
    {
      title: "Demand Forecasting Model",
      tags: ["Time Series Forecasting", "NBeats", "Generative AI", "Data Analysis"],
      description: [
        "Utilized NBeats and Prophet models for accurate time series forecasting, predicting sales trends and seasonality.",
        "Developed data preprocessing pipelines for cleaning and structuring time series data from raw sales records.",
        "Implemented a user interface for interacting with forecasted data, allowing insights to be extracted dynamically.",
        "Leveraged Generative AI to generate user-tailored insights from sales predictions, identifying growth patterns.",
        "Applied performance metrics such as MAE and RMSE to evaluate forecasting accuracy and model reliability.",
      ],
    },
    {
      title: "AI Powered Pdf to Data Converter",
      tags: ["PDF Processing", "Automation", "Computer Vision", "Generative AI"],
      description: [
        "Designed an automation system to extract text, tables, and images from PDFs using tabula-py, PyPDF2, and fitz.",
        "Integrated image recognition algorithms to analyze and describe extracted images for further insights.",
        "Developed a conversational AI system that answers user queries based on the context of the extracted PDF content.",
        "Applied Generative AI models to summarize and provide recommendations based on the extracted data.",
        "Built a robust text chunking system to handle large PDFs and split content efficiently for embedding and querying.",
      ],
    },
    {
      title: "AI-Driven Crop Disease Detection and Real-Time Analysis",
      tags: ["Image Recognition", "Deep Learning", "HuggingFace", "GenAI"],
      description: [
        "Implemented Convolutional Neural Networks (CNNs) for accurate crop disease detection through image analysis.",
        "Incorporated weather, soil, and humidity data to provide a multi-dimensional understanding of crop health.",
        "Developed a recommendation engine that suggests pesticide and fertilizer usage based on real-time crop conditions.",
        "Employed HuggingFace's pre-trained models to fine-tune for domain-specific image classification tasks.",
        "Built an interactive web interface for farmers to upload images and receive immediate disease detection results and recommendations.",
      ],
    },
  ]

  return (
    <section className="mb-8">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.tags.join(", ")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {project.description.map((item, idx) => (
                <li key={idx} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

