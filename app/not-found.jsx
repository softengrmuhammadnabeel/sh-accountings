import React from 'react';
import Link from 'next/link';

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-center px-4">
      <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-blue-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <a className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
          Go Back Home
        </a>
      </Link>

      <div className="mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Clear Horizon Accountants
      </div>
    </div>
  );
};

export default Notfound;
