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
        "Go has been the main technology I've used for the last two years of my development career. I love the simplicity of it, including error-handling, the ease " +
        'of achieving concurrency, the thread-safety sync.Mutex allows while using concurrency, and the excellent documentation and extensive packages available in the Go ecosystem.',
    },
  },
  {
    id: 'reactjs',
    categories: ['javascript', 'frontend'],
    title: 'React JS',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: ['UI Development'],
      details:
        'My first experience with React left me feeling frustrated and confused; I was in bootcamp and was struggling to build real-world-scale functionality while maintaining clean ' +
        'code. I fell back on Handlebars, with which I was more comfortable, and then my first job was 100% in Node.js. What really made React click for me was when I returned to it about a year and ' +
        "half later and prototyped a single-page teams admin section at my second job using React + Redux, wired up to a Ruby-on-Rails backend. Since then, I've grown to love working in the framework. " +
        "With the addition of hooks, it's become even easier to manage state and build component-driven UI, especially when using design libraries like Ant, Material UI, or even Bootstrap.",
    },
  },
  {
    id: 'postgresql',
    categories: ['database'],
    title: 'PostgreSQL',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: ['Database', 'Data Extraction', 'Data Normalization'],
      details:
        "SQL is the area in which I've improved the most over the past two years (2019 - 2021). Coming out of bootcamp, I probably couldn't even have confidently explained a JOIN vs. LEFT JOIN. Since then, " +
        "I've had experience with transactional SQL, CTEs, indexing, upserts, bulk inserts, aggregations, date-math, using EXPLAIN / ANALYZE to identify problematic statements, views, triggers and functions, and more. " +
        "I've used both Sequelize and Liquibase to manage migrations, Sequelize's ORM language and raw SQL to interact with a database, and am comfortable connecting through pgAdmin or on the command line with psql.",
    },
  },
  {
    id: 'github',
    categories: ['workflow', 'code-management'],
    title: 'GitHub',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: ['Database ORM', 'Data Modeling', 'Data Extraction'],
      details:
        "GitHub has been the main platform I've used for managing coding workflows, both on individual and work projects. I'm also familiar with BitBucket, and really don't have a preference between the two, so long " +
        'as the important work of meaningful PR review, easy-to-digest comments that are actionable, and process ownership is being done. Every member of a team has to commit to the agreed upon standard, and should ' +
        'view any issue in the codebase as "our" problem to solve. I also believe it\'s important maintain a general sense of positivity and constructive attitude when giving and receiving feedback. Ultimately, everyone wins.',
    },
  },
  {
    id: 'git',
    categories: ['version-control', 'code-management'],
    title: 'Git',
    docsURL: '',
    details: {
      yearsExperience: '3+',
      usedFor: [
        'Version Control',
        'Feature Branch Management',
        'Release Tracking',
      ],
      details:
        '"learn commit, add, push, pull; you\'re set". While this gets you, say, 75% of what you need, there\'s so much more to do with Git. Rebasing commits helps maintain a clean commit history for the ' +
        'reviewer. Stashing lets you keep changes absent-mindedly created on the wrong branch. You can travel through time with checkout, and even cherry-pick changes from one branch to another for more granular control. ' +
        "But one of Git's best benefits is your present-self's ability to tell your future-self what you were doing. For this to be realized, each individual team member must maintain a certain level of detailed description of what " +
        'is intended by each change to the code. A clear and descriptive historical roadmap of the codebase enables developers to pinpoint suspect commits faster and fix bugs.',
    },
  },
];

export default cardData;
