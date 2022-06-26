import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Karen&apos;s Portfolio</title>
      </Head>
      <div className="background-beams grid place-items-center h-screen">
        <div className="bg-black px-24 py-16 bg-black/[.5] backdrop-blur-xl backdrop-saturate-[180%] rounded-xl border border-gray-800 text-center">
          <p className="text-2xl font-medium mb-4">Karen&apos;s Portfolio</p>
          <h1 className="text-5xl font-semibold text-lavender">
            🚀 Coming soon...
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
