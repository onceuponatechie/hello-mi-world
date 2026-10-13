import internetSnapshot from "../../public/research/nigeria-internet-use.json";

export const internetUse = internetSnapshot;
export const internetChange = internetUse.points.at(-1)!.value - internetUse.points[0].value;
export type StudySource = {id: string; title: string; publisher: string; url: string};
export type Study = {
  slug: string; topic: "Market notes" | "Product studies" | "Systems"; subject: string; title: string; summary: string; question: string;
  color: string; visual: "internet" | "notion" | "figma" | "paystack";
  opening: string[]; observations: {title: string; text: string; sources: string[]}[];
  reading: {title: string; text: string}[]; method: string[]; limits: string[]; nextQuestion: string; sources: StudySource[];
};

export const studies: Study[] = [
  {
    slug: "nigeria-internet-use", topic: "Market notes", subject: "Nigeria / Internet use", visual: "internet", color: "#C8EBF0",
    title: "An internet user is not a ready customer.",
    summary: "Seven years of public data, and the questions a market-size claim still needs to answer.",
    question: "What does Nigeria’s internet-use series tell us about the people a digital product can reach?",
    opening: ["A national internet-use figure is easy to put in a pitch deck. It is harder to explain who inside that figure needs the thing you are making, can use it, and will pay for it. This note checks the public series before making that second claim.", "The downloaded World Bank series, sourced to the ITU, reports 27.74% for 2018 and 41.21% for 2024. That is a rise of 13.47 percentage points. These are population percentages, not customer counts. [W1]"],
    observations: [
      {title: "Use has increased in this series", text: "All seven annual observations increase. The largest year-to-year increase in this extract is 3.64 percentage points between 2021 and 2022. The chart starts at zero to keep the size of the change in proportion.", sources: ["W1"]},
      {title: "The measure is broad", text: "The indicator concerns individuals who used the internet in the previous three months, using any location or device. It does not count subscriptions or describe a particular product category.", sources: ["W2"]},
      {title: "It leaves buying behaviour unanswered", text: "The series has no fields for the task someone needs help with, willingness to pay, device quality or ability to complete your product’s workflow. Those questions need other evidence.", sources: ["W1", "W2"]},
    ],
    reading: [
      {title: "Start with the task", text: "Describe the person and the job the product helps them do. Treat the national series as context while you find evidence about that particular task."},
      {title: "Check the route to using it", text: "A product for reading short notes has different requirements from a dashboard that needs a large screen. Test the actual flow with the devices and connections your intended users have."},
      {title: "Keep the denominator visible", text: "If a market estimate narrows the population by age, location, task or payment behaviour, record the source behind each step. Do not turn the internet-use percentage into a paid-user estimate by itself."},
    ],
    method: ["Download indicator IT.NET.USER.ZS for Nigeria, covering 2018–2024, through the World Bank API.", "Keep the source numbers unchanged in the downloadable CSV and JSON. Sort the observations by year. The extract contains seven annual observations, with none missing.", "Calculate changes by subtracting percentages. Round displayed figures to two decimals after calculating; retain full precision in the files.", "Read the indicator definition before interpreting the series. The snapshot was retrieved on 13 October 2026; the API reports an update of 8 October 2026."],
    limits: ["A national average hides differences between people and places. This extract has no subgroup breakdown.", "This extract stops at 2024. It is not a measurement of internet use in 2026.", "The measure does not establish demand, affordability, revenue or repeat use. No customer interviews or product tests were conducted for this note.", "The upstream series can be revised. This page uses the dated local snapshot, so its chart remains reproducible."],
    nextQuestion: "Which task is common enough to pursue, and what prevents the intended person from completing it today?",
    sources: [{id:"W1", title:"Nigeria internet-use indicator and API extract",publisher:"World Bank / ITU",url:internetSnapshot.sourceUrl},{id:"W2",title:"Indicator definition and method notes",publisher:"World Bank DataBank",url:"https://databank.worldbank.org/metadataglossary/world-development-indicators/series/IT.NET.USER.ZS"}],
  },
  {
    slug: "notion-evidence-library", topic: "Product studies", subject: "Notion / Research records", visual: "notion", color: "#F8FADF",
    title: "A finding should keep its source.",
    summary: "A reading of Notion’s data model, with a proposed structure for keeping research traceable.",
    question: "How can a research library keep the original observation attached to the decision?",
    opening: ["A tidy research page can still contain a claim no one knows how to check. The useful design question is what happens when someone asks where a finding came from. This study reads Notion’s database documentation and proposes a small record structure to answer that question.", "The diagrams show a proposed research library. They are examples made for this study, not screenshots of Notion or findings from a team using the product."],
    observations: [
      {title: "A view can reuse the same records", text: "Notion lets a database link an existing data source. Filters, sorts and groups in the linked view do not change the original views; edits to the source’s pages or properties do affect the original records.", sources:["N1"]},
      {title: "Relations can connect the records", text: "A relation property can connect pages in different databases. Rollups can calculate or display information through that relation. These features make a source-to-finding connection possible, but someone still has to record it.", sources:["N2"]},
      {title: "Sharing a view does not settle access", text: "A linked data source respects the original database’s access permissions. A shared research page needs a check that its intended reader can also open the underlying source.", sources:["N1"]},
    ],
    reading: [
      {title: "Give the source its own record",text:"Store the original link, date and a note about what the source cannot tell you. A finding can then point to that record rather than holding an unlabelled copied sentence."},
      {title: "Separate observation and interpretation",text:"Put the source passage in one field and your reading of it in another. Add another possible explanation when the evidence permits several readings. A later reviewer can question your reasoning without losing the original."},
      {title: "Design for the review",text:"Before a finding informs a decision, check the source, its limits and any contradictory evidence. Add a review status for the person making that check. A database relation is a connection, not proof that the claim is sound."},
    ],
    method:["Read Notion’s data-source and relation documentation as retrieved on 13 October 2026.","Separate documented product behaviour from the proposed research-library design. The numbered source links identify the documented claims.","Draft the record map below using questions, sources, findings and decisions. The record labels are illustrative.","Define a follow-up task: ask a reader to trace one decision to its original evidence, then record where the route fails."],
    limits:["Documentation describes supported behaviour; it does not show how a team actually keeps its records.","No workspace audit, usability test or interview was conducted. The proposed structure has not been evaluated with participants.","A link to a source does not establish source quality. Permissions and the original material still need checking."],
    nextQuestion:"Can someone unfamiliar with the project trace a decision to the original evidence without asking the author?",
    sources:[{id:"N1",title:"Data sources and linked databases",publisher:"Notion Help",url:"https://www.notion.com/help/data-sources-and-linked-databases"},{id:"N2",title:"Relations and rollups",publisher:"Notion Help",url:"https://www.notion.com/help/relations-and-rollups"}],
  },
  {
    slug: "figma-named-decisions", topic: "Systems", subject: "Figma / Variables", visual: "figma", color: "#EDE2F2",
    title: "Name the decision before the color.",
    summary: "What variable modes make reusable, and why a color name still needs a purpose.",
    question:"What should a design variable describe so a decision survives a change of theme?",
    opening:["A color copied into twenty screens creates twenty places to inspect when the decision changes. A named variable gives the team a shared reference. The name matters because another person has to understand what should change together.","This study reads Figma’s variable documentation and builds a small light/dark example. The example is an original demonstration of named roles, not a measurement of a design team’s productivity."],
    observations:[
      {title:"A variable stores a reusable setting",text:"Figma documents variables for properties including color, numbers, strings and booleans. Variables can be used in team libraries. A mode stores a setting for each variable in a collection.",sources:["F1"]},
      {title:"A mode changes the context",text:"Modes can hold different settings for a light or dark theme. An object in Auto mode inherits a specified mode through its parent hierarchy, or uses the collection’s default when none is specified.",sources:["F2"]},
      {title:"The role is a design decision",text:"The documentation describes settings and contexts. Naming a variable for a role such as action background is a choice in this study; the product does not decide which action deserves attention.",sources:["F1","F2"]},
    ],
    reading:[
      {title:"Keep the role stable",text:"Use a name such as surface/page when the intention is the page surface. Light and dark modes can change its color without changing what the reference means."},
      {title:"Review the whole pairing",text:"A background change also calls for a text and contrast check. The example below changes page, text and action settings together. It is a demonstration, not a full accessibility certification."},
      {title:"Leave a reason beside the name",text:"Record where a variable is used and what should remain consistent. A second person should know when to use an existing reference and when the task needs a different one."},
    ],
    method:["Read Figma’s variables overview and mode documentation as retrieved on 13 October 2026.","Build a three-role example for page surface, primary text and action background. The colors are chosen for this site; they are not Figma defaults.","Switch the same specimen between two modes. Keep its text, order and purpose unchanged so the changed settings are visible.","Define the next review: inspect the specimen at small widths and check contrast, focus and interaction states before applying the settings elsewhere."],
    limits:["The example has three roles and two modes. It does not represent a complete design system.","No before/after time study was conducted, so this study makes no speed or productivity claim.","Plan-dependent mode limits and export workflows are outside this study. Product documentation can change."],
    nextQuestion:"Can another designer use the variable names correctly without an explanation from their author?",
    sources:[{id:"F1",title:"Variables, collections and modes",publisher:"Figma Learn",url:"https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes"},{id:"F2",title:"Modes for variables",publisher:"Figma Learn",url:"https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables"}],
  },
  {
    slug: "paystack-payment-confirmation", topic:"Systems",subject:"Paystack / Payment confirmation",visual:"paystack",color:"#F6E6C8",
    title:"The return page is not the receipt.",
    summary:"Read the payment flow as a set of states, then decide what the customer should see in each one.",
    question:"What should a product show while payment confirmation is still unresolved?",
    opening:["A customer returns from checkout and expects to know what happened. The product needs to answer using the payment record, not the fact that a page opened. This study reads Paystack’s documented flow and maps a proposed customer-facing response.","The map is a product design reading of the documentation. It is not a live checkout, a payment test, or evidence about how often a transaction fails."],
    observations:[
      {title:"A redirect is not proof of payment",text:"Paystack’s acceptance guide says visiting the callback URL does not prove the transaction succeeded. The transaction reference is used to verify its status before delivering the purchased item or service. The amount also needs checking.",sources:["P1"]},
      {title:"The transaction has its own status",text:"The verification response’s outer status describes the API call. The transaction status is inside data.status. Paystack lists states including pending, ongoing, failed, abandoned and reversed, alongside completed payments.",sources:["P2"]},
      {title:"Confirmation and delivery are separate",text:"Paystack advises checking that an item has not already been delivered for a transaction, particularly when verification and webhooks are both used. A repeated confirmation should not cause repeated delivery.",sources:["P2"]},
    ],
    reading:[
      {title:"Make waiting a real state",text:"Until the server has confirmed payment, show that the product is checking. Keep the transaction reference available. Avoid telling the customer to pay again before checking the existing attempt."},
      {title:"Connect the message to the record",text:"A confirmed transaction can lead to the purchased item. A failed or incomplete attempt needs an explanation and a route back. A reversed payment needs its own message and support route."},
      {title:"Test recovery as well as the happy path",text:"For a later implementation, test a closed checkout, delayed confirmation and repeated callback. Record the server state and the visible message together. The map below is a proposed design aid, not executable payment handling."},
    ],
    method:["Read Paystack’s acceptance and verification documentation as retrieved on 13 October 2026.","Trace initialization, checkout, return, verification and delivery. Keep the documented server check separate from the proposed interface wording.","Group documented transaction states into proposed customer-facing responses. This diagram simplifies the list; it is not an exhaustive state machine.","Write a follow-up test plan in a payment provider’s test environment. No payment credentials, card details or live transactions were used for this study."],
    limits:["The study is limited to the cited Paystack flow. It does not audit security, settlement, fraud, pricing or other providers.","The simplified map leaves out provider-specific retries, delays and channels. An implementation needs the current full documentation.","No customer interviews or transaction dataset were collected, so the page makes no claim about failure rates or customer preferences."],
    nextQuestion:"When confirmation is delayed, can a customer tell what is happening without making another payment?",
    sources:[{id:"P1",title:"Accept payments",publisher:"Paystack Developer Documentation",url:"https://paystack.com/docs/payments/accept-payments/"},{id:"P2",title:"Verify payments",publisher:"Paystack Developer Documentation",url:"https://paystack.com/docs/payments/verify-payments/"}],
  },
];

export function getStudy(slug: string) {return studies.find(study => study.slug === slug);}
