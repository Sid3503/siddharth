export default function Achievements() {
  const achievements = [
    {
      title: "Level SuperMind Hackathon 2025",
      subtitle: "Insight Sphere: Track Trends, Maximize Impact.",
      description:
        "Finalist in the Level Supermind Hackathon 2025, a national level competition in collaboration with BeerBiceps, Hitesh Choudhary, AWS, LangFlow, and DataStax. Invited to the Level office in Mumbai to solve a real-world challenge in a 24-hour overnight hackathon.",
    },
    {
      title: "Google GenAI Exchange Hackathon 2024",
      subtitle: "Deep Learning for Medical Imaging, AI-Powered Cancer Detection",
      description:
        "Finalist among the top 5 teams in the Glance Problem Track, out of over 38,000 registrations and 3,300 teams formed across Asia. Invited to Google's Gurgaon office for a special Demo Day to present our solution to industry leaders and experts.",
    },
    {
      title: "Smart India Hackathon 2023",
      subtitle: "Computer Vision Problem Statement, Real-Time Object Detection",
      description:
        "Ranked 7th all-India and waitlisted for a computer vision problem statement in SIH 2023. Cleared the internal hackathon and was the only team from the college to reach the official first round of SIH 2023.",
    },
    {
      title: "Represented College in Fr. Conceicao Rodrigues Memorial Debate",
      subtitle: "National-Level Intercollegiate Debate Competition",
      description:
        "Represented the college in the 25th Edition of the Fr. Conceicao Rodrigues Memorial Debate Competition as part of a team.",
    },
  ];

  return (
    <section className="mb-8">
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="border-l-4 border-black/20 dark:border-white/20 pl-4">
            <h3 className="font-semibold text-black dark:text-white">{achievement.title}</h3>
            <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-1">{achievement.subtitle}</p>
            <p className="text-sm">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
