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
          Most of my experience involves designing and building automations and integrations in the Observability and AI space.
          I'm currently open to new opportunities in both full-stack and backend engineering roles where I can apply this expertise to deliver meaningful impact.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-4">Work Experience</h2>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">Visa</h2>
            <p className="text-sm dark:text-neutral-300">Sr. Software Engineer, July 2025 - Present</p>
            <p className="text-sm dark:text-neutral-300">Software Engineer, February 2023 - June 2025</p>
            <p className="text-sm dark:text-neutral-300">Intern, May 2022 - July 2022</p>
            <p className="text-sm dark:text-neutral-300">Intern, May 2021 - July 2021</p>
          </div>
          <ul className='text-l dark:text-neutral-300 indented-list ml-4'>
            <li>Spearheaded a suite of AI-driven observability initiatives, including:
              <ul className='text-l dark:text-neutral-300 indented-list ml-4'>
                <li>A suite of MCP servers for extracting insights from Prometheus metrics, Clickhouse Logs and Bosun Alerts.</li>
                <li>An intelligent workflow for quick boilerplating of Grafana Dashboards.</li>
                <li>An AI chat assistant powered by RAG, improving user onboarding efficiency by 75%.</li>
                <li>An autogen AI agent, capable of shortening incident resolution times by 80%.</li>
                <li>A log ingestion optimiser, projected to save 30% in licensing cost.</li>
              </ul>
            </li>
            <li>Built an endpoint monitoring service that simplifies Blackbox Exporter monitoring for thousands of endpoints.</li>
            <li>Developed an onboarding service for integrating Active-Active Automation (AAA) in metric-based alerts.</li>
            <li>Implemented IBM Netcool API integration in alerting pipelines.</li>
            <li>Supported the development of a configuration tool that leverages on Git APIs to manage exporter configurations across thousands of servers.</li>
            <li>Built a Prometheus configuration manager using TypeScript and Go to streamline shared configuration management across VMs and Kubernetes clusters, reducing administrative overhead by 90%.</li>
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
          React, Next.js, Node.js, Redis, MySQL, MongoDB, GraphQL, Kafka, Prometheus, Clickhouse, Splunk, Node Exporter, Ansible, Grafana, autogen, MCP, Temporal
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
          <li><a rel="noopener noreferrer" href="https://github.com/pab1it0/prometheus-mcp-server/releases/tag/v1.2.0" target="_blank" className="link">Prometheus MCP Server</a> - Contributed support for custom MCP server configuration and FastMCP 2.0.</li>
          <li><a rel="noopener noreferrer" href="https://github.com/chensxb97/mcpObservability" target="_blank" className="link">MCP for AI Observability.</a></li>
          <li><a rel="noopener noreferrer" href="https://github.com/chensxb97/genaiObservability" target="_blank" className="link">Generative AI usecases in Observability.</a></li>
          <li>Exploring <a rel="noopener noreferrer" href="https://github.com/chensxb97/monacopilotEditor" target="_blank" className="link">Monacopilot</a> for intelligent Github Copilot-like autocompletions.</li>
          <li><a rel="noopener noreferrer" href="https://github.com/chensxb97/endpointMonitoringService" target="_blank" className="link">Endpoint Monitoring Service</a> for simplifying Blackbox Exporter monitoring.</li>
          <li><a rel="noopener noreferrer" href="https://github.com/chensxb97/serviceManager" target="_blank" className="link">Service Lifecycle Manager</a>, a UI prototype written in React/Go for managing service lifecycles, boosting deployment speeds by 90%, inspired by Apache Amabari.</li>
          <li><a rel="noopener noreferrer" href="https://github.com/chensxb97/passportPhoto" target="_blank" className="link">Passport photo maker</a>, a Python tool using opencv and rembg libraries for quick generation of ICA-compliant passport photos.</li>
          <li>A step by step <a rel="noopener noreferrer" href="https://github.com/chensxb97/react-next-migration" target="_blank" className="link">migration guide </a>from React to NextJS to capitalise on React Server Components.</li>
          <li><a rel="noopener noreferrer" href="https://github.com/chensxb97/react-app-template" target="_blank" className="link">React App Template</a> that supports Basic CRUD and Vertical sidebar.</li>
        </ul >

        <p className="text-l dark:text-neutral-300">
          For a deep dive on the implementations, please check them out on <a rel="noopener noreferrer" target='_blank' href='https://github.com/chensxb97/' className="link">
            Github
          </a>.
        </p>
      </div>
    </section >
  )
}
