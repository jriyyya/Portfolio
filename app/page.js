import { Footer, Navbar, Project, Skills } from "../components";
import { Feedback, GetStarted, Hero, World } from "../sections";

const Page = () => (
  // <div className='bg-primary-black overflow-hidden pointer-events-none'>
  <>
    <Hero />
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Skills />
    </div>
    <Project />
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <World />
    </div>
    <div className="relative">
      <Feedback />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </>
  // </div>
);

export default Page;
