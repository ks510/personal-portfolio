import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="background-beams grid place-items-center h-screen">
      <div className="bg-black px-24 py-16 bg-black/[.5] backdrop-blur-xl backdrop-saturate-[180%] rounded-xl border border-gray-700">
        <h1 className="text-5xl text-indigo-100">Coming soon...🚀</h1>
      </div>
    </div>
  );
};

export default Home;
