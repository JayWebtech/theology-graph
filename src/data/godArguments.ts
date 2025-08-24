export interface GodArgument {
  id: string;
  name: string;
  description: string;
  keyPoints: string[];
  proponents: string[];
  criticisms: string[];
  historicalContext: string;
  significance: string;
  color: string;
  icon: string;
  category: 'Classical' | 'Modern' | 'Personal' | 'Philosophical';
  examples: string[];
}

export const godArguments: GodArgument[] = [
  {
    id: "cosmological",
    name: "Cosmological Argument",
    description: "The argument that everything that begins to exist has a cause, and since the universe began to exist, it must have a cause outside itself.",
    keyPoints: [
      "Everything that begins to exist has a cause",
      "The universe began to exist (Big Bang)",
      "Therefore, the universe has a cause",
      "This cause must be God"
    ],
    proponents: [
      "Thomas Aquinas",
      "William Lane Craig",
      "Al-Ghazali",
      "Gottfried Leibniz"
    ],
    criticisms: [
      "What caused God?",
      "Infinite regress problem",
      "Quantum mechanics suggests uncaused events",
      "The universe might be eternal"
    ],
    historicalContext: "Developed by Islamic and Christian philosophers, most famously by Thomas Aquinas in his 'Five Ways'.",
    significance: "One of the most influential arguments for God's existence, appealing to the principle of causality.",
    category: "Classical",
    color: "#8b5cf6",
    icon: "🌌",
    examples: [
      "A building requires a builder - the universe requires a creator",
      "A painting needs a painter - the cosmos needs a cosmic artist",
      "A watch implies a watchmaker - the universe implies a universe-maker",
      "A book requires an author - the laws of nature require a lawgiver",
      "A computer program needs a programmer - the universe's programming needs a programmer"
    ]
  },
  {
    id: "moral",
    name: "Moral Argument",
    description: "The argument that objective moral values and duties exist, and if they do, God must exist as their source.",
    keyPoints: [
      "Objective moral values exist",
      "If God does not exist, objective moral values do not exist",
      "Objective moral values do exist",
      "Therefore, God exists"
    ],
    proponents: [
      "C.S. Lewis",
      "William Lane Craig",
      "Immanuel Kant",
      "Alvin Plantinga"
    ],
    criticisms: [
      "Moral values might be subjective",
      "Evolution can explain moral instincts",
      "Secular ethics can provide objective morality",
      "Euthyphro dilemma"
    ],
    historicalContext: "Popularized by C.S. Lewis in 'Mere Christianity' and developed by modern philosophers.",
    significance: "Appeals to our intuitive sense of right and wrong as evidence for God.",
    category: "Modern",
    color: "#fbbf24",
    icon: "❤️",
    examples: [
      "The Holocaust was objectively wrong, not just culturally relative",
      "Child abuse is always wrong, regardless of cultural practices",
      "Rape is objectively evil, not just socially unacceptable",
      "Torturing innocent people for fun is always wrong",
      "Loving your neighbor is objectively good, not just a preference"
    ]
  },
  {
    id: "teleological",
    name: "Teleological Argument",
    description: "The argument from design, suggesting that the complexity and order in the universe point to an intelligent designer.",
    keyPoints: [
      "The universe exhibits order and complexity",
      "This complexity suggests intelligent design",
      "The best explanation is a designer",
      "This designer is God"
    ],
    proponents: [
      "William Paley",
      "Thomas Aquinas",
      "Isaac Newton",
      "Michael Behe"
    ],
    criticisms: [
      "Natural selection explains complexity",
      "Multiverse theory",
      "Anthropic principle",
      "Design flaws in nature"
    ],
    historicalContext: "Famously presented by William Paley with his watchmaker analogy in the 18th century.",
    significance: "Appeals to the apparent design and fine-tuning of the universe.",
    category: "Classical",
    color: "#10b981",
    icon: "🎯",
    examples: [
      "The fine-tuning of physical constants (gravity, electromagnetism, etc.)",
      "The complexity of the human eye - like a sophisticated camera",
      "DNA's information-rich structure - like a complex computer code",
      "The precise conditions needed for life on Earth",
      "The mathematical elegance of the laws of physics"
    ]
  },
  {
    id: "ontological",
    name: "Ontological Argument",
    description: "The argument that God exists by definition, as the greatest conceivable being must exist in reality.",
    keyPoints: [
      "God is the greatest conceivable being",
      "A being that exists is greater than one that doesn't",
      "If God doesn't exist, we can conceive of a greater being",
      "Therefore, God must exist"
    ],
    proponents: [
      "Anselm of Canterbury",
      "René Descartes",
      "Alvin Plantinga",
      "Kurt Gödel"
    ],
    criticisms: [
      "Existence is not a predicate",
      "Circular reasoning",
      "Conceptual vs. actual existence",
      "Greatest conceivable being is incoherent"
    ],
    historicalContext: "First formulated by Anselm of Canterbury in the 11th century.",
    significance: "A purely logical argument that attempts to prove God's existence through reason alone.",
    category: "Philosophical",
    color: "#f97316",
    icon: "🔴",
    examples: [
      "A perfect island doesn't exist just because we conceive it",
      "A unicorn doesn't exist just because we imagine it",
      "The concept of 'the greatest pizza' doesn't make it real",
      "Imagining 'the most beautiful sunset' doesn't create it",
      "The idea of 'perfect justice' doesn't make it exist in reality"
    ]
  },
  {
    id: "mind",
    name: "Mind Argument",
    description: "The argument that consciousness and the mind cannot be explained by purely physical processes.",
    keyPoints: [
      "Consciousness exists",
      "Consciousness cannot be reduced to physical processes",
      "The best explanation is a non-physical mind",
      "This suggests a spiritual reality"
    ],
    proponents: [
      "John Searle",
      "David Chalmers",
      "Thomas Nagel",
      "Alvin Plantinga"
    ],
    criticisms: [
      "Emergent properties",
      "Neuroscience can explain consciousness",
      "Dualism has problems",
      "Not necessarily God"
    ],
    historicalContext: "Developed in response to materialist explanations of consciousness.",
    significance: "Suggests that reality includes non-physical aspects that point beyond materialism.",
    category: "Modern",
    color: "#3b82f6",
    icon: "☁️",
    examples: [
      "The 'hard problem' of consciousness - why do we experience qualia?",
      "Subjective experience of pain - not just neural firing",
      "The feeling of love - cannot be reduced to brain chemistry",
      "Awareness of self - the 'I' that experiences",
      "Free will and moral responsibility - require non-physical mind"
    ]
  },
  {
    id: "personal-experience",
    name: "Personal Experience",
    description: "The argument that personal religious experiences provide direct evidence of God's existence.",
    keyPoints: [
      "Many people have religious experiences",
      "These experiences seem real to those who have them",
      "They often lead to life transformation",
      "They provide direct evidence of God"
    ],
    proponents: [
      "William James",
      "Alvin Plantinga",
      "Richard Swinburne",
      "John Hick"
    ],
    criticisms: [
      "Subjective nature",
      "Psychological explanations",
      "Cultural conditioning",
      "Cannot be verified"
    ],
    historicalContext: "Studied by William James in 'The Varieties of Religious Experience'.",
    significance: "Appeals to the most direct form of evidence - personal encounter with the divine.",
    category: "Personal",
    color: "#ec4899",
    icon: "💭",
    examples: [
      "Near-death experiences with encounters of divine beings",
      "Mystical experiences of union with God",
      "Answered prayers and miraculous healings",
      "Sudden conversions and spiritual awakenings",
      "Sense of God's presence during worship or prayer"
    ]
  },
  {
    id: "pascals-wager",
    name: "Pascal's Wager",
    description: "The pragmatic argument that it's better to believe in God than not, given the potential consequences.",
    keyPoints: [
      "If God exists and you believe, infinite gain",
      "If God exists and you don't believe, infinite loss",
      "If God doesn't exist, finite loss either way",
      "Therefore, believe in God"
    ],
    proponents: [
      "Blaise Pascal",
      "William James",
      "Jordan Peterson",
      "Peter Kreeft"
    ],
    criticisms: [
      "Which God to believe in?",
      "Cannot choose to believe",
      "Moral objections",
      "Not a proof of God"
    ],
    historicalContext: "Formulated by Blaise Pascal in the 17th century as a practical argument.",
    significance: "A pragmatic approach that focuses on the consequences of belief rather than proof.",
    category: "Philosophical",
    color: "#ef4444",
    icon: "⚖️",
    examples: [
      "Insurance policy - better safe than sorry",
      "Lottery ticket - small cost, potentially huge reward",
      "Fire alarm - false alarm is better than no alarm",
      "Seatbelt - wearing it costs little, not wearing it could cost everything",
      "Vaccination - small risk for great protection"
    ]
  },
  {
    id: "transcendental",
    name: "Transcendental Argument",
    description: "The argument that logic, reason, and knowledge presuppose God's existence.",
    keyPoints: [
      "Logic and reason exist",
      "These require a transcendent foundation",
      "Only God can provide this foundation",
      "Therefore, God exists"
    ],
    proponents: [
      "Cornelius Van Til",
      "Greg Bahnsen",
      "John Frame",
      "James Anderson"
    ],
    criticisms: [
      "Circular reasoning",
      "Logic might be conventional",
      "Naturalistic explanations",
      "Presuppositionalism is problematic"
    ],
    historicalContext: "Developed by Cornelius Van Til and the presuppositionalist school.",
    significance: "Attempts to show that even the tools of reasoning require God.",
    category: "Philosophical",
    color: "#8b5cf6",
    icon: "✨",
    examples: [
      "The laws of logic (identity, non-contradiction, excluded middle)",
      "Mathematical truths (2+2=4 is always true)",
      "Moral reasoning (good vs. evil)",
      "Scientific method (assumes order and intelligibility)",
      "Language and communication (shared meaning)"
    ]
  },
  {
    id: "math",
    name: "Mathematical Argument",
    description: "The argument that mathematical truths and the intelligibility of the universe point to a mathematical mind.",
    keyPoints: [
      "Mathematics is real and objective",
      "The universe is mathematical",
      "This suggests a mathematical mind",
      "This mind is God"
    ],
    proponents: [
      "Roger Penrose",
      "Eugene Wigner",
      "Max Tegmark",
      "John Polkinghorne"
    ],
    criticisms: [
      "Mathematics is human invention",
      "Universe might not be mathematical",
      "Naturalistic explanations",
      "Not necessarily God"
    ],
    historicalContext: "Developed in response to the 'unreasonable effectiveness of mathematics'.",
    significance: "Appeals to the deep connection between mathematics and physical reality.",
    category: "Modern",
    color: "#3b82f6",
    icon: "🔢",
    examples: [
      "The Fibonacci sequence appears in nature (shells, flowers)",
      "Pi (π) describes circles in both math and reality",
      "Euler's number (e) appears in natural growth patterns",
      "The golden ratio (φ) appears in art, architecture, and nature",
      "Quantum mechanics uses complex numbers to describe reality"
    ]
  },
  {
    id: "evidential",
    name: "Evidential Argument",
    description: "The argument that various pieces of evidence collectively point to God's existence.",
    keyPoints: [
      "Multiple lines of evidence exist",
      "Each provides some probability",
      "Combined, they make God likely",
      "Therefore, God probably exists"
    ],
    proponents: [
      "Richard Swinburne",
      "William Lane Craig",
      "Alvin Plantinga",
      "John Lennox"
    ],
    criticisms: [
      "Evidence is ambiguous",
      "Alternative explanations",
      "Confirmation bias",
      "Not conclusive"
    ],
    historicalContext: "Developed as a cumulative case approach to theistic arguments.",
    significance: "Combines multiple arguments to build a cumulative case for God.",
    category: "Modern",
    color: "#fbbf24",
    icon: "✝️",
    examples: [
      "The resurrection of Jesus Christ",
      "Biblical prophecies fulfilled",
      "Miraculous healings and answered prayers",
      "The rapid growth of Christianity despite persecution",
      "The transformation of lives through faith"
    ]
  }
];
