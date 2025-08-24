export interface Heresy {
  id: string;
  name: string;
  year: number;
  description: string;
  keyBeliefs: string[];
  orthodoxResponse: string[];
  historicalContext: string;
  geographicOrigin: string;
  keyFigures: string[];
  councils: string[];
  impact: string;
  color: string;
  size: number;
  category: 'Christological' | 'Trinitarian' | 'Soteriological' | 'Ecclesiological' | 'Eschatological';
}

export const heresies: Heresy[] = [
  {
    id: "arianism",
    name: "Arianism",
    year: 318,
    description: "A heresy that denied the full divinity of Jesus Christ, teaching that the Son was created by the Father and therefore not co-eternal.",
    keyBeliefs: [
      "Jesus Christ is a created being",
      "The Son is not co-eternal with the Father",
      "There was a time when the Son did not exist",
      "The Son is subordinate to the Father",
      "Only the Father is truly God"
    ],
    orthodoxResponse: [
      "The Son is begotten, not made",
      "The Son is of the same substance (homoousios) as the Father",
      "The Son is co-eternal with the Father",
      "The Son is fully divine",
      "The Trinity is three persons, one God"
    ],
    historicalContext: "Arius, a priest in Alexandria, began teaching that Jesus was a created being. This sparked a major controversy that led to the First Council of Nicaea in 325 AD.",
    geographicOrigin: "Alexandria, Egypt",
    keyFigures: ["Arius", "Eusebius of Nicomedia", "Athanasius of Alexandria"],
    councils: ["First Council of Nicaea (325)", "First Council of Constantinople (381)"],
    impact: "Led to the formulation of the Nicene Creed and established the doctrine of the Trinity as orthodox Christianity.",
    category: "Trinitarian",
    color: "#ff6b6b",
    size: 70
  },
  {
    id: "nestorianism",
    name: "Nestorianism",
    year: 428,
    description: "A heresy that separated the divine and human natures of Christ into two distinct persons, denying the hypostatic union.",
    keyBeliefs: [
      "Christ has two separate natures and persons",
      "Mary is only the mother of the human Jesus",
      "The divine and human natures are not united",
      "Christ's humanity and divinity are separate",
      "Mary should not be called 'Mother of God'"
    ],
    orthodoxResponse: [
      "Christ has two natures in one person",
      "The hypostatic union unites divine and human natures",
      "Mary is truly the Mother of God (Theotokos)",
      "Christ is fully God and fully man",
      "The two natures are united without confusion"
    ],
    historicalContext: "Nestorius, Patriarch of Constantinople, objected to calling Mary 'Theotokos' (Mother of God), arguing that she only gave birth to the human Jesus.",
    geographicOrigin: "Constantinople",
    keyFigures: ["Nestorius", "Cyril of Alexandria", "John of Antioch"],
    councils: ["Council of Ephesus (431)", "Council of Chalcedon (451)"],
    impact: "Led to the formulation of the Chalcedonian Definition and the establishment of the doctrine of the hypostatic union.",
    category: "Christological",
    color: "#4ecdc4",
    size: 60
  },
  {
    id: "monophysitism",
    name: "Monophysitism",
    year: 451,
    description: "A heresy that taught Christ has only one nature, either divine or a fusion of divine and human natures.",
    keyBeliefs: [
      "Christ has only one nature",
      "The divine nature absorbed the human nature",
      "Christ's humanity was incomplete",
      "The incarnation was not truly human",
      "Christ's suffering was not real"
    ],
    orthodoxResponse: [
      "Christ has two complete natures",
      "The natures are united without confusion",
      "Christ is truly human and truly divine",
      "Christ really suffered and died",
      "The incarnation preserves both natures"
    ],
    historicalContext: "After the Council of Chalcedon, some rejected the two-nature doctrine, leading to the formation of Oriental Orthodox churches.",
    geographicOrigin: "Alexandria and Antioch",
    keyFigures: ["Eutyches", "Dioscorus of Alexandria", "Severus of Antioch"],
    councils: ["Council of Chalcedon (451)", "Second Council of Constantinople (553)"],
    impact: "Led to the separation of Oriental Orthodox churches from the main Christian tradition.",
    category: "Christological",
    color: "#45b7d1",
    size: 55
  },
  {
    id: "pelagianism",
    name: "Pelagianism",
    year: 410,
    description: "A heresy that denied original sin and taught that humans can achieve salvation through their own efforts without divine grace.",
    keyBeliefs: [
      "Humans are born without sin",
      "Salvation is achieved through human effort",
      "Divine grace is not necessary for salvation",
      "Adam's sin did not affect humanity",
      "Humans can live without sin"
    ],
    orthodoxResponse: [
      "All humans inherit original sin from Adam",
      "Salvation requires divine grace",
      "Humans cannot save themselves",
      "Grace is necessary for salvation",
      "Justification is by grace through faith"
    ],
    historicalContext: "Pelagius, a British monk, taught that humans could achieve moral perfection through their own efforts, leading to controversy with Augustine of Hippo.",
    geographicOrigin: "Britain and Rome",
    keyFigures: ["Pelagius", "Augustine of Hippo", "Pope Innocent I"],
    councils: ["Council of Carthage (418)", "Council of Ephesus (431)"],
    impact: "Led to the development of the doctrine of original sin and the importance of divine grace in salvation.",
    category: "Soteriological",
    color: "#96ceb4",
    size: 50
  },
  {
    id: "donatism",
    name: "Donatism",
    year: 311,
    description: "A heresy that taught that the validity of sacraments depends on the moral character of the minister performing them.",
    keyBeliefs: [
      "Sacraments are invalid if performed by unworthy ministers",
      "The church should be pure and exclude sinners",
      "Lapsed Christians cannot be readmitted",
      "Only the morally pure can administer sacraments",
      "The church is only for the righteous"
    ],
    orthodoxResponse: [
      "Sacraments are valid regardless of the minister's character",
      "The church includes both saints and sinners",
      "Lapsed Christians can be reconciled",
      "Christ works through unworthy ministers",
      "The church is a mixed body"
    ],
    historicalContext: "Donatus and his followers objected to the readmission of Christians who had lapsed during persecution, leading to a schism in North Africa.",
    geographicOrigin: "North Africa",
    keyFigures: ["Donatus", "Augustine of Hippo", "Optatus of Milevis"],
    councils: ["Council of Arles (314)", "Council of Carthage (411)"],
    impact: "Established the principle that sacraments derive their efficacy from Christ, not from the minister's character.",
    category: "Ecclesiological",
    color: "#feca57",
    size: 45
  },
  {
    id: "montanism",
    name: "Montanism",
    year: 156,
    description: "A heresy that emphasized prophecy, strict asceticism, and the imminent return of Christ, claiming new revelations from the Holy Spirit.",
    keyBeliefs: [
      "New prophecies from the Holy Spirit",
      "Strict asceticism and fasting",
      "Imminent return of Christ",
      "Rejection of church hierarchy",
      "Direct revelation from God"
    ],
    orthodoxResponse: [
      "The apostolic age was unique",
      "Church hierarchy is divinely established",
      "Prophecy must be tested by Scripture",
      "Asceticism should be moderate",
      "The canon of Scripture is closed"
    ],
    historicalContext: "Montanus claimed to be the Paraclete and gathered followers in Phrygia, emphasizing prophecy and strict living.",
    geographicOrigin: "Phrygia, Asia Minor",
    keyFigures: ["Montanus", "Priscilla", "Maximilla"],
    councils: ["Various local councils in the 2nd century"],
    impact: "Led to the development of criteria for distinguishing true from false prophecy and the importance of church authority.",
    category: "Eschatological",
    color: "#ff9ff3",
    size: 40
  },
  {
    id: "gnosticism",
    name: "Gnosticism",
    year: 100,
    description: "A diverse movement that taught salvation through secret knowledge (gnosis) and dualistic cosmology, often rejecting the material world.",
    keyBeliefs: [
      "Salvation through secret knowledge",
      "Dualism between spirit and matter",
      "The material world is evil",
      "Multiple divine beings (aeons)",
      "Rejection of the Old Testament God"
    ],
    orthodoxResponse: [
      "Salvation is through faith in Christ",
      "The material world is good",
      "There is one God, creator of all",
      "The Old Testament is inspired Scripture",
      "Knowledge comes through revelation"
    ],
    historicalContext: "Gnosticism emerged in the 2nd century, combining Christian elements with Greek philosophy and Eastern religions.",
    geographicOrigin: "Various locations in the Roman Empire",
    keyFigures: ["Valentinus", "Marcion", "Basilides"],
    councils: ["Various local councils", "Writings of Irenaeus and Tertullian"],
    impact: "Led to the development of the New Testament canon and the formulation of orthodox Christian doctrine.",
    category: "Soteriological",
    color: "#54a0ff",
    size: 65
  },
  {
    id: "sabellianism",
    name: "Sabellianism (Modalism)",
    year: 220,
    description: "A heresy that taught that the Father, Son, and Holy Spirit are not distinct persons but different modes or aspects of the same God.",
    keyBeliefs: [
      "One God in three modes",
      "Father, Son, and Spirit are the same person",
      "God appears as Father, then Son, then Spirit",
      "No real distinction between the persons",
      "Temporary manifestations of one God"
    ],
    orthodoxResponse: [
      "Three distinct persons in one God",
      "The persons are co-eternal",
      "All three persons exist simultaneously",
      "Each person is fully God",
      "The Trinity is one in essence, three in persons"
    ],
    historicalContext: "Sabellius taught in Rome that God is one person who manifests himself in three different modes, leading to controversy.",
    geographicOrigin: "Rome",
    keyFigures: ["Sabellius", "Tertullian", "Hippolytus"],
    councils: ["Various local councils in the 3rd century"],
    impact: "Contributed to the development of Trinitarian theology and the distinction between person and nature.",
    category: "Trinitarian",
    color: "#5f27cd",
    size: 50
  },
  {
    id: "apollinarianism",
    name: "Apollinarianism",
    year: 362,
    description: "A heresy that taught that Christ had a human body and soul but a divine mind, denying the full humanity of Christ.",
    keyBeliefs: [
      "Christ has a human body and soul",
      "Christ has a divine mind (Logos)",
      "The human mind was replaced by the divine",
      "Christ's humanity is incomplete",
      "The incarnation was not fully human"
    ],
    orthodoxResponse: [
      "Christ has a complete human nature",
      "Christ has both human and divine minds",
      "The incarnation preserves full humanity",
      "Christ is truly human in every way",
      "The two natures are united without confusion"
    ],
    historicalContext: "Apollinaris of Laodicea taught that Christ's human mind was replaced by the divine Logos, leading to controversy.",
    geographicOrigin: "Laodicea, Syria",
    keyFigures: ["Apollinaris of Laodicea", "Gregory of Nazianzus", "Gregory of Nyssa"],
    councils: ["First Council of Constantinople (381)"],
    impact: "Helped clarify the doctrine of the incarnation and the full humanity of Christ.",
    category: "Christological",
    color: "#00d2d3",
    size: 45
  },
  {
    id: "marcionism",
    name: "Marcionism",
    year: 144,
    description: "A heresy that rejected the Old Testament and most of the New Testament, teaching that the God of the Old Testament was different from the God of Jesus.",
    keyBeliefs: [
      "Two different gods",
      "Rejection of the Old Testament",
      "Only parts of the New Testament are valid",
      "The material world is evil",
      "The God of Jesus is different from the Creator"
    ],
    orthodoxResponse: [
      "There is only one God",
      "The Old Testament is inspired Scripture",
      "The New Testament canon is complete",
      "The material world is good",
      "Jesus is the same God as the Creator"
    ],
    historicalContext: "Marcion, a wealthy shipowner, created his own canon of Scripture and rejected the God of the Old Testament as inferior.",
    geographicOrigin: "Rome",
    keyFigures: ["Marcion", "Polycarp", "Irenaeus"],
    councils: ["Various local councils", "Development of the New Testament canon"],
    impact: "Accelerated the development of the New Testament canon and the establishment of orthodox Christian Scripture.",
    category: "Ecclesiological",
    color: "#ff9f43",
    size: 55
  }
];
