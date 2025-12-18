export const en = {
  hero: {
    badge: "Full-Stack Web Developer",
    headline: {
      part1: "Building Digital Products",
      part2: "that Drive Business Growth"
    },
    subheadline: "I help businesses turn complex challenges into <strong>profitable and efficient</strong> web applications. My focus goes beyond code—I deliver <strong>measurable results</strong> for your business.",
    cta: {
      consult: "Hire Me",
      processing: "Processing...",
      roi: "Free Consultation"
    }
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact"
  },
  techStack: {
    title: "Technology Stack I Use"
  },
  projects: {
    section: {
      title: "Featured Projects",
      subtitle: "Some of the best works I've delivered for clients across various industries.",
      loading: {
        text1: 'Loading project',
        text2: 'Fetching portfolio',
        text3: 'Preparing showcase',
        text4: 'Almost ready',
        subtitle: 'Curating the best work for you'
      },
      learnMore: 'Explore Project',
      featured: 'Featured',
      watchDemo: 'Watch Demo',
      viewDetail: 'View Detail'
    },
    '1': {
      title: 'UpSkills - E-Learning Management System',
      shortDescription: 'A comprehensive web-based e-learning platform designed to help users improve their abilities through structured online learning.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        UpSkills is a comprehensive web-based e-learning platform designed to help users improve their abilities through structured online learning. The platform provides a modern environment for course browsing, progress tracking, skill development, and subscription-based access to premium content.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Technology Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>React 19 with TypeScript</li>
              <li>Vite & React Router DOM</li>
              <li>Zustand for State Management</li>
              <li>Axios & @google/genai</li>
              <li>Zod for Runtime Validation</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Laravel (PHP Framework)</li>
              <li>MySQL/PostgreSQL/SQLite</li>
              <li>Laravel Sanctum for Authentication</li>
              <li>Eloquent ORM</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Impact:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
            <span><strong>Democratizing Education:</strong> Providing a structured, accessible learning environment for skill development.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Enhanced Engagement:</strong> Features like progress tracking and AI chatbot assistance boost user retention.</span>
          </li>
           <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Mentor Empowerment:</strong> Dedicated dashboard for efficient course content management.</span>
          </li>
        </ul>
      </div>
      `,
      industry: 'Education & EdTech',
      date: 'Full-Stack Developer'
    },
    '2': {
      title: 'Saturday - Warehouse & Merchant Management System',
      shortDescription: 'A full-stack inventory and transaction management system designed for managing warehouses and merchants.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        A full-stack inventory and transaction management system <strong>designed for managing warehouses and merchants</strong>. Enables product tracking, stock management, and sales transactions with automated 12% PPN (Indonesian VAT) tax calculation.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Tech Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>React 19 with TypeScript</li>
              <li>Vite & Tailwind CSS 4</li>
              <li>React Router DOM & TanStack Query</li>
              <li>React Hook Form + Zod</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Laravel 12 (PHP 8.2+)</li>
              <li>Laravel Sanctum & Spatie Permission</li>
              <li>MySQL / PostgreSQL</li>
              <li>Repository - Service Pattern</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Core Features:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Role-based Access Control:</strong> Manager (Admin) & Keeper (Merchant Staff) roles.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Stock Management:</strong> Tracking at warehouse and merchant levels with real-time validation.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Transactions:</strong> Multi-step processing with cart functionality and automatic 12% PPN.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Responsive Design:</strong> Optimized for desktop, tablet, and mobile usage.</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Business Impact:</h4>
        <ul class="space-y-2">
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Operational Efficiency:</strong> Centralized stock tracking eliminates manual work.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Accuracy & Transparency:</strong> Automated validation prevents overselling and ensures tax compliance.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Better Decisions:</strong> Dashboard provides revenue and sales insights.</span>
           </li>
        </ul>
      </div>

      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
         "Status: **Production-ready**. Fully functional CRUD, complete transaction flow, and operational stock management."
      </p>
      `,
      industry: 'Logistics & Supply Chain',
      date: 'Full-Stack Developer'
    },
    '3': {
      title: 'Alizon Store - Full-Stack E-Commerce',
      shortDescription: 'A full-stack e-commerce web application designed to provide a complete online shopping experience.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        A full-stack e-commerce web application designed to provide a complete online shopping experience. The platform enables users to browse products, manage shopping carts, wishlists, and complete purchases through secure Stripe payment integration.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Tech Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Next.js 15 (App Router) & React 19</li>
              <li>TypeScript & Tailwind CSS 4</li>
              <li>Zustand for State Management</li>
              <li>Radix UI & Lucide React</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend & Tools:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>NextAuth v5 (Auth.js)</li>
              <li>Prisma ORM & PostgreSQL</li>
              <li>Stripe Payment Integration</li>
              <li>TanStack Query & Zod</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Key Features:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Full E-Commerce Flow:</strong> Product browsing, cart management, wishlist, and secure checkout.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Seller Dashboard:</strong> Dedicated interface for managing products and tracking orders.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Secure Payments:</strong> Integrated Stripe Checkout with webhook handling for real-time order updates.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Authentication:</strong> Secure login and registration with NextAuth v5 session management.</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Business Impact:</h4>
        <ul class="space-y-2">
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Production-Ready Template:</strong> Scalable foundation for launching real e-commerce businesses.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Secure Transactions:</strong> PCI-compliant payment processing via Stripe.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>SEO Optimization:</strong> Server-side rendering improves search engine visibility and performance.</span>
           </li>
        </ul>
      </div>

      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
        "A modern, secure, and scalable e-commerce solution built with the latest web technologies."
      </p>
      `,
      industry: 'E-Commerce & Retail',
      date: 'Full-Stack Developer'
    }
  },
  process: {
    title: "Project Workflow",
    description: "How I turn your ideas into a **high-quality** digital product.",
    steps: [
      {
        title: "Discovery & Planning",
        description: "We discuss ideas, target users, and key features. I'll create a clear technical plan so we are on the same page.",
        deliverables: ["Requirement Doc", "Technical Plan", "Timeline"]
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes and UI designs. You can see the app visuals before I start writing code.",
        deliverables: ["UI Design (Figma)", "User Flow"]
      },
      {
        title: "Development",
        description: "Coding phase begins. I build the Frontend and Backend systems in parallel with regular weekly updates.",
        deliverables: ["Weekly Update", "Staging Link"]
      },
      {
        title: "Testing & Launch",
        description: "Thorough testing to ensure no bugs. Deploy to production server and the app is ready for users.",
        deliverables: ["Bug Free App", "Deployment", "Documentation"]
      }
    ],
    cta: {
      ready: "Understand the workflow?",
      time: "Now it's time",
      condition: "to execute your idea.",
      button: "Start Project"
    }
  },
  cta: {
    title: "Need a Developer for Your Team?",
    subtitle: "I am open for freelance projects or long-term collaboration opportunities.",
    button: "Contact Me"
  },
  about: {
    title: "Who Am I?",
    subtitle: "Agam Latifullah — Full-Stack Web Developer",
    quote: "I don't just write code; I deliver business solutions.",
    whyChooseMe: "Why Choose Me?",
    description1: "Many developers write code that 'works', but often leave behind expensive 'technical debt'. I position myself as your <strong>Technical Partner</strong>.",
    description2: "I build systems that are not only technologically advanced (React, Node.js, Laravel) but also <strong>maintainable, secure, and commercially scalable</strong>. Your tech investment should generate ROI, not headaches.",
    values: [
      { title: "Business First", desc: "Every line of code must have a positive impact on your business goals." },
      { title: "Long-term Asset", desc: "Building software as a long-term asset, not a cost center." },
      { title: "Transparent", desc: "Honest communication about risks, estimates, and progress." },
      { title: "Reliable", desc: "On-time delivery with tested production quality." }
    ]
  },
  footer: {
    cta: {
      title: "Have an Interesting Project?",
      description: "Let's discuss your ideas. I'm ready to help realize them into quality digital products.",
      button: "Contact Me"
    },
    brandDescription: "Full-Stack Developer. Helping businesses transform digitally with the right technology solutions.",
    menus: {
      main: "Navigation",
      services: "Services",
      contact: "Contact",
      home: "Home",
      about: "About",
      projects: "Projects",
      process: "Workflow"
    },
    location: "Bogor, Indonesia.<br/>(Remote Available Worldwide)",
    rights: "All Rights Reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  },
  modal: {
    popular: "Featured",
    featureBreakdown: "Technical Details:",
    problem: "Challenge:",
    solution: "Solution:",
    benefit: "Impact:",
    detailsPreparing: "Details are being prepared.",
    getPromo: "View Live Demo",
    bugWarranty: "Bug Warranty & Support",
    sourceCode: "Include Source Code"
  },
  whatsappMessages: {
    consultation: "Hi Agam, I would like a free consultation regarding website/app development for my business.",
    general: "Hi Agam, I'm interested in your services and would like to discuss a potential project."
  },
  contact: {
    title: "Let's Connect",
    subtitle: "Start Project",
    headline: "Ready to Start Your Digital Project?",
    subheadline: "Consult your ideas for free.",
    info: {
      title: "Contact Info",
      description: "Available for Freelance & Remote Work.",
      email: "Email",
      status: "Status",
      open: "Open for Projects",
      ai: "AI Assistant",
      chat: "Chat WhatsApp",
      findMe: "Social Media:"
    },
    form: {
      name: { label: "Name", placeholder: "Your Name", error: { required: "Required", min: "Min 2 chars" } },
      phone: { label: "WhatsApp", placeholder: "0812...", error: { required: "Required", format: "Invalid format" } },
      email: { label: "Email", placeholder: "email@example.com", error: { required: "Required", format: "Invalid format" } },
      message: { label: "Message", placeholder: "Tell me about your project...", error: { required: "Required", min: "Min 10 chars" } },
      submit: {
        idle: "Send Key",
        sending: "Sending...",
        success: "Sent!",
        error: "Failed"
      },
      toast: {
        success: { title: "Sent", message: "Your message has been received." },
        error: { title: "Error", message: "Failed to send message." }
      }
    }
  }
};
