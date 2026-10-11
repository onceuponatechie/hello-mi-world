export function SectionDoodle({ variant, className }: { variant: "loop" | "wave"; className: string }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" viewBox={variant === "loop" ? "0 0 155 100" : "0 0 100 40"} fill="none">
      {variant === "loop" ? (
        <path d="M6 21c49-26 85-7 80 25S33 74 57 45s67-19 86 37m-20-9 21 11 1-25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 28c6-25 18-27 21-8s20 14 23-2 21-18 20 0 20 9 28-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}
