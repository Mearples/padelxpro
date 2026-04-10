export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>Mike Earp &middot; Job Search Dashboard &middot; {new Date().getFullYear()}</p>
        <p>
          Data is illustrative and based on publicly available market research.
        </p>
      </div>
    </footer>
  );
}
