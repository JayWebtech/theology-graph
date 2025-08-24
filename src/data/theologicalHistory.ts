export interface Denomination {
  id: string;
  name: string;
  year: number;
  parentId?: string;
  description: string;
  keyBeliefs: string[];
  reasonsForSeparation: string[];
  historicalContext: string;
  geographicOrigin: string;
  currentFollowers?: string;
  color: string;
  size: number;
  category: 'Ancient' | 'Catholic' | 'Orthodox' | 'Protestant' | 'Modern';
  keyFigures?: string[];
  notableEvents?: string[];
}

export const theologicalHistory: Denomination[] = [
  {
    id: "early-church",
    name: "Early Church",
    year: 33,
    description: "The original Christian community following Jesus Christ's resurrection and the teachings of the Apostles.",
    keyBeliefs: [
      "Jesus Christ as the Son of God and Savior",
      "The Holy Trinity (Father, Son, Holy Spirit)",
      "Salvation through faith in Christ",
      "The authority of Scripture",
      "Baptism and the Lord's Supper"
    ],
    reasonsForSeparation: [],
    historicalContext: "Founded after Jesus' resurrection and the coming of the Holy Spirit at Pentecost. The early church spread throughout the Roman Empire despite persecution.",
    geographicOrigin: "Jerusalem, spreading to Antioch, Rome, and beyond",
    category: "Ancient",
    keyFigures: ["Jesus Christ", "Peter", "Paul", "John"],
    notableEvents: ["Pentecost", "Council of Jerusalem", "Martyrdom of Stephen"],
    color: "#1f77b4",
    size: 80
  },
  {
    id: "catholic-orthodox",
    name: "Catholic-Orthodox Church",
    year: 1054,
    parentId: "early-church",
    description: "The unified church that existed before the Great Schism of 1054, maintaining apostolic succession and sacramental theology.",
    keyBeliefs: [
      "Apostolic succession",
      "Seven sacraments",
      "Veneration of saints and icons",
      "The real presence of Christ in the Eucharist",
      "Tradition alongside Scripture"
    ],
    reasonsForSeparation: ["Theological disputes over the Filioque clause", "Political tensions between Rome and Constantinople", "Different approaches to church authority"],
    historicalContext: "The church had been growing increasingly divided over theological and political issues. The final break came in 1054 when papal legates excommunicated the Patriarch of Constantinople.",
    geographicOrigin: "Rome and Constantinople",
    category: "Ancient",
    keyFigures: ["Pope Leo IX", "Patriarch Michael I"],
    notableEvents: ["Great Schism of 1054", "Mutual excommunications"],
    color: "#ff7f0e",
    size: 70
  },
  {
    id: "roman-catholic",
    name: "Roman Catholic Church",
    year: 1054,
    parentId: "catholic-orthodox",
    description: "The largest Christian denomination, centered in Rome with the Pope as its spiritual leader.",
    keyBeliefs: [
      "Papal infallibility",
      "Immaculate Conception of Mary",
      "Purgatory",
      "Transubstantiation",
      "Seven sacraments"
    ],
    reasonsForSeparation: ["Dispute over papal authority", "The Filioque controversy", "Cultural and political differences"],
    historicalContext: "After the Great Schism, the Western church developed distinct doctrines and practices, including the development of papal supremacy.",
    geographicOrigin: "Rome, Italy",
    currentFollowers: "1.3 billion",
    category: "Catholic",
    keyFigures: ["Pope Francis", "Pope John Paul II", "Thomas Aquinas"],
    notableEvents: ["Vatican II", "Canonization of saints", "Papal encyclicals"],
    color: "#d62728",
    size: 75
  },
  {
    id: "eastern-orthodox",
    name: "Eastern Orthodox Church",
    year: 1054,
    parentId: "catholic-orthodox",
    description: "The second-largest Christian denomination, maintaining the traditions of the early church in the East.",
    keyBeliefs: [
      "Conciliar authority",
      "Theosis (divinization)",
      "Icon veneration",
      "Mystical theology",
      "Divine liturgy"
    ],
    reasonsForSeparation: ["Rejection of papal supremacy", "The Filioque controversy", "Different theological emphases"],
    historicalContext: "The Eastern church maintained its traditional structure with multiple patriarchates and emphasis on conciliar decision-making.",
    geographicOrigin: "Constantinople (Istanbul)",
    currentFollowers: "260 million",
    category: "Orthodox",
    keyFigures: ["Patriarch Bartholomew", "St. John Chrysostom", "St. Basil the Great"],
    notableEvents: ["Fall of Constantinople", "Orthodox councils", "Iconoclasm"],
    color: "#9467bd",
    size: 65
  },
  {
    id: "protestant-reformation",
    name: "Protestant Reformation",
    year: 1517,
    parentId: "roman-catholic",
    description: "A major religious movement that challenged the authority and practices of the Roman Catholic Church.",
    keyBeliefs: [
      "Sola Scriptura (Scripture alone)",
      "Sola Fide (Faith alone)",
      "Sola Gratia (Grace alone)",
      "Priesthood of all believers",
      "Justification by faith"
    ],
    reasonsForSeparation: ["Corruption in the Catholic Church", "Disagreement over indulgences", "Theological differences about salvation", "Desire for church reform"],
    historicalContext: "Martin Luther's 95 Theses in 1517 sparked a movement that would forever change Christianity. The printing press helped spread reform ideas rapidly.",
    geographicOrigin: "Wittenberg, Germany",
    category: "Protestant",
    keyFigures: ["Martin Luther", "John Calvin", "Ulrich Zwingli"],
    notableEvents: ["95 Theses", "Diet of Worms", "Peace of Augsburg"],
    color: "#8c564b",
    size: 60
  },
  {
    id: "lutheranism",
    name: "Lutheranism",
    year: 1521,
    parentId: "protestant-reformation",
    description: "The first major Protestant denomination, founded on Martin Luther's teachings and the Augsburg Confession.",
    keyBeliefs: [
      "Justification by faith alone",
      "Law and Gospel distinction",
      "Real presence in the Eucharist",
      "Two sacraments (Baptism and Communion)",
      "Vocation and calling"
    ],
    reasonsForSeparation: ["Luther's excommunication from the Catholic Church", "Rejection of Catholic sacraments", "Different understanding of salvation"],
    historicalContext: "After Luther's excommunication, his followers organized into what became the Lutheran Church, formalized in the Augsburg Confession of 1530.",
    geographicOrigin: "Wittenberg, Germany",
    currentFollowers: "75 million",
    category: "Protestant",
    keyFigures: ["Martin Luther", "Philip Melanchthon", "Dietrich Bonhoeffer"],
    notableEvents: ["Augsburg Confession", "Formula of Concord", "Lutheran World Federation"],
    color: "#e377c2",
    size: 55
  },
  {
    id: "calvinism",
    name: "Calvinism/Reformed",
    year: 1536,
    parentId: "protestant-reformation",
    description: "A Protestant tradition emphasizing God's sovereignty and predestination, based on John Calvin's teachings.",
    keyBeliefs: [
      "Total depravity",
      "Unconditional election",
      "Limited atonement",
      "Irresistible grace",
      "Perseverance of the saints (TULIP)"
    ],
    reasonsForSeparation: ["Different understanding of predestination", "More systematic theology", "Different church governance"],
    historicalContext: "Calvin's Institutes of the Christian Religion (1536) provided a systematic foundation for Reformed theology that spread throughout Europe.",
    geographicOrigin: "Geneva, Switzerland",
    currentFollowers: "80 million",
    category: "Protestant",
    keyFigures: ["John Calvin", "Theodore Beza", "Jonathan Edwards"],
    notableEvents: ["Institutes of the Christian Religion", "Synod of Dort", "Westminster Confession"],
    color: "#7f7f7f",
    size: 50
  },
  {
    id: "anglicanism",
    name: "Anglicanism",
    year: 1534,
    parentId: "protestant-reformation",
    description: "The Church of England and its worldwide communion, combining Catholic and Protestant elements.",
    keyBeliefs: [
      "Via media (middle way)",
      "Book of Common Prayer",
      "Episcopal governance",
      "Three-fold ministry",
      "Scripture, tradition, and reason"
    ],
    reasonsForSeparation: ["Henry VIII's desire for divorce", "Rejection of papal authority", "National church independence"],
    historicalContext: "King Henry VIII's break with Rome over his divorce from Catherine of Aragon led to the establishment of the Church of England.",
    geographicOrigin: "England",
    currentFollowers: "85 million",
    category: "Protestant",
    keyFigures: ["Henry VIII", "Thomas Cranmer", "Archbishop of Canterbury"],
    notableEvents: ["Act of Supremacy", "Book of Common Prayer", "Lambeth Conference"],
    color: "#bcbd22",
    size: 60
  },
  {
    id: "anabaptism",
    name: "Anabaptism",
    year: 1525,
    parentId: "protestant-reformation",
    description: "A radical Protestant movement emphasizing adult baptism, pacifism, and separation from the state.",
    keyBeliefs: [
      "Adult baptism only",
      "Separation of church and state",
      "Pacifism and nonviolence",
      "Simple living",
      "Community of believers"
    ],
    reasonsForSeparation: ["Rejection of infant baptism", "More radical reform", "Different view of church-state relations"],
    historicalContext: "The Anabaptist movement began in Zurich when Conrad Grebel baptized adults, rejecting the practice of infant baptism.",
    geographicOrigin: "Zurich, Switzerland",
    currentFollowers: "2 million",
    category: "Protestant",
    keyFigures: ["Conrad Grebel", "Menno Simons", "Jakob Ammann"],
    notableEvents: ["Schleitheim Confession", "Mennonite migration", "Amish separation"],
    color: "#17becf",
    size: 35
  },
  {
    id: "baptist",
    name: "Baptist",
    year: 1609,
    parentId: "anabaptism",
    description: "A Protestant denomination emphasizing believer's baptism, congregational governance, and religious freedom.",
    keyBeliefs: [
      "Believer's baptism by immersion",
      "Soul liberty",
      "Congregational governance",
      "Separation of church and state",
      "Priesthood of all believers"
    ],
    reasonsForSeparation: ["Different baptism practices", "Emphasis on religious freedom", "Congregational autonomy"],
    historicalContext: "John Smyth founded the first Baptist church in Amsterdam, emphasizing believer's baptism and religious liberty.",
    geographicOrigin: "Amsterdam, Netherlands",
    currentFollowers: "100 million",
    category: "Protestant",
    keyFigures: ["John Smyth", "Roger Williams", "Billy Graham"],
    notableEvents: ["First Baptist Church", "Rhode Island colony", "Southern Baptist Convention"],
    color: "#ff9896",
    size: 65
  },
  {
    id: "methodism",
    name: "Methodism",
    year: 1739,
    parentId: "anglicanism",
    description: "A Protestant denomination emphasizing personal holiness, social justice, and the possibility of Christian perfection.",
    keyBeliefs: [
      "Wesleyan quadrilateral",
      "Christian perfection",
      "Social holiness",
      "Prevenient grace",
      "Arminian theology"
    ],
    reasonsForSeparation: ["Different emphasis on personal holiness", "Field preaching", "Methodical approach to faith"],
    historicalContext: "John Wesley's field preaching and emphasis on methodical spiritual practices led to the formation of Methodist societies.",
    geographicOrigin: "England",
    currentFollowers: "80 million",
    category: "Protestant",
    keyFigures: ["John Wesley", "Charles Wesley", "Francis Asbury"],
    notableEvents: ["Aldersgate experience", "Methodist societies", "Circuit riders"],
    color: "#98df8a",
    size: 55
  },
  {
    id: "pentecostalism",
    name: "Pentecostalism",
    year: 1906,
    parentId: "methodism",
    description: "A Protestant movement emphasizing the gifts of the Holy Spirit, particularly speaking in tongues and divine healing.",
    keyBeliefs: [
      "Baptism in the Holy Spirit",
      "Speaking in tongues",
      "Divine healing",
      "Spiritual gifts",
      "Eschatological urgency"
    ],
    reasonsForSeparation: ["Emphasis on spiritual gifts", "Different worship style", "Pentecostal experience"],
    historicalContext: "The Azusa Street Revival in Los Angeles, led by William Seymour, marked the beginning of the modern Pentecostal movement.",
    geographicOrigin: "Los Angeles, California",
    currentFollowers: "280 million",
    category: "Modern",
    keyFigures: ["William Seymour", "Charles Parham", "Aimee Semple McPherson"],
    notableEvents: ["Azusa Street Revival", "Pentecostal denominations", "Charismatic renewal"],
    color: "#ffbb78",
    size: 70
  },
  {
    id: "evangelicalism",
    name: "Evangelicalism",
    year: 1940,
    parentId: "protestant-reformation",
    description: "A trans-denominational movement emphasizing personal conversion, biblical authority, and evangelism.",
    keyBeliefs: [
      "Personal conversion experience",
      "Biblical authority",
      "Evangelism and missions",
      "Cross of Christ",
      "Activist faith"
    ],
    reasonsForSeparation: ["Emphasis on personal faith", "Cross-denominational cooperation", "Evangelical distinctives"],
    historicalContext: "The National Association of Evangelicals was founded in 1942, bringing together various Protestant groups around shared evangelical principles.",
    geographicOrigin: "United States",
    currentFollowers: "600 million",
    category: "Modern",
    keyFigures: ["Billy Graham", "Carl Henry", "Francis Schaeffer"],
    notableEvents: ["National Association of Evangelicals", "Lausanne Congress", "Evangelical resurgence"],
    color: "#c5b0d5",
    size: 80
  },
  {
    id: "charismatic",
    name: "Charismatic Movement",
    year: 1960,
    parentId: "pentecostalism",
    description: "A movement bringing Pentecostal practices into mainline Protestant and Catholic churches.",
    keyBeliefs: [
      "Spiritual gifts",
      "Contemporary worship",
      "Experiential faith",
      "Renewal theology",
      "Cross-denominational unity"
    ],
    reasonsForSeparation: ["Desire for spiritual renewal", "Emphasis on experience", "Cross-denominational approach"],
    historicalContext: "The Charismatic movement began when Episcopal priest Dennis Bennett spoke in tongues, bringing Pentecostal practices to mainline churches.",
    geographicOrigin: "Van Nuys, California",
    currentFollowers: "300 million",
    category: "Modern",
    keyFigures: ["Dennis Bennett", "John Wimber", "Pat Robertson"],
    notableEvents: ["Episcopal renewal", "Vineyard movement", "Catholic Charismatic Renewal"],
    color: "#f7b6d2",
    size: 60
  },
  {
    id: "presbyterian",
    name: "Presbyterianism",
    year: 1560,
    parentId: "calvinism",
    description: "A Reformed Protestant tradition emphasizing representative church government and covenant theology.",
    keyBeliefs: [
      "Presbyterian polity",
      "Covenant theology",
      "Predestination",
      "Regulative principle",
      "Westminster Standards"
    ],
    reasonsForSeparation: ["Different church governance", "Scottish Reformation", "Covenant theology emphasis"],
    historicalContext: "Presbyterianism developed in Scotland under John Knox, emphasizing representative church government and Reformed theology.",
    geographicOrigin: "Scotland",
    currentFollowers: "75 million",
    category: "Protestant",
    keyFigures: ["John Knox", "John Witherspoon", "Charles Hodge"],
    notableEvents: ["Scottish Reformation", "Westminster Assembly", "Presbyterian schisms"],
    color: "#a6cee3",
    size: 50
  },
  {
    id: "quakerism",
    name: "Quakerism (Society of Friends)",
    year: 1652,
    parentId: "protestant-reformation",
    description: "A Protestant movement emphasizing the inner light, pacifism, and simple worship.",
    keyBeliefs: [
      "Inner light",
      "Pacifism",
      "Simplicity",
      "Equality",
      "Silent worship"
    ],
    reasonsForSeparation: ["Rejection of clergy", "Inner light theology", "Different worship practices"],
    historicalContext: "George Fox founded the Religious Society of Friends, emphasizing direct experience of God and rejection of formal clergy.",
    geographicOrigin: "England",
    currentFollowers: "400,000",
    category: "Protestant",
    keyFigures: ["George Fox", "William Penn", "John Woolman"],
    notableEvents: ["Pennsylvania colony", "Quaker meetings", "Social reform movements"],
    color: "#fb9a99",
    size: 30
  }
];
