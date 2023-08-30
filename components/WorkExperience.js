import MyLink from "./ui/MyLink";

export default function WorkExperience() {
  const experiences = [
    {
      role: "Junior Front-end Developer",
      company: "Astroshot Media",
      companyLink: "https://astroshotmedia.com",
      time: "2023 - present",
      technologies: ["JS", "Next", "React", "TailwindCSS", "Contentful"],
    },
    {
      role: "Junior Front-end Developer",
      company: "Freelance Project",
      companyLink: "https://fatememohiti.ir",
      time: "2023 - 2023",
      technologies: ["JS", "Next", "React", "TailwindCSS", "Netlify"],
    },
  ];

  return (
    <div className="WorkExperience">
      <h3>Work Experience</h3>
      <div className="experiences">
        {experiences.map((item) => (
          <div className="mt-6 flex flex-col gap-y-2 text-sm sm:grid sm:grid-cols-4">
            <div className="year secondary-text">{item.time}</div>
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
