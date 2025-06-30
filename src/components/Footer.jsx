const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p>© 2025 Dhurai Singam</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-red-500">LinkedIn</a>
        <a href="#" className="hover:text-red-500">GitHub</a>
        <a href="#" className="hover:text-red-500">LeetCode</a>
      </div>
    </footer>
  );
};

export { Footer };