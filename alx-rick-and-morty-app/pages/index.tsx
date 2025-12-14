import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty GraphQL App</title>
        <meta name="description" content="Rick and Morty app using GraphQL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Rick and Morty GraphQL App
          </h1>
          <p className="text-lg mb-4 text-center">
            Welcome to the Rick and Morty GraphQL application!
          </p>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Features:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Next.js with TypeScript</li>
              <li>Apollo Client for GraphQL</li>
              <li>Tailwind CSS for styling</li>
              <li>Connected to Rick and Morty GraphQL API</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Check the browser console to verify Apollo Client is working.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}