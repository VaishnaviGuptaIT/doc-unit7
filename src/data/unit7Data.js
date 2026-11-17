// Unit 7: DevOps Tools in the Cloud - Comprehensive Data Model
// Faculty: Vaishnavi Gupta (VRG)

export const unitMetaData = {
  subject: "DevOps in Cloud",
  unitNumber: "Unit 7",
  title: "DevOps Tools in the Cloud",
  subtitle: "Cloud-Based Developer Tools & Infrastructure Automation Guide",
  faculty: "Vaishnavi Gupta (VRG)",
  footerText: "Made by Vaishnavi Gupta",
  syllabusCoverage: [
    "1. Cloud-based developer tools (AWS CodePipeline, Azure DevOps, GCP Cloud Build)",
    "2. Infrastructure automation tools specific to cloud platforms"
  ]
};

export const learningObjectives = [
  {
    id: 1,
    title: "Cloud Developer Tools",
    desc: "Understand AWS CodePipeline, Azure DevOps, and GCP Cloud Build with production architecture examples.",
    icon: "Cloud"
  },
  {
    id: 2,
    title: "Infrastructure Automation",
    desc: "Learn how cloud servers and networks are automatically created using code (IaC).",
    icon: "Cpu"
  },
  {
    id: 3,
    title: "Industry Tool Comparison",
    desc: "Compare major cloud DevOps suites by cloud provider, core purpose, and ecosystem tools.",
    icon: "Table"
  },
  {
    id: 4,
    title: "Real-World Project Workflow",
    desc: "Trace how a real University Web Application is built, tested, and deployed automatically.",
    icon: "GraduationCap"
  }
];

export const whatAreDevOpsTools = {
  title: "What are DevOps Tools?",
  subtitle: "Understanding software tools that automate cloud application delivery",
  whatIsIt: "DevOps tools are specialized cloud software utilities that automate repetitive development, testing, compilation, and deployment tasks without requiring manual developer intervention at each step.",
  whyNeeded: "In traditional manual software delivery, engineers had to manually compile code, transfer files over SSH, configure servers, and execute test cases by hand. This was slow, error-prone, and unsustainable for large cloud applications. DevOps tools solve this by establishing automated pipelines.",
  restaurantAnalogy: {
    title: "Real-World Industry Analogy: Manual Kitchen vs Automated Restaurant 🍽️",
    manual: {
      heading: "Manual Operation ❌",
      text: "A chef manually writes down every food ticket, walks back and forth to fetch ingredients, cooks every dish individually, and hand-delivers plates to customers. This leads to long wait times and frequent order mistakes."
    },
    automation: {
      heading: "Automated Kitchen Pipeline ✅",
      text: "A digital POS system instantly transmits customer orders to specialized cooking stations. Automated machines prep and cook items precisely, while conveyors deliver finished orders directly to dispatch."
    },
    takeaway: "Similarly, Cloud DevOps tools take source code changes and automatically compile, run test suites, build container images, and publish live cloud applications seamlessly."
  }
};

export const whyCloudDevOpsNeeded = {
  title: "Why Cloud DevOps Tools are Needed in Software Engineering",
  points: [
    {
      title: "1. Rapid Software Release (Speed) ⚡",
      description: "Automated pipelines reduce release cycles from weeks to minutes, allowing teams to push feature updates and bug fixes instantly."
    },
    {
      title: "2. Elimination of Human Configuration Error 🎯",
      description: "Manual server deployment often suffers from typos or missed environment variables. Automated scripts execute identical, error-free deployments every time."
    },
    {
      title: "3. Scalable 24/7 Continuous Delivery 🌐",
      description: "Cloud-hosted DevOps tools operate continuously on cloud infrastructure, building and testing code pushed by distributed global developer teams."
    },
    {
      title: "4. Unified Team Collaboration & Tracking 🤝",
      description: "Integrated suites link tasks, code repositories, pull requests, and automated deployment logs in a single central dashboard."
    }
  ]
};

export const cloudToolsData = {
  awsCodePipeline: {
    id: "aws-codepipeline",
    name: "AWS CodePipeline",
    cloud: "Amazon Web Services (AWS)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
    themeColor: "from-amber-500 to-orange-600",
    simpleDefinition: "CodePipeline helps move code from development to testing and deployment automatically.",
    whatIsIt: "AWS CodePipeline is a fully managed Continuous Integration and Continuous Delivery (CI/CD) service by Amazon Web Services that automates release pipelines for fast and reliable application and infrastructure updates.",
    whyDoWeNeedIt: "Without CodePipeline, developers updating an AWS web app would have to manually SSH into AWS EC2 instances, copy compiled files, configure web servers, and restart services manually. CodePipeline automates this entire workflow upon every Git commit.",
    howItWorks: "It monitors source code repositories (Source stage), triggers code compilation via AWS CodeBuild (Build stage), runs automated unit & integration tests (Test stage), and deploys final build artifacts to AWS Elastic Beanstalk, ECS, or EC2 (Deploy stage).",
    realLifeExample: "Like an automated car manufacturing assembly line that transfers raw chassis components through welding, painting, quality inspection, and final driving tests without stopping.",
    cloudExample: "Real-Time Enterprise Project: An e-commerce engineering team updates a payment gateway component in GitHub. AWS CodePipeline automatically detects the pull request, compiles the code in AWS CodeBuild, runs automated payment verification tests, and deploys the update to production AWS EC2 servers in under 3 minutes.",
    ecosystemTools: [
      { name: "AWS CodeCommit", role: "Managed Git source code repository service" },
      { name: "AWS CodeBuild", role: "Fully managed cloud compilation & testing service" },
      { name: "AWS CodeDeploy", role: "Automates application deployments to EC2, Lambda, or ECS" }
    ],
    diagramSteps: [
      { step: "1. Code", label: "Developer commits code", desc: "Source code pushed to repository (e.g. GitHub or AWS CodeCommit)" },
      { step: "2. Build", label: "Compile application", desc: "AWS CodeBuild compiles code & packages dependencies" },
      { step: "3. Test", label: "Run test suites", desc: "Automated test scripts verify functionality & security" },
      { step: "4. Deploy", label: "Deploy to AWS Cloud", desc: "Artifacts deployed to EC2, ECS, or AWS Lambda" }
    ],
    rememberBox: "AWS CodePipeline = Automated Continuous Delivery Pipeline (Code → Build → Test → Deploy).",
    examPoint: "AWS CodePipeline is an AWS CI/CD orchestration service that models, visualizes, and automates software release stages.",
    classroomQuestion: "Q: What happens if an automated test fails inside AWS CodePipeline during the Test stage?\nA: CodePipeline halts the pipeline immediately and sends notifications to developers, preventing faulty code from reaching production servers."
  },

  azureDevOps: {
    id: "azure-devops",
    name: "Azure DevOps",
    cloud: "Microsoft Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800",
    themeColor: "from-blue-600 to-sky-500",
    simpleDefinition: "Azure DevOps provides tools that help teams plan, build, test and deliver software.",
    whatIsIt: "Azure DevOps is a comprehensive suite of cloud-hosted developer services provided by Microsoft that covers the complete end-to-end software development lifecycle from agile planning to continuous production delivery.",
    whyDoWeNeedIt: "Instead of stitching together separate tools for task tracking, Git hosting, build automation, and artifact management, Azure DevOps provides a unified enterprise platform with native Azure integration.",
    howItWorks: "Project managers plan sprints on Kanban boards (Azure Boards); developers store code in Git repos (Azure Repos); CI/CD pipelines compile and test applications (Azure Pipelines); quality assurance teams run manual/automated tests (Azure Test Plans); and final packages are stored securely (Azure Artifacts).",
    realLifeExample: "Like an integrated hospital operating system where patient registration, doctor schedules, lab test results, pharmacy prescriptions, and billing are all synchronized in one centralized digital platform.",
    cloudExample: "Real-Time Enterprise Project: A core banking development team uses Azure Boards to track feature tasks, commits secure code to Azure Repos, uses Azure Pipelines to build microservices and run security scans, and automatically deploys containerized apps to Azure Kubernetes Service (AKS).",
    ecosystemTools: [
      { name: "Azure Boards", role: "Agile task tracking, Kanban boards & sprint backlogs" },
      { name: "Azure Repos", role: "Unlimited cloud-hosted private Git repositories" },
      { name: "Azure Pipelines", role: "Multi-platform CI/CD build & release automation" },
      { name: "Azure Artifacts", role: "Integrated Maven, npm, and NuGet package management" }
    ],
    diagramSteps: [
      { step: "1. Plan", label: "Agile Planning", desc: "Track work items & user stories on Azure Boards" },
      { step: "2. Code", label: "Source Control", desc: "Commit code securely to Azure Repos (Git)" },
      { step: "3. Build", label: "Continuous Integration", desc: "Compile code & run builds in Azure Pipelines" },
      { step: "4. Test", label: "Automated Testing", desc: "Execute unit, integration & regression tests" },
      { step: "5. Deliver", label: "Continuous Delivery", desc: "Deploy final release to Azure Virtual Machines or AKS" }
    ],
    rememberBox: "Azure DevOps = Unified Microsoft Suite (Plan → Code → Build → Test → Deliver).",
    examPoint: "Azure DevOps consists of 5 main components: Azure Boards, Azure Repos, Azure Pipelines, Azure Test Plans, and Azure Artifacts.",
    classroomQuestion: "Q: List the 5 core stages of the Azure DevOps software delivery workflow.\nA: Plan → Code → Build → Test → Deliver."
  },

  gcpCloudBuild: {
    id: "gcp-cloud-build",
    name: "GCP Cloud Build",
    cloud: "Google Cloud Platform (GCP)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800",
    themeColor: "from-indigo-500 to-blue-600",
    simpleDefinition: "Cloud Build helps automatically build and test application code.",
    whatIsIt: "GCP Cloud Build is a serverless build and continuous integration service by Google Cloud Platform that executes builds, container image creations, and automated test steps on Google's high-speed cloud infrastructure.",
    whyDoWeNeedIt: "Compiling complex microservice projects or building large Docker container images on a developer's local laptop can take upwards of 30 minutes, overheating the computer and blocking local work. GCP Cloud Build offloads compilation to Google Cloud's fast distributed build workers.",
    howItWorks: "GCP Cloud Build reads build configuration files (e.g. cloudbuild.yaml), spins up isolated ephemeral Docker containers on Google Cloud, pulls source code, executes build steps sequentially or in parallel, runs tests, and pushes finished container images to Google Artifact Registry.",
    realLifeExample: "Like sending digital video footage to a professional cloud rendering farm. Your local computer stays fast while high-performance cloud servers process heavy video rendering in seconds.",
    cloudExample: "Real-Time Enterprise Project: A team building a Python AI microservice pushes updates to GitHub. GCP Cloud Build receives a webhook trigger, spins up cloud containers, builds a Docker image, runs unit tests, and pushes the container artifact to Google Artifact Registry for auto-deployment to Google Cloud Run.",
    ecosystemTools: [
      { name: "Cloud Source Repositories", role: "Private Git repos hosted on Google Cloud" },
      { name: "Google Artifact Registry", role: "Secure storage for Docker images and language packages" },
      { name: "Google Cloud Run / GKE", role: "Serverless container execution & Kubernetes platforms" }
    ],
    diagramSteps: [
      { step: "1. Code", label: "Source Code Push", desc: "Developer pushes code to GitHub or Cloud Source Repositories" },
      { step: "2. Build", label: "Serverless Build", desc: "Google Cloud infrastructure compiles code & builds container images" },
      { step: "3. Test", label: "Automated Container Testing", desc: "Executes test commands inside isolated build containers" },
      { step: "4. Output", label: "Artifact Store", desc: "Stores output Docker images in Google Artifact Registry" }
    ],
    rememberBox: "GCP Cloud Build = High-Speed Google Cloud Compilation & Container Build Engine (Code → Build → Test → Output).",
    examPoint: "GCP Cloud Build is a serverless CI/CD service that executes builds using customized build steps inside Docker containers on Google Cloud.",
    classroomQuestion: "Q: What is the main advantage of using GCP Cloud Build over compiling code locally on a developer's machine?\nA: It leverages Google's fast, scalable cloud infrastructure, executing heavy compilation parallelly without freezing local systems."
  }
};

export const toolComparisonTable = [
  {
    tool: "AWS CodePipeline",
    platform: "Amazon Web Services (AWS)",
    purpose: "Automate software delivery pipelines",
    bestFor: "Orchestrating end-to-end build, test, & deployment workflows on AWS",
    color: "text-amber-600 dark:text-amber-400"
  },
  {
    tool: "Azure DevOps",
    platform: "Microsoft Azure",
    purpose: "Plan, build, test and deliver software",
    bestFor: "Comprehensive enterprise suite (Agile boards + Git repos + CI/CD pipelines)",
    color: "text-sky-600 dark:text-sky-400"
  },
  {
    tool: "GCP Cloud Build",
    platform: "Google Cloud Platform (GCP)",
    purpose: "Build and test applications",
    bestFor: "Serverless container builds, fast compilation, and Artifact Registry integration",
    color: "text-indigo-600 dark:text-indigo-400"
  }
];

export const infraAutomationData = {
  title: "Infrastructure Automation",
  simpleDefinition: "Instead of creating cloud resources manually again and again, we use tools or code to do the work automatically.",
  whatIsIt: "Infrastructure Automation (commonly referred to as Infrastructure as Code / IaC) is the practice of defining, provisioning, configuring, and managing cloud infrastructure (virtual machines, databases, load balancers, networks) using declarative code scripts instead of manual dashboard configurations.",
  whyDoWeNeedIt: "Provisioning 50 cloud servers and configuring security groups manually via a cloud console takes hours, is exhausting, and is susceptible to human oversight or inconsistent configurations. Infrastructure Automation allows engineers to execute a single code file to launch identical environments in minutes.",
  howItWorks: "Engineers write declarative configuration files (JSON, YAML, or HCL) specifying desired cloud resources. An automation tool reads the file, calculates necessary API calls to the cloud provider, and automatically provisions and connects all specified cloud resources.",
  
  comparison: {
    manual: {
      title: "Manual Console Creation ❌",
      steps: [
        "Log into cloud web dashboard manually",
        "Click 'Create Virtual Machine' 10 separate times",
        "Manually configure IP addresses, SSH keys & firewall rules 10 times",
        "Requires 3+ hours and high risk of human configuration error"
      ]
    },
    automation: {
      title: "Infrastructure Automation (IaC) ✅",
      steps: [
        "Write 1 declarative code template specifying 10 servers & network rules",
        "Execute 1 single CLI command (e.g., terraform apply)",
        "Cloud API automatically creates & connects all 10 servers instantly",
        "Takes 2 minutes & produces 100% reproducible environments every time"
      ]
    }
  },

  restaurantAnalogy: {
    title: "Real-World Analogy: Manual Table Setup vs Automated Layout System 🍲",
    text: "Imagine arranging 100 banquet dining tables by manually placing every tablecloth, plate, fork, and candle one by one. Now imagine loading a digital seating blueprint into a robotic setup system that positions all 100 tables flawlessly in 30 seconds. Infrastructure automation is that digital blueprint for cloud data centers."
  },

  diagramSteps: [
    { step: "Step 1", title: "Instructions / Code", desc: "Developer writes infrastructure specification code (YAML/JSON/HCL)" },
    { step: "Step 2", title: "Cloud Automation Tool", desc: "Platform tool (AWS CloudFormation, Azure ARM, GCP Deployment Manager, Terraform) parses code" },
    { step: "Step 3", title: "Cloud Resources Created", desc: "Virtual Machines, Databases, Storage Buckets & Firewalls provisioned automatically" }
  ],

  cloudExamples: [
    { 
      name: "AWS CloudFormation & AWS CDK", 
      cloud: "AWS", 
      desc: "Native AWS IaC service that provisions and manages AWS resources using JSON/YAML templates or programming languages (TypeScript/Python)." 
    },
    { 
      name: "Azure Resource Manager (ARM) & Bicep", 
      cloud: "Azure", 
      desc: "Microsoft Azure infrastructure automation framework using JSON scripts or domain-specific Bicep code." 
    },
    { 
      name: "Google Cloud Deployment Manager / Terraform", 
      cloud: "GCP / Multi-Cloud", 
      desc: "Automates Google Cloud resource creation using YAML templates or cloud-agnostic HashiCorp Terraform configuration code." 
    }
  ],

  rememberBox: "Infrastructure Automation = Writing code to provision and manage cloud infrastructure automatically instead of manual clicks!",
  examPoint: "Infrastructure Automation treats infrastructure as code (IaC), ensuring consistent, repeatable, version-controlled, and automated cloud environment setup.",
  classroomQuestion: "Q: What is the primary benefit of Infrastructure Automation over manual cloud console management?\nA: Speed, 100% configuration consistency, version control history, and elimination of human configuration errors."
};

export const completeWorkflowData = {
  title: "Complete Cloud DevOps Workflow",
  subtitle: "End-to-End Enterprise Architecture: From Local Code to Production Cloud",
  steps: [
    {
      number: "1",
      name: "Developer",
      icon: "User",
      desc: "Developer writes application code locally and pushes updates to Git cloud repositories."
    },
    {
      number: "2",
      name: "Cloud DevOps Tool",
      icon: "Cpu",
      desc: "DevOps service (AWS CodePipeline / Azure DevOps / GCP Cloud Build) receives webhook notification."
    },
    {
      number: "3",
      name: "Build",
      icon: "Hammer",
      desc: "Cloud build engine compiles source code, resolves dependencies, and packages binaries/containers."
    },
    {
      number: "4",
      name: "Test",
      icon: "CheckCircle2",
      desc: "Automated unit, integration, and security test suites execute to validate build quality."
    },
    {
      number: "5",
      name: "Deploy",
      icon: "Rocket",
      desc: "Tested build artifacts deploy automatically to cloud infrastructure provisioned via Infrastructure Automation."
    },
    {
      number: "6",
      name: "Live Application",
      icon: "Globe",
      desc: "Application runs live in production cloud environments, accessible to end-users with zero downtime."
    }
  ]
};

export const caseStudyData = {
  title: "Real-World Industry Case Study: University Student Web Application 🎓",
  scenario: "A university needs to launch an automated student portal for exam results, course registrations, and digital lecture notes, supporting over 20,000 active students.",
  flow: [
    {
      stage: "1. Code Development & Source Control",
      detail: "Faculty Vaishnavi Gupta and software engineers write web portal features and commit updates to a secure GitHub repository."
    },
    {
      stage: "2. Cloud DevOps Tool Trigger",
      detail: "Cloud DevOps tools (AWS CodePipeline / Azure DevOps / GCP Cloud Build) detect the new code push and launch an automated pipeline."
    },
    {
      stage: "3. Automated Compilation & Quality Testing",
      detail: "The cloud build runner compiles React frontend & Node.js backend code, executing automated test suites to ensure login & result retrieval work bug-free."
    },
    {
      stage: "4. Infrastructure Automation Provisioning",
      detail: "An Infrastructure as Code script (AWS CloudFormation / Terraform) automatically provisions 4 Virtual Machines, 1 Load Balancer, and 1 Managed SQL Database."
    },
    {
      stage: "5. Automated Production Deployment",
      detail: "The verified application build automatically deploys onto the freshly provisioned cloud servers with zero downtime."
    },
    {
      stage: "6. Student End-User Access",
      detail: "Thousands of students log into the portal simultaneously, viewing exam results with high availability and speed."
    }
  ],
  keyOutcome: "Manual deployment of this portal would take 2 weeks of manual server setup and file copying. With Cloud DevOps tools and Infrastructure Automation, the entire build, test, resource creation, and live deployment completes automatically in less than 4 minutes!"
};

export const mindMapSummary = [
  {
    category: "Cloud Developer Tools",
    color: "bg-blue-500",
    items: [
      "AWS CodePipeline (Code → Build → Test → Deploy)",
      "Azure DevOps (Plan → Code → Build → Test → Deliver)",
      "GCP Cloud Build (Code → Build → Test → Output)"
    ]
  },
  {
    category: "Infrastructure Automation",
    color: "bg-purple-500",
    items: [
      "Replaces manual console clicks with IaC code scripts",
      "Manual: 10 resources one-by-one ❌",
      "Automation: Single code instruction execution → Auto provisioned ✅",
      "Tools: AWS CloudFormation, Azure ARM, GCP Deployment Manager, Terraform"
    ]
  },
  {
    category: "Key Benefits",
    color: "bg-emerald-500",
    items: [
      "Rapid continuous software release",
      "Elimination of human configuration errors",
      "24/7 cloud continuous integration",
      "Unified engineering collaboration"
    ]
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of AWS CodePipeline?",
    options: [
      "To move code from development to testing and deployment automatically",
      "To design graphic assets for web apps",
      "To format storage hard drives locally",
      "To manually compose emails to users"
    ],
    answer: 0,
    explanation: "AWS CodePipeline automates the software release process by orchestrating code through Code → Build → Test → Deploy stages automatically."
  },
  {
    id: 2,
    question: "Which cloud provider offers the Azure DevOps developer suite?",
    options: [
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
      "Oracle Cloud"
    ],
    answer: 2,
    explanation: "Azure DevOps is a comprehensive suite of cloud developer tools provided by Microsoft Azure."
  },
  {
    id: 3,
    question: "What is the core function of GCP Cloud Build?",
    options: [
      "Purchasing physical server hardware",
      "Managing social media accounts",
      "Writing manual documentation on paper",
      "Automatically building, compiling, and testing application code on Google Cloud"
    ],
    answer: 3,
    explanation: "GCP Cloud Build is Google Cloud's serverless build and container compilation engine."
  },
  {
    id: 4,
    question: "What does Infrastructure Automation (Infrastructure as Code / IaC) mean?",
    options: [
      "Hiring manual operators to type terminal commands",
      "Using code configuration files to create and manage cloud resources automatically",
      "Turning off electricity in cloud data centers",
      "Manually clicking the cloud console dashboard 100 times"
    ],
    answer: 1,
    explanation: "Infrastructure Automation uses code scripts to provision and manage cloud infrastructure automatically and consistently."
  },
  {
    id: 5,
    question: "What is the correct 4-stage pipeline sequence for AWS CodePipeline?",
    options: [
      "Code → Build → Test → Deploy",
      "Deploy → Test → Build → Code",
      "Build → Code → Deploy → Test",
      "Plan → Run → Stop → Code"
    ],
    answer: 0,
    explanation: "AWS CodePipeline follows the structured delivery sequence: Code → Build → Test → Deploy."
  },
  {
    id: 6,
    question: "Which sequence represents the 5-stage software delivery workflow in Azure DevOps?",
    options: [
      "Code → Sleep → Run → Delete",
      "Deliver → Plan → Code → Test → Build",
      "Plan → Code → Build → Test → Deliver",
      "Build → Test → Plan → Deliver → Code"
    ],
    answer: 2,
    explanation: "Azure DevOps supports the end-to-end lifecycle: Plan → Code → Build → Test → Deliver."
  },
  {
    id: 7,
    question: "In our real-world restaurant analogy, what does an automated kitchen order pipeline represent?",
    options: [
      "Washing kitchen dishes by hand",
      "Writing paper food receipts",
      "Manual chef food prep",
      "DevOps automated tools receiving code instructions and executing builds & deployments automatically"
    ],
    answer: 3,
    explanation: "Just as digital POS systems transmit orders to automated kitchen stations, DevOps tools automate build, test, and release tasks upon receiving code."
  },
  {
    id: 8,
    question: "Why do engineering teams prefer cloud build engines like GCP Cloud Build over compiling locally?",
    options: [
      "Because local developer laptops lack displays",
      "Because cloud build engines use fast, scalable cloud workers without freezing local developer machines",
      "Because local laptops cannot connect to the internet",
      "Because cloud builds are written on paper"
    ],
    answer: 1,
    explanation: "GCP Cloud Build offloads heavy compilation and container building to high-speed cloud infrastructure, saving developer time and CPU memory."
  },
  {
    id: 9,
    question: "Which tool is a native AWS Infrastructure as Code (IaC) service used to automate AWS resource creation?",
    options: [
      "Azure Resource Manager (ARM)",
      "Google Cloud Deployment Manager",
      "AWS CloudFormation",
      "Docker Desktop"
    ],
    answer: 2,
    explanation: "AWS CloudFormation is Amazon Web Services' native Infrastructure as Code (IaC) service that provisions and manages AWS resources automatically."
  },
  {
    id: 10,
    question: "Who is the faculty for this DevOps in Cloud course unit?",
    options: [
      "Vaishnavi Gupta (VRG)",
      "Anonymous Bot",
      "External Assessor",
      "John Doe"
    ],
    answer: 0,
    explanation: "Unit 7 DevOps Tools in the Cloud is authored by Faculty Vaishnavi Gupta (VRG)."
  }
];

export const vivaQuestions = [
  {
    id: 1,
    question: "1. Define AWS CodePipeline and list its 4 main pipeline stages.",
    answer: "AWS CodePipeline is a managed cloud CI/CD service that automates software release pipelines. Its 4 stages are: Code → Build → Test → Deploy.",
    tip: "Highlight that it automates continuous delivery on AWS."
  },
  {
    id: 2,
    question: "2. What is Azure DevOps and what are its 5 core integrated services?",
    answer: "Azure DevOps is Microsoft's end-to-end cloud developer suite. Its 5 core components are Azure Boards (Planning), Azure Repos (Code), Azure Pipelines (CI/CD), Azure Test Plans (Testing), and Azure Artifacts (Package storage).",
    tip: "State the 5-stage workflow: Plan → Code → Build → Test → Deliver."
  },
  {
    id: 3,
    question: "3. What is GCP Cloud Build and why is it serverless?",
    answer: "GCP Cloud Build is Google Cloud's serverless build engine that compiles code and builds Docker containers. It is serverless because developers do not need to manage build servers—Google provisions temporary build containers automatically.",
    tip: "Emphasize container image building and fast cloud compilation."
  },
  {
    id: 4,
    question: "4. What is Infrastructure Automation (IaC) and give examples for AWS, Azure, and GCP?",
    answer: "Infrastructure Automation means using code scripts to provision and manage cloud resources automatically. Examples include AWS CloudFormation (AWS), Azure Resource Manager / Bicep (Azure), GCP Deployment Manager (Google Cloud), and Terraform (Multi-cloud).",
    tip: "Contrast manual console clicking ❌ vs automated code execution ✅."
  },
  {
    id: 5,
    question: "5. Explain the real-world industry analogy for Cloud DevOps tools.",
    answer: "It is comparable to an automated restaurant pipeline where digital orders trigger automated prep, cooking, and delivery stations, replacing manual chef tasking with fast, error-free automation.",
    tip: "Analogy demonstrates clear conceptual understanding to examiners!"
  }
];

export const examQuestions = [
  {
    id: 1,
    question: "Q1. Explain AWS CodePipeline with its 4-stage pipeline architecture, ecosystem tools, and benefits. (5 Marks)",
    answer: [
      "Definition: AWS CodePipeline is a fully managed cloud CI/CD service by AWS that automates release pipelines for fast, reliable application updates.",
      "Pipeline Architecture: Code → Build → Test → Deploy.",
      "1. Code: Source code committed to AWS CodeCommit or GitHub.",
      "2. Build: AWS CodeBuild compiles source code and packages artifacts.",
      "3. Test: Automated test suites validate application functionality.",
      "4. Deploy: AWS CodeDeploy publishes artifacts to EC2, ECS, or Lambda.",
      "Key Benefits: Eliminates manual errors, accelerates release velocity, and ensures continuous deployment."
    ]
  },
  {
    id: 2,
    question: "Q2. Describe Azure DevOps and detail its 5-stage software delivery workflow. (5 Marks)",
    answer: [
      "Definition: Azure DevOps is Microsoft's unified cloud platform supporting the complete software lifecycle.",
      "5-Stage Workflow: Plan → Code → Build → Test → Deliver.",
      "1. Plan: Agile backlog & sprint tracking via Azure Boards.",
      "2. Code: Git repository storage via Azure Repos.",
      "3. Build: Automated build compilation via Azure Pipelines.",
      "4. Test: Automated regression testing via Azure Test Plans.",
      "5. Deliver: Continuous deployment to Azure VMs, App Services, or AKS.",
      "Key Advantage: All-in-one unified dashboard with native Microsoft Azure integration."
    ]
  },
  {
    id: 3,
    question: "Q3. What is GCP Cloud Build? Explain its working mechanism and container integration. (5 Marks)",
    answer: [
      "Definition: GCP Cloud Build is a serverless CI/CD build engine on Google Cloud Platform.",
      "Workflow: Code → Build → Test → Output.",
      "Working Mechanism: Reads cloudbuild.yaml, executes build steps inside isolated Docker containers on Google Cloud infrastructure.",
      "Container Integration: Compiles source code, runs automated tests, and pushes finished Docker container images directly to Google Artifact Registry.",
      "Why Use It: Offloads resource-heavy build processing from developer laptops to Google's fast cloud infrastructure."
    ]
  },
  {
    id: 4,
    question: "Q4. Compare Manual Cloud Console Provisioning vs Infrastructure Automation (IaC). List platform-specific tools. (5 Marks)",
    answer: [
      "Manual Console Provisioning: Creating resources via manual dashboard clicks. It is slow (hours), non-reproducible, and prone to human errors ❌.",
      "Infrastructure Automation: Defining cloud resources using declarative code scripts (IaC) ✅.",
      "Speed & Consistency: IaC provisions hundreds of cloud resources in minutes with 100% configuration consistency.",
      "Platform-Specific IaC Tools:",
      "• AWS: AWS CloudFormation & AWS CDK",
      "• Azure: Azure Resource Manager (ARM) & Bicep",
      "• GCP: Google Cloud Deployment Manager",
      "• Multi-Cloud Standard: HashiCorp Terraform"
    ]
  },
  {
    id: 5,
    question: "Q5. Illustrate the Complete Cloud DevOps Workflow using an Enterprise University Student Portal Case Study. (10 Marks)",
    answer: [
      "Overview: An automated university web portal serving 20,000 students built, tested, and deployed via cloud DevOps tools.",
      "End-to-End Workflow:",
      "1. Developer: Code updates pushed to GitHub repository.",
      "2. Cloud DevOps Tool: AWS CodePipeline / Azure DevOps / GCP Cloud Build detects commit via webhook.",
      "3. Automated Build & Test: Build runner compiles code and executes automated student login tests.",
      "4. Infrastructure Automation: IaC template provisions 4 Virtual Machines, Load Balancers, and a SQL Database automatically.",
      "5. Deploy: Verified application artifacts deploy automatically onto provisioned cloud servers.",
      "6. Production Access: Students access portal with 99.99% uptime and zero deployment downtime."
    ]
  }
];

export const shortAnswerQuestions = [
  {
    id: 1,
    question: "1. What are the key differences between AWS CodePipeline, Azure DevOps, and GCP Cloud Build?",
    answer: "AWS CodePipeline is an orchestration service tailored for AWS CI/CD pipelines; Azure DevOps is an all-in-one suite covering planning, repos, and pipelines on Azure; GCP Cloud Build is a serverless container compilation engine on Google Cloud."
  },
  {
    id: 2,
    question: "2. Why is Infrastructure as Code (IaC) essential for modern cloud engineering?",
    answer: "IaC replaces manual console clicks with version-controlled code, guaranteeing 100% environment consistency, fast disaster recovery, and automated resource creation."
  },
  {
    id: 3,
    question: "3. Name one cloud-native infrastructure automation tool for AWS, Azure, and GCP.",
    answer: "AWS: AWS CloudFormation | Azure: Azure Resource Manager (ARM) / Bicep | GCP: Google Cloud Deployment Manager."
  }
];

export const assignments = [
  {
    id: 1,
    title: "Assignment 1: Cloud Pipeline Diagram 🎨",
    task: "Draw and label the 4-stage pipeline diagram for AWS CodePipeline (Code → Build → Test → Deploy), explaining the function of each stage in your notebook."
  },
  {
    id: 2,
    title: "Assignment 2: Real-World Industry Analogy 📝",
    task: "Write a short comparison between manual car assembly vs an automated robotic manufacturing line, relating it to Cloud DevOps and Infrastructure Automation."
  },
  {
    id: 3,
    title: "Assignment 3: Cloud Tool Selection Case 🧠",
    task: "If an enterprise uses Google Cloud Platform and wants to automate building Docker container images from GitHub, which GCP tool should they select and why? (Hint: GCP Cloud Build)."
  }
];
