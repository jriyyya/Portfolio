import { Project, Skills } from "../components";
import { Feedback, GetStarted, Hero, World } from "../sections";

import FooterNew from "../components/FooterNew";

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
    <div className="relative overflow-y-hidden"> 
    <div className="absolute gradient-04 z-0" />
      <Feedback />
    <FooterNew />
    </div>
  </>
);

export default Page;
