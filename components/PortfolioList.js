import PortfolioData from "@/data/PortfolioData";
import MyLink from "./ui/MyLink";

export default function PortfolioList() {
  return (
    <div className="PortfolioList">
      <h3>Projects that I've worked on</h3>
      <div className="portfolio-items mt-6 flex flex-col gap-y-4">
        {PortfolioData.map((item) => (
          <div className="portfolio-item flex flex-col gap-y-1 text-sm">
            <h4 className="text-base opacity-95">{item.name}</h4>
            <div className="secondary-text flex gap-4">
              {item.technologies.map((technologie) => (
                <p>{technologie}</p>
              ))}
            </div>
            <div className="links secondary-text flex gap-2">
              {item.github && <MyLink href={item.github}>Github</MyLink>}
              {item.link && <MyLink href={item.link}>Link</MyLink>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
