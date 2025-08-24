export interface TheologicalConcept {
  id: string;
  name: string;
  category: 'Doctrine' | 'Sacrament' | 'Practice' | 'Philosophy' | 'History' | 'Ethics';
  description: string;
  biblicalBasis: string[];
  historicalDevelopment: string;
  denominationalViews: string[];
  relatedTerms: string[];
  color: string;
  importance: 'Essential' | 'Important' | 'Secondary';
}

export const theologicalConcepts: TheologicalConcept[] = [
  {
    id: "trinity",
    name: "Trinity",
    category: "Doctrine",
    description: "The Christian doctrine that God exists as three distinct persons (Father, Son, and Holy Spirit) in one divine being.",
    biblicalBasis: [
      "Matthew 28:19 - Baptismal formula",
      "2 Corinthians 13:14 - Trinitarian blessing",
      "John 1:1-14 - Word was God",
      "Acts 5:3-4 - Holy Spirit is God"
    ],
    historicalDevelopment: "Developed through early church councils, especially Nicaea (325) and Constantinople (381), in response to heresies like Arianism.",
    denominationalViews: [
      "Catholic/Orthodox: Three persons, one substance",
      "Protestant: Same as Catholic/Orthodox",
      "Jehovah's Witnesses: Reject Trinity",
      "Mormons: Three separate beings"
    ],
    relatedTerms: ["Homoousios", "Hypostasis", "Perichoresis", "Economic Trinity"],
    color: "#3498db",
    importance: "Essential"
  },
  {
    id: "incarnation",
    name: "Incarnation",
    category: "Doctrine",
    description: "The belief that Jesus Christ, the Son of God, took on human flesh and became fully human while remaining fully divine.",
    biblicalBasis: [
      "John 1:14 - Word became flesh",
      "Philippians 2:5-11 - Kenosis",
      "Colossians 2:9 - Fullness of deity",
      "Hebrews 2:14-18 - Shared humanity"
    ],
    historicalDevelopment: "Defined at Council of Chalcedon (451) as two natures in one person, responding to Nestorianism and Monophysitism.",
    denominationalViews: [
      "Orthodox: Two natures united without confusion",
      "Catholic: Same as Orthodox",
      "Protestant: Generally same as Orthodox",
      "Jehovah's Witnesses: Jesus is Michael the Archangel"
    ],
    relatedTerms: ["Hypostatic Union", "Kenosis", "Theotokos", "Christology"],
    color: "#e74c3c",
    importance: "Essential"
  },
  {
    id: "salvation",
    name: "Salvation",
    category: "Doctrine",
    description: "The deliverance from sin and its consequences, bringing reconciliation with God and eternal life.",
    biblicalBasis: [
      "John 3:16 - God's love and gift",
      "Ephesians 2:8-9 - Grace through faith",
      "Romans 6:23 - Wages of sin",
      "Acts 4:12 - No other name"
    ],
    historicalDevelopment: "Debated throughout church history, with different emphases on grace vs. works, predestination vs. free will.",
    denominationalViews: [
      "Catholic: Grace + works + sacraments",
      "Protestant: Grace alone through faith",
      "Orthodox: Theosis (divinization)",
      "Arminian: Conditional election"
    ],
    relatedTerms: ["Justification", "Sanctification", "Regeneration", "Atonement"],
    color: "#2ecc71",
    importance: "Essential"
  },
  {
    id: "baptism",
    name: "Baptism",
    category: "Sacrament",
    description: "A Christian sacrament involving water, symbolizing purification, initiation into the church, and identification with Christ's death and resurrection.",
    biblicalBasis: [
      "Matthew 28:19 - Great Commission",
      "Acts 2:38 - Repent and be baptized",
      "Romans 6:3-4 - Death and resurrection",
      "1 Peter 3:21 - Pledge of good conscience"
    ],
    historicalDevelopment: "Practiced from the early church, with debates over mode (immersion vs. sprinkling) and timing (infant vs. believer's).",
    denominationalViews: [
      "Catholic: Infant baptism, regeneration",
      "Orthodox: Infant baptism, regeneration",
      "Baptist: Believer's baptism only",
      "Lutheran: Infant baptism, regeneration"
    ],
    relatedTerms: ["Regeneration", "Covenant", "Circumcision", "Sacrament"],
    color: "#9b59b6",
    importance: "Important"
  },
  {
    id: "eucharist",
    name: "Eucharist (Communion)",
    category: "Sacrament",
    description: "The Christian sacrament commemorating Christ's Last Supper, involving bread and wine as symbols or actual presence of Christ's body and blood.",
    biblicalBasis: [
      "Matthew 26:26-28 - Last Supper",
      "1 Corinthians 11:23-26 - Institution",
      "John 6:53-56 - Bread of life",
      "Luke 22:19-20 - Do this in remembrance"
    ],
    historicalDevelopment: "Practiced from the early church, with theological development around the nature of Christ's presence.",
    denominationalViews: [
      "Catholic: Transubstantiation",
      "Orthodox: Real presence",
      "Lutheran: Consubstantiation",
      "Reformed: Spiritual presence"
    ],
    relatedTerms: ["Transubstantiation", "Real Presence", "Memorial", "Sacrament"],
    color: "#f39c12",
    importance: "Important"
  },
  {
    id: "justification",
    name: "Justification",
    category: "Doctrine",
    description: "The act of God declaring a sinner righteous through faith in Christ, not based on personal merit or works.",
    biblicalBasis: [
      "Romans 3:23-24 - Justified by grace",
      "Galatians 2:16 - Not by works of law",
      "Romans 5:1 - Peace with God",
      "James 2:24 - Faith and works"
    ],
    historicalDevelopment: "Central to the Protestant Reformation, with Luther emphasizing 'justification by faith alone' against Catholic teaching.",
    denominationalViews: [
      "Protestant: Forensic justification",
      "Catholic: Infused righteousness",
      "Orthodox: Theosis process",
      "Arminian: Conditional justification"
    ],
    relatedTerms: ["Imputed Righteousness", "Forensic", "Sanctification", "Grace"],
    color: "#1abc9c",
    importance: "Essential"
  },
  {
    id: "predestination",
    name: "Predestination",
    category: "Doctrine",
    description: "The belief that God has predetermined who will be saved, based on His sovereign will and foreknowledge.",
    biblicalBasis: [
      "Romans 8:29-30 - Foreknown and predestined",
      "Ephesians 1:4-5 - Chosen before foundation",
      "Romans 9:11-13 - Jacob and Esau",
      "John 6:44 - Drawn by Father"
    ],
    historicalDevelopment: "Debated since Augustine, with Calvin emphasizing double predestination and Arminius emphasizing conditional election.",
    denominationalViews: [
      "Calvinist: Unconditional election",
      "Arminian: Conditional election",
      "Catholic: Middle knowledge",
      "Orthodox: Synergy"
    ],
    relatedTerms: ["Election", "Free Will", "Sovereignty", "Grace"],
    color: "#34495e",
    importance: "Important"
  },
  {
    id: "church",
    name: "Church (Ecclesiology)",
    category: "Doctrine",
    description: "The community of believers, both local and universal, considered the body of Christ and the people of God.",
    biblicalBasis: [
      "Matthew 16:18 - Rock and church",
      "1 Corinthians 12:27 - Body of Christ",
      "Ephesians 5:25-27 - Bride of Christ",
      "Acts 2:42-47 - Early church"
    ],
    historicalDevelopment: "Developed from Jewish synagogue model, with various structures emerging (episcopal, presbyterian, congregational).",
    denominationalViews: [
      "Catholic: Visible, hierarchical",
      "Orthodox: Visible, conciliar",
      "Protestant: Invisible and visible",
      "Baptist: Local congregation"
    ],
    relatedTerms: ["Ecclesiology", "Denomination", "Congregation", "Body of Christ"],
    color: "#95a5a6",
    importance: "Important"
  },
  {
    id: "eschatology",
    name: "Eschatology",
    category: "Doctrine",
    description: "The study of last things, including death, judgment, heaven, hell, and the end of the world.",
    biblicalBasis: [
      "Revelation 20-22 - End times",
      "1 Thessalonians 4:13-18 - Rapture",
      "Matthew 25:31-46 - Final judgment",
      "2 Peter 3:10-13 - New heavens and earth"
    ],
    historicalDevelopment: "Various views developed: premillennial, postmillennial, amillennial, with different understandings of the millennium.",
    denominationalViews: [
      "Dispensationalist: Premillennial",
      "Reformed: Amillennial",
      "Catholic: Amillennial",
      "Orthodox: Amillennial"
    ],
    relatedTerms: ["Millennium", "Rapture", "Tribulation", "Second Coming"],
    color: "#e67e22",
    importance: "Secondary"
  },
  {
    id: "sin",
    name: "Sin",
    category: "Doctrine",
    description: "Any thought, word, or action that violates God's law and separates humanity from God.",
    biblicalBasis: [
      "Romans 3:23 - All have sinned",
      "1 John 3:4 - Lawlessness",
      "James 4:17 - Sins of omission",
      "Psalm 51:5 - Born in sin"
    ],
    historicalDevelopment: "Understood as both personal acts and inherited condition (original sin), with different views on human nature.",
    denominationalViews: [
      "Catholic: Original sin + personal sin",
      "Protestant: Total depravity",
      "Orthodox: Ancestral sin",
      "Pelagian: No original sin"
    ],
    relatedTerms: ["Original Sin", "Total Depravity", "Depravity", "Transgression"],
    color: "#8e44ad",
    importance: "Essential"
  },
  {
    id: "grace",
    name: "Grace",
    category: "Doctrine",
    description: "God's unmerited favor and love toward humanity, especially in providing salvation through Jesus Christ.",
    biblicalBasis: [
      "Ephesians 2:8-9 - Saved by grace",
      "John 1:16 - Grace upon grace",
      "Romans 5:15 - Grace abounds",
      "2 Corinthians 12:9 - Grace sufficient"
    ],
    historicalDevelopment: "Emphasized by Augustine against Pelagianism, central to Protestant theology, with different views on prevenient grace.",
    denominationalViews: [
      "Protestant: Sola gratia",
      "Catholic: Grace + cooperation",
      "Orthodox: Synergy",
      "Arminian: Prevenient grace"
    ],
    relatedTerms: ["Sola Gratia", "Prevenient Grace", "Common Grace", "Saving Grace"],
    color: "#f1c40f",
    importance: "Essential"
  },
  {
    id: "faith",
    name: "Faith",
    category: "Doctrine",
    description: "Trust and confidence in God and His promises, especially regarding salvation through Jesus Christ.",
    biblicalBasis: [
      "Hebrews 11:1 - Assurance of things hoped for",
      "Romans 10:17 - Faith comes by hearing",
      "James 2:14-26 - Faith and works",
      "Ephesians 2:8 - Saved through faith"
    ],
    historicalDevelopment: "Debated relationship with works, with Protestant emphasis on 'faith alone' and Catholic emphasis on faith working through love.",
    denominationalViews: [
      "Protestant: Sola fide",
      "Catholic: Faith + works",
      "Orthodox: Faith as trust",
      "Arminian: Faith as response"
    ],
    relatedTerms: ["Sola Fide", "Works", "Trust", "Belief"],
    color: "#16a085",
    importance: "Essential"
  },
  {
    id: "scripture",
    name: "Scripture (Bible)",
    category: "Doctrine",
    description: "The sacred writings of Christianity, considered inspired by God and authoritative for faith and practice.",
    biblicalBasis: [
      "2 Timothy 3:16 - All Scripture inspired",
      "2 Peter 1:20-21 - Prophecy of Scripture",
      "Psalm 119:105 - Lamp to feet",
      "John 17:17 - Word is truth"
    ],
    historicalDevelopment: "Canon developed over centuries, with Protestant Reformation emphasizing 'Scripture alone' as authority.",
    denominationalViews: [
      "Protestant: Sola scriptura",
      "Catholic: Scripture + tradition",
      "Orthodox: Scripture + tradition",
      "Mormon: Additional scripture"
    ],
    relatedTerms: ["Canon", "Inspiration", "Authority", "Revelation"],
    color: "#27ae60",
    importance: "Essential"
  },
  {
    id: "prayer",
    name: "Prayer",
    category: "Practice",
    description: "Communication with God, including adoration, confession, thanksgiving, and supplication.",
    biblicalBasis: [
      "Matthew 6:9-13 - Lord's Prayer",
      "1 Thessalonians 5:17 - Pray continually",
      "Philippians 4:6 - Prayer and petition",
      "James 5:16 - Prayer of righteous"
    ],
    historicalDevelopment: "Practiced from earliest Christianity, with various forms developing: liturgical, contemplative, charismatic, and personal.",
    denominationalViews: [
      "Catholic: Structured prayers",
      "Orthodox: Liturgical prayers",
      "Protestant: Personal prayer",
      "Charismatic: Spirit-led prayer"
    ],
    relatedTerms: ["Intercession", "Contemplation", "Meditation", "Worship"],
    color: "#d35400",
    importance: "Important"
  },
  {
    id: "worship",
    name: "Worship",
    category: "Practice",
    description: "The act of honoring and praising God through various forms of expression, including music, prayer, and ritual.",
    biblicalBasis: [
      "John 4:24 - Worship in spirit and truth",
      "Psalm 95:6 - Come let us worship",
      "Revelation 4:11 - Worthy are you",
      "Romans 12:1 - Living sacrifice"
    ],
    historicalDevelopment: "Evolved from Jewish temple worship to various Christian forms: liturgical, contemporary, charismatic, and traditional.",
    denominationalViews: [
      "Catholic: Liturgical worship",
      "Orthodox: Divine liturgy",
      "Protestant: Various styles",
      "Charismatic: Contemporary worship"
    ],
    relatedTerms: ["Liturgy", "Praise", "Adoration", "Service"],
    color: "#c0392b",
    importance: "Important"
  },
  {
    id: "mission",
    name: "Mission (Evangelism)",
    category: "Practice",
    description: "The calling to share the gospel of Jesus Christ with others and make disciples of all nations.",
    biblicalBasis: [
      "Matthew 28:19-20 - Great Commission",
      "Acts 1:8 - Witnesses to ends of earth",
      "Romans 10:14-15 - How will they hear",
      "2 Corinthians 5:20 - Ambassadors for Christ"
    ],
    historicalDevelopment: "From early church expansion to modern missionary movements, with various approaches: evangelism, social action, church planting.",
    denominationalViews: [
      "Protestant: Personal evangelism",
      "Catholic: Social justice + evangelism",
      "Orthodox: Liturgical witness",
      "Pentecostal: Power evangelism"
    ],
    relatedTerms: ["Evangelism", "Discipleship", "Witness", "Outreach"],
    color: "#8e44ad",
    importance: "Important"
  }
];
