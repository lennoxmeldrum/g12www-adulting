import React, { useState } from 'react';
import {
  Users,
  Utensils,
  MapPin,
  Wallet,
  Clock,
  Wrench,
  CheckCircle,
  BookOpen,
  List,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';

const SESSIONS = [
  {
    id: 'social',
    title: 'Starting Fresh',
    subtitle: 'Friends, Roommates, Relationships, and Staying Safe',
    icon: Users,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    overview:
      "Starting university means starting over socially - new people, new spaces, new expectations. This session is about navigating that reality without losing yourself. We'll talk about how to introduce yourself and put yourself out there, make friends in unfamiliar environments, manage roommates and shared living spaces, and handle relationships and dating with clear boundaries. We'll also tackle the uncomfortable but real topics: loneliness, homesickness, nightlife culture, hazing, and personal safety. The focus is practical, realistic, and honest - what actually works, what to watch out for, and how to protect your wellbeing while building a life in a new place.",
    lessonPlan: {
      goal: [
        'Concrete strategies for meeting people and forming connections',
        'Language for boundaries, conflict, and roommate issues',
        'Awareness of social risks (hazing, nightlife, unsafe dynamics)',
        'Normalisation of loneliness and homesickness and tools to deal with it',
      ],
      flow: [
        {
          time: '5 min',
          title: 'Opening Reality Check',
          content:
            "Normalize anxiety. Ask: 'What are you excited about?' vs 'What worries you?'. Emphasize that confidence is learned behavior.",
        },
        {
          time: '10 min',
          title: 'Putting Yourself Out There',
          content:
            'How introductions actually work (Dorms, Orientation, Classes). Teach a simple structure: Name + Origin + Neutral Hook. Activity: Low-stakes role-play in pairs.',
        },
        {
          time: '15 min',
          title: 'Roommates, Boundaries, and Conflict',
          content:
            "Core value section. Discuss cleanliness, noise, guests. Teach language: 'I'm okay with X, but not Y.' Small group case studies (e.g., passive-aggressive messaging).",
        },
        {
          time: '10 min',
          title: 'Relationships, Dating, and Nightlife',
          content:
            "Factual and grounded. Consent is ongoing. Nightlife realities (alcohol, group pressure). Hazing awareness. Key framing: You don't owe anyone access to your time or body.",
        },
        {
          time: '5 min',
          title: 'Loneliness & Homesickness',
          content:
            "Reassurance. Loneliness peaks early then drops. Signs to reach out (isolation, sleep disruption). Reflection: 'One thing I can do to stay socially healthy.'",
        },
      ],
      prep: [
        'Print or project short scenario cards',
        "Decide in advance which topics you'll explicitly name (dating, hazing, alcohol)",
        'Set norms early: respectful, optional sharing',
        'Be honest. Students can smell scripted wellbeing language instantly',
      ],
      whyItWorks:
        'It combines social skills + safety + emotional realism. It treats students like adults, not children, giving them language rather than lectures.',
    },
  },
  {
    id: 'food',
    title: 'Feeding Yourself',
    subtitle: 'Simple Cooking That Actually Works',
    icon: Utensils,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    overview:
      "Living away from home means you're suddenly responsible for feeding yourself - regularly, cheaply, and safely. This session is about practical cooking skills for real student life: quick meals, basic techniques, dorm-friendly cooking, organising your fridge so food doesn't go bad, and adapting simple recipes across different cuisines. Whether you've never cooked before or just want better ideas than instant noodles, you'll leave with realistic strategies to eat better without spending all your time or money in the kitchen.",
    lessonPlan: {
      goal: [
        'A small set of reliable, flexible meals',
        'Understanding of basic cooking methods',
        'Strategies for cooking with minimal equipment',
        'Practical food storage and fridge organisation skills',
      ],
      flow: [
        {
          time: '5 min',
          title: 'Reality Check',
          content:
            "Expose traps. 'You don't need to cook well - you need to cook consistently.' Reliability > Variety.",
        },
        {
          time: '10 min',
          title: 'Core Cooking Skills',
          content:
            'Techniques over recipes. Heat control (low/med/high). Key methods: Pan-frying, Boiling, Oven baking. Show how one protein applies to multiple meals.',
        },
        {
          time: '10 min',
          title: 'Quick Meals That Scale',
          content:
            'Meals under 20 mins. Discuss rice bowls, pasta, sheet-pan meals. Activity: Small groups design a 15-minute meal using 1 protein, 1 carb, 1-2 veg.',
        },
        {
          time: '10 min',
          title: 'Cooking in Dorms',
          content:
            'High value section. Discuss microwaves, rice cookers, kettles. Safety basics (fire risks, hygiene). Emphasize checking campus rules.',
        },
        {
          time: '10 min',
          title: 'Fridge Org & Waste',
          content:
            'Why food spoils. Simple systems: Ready-to-eat zone vs Raw ingredients. Mini-challenge: Identify what should move in a fridge photo.',
        },
        {
          time: '5 min',
          title: 'Optional: Baking/Cuisines',
          content: 'If time allows: Baking ratios or how spices change flavor profiles.',
        },
      ],
      prep: [
        'Slides of dorm cooking setups & fridge organization',
        "A short list of 'student-proof' meals",
        'Clear disclaimer: this is about functionality, not perfection',
      ],
      whyItWorks:
        'Focuses on systems, not talent. Respects cultural backgrounds. Scales from zero experience to confident basics.',
    },
  },
  {
    id: 'safe',
    title: 'Staying Safe',
    subtitle: 'Smart, and Oriented: Uni Life, Travel, and Emergencies',
    icon: MapPin,
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
    overview:
      "University life often means navigating new cities, campuses, countries, and systems sometimes without clear instructions or reliable phone service. This session focuses on practical safety, awareness, and decision-making: what to do when you're lost, how to stay safe on and around campus, how to interact professionally with professors, and how to handle real-world risks like travel logistics, visas, and emergency alerts. We'll also address serious but necessary topics such as active threat notifications, personal safety, and understanding local rules and expectations. The goal is not fear - it's preparedness.",
    lessonPlan: {
      goal: [
        'Strategies for staying oriented without constant phone access',
        'Realistic understanding of campus safety systems',
        'Awareness of international travel/visa logistics',
        'Etiquette and professional conduct expectations',
        'High-level understanding of emergency alerts',
      ],
      flow: [
        {
          time: '10 min',
          title: 'Orientation Without Tech',
          content:
            'Why phones fail. Low-tech skills (maps, landmarks). Activity: Identify help points on a simple map without using a phone.',
        },
        {
          time: '10 min',
          title: 'Travel & Mobility Basics',
          content:
            "Demystify systems. Flight bookings, hidden costs, visas. 'Travel problems are usually administrative, not dramatic.'",
        },
        {
          time: '10 min',
          title: 'Living in Systems',
          content:
            "Rules & Etiquette. Trash policies, noise, shared spaces. Discuss: 'What behaviours are interpreted differently across cultures?'",
        },
        {
          time: '10 min',
          title: 'Safety & Professional Interaction',
          content:
            'Campus safety infrastructure. Networking with professors (boundaries, office hours). Professional relationships are built on respect, not familiarity.',
        },
        {
          time: '10 min',
          title: 'Emergency Alerts',
          content:
            'Handle carefully. Active threat awareness. High-level response principles: Follow instructions, prioritise safety, avoid rumours. NOT tactical training.',
        },
      ],
      prep: [
        'Sample campus alert screenshots (generic)',
        'Map image for navigation activity',
        'Clear language for sensitive content',
        'Emphasise regional differences',
      ],
      whyItWorks:
        'Treats safety as competence, not fear. Builds systems thinking. Acknowledges real risks without sensationalising them.',
    },
  },
  {
    id: 'money',
    title: 'Money After School',
    subtitle: 'Earning, Spending, Saving, and Being Safe',
    icon: Wallet,
    color: 'bg-green-600',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
    overview:
      "Money gets real very fast after high school. This session breaks down how adult money systems actually work: budgeting, banking abroad, taxes, jobs, side hustles, credit cards, investing, and long-term basics like retirement accounts. We'll focus on what you need in your first few years out of school, what mistakes cost people the most, and how to make decisions that give you flexibility instead of stress. No finance background required - just practical guidance you can use immediately.",
    lessonPlan: {
      goal: [
        'Clear mental model of money flow (income → spending → saving → investing)',
        'Awareness of common financial traps',
        'Practical next steps for Year 1',
        'Literacy to ask the right questions',
      ],
      flow: [
        {
          time: '5 min',
          title: 'Big Picture: Adult Money',
          content:
            'Budgeting is visibility, not restriction. Sketch the flow: Income, Fixed costs, Variable costs, Saving, Investing, Taxes.',
        },
        {
          time: '10 min',
          title: 'Banking & Credit',
          content:
            'Opening accounts abroad. Debit vs Credit. Credit scores (how they break). Key message: Credit is a tool; used badly, it follows you for years.',
        },
        {
          time: '10 min',
          title: 'Jobs & Side Hustles',
          content:
            'Reality-based. Traditional jobs vs Online work vs Side hustles. Self-employment = no safety net. Discuss: "What looks easy online but isn\'t?"',
        },
        {
          time: '10 min',
          title: 'Taxes: The ignored part',
          content:
            "Simple but serious. Income vs Payroll vs Self-employment tax. 'Missing paperwork causes more problems than missing money.'",
        },
        {
          time: '10 min',
          title: 'Investing Basics',
          content:
            'Compound growth. Retirement accounts (start early). Risk basics. Warning against get-rich-quick/crypto schemes.',
        },
        {
          time: '5 min',
          title: 'Wrap-Up Checklist',
          content:
            'Students write: One thing to set up, One thing to avoid, One question they still have.',
        },
      ],
      prep: [
        'Simple diagrams (money flow)',
        'Clear disclaimers: Not legal advice, rules vary by country',
        'Real examples (anonymised) of mistakes and wins',
      ],
      whyItWorks:
        'Treats money as a system. Avoids fear while naming risks. Gives confidence without false certainty.',
    },
  },
  {
    id: 'life',
    title: 'Running Your Own Life',
    subtitle: 'Discipline, Time, and Responsibility',
    icon: Clock,
    color: 'bg-indigo-600',
    lightColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    textColor: 'text-indigo-700',
    overview:
      "University gives you freedom fast - and very little structure. This session is about how to manage yourself when no one is checking homework, chasing attendance, or reminding you what's due. We'll look at how university actually differs from high school, how to organise your time and schedule, build effective study habits, keep your space under control, and balance work, social life, and rest. The focus is discipline, responsibility, and leadership of yourself - not perfection, just systems that keep your life from drifting off track.",
    lessonPlan: {
      goal: [
        'Understanding how uni expectations differ from school',
        'Practical systems for time & study',
        'Strategies for discipline without external enforcement',
        'Realistic approach to work-life-party balance',
      ],
      flow: [
        {
          time: '5 min',
          title: 'The Shock of Freedom',
          content:
            "Reset expectations. 'Uni is harder because no one notices when you fall behind.' Responsibility becomes invisible before it becomes serious.",
        },
        {
          time: '10 min',
          title: 'Structural Differences',
          content:
            "Fewer contact hours, more independent work. Activity: Compare high school timetable to uni schedule. 'Free time is not free if you haven't scheduled work.'",
        },
        {
          time: '15 min',
          title: 'Time & Study Habits',
          content:
            'Planning backwards. Deep vs Shallow work. Tools: One calendar, blocking time. Activity: Sketch a realistic uni week including rest and chores.',
        },
        {
          time: '10 min',
          title: 'Organisation & Environment',
          content:
            'Environment drives behavior. Clutter = mental load. Digital organization (filenames, email). Simple systems: Reset space weekly.',
        },
        {
          time: '10 min',
          title: 'Discipline & Balance',
          content:
            "Discipline ≠ Motivation. Work-life-party balance (have all 3, just not at once). Early warning signs. 'Freedom rewards structure.'",
        },
      ],
      prep: [
        'Sample uni timetable',
        'Planning template (weekly view)',
        'Honest examples of common failure points',
        'Clear tone: supportive, not preachy',
      ],
      whyItWorks:
        'Addresses real struggles. Focuses on systems, not personality. Links organization to leadership.',
    },
  },
  {
    id: 'stuff',
    title: 'Keeping Your Stuff Functional',
    buttonTitle: 'Functional Stuff',
    subtitle: 'Cleaning, Laundry, and Simple Repairs',
    icon: Wrench,
    color: 'bg-teal-600',
    lightColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-700',
    overview:
      "Living independently means taking care of your clothes, shoes, and living space - whether you like it or not. This session covers the basics everyone is expected to know but rarely gets taught: doing laundry properly, keeping clothes and shoes in good condition, handling basic cleaning, and making simple repairs so things don't fall apart or need replacing. You don't need to become an expert - just capable enough to save money, avoid stress, and keep your stuff usable and presentable.",
    lessonPlan: {
      goal: [
        'Confidence doing laundry without ruining clothes',
        'Basic cleaning routines',
        'Ability to handle simple clothing/home repairs',
        'Awareness of when to repair vs replace',
      ],
      flow: [
        {
          time: '5 min',
          title: 'Why This Matters',
          content:
            "Reframe 'basic' as 'essential'. Replacement costs money. Dirty stuff affects confidence. 'What have you ruined because you didn't know better?'",
        },
        {
          time: '15 min',
          title: 'Laundry Basics',
          content:
            'Highest value segment. Sorting (colors/fabrics). Detergent myths. Drying (avoiding shrinkage). Visual aids: Laundry symbols. Mini-activity: How to wash jeans vs hoodie.',
        },
        {
          time: '10 min',
          title: 'Cleaning Systems',
          content:
            "Functional cleaning. High impact areas (kitchen, bath). Simple routine: Daily 5-min reset vs Weekly clean. 'Clean a little, often.'",
        },
        {
          time: '10 min',
          title: 'Simple Repairs',
          content:
            'Saves real money. Buttons, small tears, loose seams. When to use a tailor. Demonstrate a basic sewing kit/repair if possible.',
        },
        {
          time: '5-10 min',
          title: 'Shoes, Bags, & Wear',
          content:
            'Cleaning/drying shoes. Protecting backpacks. Fixes for zips/straps. Key takeaway: Most damage comes from neglect, not use.',
        },
      ],
      prep: [
        'Example clothing items or images',
        'Laundry symbol chart',
        'Basic sewing kit (even just to show)',
        'Clear tone: practical, not patronising',
      ],
      whyItWorks:
        'Immediately applicable. Saves money/embarrassment. Builds quiet confidence. Optional: Make it a hands-on workshop.',
    },
  },
];

const SessionCard = ({ session, isActive, onClick }) => {
  const Icon = session.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl transition-all duration-300 mb-3 flex items-center gap-4 group ${
        isActive
          ? `${session.color} text-white shadow-lg scale-102`
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
      }`}
    >
      <div
        className={`p-2 rounded-lg ${
          isActive ? 'bg-white/20' : session.lightColor
        }`}
      >
        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : session.textColor}`} />
      </div>
      <div>
        <h3
          className={`font-bold ${isActive ? 'text-white' : 'text-gray-800'}`}
        >
          {session.buttonTitle || session.title}
        </h3>
      </div>
    </button>
  );
};

export default function AdultingSessions() {
  const [activeSession, setActiveSession] = useState(SESSIONS[0]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                SSIS Grade 12 WWW
              </h1>
              <p className="text-sm text-gray-500">
                Adulting Sessions & Teacher Guides
              </p>
            </div>
          </div>
          <div className="hidden md:block text-sm text-gray-500 italic">
            Select a session to view the lesson plan
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 xl:w-1/4 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-1">
                Available Sessions
              </h2>
              {SESSIONS.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  isActive={activeSession.id === session.id}
                  onClick={() => setActiveSession(session)}
                />
              ))}

              <div className="mt-8 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <h3 className="text-indigo-800 font-bold flex items-center gap-2 text-sm mb-2">
                  <AlertCircle className="w-4 h-4" />
                  Teacher Instruction
                </h3>
                <p className="text-indigo-700 text-xs leading-relaxed">
                  Please review these outlines and self-select the session you
                  feel most comfortable delivering. For more details see{' '}
                  <a
                    href="https://docs.google.com/document/d/1coHrDVarlxl5IMBl0rPewEz_MVqN0Xrp2iEG6og98w8/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-indigo-900 font-semibold"
                  >
                    this document
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div
                className={`p-8 ${activeSession.lightColor} border-b ${activeSession.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${activeSession.color} text-white shadow-lg`}
                  >
                    {React.createElement(activeSession.icon, { size: 32 })}
                  </div>
                  <div>
                    <h2
                      className={`text-3xl font-bold ${activeSession.textColor} mb-2`}
                    >
                      {activeSession.title}
                    </h2>
                    <p className="text-xl text-gray-700 font-medium opacity-80">
                      {activeSession.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className={`w-5 h-5 ${activeSession.textColor}`} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    Session Overview
                  </h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300 italic text-gray-700 leading-relaxed text-lg">
                  "{activeSession.overview}"
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <List className={`w-5 h-5 ${activeSession.textColor}`} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    Teacher Lesson Plan
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h4
                      className={`font-bold ${activeSession.textColor} mb-3 flex items-center gap-2`}
                    >
                      <CheckCircle className="w-5 h-5" /> Session Goals
                    </h4>
                    <ul className="space-y-2">
                      {activeSession.lessonPlan.goal.map((goal, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4
                        className={`font-bold ${activeSession.textColor} mb-3 flex items-center gap-2`}
                      >
                        <Lightbulb className="w-5 h-5" /> Why This Works
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {activeSession.lessonPlan.whyItWorks}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-gray-800 text-xs uppercase mb-2">
                        Prep Checklist
                      </h4>
                      <ul className="space-y-1">
                        {activeSession.lessonPlan.prep.slice(0, 2).map((item, i) => (
                          <li key={i} className="text-xs text-gray-500 truncate">
                            • {item}
                          </li>
                        ))}
                        {activeSession.lessonPlan.prep.length > 2 && (
                          <li className="text-xs text-gray-400 italic">
                            + {activeSession.lessonPlan.prep.length - 2} more
                            items
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" /> Structure & Flow
                </h4>
                <div className="space-y-4">
                  {activeSession.lessonPlan.flow.map((step, idx) => (
                    <div key={idx} className="group relative flex gap-4">
                      {idx !== activeSession.lessonPlan.flow.length - 1 && (
                        <div className="absolute left-[2.25rem] top-10 bottom-[-1rem] w-0.5 bg-gray-100 group-hover:bg-gray-200 transition-colors" />
                      )}

                      <div
                        className={`w-18 h-12 flex-shrink-0 rounded-lg ${activeSession.lightColor} border ${activeSession.borderColor} flex items-center justify-center text-sm font-bold ${activeSession.textColor}`}
                      >
                        {step.time}
                      </div>

                      <div className="flex-grow pb-2">
                        <h5 className="font-bold text-gray-800 text-lg">
                          {step.title}
                        </h5>
                        <p className="text-gray-600 mt-1 leading-relaxed">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <List className="w-5 h-5 text-gray-400" /> Full Teacher Prep
                    Checklist
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeSession.lessonPlan.prep.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`mt-1 w-4 h-4 rounded border ${activeSession.borderColor} bg-white flex items-center justify-center`}
                        >
                          <div
                            className={`w-2 h-2 rounded-sm ${activeSession.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
