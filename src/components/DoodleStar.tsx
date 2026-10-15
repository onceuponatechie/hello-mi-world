export function DoodleStar({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 100 100" fill="none">
      <path d="m50 4 9 28 26-16-16 26 27 8-27 9 16 26-26-16-9 27-8-27-26 16 16-26-28-9 28-8-16-26 26 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}
