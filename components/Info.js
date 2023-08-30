import MyLink from "./ui/MyLink";

export default function Info() {
  return (
    <div className="Info">
      <h3>About</h3>
      <p className="secondary-text mt-6 text-sm font-light leading-normal">
        Hi there, I'm a self-taught{" "}
        <span className="font-semibold">front-end developer</span> from{" "}
        <span className="font-semibold">Rasht, Iran</span>. I've always had a
        deep interest in web development and have spent countless hours
        devouring online resources and YouTube tutorials to perfect my skills.
      </p>
      <p className="secondary-text text-sm font-light leading-normal">
        I've created several small projects on{" "}
        <span className="font-semibold">
          <MyLink href="https://codepen.io/alilotfidev">my Codepen page</MyLink>
        </span>{" "}
        using HTML & CSS, and I'm constantly seeking out new technologies and
        techniques to elevate my work to the next level. My passion for web
        development drives me to always be learning and growing in my craft. If
        you'd like to work with me,{" "}
        <span className="font-semibold">
          <MyLink href="mailto:lotfi26.ali@gmail.com">drop me an email.</MyLink>
        </span>
      </p>
    </div>
  );
}
