export interface AuthoritySource {
  id: string;
  name: string;
  level: number;
  description: string;
  examples: string[];
  significance: string;
  historicalContext: string;
  color: string;
  size: number;
  category: 'God' | 'Scripture' | 'Ecumenical' | 'Reformed' | 'Pastors' | 'Laypeople';
}

export const authorityPyramid: AuthoritySource[] = [
  {
    id: "god",
    name: "God",
    level: 0,
    description: "The source of all truth and ultimate authority.",
    examples: [],
    significance: "The source of all truth",
    historicalContext: "God is the foundation of all theological authority and the source of divine revelation.",
    category: "God",
    color: "#1f2937",
    size: 90
  },
  {
    id: "scripture",
    name: "Scripture",
    level: 1,
    description: "The inspired and infallible Word of God, containing the Old and New Testaments.",
    examples: [
      "Bible (66 books)"
    ],
    significance: "Infallible because it's God's Word",
    historicalContext: "The Protestant Reformation emphasized 'Sola Scriptura' (Scripture alone) as the ultimate authority for Christian faith and practice.",
    category: "Scripture",
    color: "#fbbf24",
    size: 80
  },
  {
    id: "ecumenical-creeds",
    name: "Ecumenical Creeds",
    level: 2,
    description: "Ancient creeds accepted by the universal church across all major Christian traditions.",
    examples: [
      "Nicene Creed",
      "Apostle's Creed", 
      "Athanasian Creed"
    ],
    significance: "Not infallible but 100% true since they represent the universal Church",
    historicalContext: "Developed in response to early heresies and theological controversies, these creeds established the core doctrines of Christianity.",
    category: "Ecumenical",
    color: "#f97316",
    size: 70
  },
  {
    id: "reformed-confessions",
    name: "Reformed Confessions",
    level: 3,
    description: "Confessional statements that define Reformed theology and practice.",
    examples: [
      "Westminster Standards",
      "Scots Confession",
      "Canons of Dort",
      "Barmen",
      "2nd Helvetic Confession"
    ],
    significance: "The standard authority of our churches that our leaders are bound to",
    historicalContext: "Developed during the Protestant Reformation and post-Reformation period to establish Reformed identity and theology.",
    category: "Reformed",
    color: "#dc2626",
    size: 65
  },
  {
    id: "reformed-pastors",
    name: "Ref. Pastors/Theologians",
    level: 4,
    description: "Reformed pastors, theologians, and church leaders who provide guidance and teaching.",
    examples: [
      "elders in your Church",
      "your pastor",
      "your presbytery",
      "Calvin",
      "Knox",
      "Rutherford",
      "Augustine",
      "Nevin",
      "Lewis"
    ],
    significance: "Moral authority, but subject to correction",
    historicalContext: "Reformed tradition emphasizes the role of ordained ministers and theologians in interpreting Scripture and providing pastoral care.",
    category: "Pastors",
    color: "#7c3aed",
    size: 60
  },
  {
    id: "laypeople",
    name: "Laypeople",
    level: 5,
    description: "Ordinary church members and lay leaders who provide support and encouragement.",
    examples: [
      "mentors in your Church",
      "Reformed instagram pages",
      "You, probably",
      "Me"
    ],
    significance: "No real authority",
    historicalContext: "While laypeople have important roles in the church, they do not hold formal teaching authority in Reformed polity.",
    category: "Laypeople",
    color: "#3b82f6",
    size: 55
  }
];
