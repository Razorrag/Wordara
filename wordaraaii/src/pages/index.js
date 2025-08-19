export default function TempHome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-400">Setup Successful!</h1>
        <p className="mt-4 text-lg text-gray-300">
          Your Next.js and Tailwind CSS are working correctly.
        </p>
        <p className="mt-2 text-gray-400">
          Now you can proceed with the Supabase integration.
        </p>
      </div>
    </div>
  );
}
