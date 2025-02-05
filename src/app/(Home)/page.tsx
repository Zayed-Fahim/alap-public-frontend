import { GetStarted, Hero } from '@/components/features/home';

const Home = () => {
  return (
    <div className="conatiner mx-auto max-w-[960px] py-5">
      <Hero />
      <GetStarted />
    </div>
  );
};
export default Home;
