export const topics = [
  "All",
  "Next.js",
  "React",
  "CSS",
  "JavaScript",
  "UI/UX",
  "Accessibility",
];

export const articles = [
  {
    slug: "building-calm-interfaces",
    visual: "/article-icons/interface-design.svg",
    title: "Building calm interfaces for complex products",
    excerpt: "A practical framework for reducing visual noise while keeping workflows clear, fast, and accessible.",
    topic: "UI/UX",
    readTime: "7 min read",
    date: "Aug 18, 2026",
    author: "Mira Chen",
    accent: "from-violet-500 to-fuchsia-500",
    featured: true,
    content: [
      {
        heading: "Start with the user’s task",
        paragraphs: [
          "A calm interface begins by making the user’s primary task obvious and keeping secondary actions available without giving them equal visual weight.",
          "Clear hierarchy, purposeful spacing, and concise labels reduce hesitation while preserving the capabilities complex products need.",
        ],
      },
      {
        heading: "Reduce noise without hiding capability",
        paragraphs: [
          "Group related controls, reveal advanced options progressively, and use color only when it communicates status, priority, or action.",
          "Consistency across navigation, forms, and feedback helps people build a reliable mental model instead of relearning each screen.",
        ],
      },
      {
        heading: "Validate the complete experience",
        paragraphs: [
          "Test keyboard access, narrow screens, long content, empty states, and error recovery instead of reviewing only the ideal desktop layout.",
          "A polished interface stays understandable when real data, interruptions, and uncommon workflows put the design under pressure.",
        ],
      },
    ],
  },
  {
    slug: "nextjs-route-groups",
    visual: "/article-icons/nextjs.svg",
    title: "A clear mental model for Next.js route groups",
    excerpt: "Organize layouts and product areas without changing the public URL structure of an App Router project.",
    topic: "Next.js",
    readTime: "6 min read",
    date: "Aug 16, 2026",
    author: "Arun Mehta",
    accent: "from-cyan-400 to-blue-500",
    featured: false,
    content: [
      {
        heading: "What route groups change",
        paragraphs: [
          "A folder wrapped in parentheses organizes routes without adding that folder name to the public URL.",
          "This lets an App Router project separate marketing, account, and administration areas while keeping clean addresses for users.",
        ],
      },
      {
        heading: "Use groups to define layout boundaries",
        paragraphs: [
          "Place routes that share navigation, providers, or visual structure inside the same group and give that group a focused layout.",
          "Avoid creating groups only to mirror team names or arbitrary folders because every group should make the routing architecture easier to explain.",
        ],
      },
      {
        heading: "Check navigation and root layouts",
        paragraphs: [
          "Confirm links, metadata, loading states, and error boundaries still resolve as expected after routes move into groups.",
          "When multiple groups define root layouts, verify transitions carefully because navigating between different roots can trigger a full page load.",
        ],
      },
    ],
  },
  {
    slug: "react-state-boundaries",
    visual: "/article-icons/react.svg",
    title: "Choosing better state boundaries in React",
    excerpt: "Keep components predictable by placing state close to the behavior that owns it and sharing only what is necessary.",
    topic: "React",
    readTime: "8 min read",
    date: "Aug 12, 2026",
    author: "Nora Fields",
    accent: "from-emerald-400 to-teal-500",
    featured: false,
    content: [
      {
        heading: "Keep state close to its owner",
        paragraphs: [
          "Start state in the smallest component that owns the behavior and move it upward only when another part of the interface genuinely needs the same value.",
          "Local ownership reduces unnecessary renders and makes each component easier to understand, test, and reuse.",
        ],
      },
      {
        heading: "Separate server, URL, and interface state",
        paragraphs: [
          "Fetched records, shareable filters, and temporary interface controls have different lifecycles and should not automatically live in one global store.",
          "Use the server cache for remote data, the URL for shareable navigation state, and component state for short-lived interactions.",
        ],
      },
      {
        heading: "Lift state with a clear contract",
        paragraphs: [
          "When siblings must coordinate, lift only the shared value and the smallest useful set of update actions to their nearest common parent.",
          "Prefer explicit props or a focused context over a broad global object that makes unrelated components depend on one another.",
        ],
      },
    ],
  },
  {
    slug: "javascript-readable-utilities",
    visual: "/article-icons/javascript.svg",
    title: "Small JavaScript utilities that stay readable",
    excerpt: "Patterns for writing focused helpers, naming data transformations, and avoiding clever code that becomes hard to maintain.",
    topic: "JavaScript",
    readTime: "5 min read",
    date: "Aug 8, 2026",
    author: "Leo Park",
    accent: "from-amber-400 to-orange-500",
    featured: false,
    content: [
      {
        heading: "Give each helper one job",
        paragraphs: [
          "A useful utility performs one recognizable transformation and returns a predictable result without changing unrelated data.",
          "Small contracts make failures easier to locate and allow callers to combine helpers without learning hidden side effects.",
        ],
      },
      {
        heading: "Name the transformation",
        paragraphs: [
          "Use names that describe the business meaning of the operation rather than the array method or syntax used internally.",
          "Intermediate variables are valuable when they reveal the stages of a transformation and remove the need to decode a dense expression.",
        ],
      },
      {
        heading: "Test boundaries, not implementation details",
        paragraphs: [
          "Cover empty input, invalid values, duplicate records, and ordering rules that matter to callers.",
          "Tests should protect the public contract so the internal implementation can become simpler without forcing unrelated test changes.",
        ],
      },
    ],
  },
  {
    slug: "css-container-queries",
    visual: "/article-icons/css.svg",
    title: "Responsive components with container queries",
    excerpt: "Create cards and content blocks that adapt to their own available space rather than only the viewport.",
    topic: "CSS",
    readTime: "9 min read",
    date: "Aug 3, 2026",
    author: "Sasha Bell",
    accent: "from-pink-400 to-rose-500",
    featured: false,
    content: [
      {
        heading: "Respond to the component’s space",
        paragraphs: [
          "Container queries let a component react to the width of its parent instead of assuming that viewport width describes the space actually available.",
          "This is especially useful for reusable cards that may appear in a full-width page, a sidebar, or a dashboard grid.",
        ],
      },
      {
        heading: "Establish the right containment boundary",
        paragraphs: [
          "Apply container-type to the wrapper that controls the component’s usable inline size and give containers names when nested layouts could be ambiguous.",
          "Keep the query close to the component styles so the responsive rules remain understandable when the component moves.",
        ],
      },
      {
        heading: "Design from constrained content first",
        paragraphs: [
          "Begin with a narrow, readable arrangement and enhance the layout when the container has room for additional columns, controls, or media.",
          "Test long headings, translated labels, and nested containers to ensure the component adapts to content as well as dimensions.",
        ],
      },
    ],
  },
  {
    slug: "server-client-nextjs",
    visual: "/article-icons/server-client.svg",
    title: "Server and client components without confusion",
    excerpt: "A decision guide for data fetching, browser APIs, interactivity, and keeping JavaScript bundles intentional.",
    topic: "Next.js",
    readTime: "10 min read",
    date: "Jul 29, 2026",
    author: "DevCanvas Editorial",
    accent: "from-indigo-400 to-violet-500",
    featured: false,
    content: [
      {
        heading: "Start on the server by default",
        paragraphs: [
          "Server Components are a strong default for reading data, protecting credentials, and rendering content that does not require browser interaction.",
          "Keeping data work on the server can reduce client JavaScript and prevents private environment details from entering the browser bundle.",
        ],
      },
      {
        heading: "Add a client boundary for interaction",
        paragraphs: [
          "Use a Client Component when the interface needs state, effects, event handlers, browser APIs, or a client-only library.",
          "Place the boundary around the smallest interactive region so static parents and data-heavy sections can remain on the server.",
        ],
      },
      {
        heading: "Pass serializable data across the boundary",
        paragraphs: [
          "Send the client only the values needed for interaction rather than entire service objects, database records, or server functions.",
          "Review bundle size and loading behavior alongside correctness because an overly broad client boundary can quietly remove the benefits of server rendering.",
        ],
      },
    ],
  },
  {
    slug: "accessible-form-feedback",
    visual: "/article-icons/accessibility.svg",
    title: "Accessible form feedback that guides users",
    excerpt: "Design validation messages, focus movement, and live feedback that help people recover quickly.",
    topic: "Accessibility",
    readTime: "6 min read",
    date: "Jul 24, 2026",
    author: "Mina Cole",
    accent: "from-sky-400 to-indigo-500",
    featured: false,
    content: [
      {
        heading: "Explain the problem next to the field",
        paragraphs: [
          "Connect each validation message to its input and describe what needs to change instead of relying on color, icons, or a generic error label.",
          "Keep the entered value whenever possible so people can correct one part of the form without repeating completed work.",
        ],
      },
      {
        heading: "Manage focus after submission",
        paragraphs: [
          "When submission fails, move focus to an error summary or the first invalid field according to the form’s complexity and expected workflow.",
          "Make the destination programmatically focusable and provide links from a summary to individual fields when several errors need attention.",
        ],
      },
      {
        heading: "Announce updates without creating noise",
        paragraphs: [
          "Use an appropriate live region for feedback that appears after an action, and avoid repeatedly announcing messages while a person is still typing.",
          "Test the form with a keyboard and a screen reader to confirm labels, instructions, errors, and success messages are encountered in a useful order.",
        ],
      },
    ],
  },
];
