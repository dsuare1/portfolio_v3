const cardData = [
  {
    id: 'nodejs',
    categories: ['javascript', 'backend'],
    title: 'Node JS',
    docsURL: 'https://nodejs.org/en/docs/',
    details: {
      yearsExperience: '3+',
      usedFor: [
        'App Development',
        'REST API Development',
        'CLI Tool Development',
      ],
      details:
        "I've used Node in various ways throughout my development training and career. During the Coding Bootcamp at UT Austin, it was the technology with which I was most comfortable. " +
        "For my final project, I created a customer-facing website for a friend's brick and mortar record store that listed inventory, allowed customers " +
        'to search the inventory, see any upcoming events at the store, and contact the store owners with requests. In addition this this customer-facing site, ' +
        'I also build an admin-only (gated by password authentication) content management system API that enabled the store owners to keep inventory listed ' +
        'on the website up to date.',
    },
  },
  {
    id: 'go',
    categories: ['backend'],
    title: 'Go',
    docsURL: 'https://pkg.go.dev/',
    details: {
      yearsExperience: '2+',
      usedFor: ['REST API Development'],
      details:
        "Go has been the main technology I've used for the last 2 years of my professional development career. I love the simplicity of it, including error-handling, the ease " +
        'of achieving concurrency, the thread-safety sync.Mutex allows while using concurrency, and the excellent documentation and extensive packages available in the Go ecosystem.',
    },
  },
  {
    id: 'reactjs',
    categories: ['javascript', 'frontend'],
    title: 'ReactJS',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: ['UI Development'],
      details: '',
    },
  },
  {
    id: 'postgresql',
    categories: ['database'],
    title: 'PostgresQL',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: ['Database', 'Data Extraction', 'Data Normalization'],
      details: '',
    },
  },
  {
    id: 'sequelize',
    categories: ['database'],
    title: 'Sequelize',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: ['Database ORM', 'Data Modeling', 'Data Extraction'],
      details: '',
    },
  },
  {
    id: 'git',
    categories: ['version-control'],
    title: 'Git',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: ['Version Control', 'Feature Branch Management', 'Release Tracking'],
      details: '',
    },
  },
];

export default cardData;
