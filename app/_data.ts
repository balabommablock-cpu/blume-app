// Content for /blume.

export type Stop = {
  years: string;
  company: string;
  role: string;
  tag: string;
  body: string;
  link?: { href: string; label: string };
};

export type Ship = {
  big: string;
  label: string;
  context: string;
};

export type Flag = {
  year: string;
  place: string;
  body: string;
};

export type UseCase = {
  n: string;
  name: string;
  body: string;
};

export const JOURNEY: Stop[] = [
  {
    years: "2018",
    company: "RedSeer",
    role: "Research Analyst",
    tag: "market research",
    body: "Sized the India beauty and personal care opportunity for a private-equity client. Co-authored a public preventive-healthcare report still floating around the internet.",
    link: {
      href: "https://redseer.com/wp-content/uploads/2018/07/preventive-healthcare-a-100-billion-dollar-revolution.pdf",
      label: "$100B preventive-healthcare report",
    },
  },
  {
    years: "2019 to 2020",
    company: "Rapido",
    role: "Growth team",
    tag: "growth",
    body: "Built RFM and behavioural-cohort models in SQL. Gamified loyalty and referrals. Lifted rides-per-user 22% across 10 cities.",
  },
  {
    years: "2021 to 2022",
    company: "Riskcovry",
    role: "Product-Led Growth Lead",
    tag: "embedded fintech",
    body: "Shipped embedded insurance integrations at enterprise scale. Wrote the integration playbook with Ola and IndusInd Bank.",
  },
  {
    years: "2022 to now",
    company: "Motilal Oswal Financial Services",
    role: "Vice President, Products",
    tag: "ai-native product",
    body: "Hired for one product, then handed every hard zero-to-one the firm had after that. Now I run product for its AI and platform bets.",
  },
];

export const SHIPPED: Ship[] = [
  {
    big: "10M+",
    label: "people, one profile each",
    context:
      "I built Motilal's customer data platform from nothing. Five group entities, one identity graph, through a strict Chinese wall. Equities, mutual funds, commodities, insurance, lending. +18% engagement, +12% conversion.",
  },
  {
    big: "~40%",
    label: "of firm revenue",
    context:
      "I built and own the platform the franchise and advisor channel runs on. Dashboards, ops console, execution. I rebuilt the modules that move the number, and they have held since.",
  },
  {
    big: "-40%",
    label: "advisor prep time",
    context:
      "An AI engine that builds portfolio recommendations for advisors. I designed the model output, the data pipelines, the evaluation, the screens advisors actually use. +15% attach rates.",
  },
  {
    big: "3 → 12",
    label: "experiments a quarter",
    context:
      "I brought LLM-powered workflows into the firm. The team now runs four times the experiments it used to, on the same headcount.",
  },
  {
    big: "2 months",
    label: "US stocks, zero to live",
    context:
      "I built Motilal's US equities product from nothing in two months. SEBI, FEMA, a US broker-dealer and our own stack, all aligned at once. It let our users buy Apple and Nvidia from inside the app.",
  },
];

export const FLAGS: Flag[] = [
  {
    year: "2018",
    place: "RedSeer · Bangalore",
    body: "Boss handed me 10 case studies on day one, not one. I said yes on the spot. Then walked to my senior and asked how case studies were actually made. Shipped in a day, with all their help. The senior is still a friend.",
  },
  {
    year: "2019",
    place: "Rapido · Bangalore",
    body: "Convinced two PMs to run a secret IPL-themed loyalty game in my assigned cities. Nobody approved the campaign. Rides grew massively in those cities. Nobody asked questions afterward either.",
  },
  {
    year: "2021",
    place: "Riskcovry · Mumbai",
    body: "Joined as the solo PM. Knew almost nothing about insurance. Learnt it while shipping it. The playbook I wrote that quarter is still in use.",
  },
  {
    year: "2022",
    place: "Motilal · US stocks",
    body: "Brought in to lead insurance products. On day three someone handed me US stocks instead, from scratch, and walked off. I said yes before I had finished hearing the sentence.",
  },
  {
    year: "2023",
    place: "Motilal · CDP",
    body: "Got handed the customer data platform. My first question to the architect, in earnest: what is a CDP, and do we not already have one? Then I went and built it.",
  },
  {
    year: "2024",
    place: "Motilal · Enterprise platform",
    body: "Boss texted me on a Friday: \"aag lag gayi hai bhai, dekh le.\" I pulled together a team across product, marketing, ops, tech and QA, and we rebuilt the platform under fire.",
  },
];

export const SELF_EVAL = [
  "Strong action bias. I tend to jump and build the plane on the way down.",
  "Creative under pressure. Less so when there is time.",
  "Allergic to hierarchy. Have skipped four reporting lines along the way without being fired.",
];

export const WHY_PARAS = [
  "I build things. Constantly, and mostly before anyone asks me to. It is the strongest instinct I have, and it does not switch off on weekends. That is not a quirk to be managed. It is the engine everything else runs on.",
  "It is an interesting operating job that happens to come with a chequebook. Whoever you hire will spend far more hours building companies with founders than picking the next bet. Most applicants are studying for the picking. I have spent seven years doing the building.",
  "I am not in this for the title. Those have never moved me. I want the long version: years of hard problems, rooms worth being the least experienced person in, and an org chart thin enough that nobody gets to tell me which lane is mine.",
];

export const USE_CASES: UseCase[] = [
  {
    n: "01",
    name: "The Sunday Brief",
    body: "A weekly one-pager per portfolio company in your inbox at 8 PM Sunday. Reads 360 articles, filings, founder posts, peer prints, and regulatory updates so you don't have to.",
  },
  {
    n: "02",
    name: "The board-pack one-pager",
    body: "Founder uploads the 100-page pack to a shared Notion. Claude reads it. Compresses to one page: KPI delta vs last quarter, three strategic issues, five questions worth asking. Lands before the meeting.",
  },
  {
    n: "03",
    name: "The DRHP digest",
    body: "Someone files a DRHP. Twenty minutes later you have the cap table, OFS-to-fresh ratio, employee metrics, peer multiples, and the risk-factor anomalies. Versus four hours of reading by hand.",
  },
];

export const BUILDABLE_PROMPT = `You are building "Sunday Brief", an automated weekly portfolio
news + filings + founder-signal summary for a growth-stage VC investor.

Stack: Python service on a Mac mini or a small VPS (Fly.io, Hetzner,
Vercel cron, etc.). No Zapier. No SaaS subscriptions beyond Claude.

INPUTS (the human supplies once):
- A list of 10 to 15 portfolio companies, each with:
  * Company name and sector
  * One key listed comparable (e.g., for an SFB: Ujjivan SFB)
  * Two competitors to watch
  * Founders' LinkedIn URLs and X / Twitter handles
  * Filing handles (BSE/SEBI/MCA CIN; RBI handle if regulated)
  * Date of next quarterly board meeting (if known)

DATA SOURCES the brief pulls from:
- Company press-release RSS feeds
- Google News alerts (RSS via feedparser)
- Listed comparable's investor-relations RSS / earnings transcript
- Sector regulator releases (RBI, IRDAI, SEBI, FSSAI, etc.)
- BSE / SEBI / MCA public filings APIs
- Earnings-call transcripts (where public, via TIKR / company IR)
- Founder X / Twitter posts (X API v2)
- Founder LinkedIn posts and senior-hire / senior-exit events
- Tracxn / VCCircle for funding-round signal
- Glassdoor / AmbitionBox sentiment delta (optional)

WORKFLOW you scaffold:

Step 1. A Python service, cron'd every 6 hours:
  - Pulls all RSS + API sources above
  - De-duplicates and stages new items in a SQLite database
  - Schema: id, company, source, timestamp, title, url, body, raw_payload

Step 2. Sunday 18:00 IST cron:
  - Reads the past 7 days of items per company
  - Calls the Anthropic API (a current Claude model, Opus or Sonnet) with the prompt template
  - Writes the output to a 'briefs' table

Step 3. Gmail SMTP, Sunday 20:00 IST:
  - Reads the briefs table
  - Sends one HTML email per company to the investor's inbox
  - Subject: "[Company] · Week in numbers · [date range]"

PROMPT TEMPLATE (used inside the Sunday cron):
"""
You are writing a 1-page weekly brief on [Company] for a senior
growth investor. The reader has 60 seconds. Plain English. No
marketing language. Cite every number with its public source URL
or filing page reference.

Inputs (this week's articles + filings + founder posts):
[paste relevant SQLite rows]

Format the output exactly like this:

[Company] · Week in numbers · [date range]

WEEK IN NUMBERS
  → One operating ratio with trend
  → Confirmed date of next board meeting
  → One material commercial move this week

PEER PULSE
  → Three listed peers, last-quarter print, delta to prior
  → One peer at a multiple worth flagging

REGULATORY
  → One sector update relevant to this company
  → Pending approval, with last-update date

FOUNDER SIGNAL
  → Founder posts of substance from X / LinkedIn this week
  → Senior hires made or lost in the team

PENDING FROM LAST BOARD
  → Action item · owner · due · status

ONE THING TO ASK ON MONDAY
  → A single neutrally phrased question the data suggests is worth
    asking. One sentence.

If a section has no signal, write "Nothing to report." Do not invent
data. Better to under-report than over-report.
"""

ACCESS YOU WILL NEED:
- Anthropic API key with access to a current Claude model (Opus or Sonnet)
- Gmail app password for SMTP
- A Mac mini, VPS, or cloud function for the cron
- X API v2 bearer token (Basic tier, ~$100/mo, optional)
- The portfolio company list

Total build time: a few hours end-to-end.
Total running cost: ~₹3,000 a month including API usage.

Begin by asking the human for the inputs above. Then output a
step-by-step plan. Pause whenever a step needs manual setup and
instruct the human clearly. Show your working.`;

export const HONEST_OPENING =
  "Here is the honest version. What I am good at, and what I am still not. I would rather you know both before the coffee than after the offer.";

export const STRENGTHS = [
  {
    title: "I ship fast",
    body: "Everything in the section above went from nothing to live in months, not years. I do not wait for a perfect plan. I ship the rough version, put it in front of real users, and fix it from there.",
  },
  {
    title: "AI-native, not AI-curious",
    body: "Claude Code is my primary tool, not something I tried once. I have built a small trading platform for the firm and a pile of side quests for myself with it, alone. I trained the Motilal team to work the same way. This page is built with it.",
  },
  {
    title: "I learn a domain in weeks",
    body: "Look at the timeline. Every job on it began with me knowing close to nothing about the domain. I shipped in each one anyway. A growth portfolio is a dozen new domains a year, and I am unusually comfortable with that.",
  },
  {
    title: "I would do the AI part for free",
    body: "I read about this stuff constantly and I will talk about it until you change the subject. Not the hype, the real thing: what shifted this month, what it breaks, what it quietly makes buildable. For a growth fund in 2026, that is not a side interest. It is most of the job.",
  },
  {
    title: "I build teams people stay on",
    body: "I built the squad that rebuilt our biggest platform. Five PMs, three product marketers, about thirty engineers, designers and QA. I could give you retention stats on them. The number I actually keep is friends: more than seventy, at this one company, across every level of it. Yes, I counted.",
  },
];

export const GAPS = [
  {
    n: "01",
    title: "Building models from scratch",
    body: "Three-statement and valuation models, the sit-down-with-Excel kind, in banker house style. I read them well. I have not built many. Two months closes it: Damodaran's course and five live models on listed peers.",
  },
  {
    n: "02",
    title: "Cap tables and term sheets",
    body: "I understand the mechanics on paper. Liquidation preferences, pro-rata, the rest. I have not negotiated a live one. That comes only with deal reps, and the reps come fast.",
  },
  {
    n: "03",
    title: "The investor side of a boardroom",
    body: "I have built products for boards to review. I have not sat as the investor in the room. How you are useful in that chair is learned in that chair. Six to nine months.",
  },
  {
    n: "04",
    title: "Sourcing",
    body: "My career has been about helping companies that already exist, not finding them first. Originating deals is a muscle I have not built. Early on I would lean on the partners here, and on being genuinely useful in public.",
  },
  {
    n: "05",
    title: "Sector depth, finance included",
    body: "Three years inside a financial services firm taught me how BFSI products and regulation actually behave. It did not make me a finance scholar, and I would rather not pretend. Outside BFSI I am starting fresh. Deep sector instinct is a slow build for me, one founder conversation at a time.",
  },
  {
    n: "06",
    title: "The fund and LP side",
    body: "Fund economics, reserves, ownership math, LP letters. I have read about it. I have run none of it. This one is an honest multi-year build, and I would rather say so now than discover it with you later.",
  },
  {
    n: "07",
    title: "Being the quick one in the room",
    body: "I am not, and I have stopped auditioning for it. I think slowly, take an absurd number of notes, and reach conclusions at roughly the pace of a court case. For years that was a quiet tax in fast rooms. Then I started running my first-draft thinking through Claude, and slow stopped being expensive. I am not smarter than I was. I am just no longer bottlenecked by the parts of my head that were never much good.",
  },
];

export const COFFEE_OPTIONS = [
  {
    n: "01",
    title: "The actual coffee",
    body: "Thirty minutes. Blue Tokai in Bandra, or a Zoom if you are travelling. No deck, no laptop. I bring three questions about Blume I could not answer from the outside. You tell me which ones are naive.",
  },
  {
    n: "02",
    title: "The 200-word test",
    body: "Pick any company in the Blume portfolio. The one you are tired of explaining. I send back a 200-word read on how it actually makes money, public sources only, by Sunday midnight. If it is sharp, we keep talking.",
  },
  {
    n: "03",
    title: "The new-hire brief",
    body: "Hand me the brief you would give a growth-team hire in their first week. I do it for real. We compare notes. If mine looks like yours, we have something. If not, I just saved you a hire.",
  },
];

export const BRIEF_PREVIEW = [
  "Slice · costs run 83% of income, peers sit at 60-65%",
  "Turtlemint · filed to IPO, mostly existing investors selling",
  "Purplle · results out Thursday, watch Nykaa report first",
  "Spinny · raised fresh debt, worth a call on cash flow",
  "Battery Smart · board meeting Tuesday, six numbers to pre-read",
  "RBI · new digital-lending rule, lands on two of your companies",
];

export const CONTACT = {
  email: "rishabh.balabomma@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabhbalabomma",
  x: "https://x.com/barishrao",
  github: "https://github.com/balabommablock-cpu",
  boredfolio: "https://boredfolio.com",
};
