export const metadata = {
  title: 'Work',
  description: 'My Work Page',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-medium tracking-tighter">
        my work 🛠️
      </h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-1">Summary</h2>
        <p className="text-l dark:text-neutral-300">
          The majority of my experience involves building integrations and tools in the Observability space.
          When it comes to building new apps or features, I am always seeking to chase productivity, eliminate operational overhead and improve the user experience.
          Today, I am open to new opportunities to apply this expertise in both full-stack and backend engineering.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-4">Work Experience</h2>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">Visa</h2>
            <p className="text-sm dark:text-neutral-300">Software Engineer, February 2023 - Present</p>
            <p className="text-sm dark:text-neutral-300">Intern, May 2022 - July 2022</p>
            <p className="text-sm dark:text-neutral-300">Intern, May 2021 - July 2021</p>
          </div>
          <ul className='text-l dark:text-neutral-300 indented-list ml-4'>
            <li>Prototyped an AI-powered observability assistant using the autogen framework, accelerating the resolution of infrastructure issues by 80%.</li>
            <li>Created an AI-driven onboarding tool for optimising log ingestion, with a projection of 30% in cost savings.</li>
            <li>Designed and implemented new features in React to improve the user experience of developer teams on Visa's Observability Platform.</li>
            <li>Developed several automations to allow critical integrations with existing alerting workflows such as AAA failover and additional exporter support.</li>
            <li>Supported the development of a configuration tool using Git APIs for managing exporter configurations across thousands of servers.</li>
            <li>Built a Prometheus configuration manager using TypeScript and Go to streamline shared configuration management across hundreds of VMs and Kubernetes clusters. Automated deployment reduced manual DevOps overhead by 90%.</li>
            <li>Explored and developed a modularized Prometheus exporter from open-source grok exporter, to extract metrics from unstructured log data.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">HTX</h2>
            <p className="text-sm dark:text-neutral-300">Intern, December 2021 - February 2022</p>
          </div>
          <ul className='text-l dark:text-neutral-300 indented-list ml-4'>
            <li>
              Assisted engineers in the study of industrial chemical leaks and optimizing the locations of sensor placements at community areas situated near high-risk industrial sites, to enable early detection of hazardous chemical leaks.
            </li>
            <li>
              Researched and implemented Python algorithms to predict and optimize the locations of sensor placements.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">Shopee</h2>
            <p className="text-sm dark:text-neutral-300">Intern, December 2020 - April 2021</p>
          </div>
          <ul className='text-l dark:text-neutral-300 indented-list ml-4'>
            <li>
              Managed data patching and development projects on Salesforce,com platform using APEX, Lightning, SOQL, and related technologies.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">Cisco</h2>
            <p className="text-sm dark:text-neutral-300">Intern, May 2020 - July 2020</p>
          </div>
          <ul className='indented-list ml-4 text-l dark:text-neutral-300'>
            <li>
              Researched on OpenCV's object-detection algorithms for pedestrian and vehicle real-time surveillance footage
            </li>
            <li>
              Co-developed a chatbot using Cisco's Webex Teams' API and ngrok that educates users on Covid-19 related insights.
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-1">Education</h2>
        <ul className='indented-list ml-4 text-l dark:text-neutral-300'>
          <li>Got my B.S in Engineering Science (Mechanical Engineering) and M.S in Science (Technology Management) from Nanyang Technological Unversity (NTU) in 2022.</li>
          <li>Graduated with a First Class Honors, GPA 4.76/5.</li>
          <li>
            For my <a rel="noopener noreferrer" href="https://github.com/chensxb97/ferryServiceVRP" target="_blank" className="link">Final Year Project</a>, I researched and designed a routing and scheduling algorithm to tackle the Vehicle Routing Problem (VRP) in the context of ferry service operations.
          </li>
        </ul>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="text-xl font-medium  mb-4">Skills</h2>
      <div className="mb-4">
        <h2 className="text-l font-medium dark:text-neutral-200">Programming Languages</h2>
        <li className='text-l dark:text-neutral-300 indented-list ml-4'>
          Javascript,
          Typescript,
          Go,
          Python
        </li>
      </div>
      <div className="mb-4">
        <h2 className="text-l font-medium dark:text-neutral-200">Technologies</h2>
        <li className='text-l dark:text-neutral-300 indented-list ml-4'>
          React, Next.js, Node.js, Redis, MySQL, MongoDB, GraphQL, Kafka, Prometheus, Node Exporter, Ansible, Grafana, Generative AI, autogen
        </li>
      </div>
      <div className="mb-4">
        <h2 className="text-l font-medium dark:text-neutral-200">Certifications</h2>
        <div className='text-l dark:text-neutral-300 indented-list ml-4'>
          <li><a rel="noopener noreferrer" href="https://www.credly.com/badges/642a9fa3-b200-4994-967e-ebc698236747/public_url" target="_blank" className="link">AWS Certified Solutions Architect - Associate</a></li>
        </div>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-1">Side Projects</h2>
        <ul className='indented-list ml-4 text-l dark:text-neutral-300 mb-2'>
          <li>Prometheus Onboarding Manager, a React/Go app that streamlines the management of your Prometheus Services</li>
          <li>Service Manager, a UI prototype written in React/Go for managing service lifecycles, boosting deployment speeds by 90%, inspired by Apache Amabari.</li>
          <li>A step by step migration guide from React to NextJS to capitalise on React Server Components.</li>
          <li>React App Template that supports Basic CRUD and Vertical sidebar</li>
          <li>Passport photo maker, a Python tool using opencv and rembg libraries for quick generation of ICA-compliant passport photos.</li>
        </ul >
        <i className="text-l dark:text-neutral-300">
          For more details, please check them out on <a rel="noopener noreferrer" target='_blank' href='https://github.com/chensxb97/' className="link">
            Github
          </a>.
        </i>
      </div>
    </section >
  )
}
