'use client';

export default function Footer() {
  return (
    <footer className="mt-auto py-8 text-center">
      <div className="text-gray-500 text-sm">
        <p>
          Made with ❤️ by{' '}
          <a
            href="https://inulute.github.io/linkme/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            inulute
          </a>
        </p>
        <p className="mt-2">
          This application is not affiliated with the official Unlim Cloud but is an independent endeavor.
        </p>
      </div>
    </footer>
  );
}