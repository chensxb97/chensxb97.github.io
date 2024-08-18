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
          The majority of my experience involves designing full-stack automations and integrations in observability.
          Today, I am actively seeking new opportunities to apply my expertise in observability, distributed systems, and new areas of backend development.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-1">Education</h2>
        <ul className='indented-list ml-4 text-l dark:text-neutral-300'>
          <li>Got my B.S in Engineering Science (Mechanical Engineering) and M.S in Science (Technology Management) from Nanyang Technological Unversity (NTU) in 2022.</li>
          <li>Graduated with a First Class Honors, GPA 4.76/5.</li>
          <li>
            For my <a rel="noopener noreferrer" href="https://github.com/chensxb97/ferryServiceVRP" target="_blank" style={{ color: '#91e8ff' }}>Final Year Project</a>, I researched and designed a routing and scheduling algorithm in the context of ferry service operations, implemented in Python.
          </li>
        </ul>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-1">Skills</h2>
        <ul className='indented-list ml-4 text-l dark:text-neutral-300'>
          <li className="text-l dark:text-neutral-300">React for frontend development</li>
          <li>Golang for observability development, mostly on Prometheus and Exporters instrumentation</li>
          <li>Python for automating migrations</li>
          <li>Ansible for seamless builds and deployment</li>
        </ul>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-4">Work Experience</h2>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">Visa Inc</h2>
            <p className="text-l dark:text-neutral-300">Software Engineer, February 2023 - Present</p>
            <p className="text-l dark:text-neutral-300">Intern, May 2022 - July 2022</p>
          </div>
          <ul className='text-l dark:text-neutral-300 indented-list ml-4'>
            <li>Developed a self-service onboarding service for developer teams for monitoring thousands of endpoints using Blackbox Exporter.</li>
            <li>Supported the development of a configuration management tool for managing exporter configurations using Git APIs, deployed across thousands of servers,</li>
            <li>Prototyped a log enrolment form powered with Generative AI in Hackathon to reduce log ingestion, projected to save up to 30% in licensing cost.</li>
            <li>Implemented a self-service form for integrating AAA failover in hundreds of alerts.</li>
            <li>Designed a Prometheus Configuration Management system for automating the changes in shared configurations across all Prometheus services deployed in both baremetal and K8 clusters, with a potential to reduce manual overhead by at least 90%.</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">HTX</h2>
            <p className="text-l dark:text-neutral-300">Intern, December 2021 - February 2022</p>
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
            <p className="text-l dark:text-neutral-300">Intern, December 2020 - April 2021</p>
          </div>
          <ul className='text-l dark:text-neutral-300 indented-list ml-4'>
            <li>
              Worked on data-patching and managed small feature-developments on Shopee’s Salesforce Force.com platform using APEX, Lightning and SOQL.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <h2 className="text-l font-medium dark:text-neutral-200">Cisco</h2>
            <p className="text-l dark:text-neutral-300">Intern, May 2020 - July 2020</p>
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
        <h2 className="text-xl font-medium mb-1">Side Projects</h2>
        <ul className='indented-list ml-4 text-l dark:text-neutral-300 mb-2'>
          <li>React App Template that supports Basic CRUD and Vertical sidebar</li>
          <li>To-Do App, made using NextJS</li>
          <li>Prometheus Query Visualizer, a React app that onboards and visualises Prometheus queries</li>
          <li>A step-by-step guide for migrating between React to NextJS for large repos</li>
          <li>Passport photo making, a Python app that uses opencv and rembg libraries for generating ICA-compliant passport photos</li>
        </ul >
        <i className="text-l dark:text-neutral-300">
          For more details, please check these out on <a rel="noopener noreferrer" target='_blank' href='https://github.com/chensxb97/' style={{ color: '#91e8ff' }}>
            Github
          </a>
        </i>.
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-1">Other things about me</h2>
        <ul className='indented-list ml-4 mb-4 text-l dark:text-neutral-300'>
          <li>I used to intern as a secondary school teacher. Today, I still enjoy coaching or giving technical sharings.</li>
          <li>I used to compete in powerlifting but have stopped doing it due to its monotony.</li>
          <li>I discovered rock-climbing in university and have been doing this for close to 6 years, probably because I get to 1) Keep fit and 2) Extend my problem-solving skills outside of work.</li>
        </ul>
      </div >
    </section >
  )
}
