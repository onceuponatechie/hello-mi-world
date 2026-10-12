export type BuildStage = {
  id: "problem" | "evidence" | "decisions" | "making" | "result" | "learning";
  label: string;
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type Build = {
  slug: string;
  name: string;
  summary: string;
  question: string;
  image: string;
  color: string;
  disciplines: string[];
  format: string;
  output: string;
  stages: BuildStage[];
};

// Self-initiated concept briefs. No client work, field research, launch or
// performance results are claimed. Replace with documented work as it develops.
export const builds: Build[] = [
  {
    slug: "streamline-dashboard", name: "Streamline Dashboard",
    summary: "A revenue workspace that puts the next decision beside the numbers.",
    question: "Which accounts need attention today?",
    image: "/assets/essy-laptop-dash.jpg", color: "#F6E6C8",
    disciplines: ["Product research", "Product strategy", "Dashboard"],
    format: "Revenue operations concept", output: "A dashboard brief and proposed account-review flow",
    stages: [
      { id: "problem", label: "Problem", title: "The report ends. The work still needs doing.", paragraphs: ["This concept starts with a revenue team checking accounts across a spreadsheet, a CRM and a billing tool. A report gives them numbers, but leaves them to work out who needs a follow-up.", "The brief is to bring account status, the reason for concern and the next action into one review flow. More charts are useful only if they help someone make that decision."] },
      { id: "evidence", label: "Evidence", title: "Watch the review before designing the report.", paragraphs: ["The scenario is an assumption, not a finding from interviews. The research plan starts with watching an account review: which tools get opened, which numbers get copied and which questions interrupt the work."], points: ["Map the steps between noticing an overdue invoice and assigning a follow-up.", "Compare how finance and account managers describe the same account.", "Check which records are recent enough to support a decision."] },
      { id: "decisions", label: "Decisions", title: "Start with accounts that need a person.", paragraphs: ["The proposed home screen is an attention queue. Each account carries a reason, the date of its last update and an assigned owner. A summary chart stays available without occupying the whole screen."], points: ["Separate overdue payments, renewals and unanswered follow-ups.", "Show the source and age of the account data.", "Keep assignment and notes in the same account panel."] },
      { id: "making", label: "Making", title: "A queue, a reason, a next action.", paragraphs: ["The proposed prototype connects the account queue to a detail panel. Opening an account shows the invoice history beside a short activity log, so a manager can assign a follow-up without losing their place.", "The specimen below sets out that information order. Sample records make the layout readable; they are not business performance data."] },
      { id: "result", label: "Result", title: "A review flow ready to put in front of a team.", paragraphs: ["The concept defines an account-review flow and a screen direction. It has not been launched, connected to a CRM or tested with a revenue team."], points: ["Ask participants to find an account that needs attention and explain why.", "Check that they can identify the owner and the next action.", "Record the time spent and any missing information before making claims about speed."] },
      { id: "learning", label: "Learning", title: "A better queue depends on better records.", paragraphs: ["A neat dashboard still fails if ownership is missing or billing records are out of date. The next iteration needs a data audit before more interface detail.", "If teams already agree on account ownership, the queue can stay simple. If they do not, that agreement belongs in the work before an assignment feature does."] },
    ],
  },
  {
    slug: "insight-studio", name: "Insight Studio",
    summary: "A research library that keeps a finding connected to the evidence behind it.",
    question: "Can we trace this decision back to its source?",
    image: "/assets/essy-insight.jpg", color: "#C8EBF0",
    disciplines: ["Research synthesis", "Information design", "Website"],
    format: "Research workspace concept", output: "A source-to-finding structure and proposed research workspace",
    stages: [
      { id: "problem", label: "Problem", title: "A finding gets shared. Its source gets lost.", paragraphs: ["A team keeps interview notes, reports and product decisions in separate files. This brief asks how a reader can check the evidence behind a finding without requesting another explanation from its author.", "The concept treats retrieval as part of research. A note needs enough context to be useful to the next person who reads it."] },
      { id: "evidence", label: "Evidence", title: "Find out what people try to recover.", paragraphs: ["Research for this concept would begin with a sample of existing notes and reports. The aim is to identify the information people need when they reuse a finding. No archive audit or participant study has been completed."], points: ["Look for missing dates, participant context and source links.", "Ask readers to locate the evidence behind a product decision.", "Check how the team distinguishes an observation from an interpretation."] },
      { id: "decisions", label: "Decisions", title: "Keep the claim and its source together.", paragraphs: ["The proposed structure connects a source, an observation, a finding and a decision. A reader can follow those connections in either direction. Search is available, but it is not expected to fix poorly described records."], points: ["Give every finding a plain-language title and a source reference.", "Show what is observed and what is inferred as separate fields.", "Keep uncertainty visible when evidence is incomplete."] },
      { id: "making", label: "Making", title: "Build a reading flow, not another file list.", paragraphs: ["The workspace concept opens with research questions and their linked findings. A finding page has a short summary, source excerpts and the decisions it informed.", "The specimen uses sample records to show that chain. A later prototype would let a researcher attach a source and a teammate check the resulting finding."] },
      { id: "result", label: "Result", title: "A structure for checking the reasoning.", paragraphs: ["The proposed output is a research workspace and a content model. It is a concept, with no claim that it has reduced time spent searching."], points: ["Have unfamiliar readers try to retrieve the source behind a finding.", "Check that a reader can separate evidence from interpretation.", "Try the structure with an incomplete source and a conflicting finding."] },
      { id: "learning", label: "Learning", title: "A library needs an editing habit.", paragraphs: ["The structure asks researchers to write a useful title and maintain references. That effort needs testing against the team's existing workload.", "If adding a record takes too long, the next version should remove fields before adding more sorting options. The point is to preserve reasoning people will actually return to."] },
    ],
  },
  {
    slug: "pocket-coach", name: "Pocket Coach",
    summary: "A small habit companion that makes returning easier after a missed day.",
    question: "What helps someone come back tomorrow?",
    image: "/assets/essy-phone.jpg", color: "#EDE2F2",
    disciplines: ["User research", "Product strategy", "Mobile prototype"],
    format: "Habit product concept", output: "A mobile flow for choosing, recording and returning to a small commitment",
    stages: [
      { id: "problem", label: "Problem", title: "A missed day should not erase the next one.", paragraphs: ["Pocket Coach is a concept for someone trying to keep one small commitment alongside a busy working day. The brief focuses on the moment after they miss it, when a broken streak often becomes the main thing the app shows.", "The proposed product makes returning a normal part of the flow. That is a design hypothesis, not a claim about how users behave."] },
      { id: "evidence", label: "Evidence", title: "Ask about a recent attempt, not an ideal routine.", paragraphs: ["The research plan would use accounts of real missed commitments and a review of existing habit apps. It needs to establish what interrupted the routine and what the person did next. No interviews or user tests have been conducted for this concept."], points: ["Ask for the last time a person stopped using a habit app.", "Compare how apps handle a missed day and a return.", "Check preferences for reminders, privacy and progress tracking."] },
      { id: "decisions", label: "Decisions", title: "One commitment. A small next step.", paragraphs: ["The proposed first version limits the daily view to one commitment. Returning opens a fresh check-in, with previous entries still available. Reminders are optional and easy to change."], points: ["Let the person choose a smaller version of the commitment.", "Show completed entries without a punitive reset.", "Keep reflection optional, short and private."] },
      { id: "making", label: "Making", title: "Design the return as carefully as the first visit.", paragraphs: ["The mobile concept includes choosing a commitment, checking in and coming back after a gap. The first screen shows today's action rather than a total score.", "The specimen below represents a daily check-in. A testable version would include the missed-day flow, since the first visit alone cannot answer the brief."] },
      { id: "result", label: "Result", title: "A product direction with a clear test.", paragraphs: ["The proposed output is a mobile prototype and a reminder policy. Pocket Coach has not been published in an app store and has no rating or retention result."], points: ["Test the return flow with people who have abandoned a habit app.", "Ask how the check-in feels after a missed week.", "Measure repeated use before judging the reminder policy."] },
      { id: "learning", label: "Learning", title: "Encouragement needs permission.", paragraphs: ["A friendly prompt still becomes an interruption if it arrives at the wrong time. Reminder frequency and tone need to remain under the person's control.", "The next round should test the words as well as the screens. A product that is easy to use still needs language people want to hear."] },
    ],
  },
  {
    slug: "sage-deck", name: "Sage Deck",
    summary: "A product story and presentation system built around the questions a reader will ask.",
    question: "Does the story make the decision easier to understand?",
    image: "/assets/essy-slide.jpg", color: "#F8FADF",
    disciplines: ["Commercial thinking", "Pitch deck", "Visual identity"],
    format: "Product narrative concept", output: "A pitch narrative, slide structure and small visual system",
    stages: [
      { id: "problem", label: "Problem", title: "The slides look finished. The argument is not.", paragraphs: ["This brief imagines an early product team with a presentation full of features and very little explanation of the business. A reader needs to understand whose problem is being solved and why the proposed product deserves further attention.", "Sage Deck starts with the argument. The visual system follows the order in which the reader needs information."] },
      { id: "evidence", label: "Evidence", title: "Separate what is known from what is being proposed.", paragraphs: ["The proposed research work is a review of the product brief, market notes and the team's claims. Each claim needs a source or an explicit assumption. This concept does not use a real client's commercial data."], points: ["List the claims a reader is being asked to accept.", "Mark which claims have evidence and which need research.", "Review competitor descriptions without borrowing their claims."] },
      { id: "decisions", label: "Decisions", title: "Let each slide answer one reader question.", paragraphs: ["The deck structure gives the problem, audience, proposed product and business model their own place. A reader should see the reason for a feature before a feature list."], points: ["Put supporting evidence beside the claim it supports.", "Show assumptions in the business model rather than hiding them in a footnote.", "Keep a shorter reading version alongside the presentation version."] },
      { id: "making", label: "Making", title: "Write the argument, then design its rhythm.", paragraphs: ["The concept combines a narrative outline with a small slide system. A restrained palette, diagram style and repeatable layouts make room for words and evidence.", "The specimen shows a proposed opening slide and the reading sequence. Detailed charts would follow only when their sources and assumptions are available."] },
      { id: "result", label: "Result", title: "A deck direction people can read without the presenter.", paragraphs: ["The proposed output is a pitch narrative and reusable slide structure. No funding, sales or launch result is attributed to the concept."], points: ["Give an unfamiliar reader the short deck without explaining it.", "Ask them to describe the audience, problem and proposed product.", "Revise any slide that requires an extra spoken explanation."] },
      { id: "learning", label: "Learning", title: "A visual fix does not settle a business question.", paragraphs: ["A presentation can make an assumption easier to read without making it true. Questions about demand, pricing and distribution need their own research.", "The next version should use reader feedback to improve the argument, then return unresolved claims to the product team rather than polishing them into certainty."] },
    ],
  },
  {
    slug: "signal-desk", name: "Signal Desk",
    summary: "A weekly research brief made from source notes, with a person checking what gets published.",
    question: "Can the repetitive work shrink without losing the sources?",
    image: "/assets/essy-notes.jpg", color: "#F6E6C8",
    disciplines: ["Desk research", "Python & data", "Automation"],
    format: "Research automation concept", output: "A source register, proposed Python workflow and reviewable weekly brief",
    stages: [
      { id: "problem", label: "Problem", title: "The weekly brief starts with copying the same fields.", paragraphs: ["Signal Desk is a concept for preparing a recurring company or market brief. Collecting links, recording dates and sorting notes takes time before anyone gets to assess what the material says.", "The brief asks which repeated steps a small script can handle, while keeping interpretation and publication with the researcher."] },
      { id: "evidence", label: "Evidence", title: "Keep a record of the repeated steps.", paragraphs: ["The proposed study would compare several weekly briefs and the source notes behind them. It needs to show which steps are repeated, which require judgment and where errors are introduced. No workflow timing study has been completed."], points: ["Record source URL, publication date, company and topic.", "List manual corrections made between notes and the final brief.", "Identify sources that need permission or a separate review."] },
      { id: "decisions", label: "Decisions", title: "Automate preparation. Keep the review visible.", paragraphs: ["The proposed Python component checks required fields, flags repeated URLs and groups notes by topic. It does not decide which claim belongs in the brief."], points: ["Keep the original notes alongside the prepared output.", "Stop incomplete records at a review queue.", "Require a person's approval before publishing or sending a brief."] },
      { id: "making", label: "Making", title: "A small pipeline with an honest stop point.", paragraphs: ["The concept links a source register to a validation step and an editable brief. Each prepared note retains its source URL and date.", "The specimen shows that workflow with example records. A working implementation would start with a local CSV and a small script, then add scheduling only after the review flow is tested."] },
      { id: "result", label: "Result", title: "A proposed brief that can be checked line by line.", paragraphs: ["The output is a workflow specification and a brief format. An automation has not been deployed, and no hours saved are claimed."], points: ["Try duplicate, incomplete and conflicting source records.", "Check every prepared note against the original source.", "Measure preparation time and corrections across repeated runs."] },
      { id: "learning", label: "Learning", title: "The script needs a way to stop.", paragraphs: ["A failed source check should leave a visible record for the researcher, rather than quietly skipping it. Reliability here means knowing what did not get processed.", "The next iteration should test exceptions before adding more sources. A small workflow that can be audited is easier to trust than a larger one with unexplained gaps."] },
    ],
  },
];

export function getBuild(slug: string) { return builds.find(build => build.slug === slug); }
