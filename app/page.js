import { Footer, Navbar, Project, Skills} from '../components';
import { About, Feedback, GetStarted, Hero,World} from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
    <About />
    <div className='gradient-03 z-0' />
    <Skills />
    </div>
    <Project />
    <div className='relative'>
    <GetStarted />
    {/* <div className='gradient-04 z-0' />
    <WhatsNew /> */}
    <div className='gradient-04 z-0' />
    <World />
    </div> 
    {/* <Insights /> */}
    <div className='relative'>
    <Feedback />
    <div className='gradient-04 z-0' />
    </div>
    <Footer />
  </div>
);

export default Page;
