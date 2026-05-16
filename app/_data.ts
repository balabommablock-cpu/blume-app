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
    body: "US stocks 0-to-1 in two months. Customer Data Platform 0-to-1 across five group entities through a chinese wall. Enterprise platform for franchise and advisor channel (~40% of firm revenue). AI portfolio recommendation engine. LLM-powered PM workflows on Claude Code.",
  },
];

export const SHIPPED: Ship[] = [
  {
    big: "10M+",
    label: "people, one profile each",
    context:
      "I built Motilal's customer data platform from nothing. Five group entities, one identity graph, through a strict chinese wall. Equities, mutual funds, commodities, insurance, lending. +18% engagement, +12% conversion.",
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
      "I brought LLM-powered workflows into the firm and quadrupled how fast the team ships. Trained them on Claude Code, prompt engineering, agentic workflows, AI-native product design.",
  },
  {
    big: "0 → 1",
    label: "built alone, on weekends",
    context:
      "boredfolio.com is an AI-native personal finance app on India's account aggregator rails. No team, no budget, no brief. Just me and Claude Code. The page you are reading runs on the same stack.",
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
    body: "Joined as solo PM. Knew almost nothing about insurance ops. Learnt the integrations while shipping them with Ola and IndusInd. The playbook is still in use.",
  },
  {
    year: "2022",
    place: "Motilal · US stocks",
    body: "Brought in to lead insurance products. Got handed US stocks from scratch on day three. Shipped 0-to-1 in two months. SEBI, FEMA, US broker-dealer, all in one alignment.",
  },
  {
    year: "2023",
    place: "Motilal · CDP",
    body: "Got assigned the customer data platform. First question to the architect was, in earnest, what is a CDP and don't we already have a decent one. Built the data layer 0-to-1 across five group entities through a strict chinese wall.",
  },
  {
    year: "2024",
    place: "Motilal · Enterprise platform",
    body: "Boss texted me on a Friday: \"aag lag gayi hai bhai, dekh le.\" Stood up a team across product, marketing, ops, tech, QA. Revamped the platform. Stabilised the modules driving ~40% of firm revenue.",
  },
];

export const SELF_EVAL = [
  "Strong action bias. I tend to jump and build the plane on the way down.",
  "Creative under pressure. Less so when there is time.",
  "Not the smartest person in any room I have walked into.",
  "Take a lot of notes. Process slowly. Build opinions slowly, but build them.",
  "Allergic to hierarchy. Have skipped four reporting lines along the way without being fired.",
];

export const WHY_PARAS = [
  "I build things nobody asked for. boredfolio.com is the latest one. An AI-native personal finance app, built on weekends, because the work week has never had quite enough building in it. That is the honest reason I am writing to you. Not a career plan. An itch.",
  "Here is what makes this seat possible now. A year ago it needed an analyst, an associate, and a stack of decks. Today it needs one operator who is not scared of Claude Code, because the analyst work is mostly a good prompt. I have been that operator at Motilal for three years. I would rather be it for fifteen companies than one.",
  "And I do not want to specialise. I still like walking into a domain I know nothing about and shipping in it anyway. Insurance. US stocks. Customer data. I knew none of them on day one. A growth seat is a dozen new domains a year. That reads less like a job and more like the good part of one.",
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
  - Calls the Anthropic API (sonnet-4-7 or opus-4-7) with the prompt template
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
- Anthropic API key (sonnet-4-7 or opus-4-7 access)
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
  "Here is the honest version. Four things I am good at on day one, and three I am not yet. I would rather you know both now than find the second list yourself in month two.";

export const STRENGTHS = [
  {
    title: "I ship fast",
    body: "US stocks, zero to live in two months. Account aggregator consent journeys, four days down to same-day. I do not wait for the perfect plan. I ship a rough one and fix it in the open.",
  },
  {
    title: "AI-native, not AI-curious",
    body: "Claude Code is my primary tool, not a thing I tried once. I built boredfolio.com with it, alone. I trained the Motilal team on it. This page is built with it. The Sunday brief above is a couple of hours of work.",
  },
  {
    title: "I learn a domain in weeks",
    body: "I knew nothing about insurance, US broker-dealer rules, or customer data platforms before each was handed to me. I shipped all three anyway. A growth portfolio is just more of that, at higher speed.",
  },
  {
    title: "I build teams people stay on",
    body: "I lead five PMs at Motilal. I built the squad that rebuilt the platform behind ~40% of firm revenue. Most of them are still there. Most of them are friends.",
  },
];

export const GAPS = [
  {
    n: "01",
    title: "Three-statement models from scratch",
    body: "The sit-down-with-Excel kind, in banker house style. I can read them well. I have not built many. Two months closes it: Damodaran's course and five live models on listed peers.",
  },
  {
    n: "02",
    title: "Cap tables under term-sheet pressure",
    body: "I understand the moves on paper. I have not sat on the negotiating side of a live term sheet. That one only comes with deal reps, and the reps come fast.",
  },
  {
    n: "03",
    title: "Reading a boardroom",
    body: "How you actually show up in a board meeting is learned in board meetings. Six to nine months. You would know by the second quarter whether I am good in that chair.",
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
