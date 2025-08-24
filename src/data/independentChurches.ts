export interface IndependentChurch {
  id: string;
  name: string;
  year: number;
  description: string;
  keyBeliefs: string[];
  uniquePractices: string[];
  historicalContext: string;
  geographicOrigin: string;
  founder: string;
  currentFollowers?: string;
  color: string;
  size: number;
  category: 'Adventist' | 'Restorationist' | 'New Religious Movement' | 'Christian Science' | 'Unification';
}

export const independentChurches: IndependentChurch[] = [
  {
    id: "seventh-day-adventist",
    name: "Seventh-day Adventist Church",
    year: 1863,
    description: "A Protestant denomination that emphasizes the second coming of Christ, Sabbath observance on Saturday, and health principles.",
    keyBeliefs: [
      "Saturday as the Sabbath",
      "Imminent second coming of Christ",
      "Soul sleep (not immediate heaven)",
      "Investigative judgment",
      "Health and dietary laws"
    ],
    uniquePractices: [
      "Saturday worship services",
      "Vegetarian diet encouraged",
      "Health education and hospitals",
      "Tithe and offering system",
      "Missionary work worldwide"
    ],
    historicalContext: "Founded by Ellen G. White and others after the Great Disappointment of 1844, when Christ did not return as predicted by William Miller.",
    geographicOrigin: "Battle Creek, Michigan, USA",
    founder: "Ellen G. White",
    currentFollowers: "21 million",
    category: "Adventist",
    color: "#2ecc71",
    size: 65
  },
  {
    id: "jehovahs-witnesses",
    name: "Jehovah's Witnesses",
    year: 1879,
    description: "A restorationist Christian denomination that rejects the Trinity and teaches that only 144,000 will go to heaven.",
    keyBeliefs: [
      "Jehovah is the only true God",
      "Jesus is Michael the Archangel",
      "No Trinity",
      "144,000 go to heaven",
      "Earth will be paradise"
    ],
    uniquePractices: [
      "Door-to-door evangelism",
      "Refusal of blood transfusions",
      "No military service",
      "No birthday celebrations",
      "Kingdom Hall meetings"
    ],
    historicalContext: "Founded by Charles Taze Russell as the International Bible Students Association, later reorganized by Joseph Rutherford.",
    geographicOrigin: "Pittsburgh, Pennsylvania, USA",
    founder: "Charles Taze Russell",
    currentFollowers: "8.7 million",
    category: "Restorationist",
    color: "#e74c3c",
    size: 60
  },
  {
    id: "mormonism",
    name: "The Church of Jesus Christ of Latter-day Saints",
    year: 1830,
    description: "A restorationist Christian denomination that believes in additional scripture beyond the Bible and modern prophets.",
    keyBeliefs: [
      "Book of Mormon as scripture",
      "Modern prophets and revelation",
      "Pre-mortal existence",
      "Eternal progression",
      "Three degrees of glory"
    ],
    uniquePractices: [
      "Temple ceremonies",
      "Baptism for the dead",
      "Word of Wisdom (health code)",
      "Missionary service",
      "Family history work"
    ],
    historicalContext: "Founded by Joseph Smith after claiming to receive golden plates from an angel, leading to the Book of Mormon.",
    geographicOrigin: "Fayette, New York, USA",
    founder: "Joseph Smith",
    currentFollowers: "16.8 million",
    category: "Restorationist",
    color: "#3498db",
    size: 70
  },
  {
    id: "christian-science",
    name: "Christian Science",
    year: 1879,
    description: "A religious movement that emphasizes spiritual healing and the unreality of matter, founded by Mary Baker Eddy.",
    keyBeliefs: [
      "Matter is unreal",
      "Illness is mental error",
      "Spiritual healing through prayer",
      "God is Mind, Spirit, Soul",
      "Christ as divine idea"
    ],
    uniquePractices: [
      "Spiritual healing instead of medicine",
      "Reading rooms",
      "Wednesday testimony meetings",
      "Christian Science Monitor",
      "Practitioners for healing"
    ],
    historicalContext: "Founded by Mary Baker Eddy after her own healing experience, emphasizing the power of spiritual understanding over material conditions.",
    geographicOrigin: "Boston, Massachusetts, USA",
    founder: "Mary Baker Eddy",
    currentFollowers: "400,000",
    category: "Christian Science",
    color: "#9b59b6",
    size: 45
  },
  {
    id: "unification-church",
    name: "Unification Church (Moonies)",
    year: 1954,
    description: "A new religious movement founded by Sun Myung Moon, teaching that he and his wife are the True Parents of humanity.",
    keyBeliefs: [
      "Sun Myung Moon as Messiah",
      "True Parents concept",
      "Restoration of fallen humanity",
      "Divine Principle",
      "Three Blessings"
    ],
    uniquePractices: [
      "Blessing ceremonies",
      "Mass weddings",
      "Fundraising activities",
      "Family values emphasis",
      "Interfaith dialogue"
    ],
    historicalContext: "Founded in South Korea by Sun Myung Moon, who claimed to receive revelations from Jesus Christ about completing his mission.",
    geographicOrigin: "Seoul, South Korea",
    founder: "Sun Myung Moon",
    currentFollowers: "3 million",
    category: "Unification",
    color: "#f39c12",
    size: 50
  },
  {
    id: "scientology",
    name: "Church of Scientology",
    year: 1954,
    description: "A new religious movement founded by L. Ron Hubbard, teaching that humans are immortal spiritual beings with unlimited potential.",
    keyBeliefs: [
      "Thetan (spiritual being)",
      "Past lives and reincarnation",
      "Auditing for spiritual progress",
      "Reactive mind (engrams)",
      "Bridge to Total Freedom"
    ],
    uniquePractices: [
      "Auditing sessions",
      "E-meter use",
      "Training routines",
      "Sea Organization",
      "Celebrity Centre"
    ],
    historicalContext: "Founded by science fiction writer L. Ron Hubbard, who developed Dianetics and later Scientology as a spiritual technology.",
    geographicOrigin: "Los Angeles, California, USA",
    founder: "L. Ron Hubbard",
    currentFollowers: "500,000",
    category: "New Religious Movement",
    color: "#1abc9c",
    size: 55
  },
  {
    id: "baha'i",
    name: "Bahá'í Faith",
    year: 1863,
    description: "A monotheistic religion that teaches the essential worth of all religions and the unity of all people.",
    keyBeliefs: [
      "Unity of God",
      "Unity of religion",
      "Unity of humanity",
      "Progressive revelation",
      "World peace and justice"
    ],
    uniquePractices: [
      "Nineteen-day feasts",
      "Baha'i calendar",
      "Universal House of Justice",
      "Pilgrimage to Haifa",
      "Social action projects"
    ],
    historicalContext: "Founded by Bahá'u'lláh in Persia, who claimed to be the latest in a line of messengers from God including Abraham, Moses, Jesus, and Muhammad.",
    geographicOrigin: "Tehran, Persia (Iran)",
    founder: "Bahá'u'lláh",
    currentFollowers: "8 million",
    category: "New Religious Movement",
    color: "#e67e22",
    size: 60
  },
  {
    id: "christadelphians",
    name: "Christadelphians",
    year: 1848,
    description: "A restorationist Christian group that rejects the Trinity and believes in the restoration of the early church.",
    keyBeliefs: [
      "No Trinity",
      "Jesus is the Son of God, not God",
      "Soul sleep until resurrection",
      "Literal second coming",
      "Restoration of Israel"
    ],
    uniquePractices: [
      "Memorial meeting (Lord's Supper)",
      "Bible study groups",
      "No paid clergy",
      "Pacifism",
      "Ecclesial organization"
    ],
    historicalContext: "Founded by John Thomas, who sought to restore the beliefs and practices of the early church, rejecting later theological developments.",
    geographicOrigin: "Richmond, Virginia, USA",
    founder: "John Thomas",
    currentFollowers: "60,000",
    category: "Restorationist",
    color: "#34495e",
    size: 35
  },
  {
    id: "church-of-christ",
    name: "Churches of Christ",
    year: 1906,
    description: "A restorationist Christian movement that seeks to restore the New Testament church without denominational structures.",
    keyBeliefs: [
      "Bible as sole authority",
      "No denominational hierarchy",
      "Baptism by immersion for salvation",
      "A cappella worship",
      "Weekly communion"
    ],
    uniquePractices: [
      "A cappella singing only",
      "Weekly Lord's Supper",
      "Baptism by immersion",
      "No instrumental music",
      "Congregational autonomy"
    ],
    historicalContext: "Emerged from the Restoration Movement led by Alexander Campbell and Barton W. Stone, seeking to unite Christians by restoring New Testament practices.",
    geographicOrigin: "United States",
    founder: "Alexander Campbell, Barton W. Stone",
    currentFollowers: "2 million",
    category: "Restorationist",
    color: "#95a5a6",
    size: 50
  },
  {
    id: "quakers",
    name: "Religious Society of Friends (Quakers)",
    year: 1652,
    description: "A Christian movement emphasizing the inner light, pacifism, and simple worship without clergy or sacraments.",
    keyBeliefs: [
      "Inner light in everyone",
      "Pacifism and nonviolence",
      "Simplicity and equality",
      "Direct experience of God",
      "No clergy or sacraments"
    ],
    uniquePractices: [
      "Silent worship",
      "Meeting for worship",
      "Peace testimony",
      "Plain dress (historically)",
      "Decision by consensus"
    ],
    historicalContext: "Founded by George Fox in England during the Puritan period, emphasizing direct spiritual experience over formal religious structures.",
    geographicOrigin: "England",
    founder: "George Fox",
    currentFollowers: "400,000",
    category: "Restorationist",
    color: "#8e44ad",
    size: 40
  }
];
