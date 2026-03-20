export function PanicButton() {
  const handlePanic = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <button
      onClick={handlePanic}
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-pink text-3xl shadow-md transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink/50"
      aria-label="Panic Exit"
      title="Quick Exit (Press Esc)"
    >
      🎀
    </button>
  );
}
