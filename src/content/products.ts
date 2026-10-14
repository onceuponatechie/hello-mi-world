export type ProductCategory = "Research" | "Plan & decide" | "Make & share";
export type Product = {
  slug: string;
  name: string;
  format: string;
  category: ProductCategory;
  status: "ready" | "planned";
  cover: { src: string; width: number; height: number };
  color: string;
  summary: string;
  download?: { href: string; label: string; format: string };
  introduction?: string;
  includes?: { title: string; description: string }[];
  steps?: { title: string; description: string }[];
  preview?: { heading: string; body: string }[];
  note?: string;
};

// Interleave ready and planned products so both columns of the native masonry
// feed contain useful downloads. Only ready products have detail routes/files.
export const products: Product[] = [
  {
    slug: "what-should-i-get-good-at", name: "What Should I Get Good At?", format: "EPUB ebook", category: "Plan & decide", status: "ready", cover: { src: "/assets/tools/covers/what-should-i-get-good-at.png", width: 1024, height: 1536 }, color: "#E3F0DA",
    summary: "A guide to finding your direction in the world of work.",
    download: { href: "/downloads/what-should-i-get-good-at-essy-udeme.epub", label: "Download the ebook", format: "EPUB · Reflowable ebook" },
    introduction: "Career advice often asks what you’re naturally good at, what people come to you for and which work you want to spend years doing. Those questions don’t always have ready answers. I started researching how we make a sensible choice with the evidence we have. The questions and exercises here are for thinking it through using your own experience.",
    includes: [
      { title: "You Don’t Know Yet", description: "What can the work you’ve already done tell you about what to try next? And where would a small test tell you more?" },
      { title: "The Eight Directions of Work", description: "Looking at the contribution at the centre of the work gives us another way to compare careers, alongside job titles." },
      { title: "What Do You Want Work to Make Possible?", description: "Questions about money, mobility, independence and the life around the job, with room for what you want work to do for you." },
      { title: "A Little Game", description: "Questions after each chapter bring the reading back to your own choices. Go and Look then suggests a small piece of work to try." },
      { title: "Directory: Where Work Lives", description: "Work functions to look into, including research, product work, public policy and supply chain. See what catches your interest." },
    ],
    steps: [
      { title: "Bring a question", description: "Read with a question from your own working life in mind. It can be about your next role or something you want to get better at." },
      { title: "Try the reflection questions", description: "Use the exercises to compare what your experience tells you with what you still want to find out." },
      { title: "Test a direction", description: "Pick a function that interests you from the directory. A small piece of the work can give you something to assess before a bigger commitment." },
    ],
    preview: [
      { heading: "Evidence about yourself", body: "What have you been paid for? What do people ask you to help with? What are you willing to practise?" },
      { heading: "Your core, complements and literacy", body: "Which direction do you want at the centre of your work? Which abilities support it, and which areas do you need to understand to work with others?" },
      { heading: "The life around the work", body: "What do you want work to make possible: earnings, independence, travel, time or a recognised profession?" },
    ],
    note: "Open the file in your preferred EPUB reader. The text size and page count follow your reader’s settings.",
  },
  {
    slug: "research-notebook", name: "Research Notebook", format: "Notion-ready template", category: "Research", status: "ready", cover: { src: "/assets/tools/covers/research-notebook.webp", width: 840, height: 1120 }, color: "#E3F0DA",
    summary: "Questions, sources and room for the next check.",
    download: { href: "/downloads/research-notebook.zip", label: "Download starter kit", format: "ZIP · CSV + Markdown" },
    introduction: "When a note starts informing a decision, being able to find the source again helps. This notebook keeps your question, observation and interpretation separate, with a field for what you still want to check.",
    includes: [
      { title: "Questions register", description: "A CSV with fields for the question, the decision it informs, scope, owner and status." },
      { title: "Source library", description: "A CSV for source IDs, URLs, dates, source type, notes and limits." },
      { title: "Findings log", description: "A CSV that separates an observation, its source IDs, an interpretation and a next check." },
      { title: "Setup notes", description: "A Markdown guide with the import order and one labelled example across the three files." },
    ],
    steps: [
      { title: "Start with the decision", description: "Write the question that will help you make it. Add a scope and a stopping point." },
      { title: "Import the three CSVs", description: "Import each file as a database in Notion, or open it in a spreadsheet. Keep the source IDs when linking your notes." },
      { title: "Record what the source says", description: "Add the source before the finding. Use the interpretation field for your reasoning and the next-check field for what still needs work." },
    ],
    preview: [
      { heading: "Question", body: "What prevents someone from returning to their unfinished task?" },
      { heading: "Observation", body: "Record the person's words or the source passage. Keep the original wording and a source ID." },
      { heading: "Interpretation", body: "Write what you think the observation means. Keep other explanations available." },
    ],
    note: "Plain CSV files: no automatic relations or formulas. The example rows are labelled and can be deleted after setup.",
  },
  {
    slug: "product-research-field-guide", name: "Product Research Field Guide", format: "Guide", category: "Research", status: "planned", cover: { src: "/assets/essy-notes.jpg", width: 1024, height: 1024 }, color: "#C8EBF0",
    summary: "A practical guide to choosing a research question and method.",
  },
  {
    slug: "the-better-brief", name: "The Better Brief", format: "PDF guide", category: "Plan & decide", status: "ready", cover: { src: "/assets/tools/covers/the-better-brief.webp", width: 840, height: 1120 }, color: "#F8FADF",
    summary: "Questions for thinking through a brief before making anything.",
    download: { href: "/downloads/the-better-brief.pdf", label: "Download the guide", format: "A4 PDF · 4 pages" },
    introduction: "Before a website, deck or tool, there’s usually a question worth getting clear on. Use these pages to think through who the work is for, what needs attention and a first test. The last page is a brief to print and fill in with your own idea.",
    includes: [
      { title: "Define the work", description: "Prompts for naming the person, their task, the problem and the decision the work needs to support." },
      { title: "Check the evidence", description: "A way to separate sourced observations, assumptions and questions you still need to answer." },
      { title: "Choose the first version", description: "Prompts for setting scope, constraints and a test that will tell you what to change." },
      { title: "Write the brief", description: "A printable page for the question, audience, evidence, output, boundaries and first test." },
    ],
    steps: [
      { title: "Write before choosing the format", description: "Describe the problem in a sentence. Leave the proposed website, deck or tool aside until the sentence is clear." },
      { title: "Mark what you know", description: "Attach a source to each supported claim. Put assumptions in their own field so they do not become facts through repetition." },
      { title: "Finish with a first test", description: "Name what someone will try, what you will observe and the decision you will make afterwards." },
    ],
    preview: [
      { heading: "The person", body: "Who needs this, and what are they trying to do?" },
      { heading: "The boundary", body: "What will this first version deliberately leave out?" },
      { heading: "The test", body: "What will we ask someone to try before spending more time on it?" },
    ],
    note: "A printable guide, with writing room on the final page. Use a PDF annotation tool or fill it in by hand.",
  },
  {
    slug: "tiny-systems", name: "Tiny Systems", format: "Ebook", category: "Make & share", status: "planned", cover: { src: "/assets/sage-laboratory.jpg", width: 1086, height: 1448 }, color: "#F6E6C8",
    summary: "Notes on making small systems people can actually use.",
  },
  {
    slug: "ask-better", name: "Ask Better", format: "Practical prompt pack", category: "Research", status: "ready", cover: { src: "/assets/tools/covers/ask-better.webp", width: 840, height: 1120 }, color: "#EDE2F2",
    summary: "18 prompts for research, decisions and a second look at your work.",
    download: { href: "/downloads/ask-better-prompts.md", label: "Download the prompts", format: "Markdown · 18 prompts" },
    introduction: "A prompt gets more interesting when there’s something to work from: notes, a brief or a draft. These 18 prompts ask for that context and leave room for missing information. Try one, then use the answer to decide what deserves a closer look.",
    includes: [
      { title: "6 research prompts", description: "Frame a question, plan interviews, inspect source coverage and separate observations from interpretations." },
      { title: "6 decision prompts", description: "Compare options, check assumptions, set scope and choose the smallest useful test." },
      { title: "6 critique prompts", description: "Check a product flow, review a brief, clarify a narrative and assess what a test actually tells you." },
    ],
    steps: [
      { title: "Choose one question", description: "Pick the prompt that matches your current task. Replace the bracketed fields with your material." },
      { title: "Keep the sources attached", description: "Include the passages or notes the answer needs. Ask the assistant to identify missing information instead of filling the gaps." },
      { title: "Review the answer", description: "Check quotations, source references and assumptions before using the output in a decision or sharing it with someone else." },
    ],
    preview: [
      { heading: "Research question", body: "Using [brief], draft three research questions. For each, name the decision it will inform and the evidence needed to answer it." },
      { heading: "Scope check", body: "Review [first-version plan]. List what it includes, what it leaves out, and the assumption each part is intended to test." },
      { heading: "Story check", body: "Read [draft] as an unfamiliar reader. Identify any claim that needs a source and any sentence that needs a clearer subject." },
    ],
    note: "The prompts work from the material you supply. They are a starting point for review, not a substitute for source checking.",
  },
  {
    slug: "research-to-first-version", name: "Research to First Version", format: "Bundle", category: "Make & share", status: "planned", cover: { src: "/assets/tools-templates.png", width: 1024, height: 1024 }, color: "#E3F0DA",
    summary: "A set of files for keeping research and making in the same project.",
  },
  {
    slug: "what-to-build-next", name: "What to Build Next", format: "Worksheet", category: "Plan & decide", status: "ready", cover: { src: "/assets/tools/covers/what-to-build-next.webp", width: 840, height: 1120 }, color: "#C8EBF0",
    summary: "Compare ideas, note what you’re still guessing and choose a test.",
    download: { href: "/downloads/what-to-build-next.md", label: "Download the worksheet", format: "Editable Markdown" },
    introduction: "Several ideas can all sound worth doing. This worksheet makes room to compare what you know about each one, note what you’re still guessing and choose a small test. Leave a review date so the decision can change as you learn.",
    includes: [
      { title: "Idea register", description: "Fields for describing each idea, the person it is for, the task it helps with and the evidence you have." },
      { title: "Comparison table", description: "Compare evidence, effort, access to users and the unknown you need to test. Keep written reasons beside the comparison." },
      { title: "Decision note", description: "A place to record the idea you chose, the alternatives you paused and what will cause you to revisit the decision." },
      { title: "First-test plan", description: "Name the smallest version, who will try it and what their response needs to tell you." },
    ],
    steps: [
      { title: "Write the ideas plainly", description: "Describe what each idea does and who it is for. Keep a solution name from standing in for the problem." },
      { title: "Compare the evidence", description: "Record the sources you have and the guesses you are still making. Leave a field blank when you do not know." },
      { title: "Choose a testable next step", description: "Write the decision and the first test. Put a review date in the note so an early choice can change." },
    ],
    preview: [
      { heading: "The idea", body: "What will it help a specific person do?" },
      { heading: "The evidence", body: "What have you seen or heard that supports working on it?" },
      { heading: "The decision", body: "What are you choosing now, and what will make you reconsider?" },
    ],
    note: "Edit the Markdown file in a text editor or notes app. It uses written reasons rather than an automatic score.",
  },
  {
    slug: "quick-experiment-planner", name: "Quick Experiment Planner", format: "Template", category: "Plan & decide", status: "planned", cover: { src: "/assets/essy-slide.jpg", width: 1024, height: 1024 }, color: "#F6E6C8",
    summary: "A small plan for trying an idea before polishing it.",
  },
  {
    slug: "before-you-ship", name: "Before You Ship", format: "Checklist", category: "Make & share", status: "ready", cover: { src: "/assets/tools/covers/before-you-ship.webp", width: 840, height: 1120 }, color: "#F6E6C8",
    summary: "A small list of things to check before sharing a first version.",
    download: { href: "/downloads/before-you-ship.md", label: "Download the checklist", format: "Markdown · 20 checks" },
    introduction: "After spending a while with a first version, it helps to look again at the words, links and first visit. This checklist gives you questions to try against your own work, with room to record what needs attention. Add any checks your project needs.",
    includes: [
      { title: "Start with the person", description: "5 checks for the purpose, audience, words and next action." },
      { title: "Try the interactions", description: "5 checks for links, forms, keyboard use, errors and empty states." },
      { title: "Read on another screen", description: "5 checks for mobile widths, text, image loading, scrolling and motion." },
      { title: "Prepare the handoff", description: "5 checks for claims, access, file names, feedback and ownership of fixes." },
    ],
    steps: [
      { title: "Try it without your explanation", description: "Open the work as a new visitor would. Follow the main task before reading the checklist." },
      { title: "Record what fails", description: "Keep a short issue list beside the checks. Include the screen, the action and what happened." },
      { title: "Check again after the fix", description: "Repeat the affected task after changing it. Keep unresolved items visible when sharing the first version." },
    ],
    preview: [
      { heading: "The first visit", body: "Can a new visitor tell what this is and what to do next?" },
      { heading: "The small screen", body: "Can they read and use it without sideways scrolling?" },
      { heading: "The handoff", body: "Does someone know where to report an issue and who will fix it?" },
    ],
    note: "A practical review list for your first version. Adapt the checks to the thing you are making.",
  },
  {
    slug: "competitor-notes", name: "Competitor Notes", format: "Database", category: "Research", status: "planned", cover: { src: "/assets/essy-insight.jpg", width: 1024, height: 1024 }, color: "#EDE2F2",
    summary: "Keep competitor notes attached to a source and date.",
  },
  {
    slug: "source-compare", name: "Source Compare", format: "Research tool", category: "Research", status: "planned", cover: { src: "/assets/research-vault.png", width: 1024, height: 1024 }, color: "#F8FADF",
    summary: "Compare what your sources agree on, and what they leave unanswered.",
  },
];

export function getProduct(slug: string) { return products.find(product => product.slug === slug && product.status === "ready"); }
export const readyProducts = products.filter(product => product.status === "ready");
