import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      <main className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] dark:bg-gray-900">
        {children}
      </main>
      
    </div>
  );
}