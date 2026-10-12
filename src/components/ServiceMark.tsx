type ServiceMarkProps = { kind: "research" | "narrative" | "prototype" | "strategy" | "repeat" };

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
      {kind === "strategy" && <>
        <rect x="8" y="8" width="19" height="19" rx="6" fill="#FFFFFF" opacity=".8" />
        <rect x="37" y="8" width="19" height="19" rx="6" fill="#FFFFFF" />
        <rect x="22" y="37" width="20" height="19" rx="6" fill="#FFFFFF" />
        <path d="M15 28h6v3h22v-3h6v9H35v-1h-6v1H15v-9Z" fill="#FFFFFF" opacity=".85" />
      </>}
      {kind === "repeat" && <>
        <path d="M12 31a20 20 0 0 1 32-16l6-6v19H31l7-7a12 12 0 0 0-18 10h-8Z" fill="#FFFFFF" />
        <path d="M52 33a20 20 0 0 1-32 16l-6 6V36h19l-7 7a12 12 0 0 0 18-10h8Z" fill="#FFFFFF" opacity=".85" />
      </>}
    </svg>
  );
}
