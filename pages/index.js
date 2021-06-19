import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-gray-900 flex flex-col items-center justify-center w-screen h-screen flex-1'>
        <button className='btn link'>Click me!</button>
      </main>
    </div>
  );
}
