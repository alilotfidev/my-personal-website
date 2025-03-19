import MyLink from "./ui/MyLink";

export default function WorkExperience() {
  const experiences = [
    {
      role: "Junior Front-end Developer",
      company: "Astroshot Media",
      companyLink: "https://astroshotmedia1.com/work",
      time: "May 2024 - Jan 2025 ",
      location: "Kuwait (Remote)",
      technologies: [
        "JS",
        "Next",
        "React",
        "GraphQL",
        "TailwindCSS",
        "Contentful",
      ],
    },
 {
      role: "Front-end Developer",
      company: "Wallaxy Studio",
      companyLink: "https://wallaxy.com",
      time: "Mar 2025 - Present",
      location: "Dallas - Texas (Remote)",
      technologies: [
        "JS",
        "Next",
        "React",
        "GraphQL",
        "TailwindCSS",
      ],
    },
  ];

  return (
    <div className="WorkExperience">
      <h3>Work Experience</h3>
      <div className="experiences">
        {experiences.map((item, index) => (
          <div
            className="mt-6 flex flex-col gap-y-2 text-sm sm:grid sm:grid-cols-4"
            key={index}
          >
            <div>
              <div className="year secondary-text text-balance">
                {item.time}
              </div>
              <div className="location secondary-text text-balance mt-2">
                {item.location}
              </div>
            </div>

            <div className="col-span-3">
              <h4 className="text-base">
                <MyLink href={item.companyLink}>
                  {item.role} - {item.company}
                </MyLink>
              </h4>
              <p className="secondary-text mt-2 text-xs">
                {item.technologies.join(" - ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
