import Info from "@/components/Info";
import Links from "@/components/Links";
import PortfolioList from "@/components/PortfolioList";
import Profile from "@/components/Profile";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-14 p-8 md:max-w-[80vw] md:p-16 lg:max-w-[70vw] lg:p-24 xl:max-w-[45vw]">
      <Profile />
      <Info />
      <WorkExperience />
      <PortfolioList />
      <Links />
    </main>
  );
}
