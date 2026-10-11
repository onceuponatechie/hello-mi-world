type ServiceMarkProps = { kind: "research" | "narrative" | "prototype" };

// Original filled marks: gathered evidence, connected stories, and a made object.
export function ServiceMark({ kind }: ServiceMarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" focusable="false" aria-hidden="true">
      {kind === "research" && <>
        <path d="M11 25a14 14 0 0 1 14-14h7v7a14 14 0 0 1-14 14h-7V25Z" fill="#FFFFFF" />
        <path d="M39 11a14 14 0 0 1 14 14v7h-7a14 14 0 0 1-14-14v-7h7Z" fill="#FFFFFF" opacity=".85" />
        <path d="M53 39a14 14 0 0 1-14 14h-7v-7a14 14 0 0 1 14-14h7v7Z" fill="#FFFFFF" />
        <path d="M25 53a14 14 0 0 1-14-14v-7h7a14 14 0 0 1 14 14v7h-7Z" fill="#FFFFFF" opacity=".85" />
      </>}
      {kind === "narrative" && <>
        <path d="m14 19 8-8a10 10 0 0 1 14 0l8 8a10 10 0 0 1 0 14l-8 8a10 10 0 0 1-14 0l-8-8a10 10 0 0 1 0-14Z" stroke="#FFFFFF" strokeWidth="7" opacity=".8" />
        <path d="m20 31 8-8a10 10 0 0 1 14 0l8 8a10 10 0 0 1 0 14l-8 8a10 10 0 0 1-14 0l-8-8a10 10 0 0 1 0-14Z" stroke="#FFFFFF" strokeWidth="7" />
      </>}
      {kind === "prototype" && <>
        <path d="M12 16a4 4 0 0 1 4-4h11v15H12V16Zm25-4h11a4 4 0 0 1 4 4v11H37V12ZM12 37h15v15H16a4 4 0 0 1-4-4V37Zm25 0h15v11a4 4 0 0 1-4 4H37V37Z" fill="#FFFFFF" />
        <rect x="24" y="24" width="16" height="16" rx="4" transform="rotate(45 32 32)" fill="#FFFFFF" opacity=".8" />
      </>}
    </svg>
  );
}
