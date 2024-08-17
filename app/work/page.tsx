export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
        my work 🛠️
      </h1>
      <div className="mb-4">
        <h1 className="text-xl font-semibold tracking-tighter">Summary</h1>
        <ul className='indented-list'>
          <li>Currently working as a software engineer at <a rel="noopener noreferrer" target='_blank' href='https://www.visa.com.sg/' style={{ color: '#91e8ff' }}>Visa Inc</a> since February 2023.</li>
          <li>Am specialized in React, Golang, and Python, with majority of my experience in designing user interfaces and backend observability solutions.</li>
          <li>Am actively seeking opportunities to apply my expertise in observability, distributed systems, and new areas of backend development.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold tracking-tighter">Education</h1>
        <ul className='indented-list'>
          <li>Got my B.S in Engineering Science (Mechanical Engineering) and M.S in Science (Technology Management) from Nanyang Technological Unversity (NTU) in December 2022.</li>
          <li>Graduated with a First Class Honors, GPA 4.76/5.</li>
          <li>
            For my <a rel="noopener noreferrer" href="https://github.com/chensxb97/ferryServiceVRP" target="_blank" style={{ color: '#91e8ff' }}>Final Year Project</a>, I researched and designed a routing and scheduling algorithm in the context of ferry service operations, implemented in Python.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold tracking-tighter">Skills</h1>
        <ul className='indented-list'>
          <li>React for frontend development</li>
          <li>Golang for observability development, mostly related to Prometheus and Exporters instrumentation</li>
          <li>Python3 scripting for automating migrations</li>
          <li>Ansible scripts for seamless builds and deployment</li>
        </ul>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold tracking-tighter mb-2">Work Experience</h1>
        <div className="mb-2">
          <h3 className="text-l font-semibold tracking-tighter">Visa Inc </h3>
          <p className="text-l tracking-tighter">Software Engineer, February 2023 - Present</p>
          <p className="text-l tracking-tighter">Intern, May 2022 - July 2022</p>
          <ul className='indented-list'>
            <li>Developed a self-service onboarding service for Developer Teams for monitoring thousands of endpoints using Blackbox Exporter.</li>
            <li>Supported the development and deployment of a configuration management tool used across 60,000 servers, for managing Node Exporter configurations and certificates using Git APIs.</li>
            <li>Prototyped a Log Enrolment form powered with Generative AI in Hackathon, projected to save up to 30% in Splunk licensing costs.</li>
            <li>Implemented a self-service form for integrating AAA failover in hundreds of Bosun and Prometheus Alerts.</li>
            <li>Designed a Prometheus Configuration Management system for automating the changes in shared configurations across all Prometheus services deployed in baremetal and K8 clusters.</li>
          </ul>
        </div>
        <div className="mb-2">
          <h3 className="text-l font-semibold tracking-tighter">HTX </h3>
          <p className="text-l tracking-tighter">Intern, December 2021 - February 2022</p>
          <ul className='indented-list'>
            <li>
              Assisted engineers in the study of industrial chemical leaks and optimizing the locations of sensor placements at community areas situated near high-risk industrial sites, to enable early detection of hazardous chemical leaks.
            </li>
            <li>
              Researched and implemented Python algorithms to predict and optimize the locations of sensor placements.
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h3 className="text-l font-semibold tracking-tighter">Shopee</h3>
          <p className="text-l tracking-tighter">Intern, December 2020 - April 2021</p>
          <ul className='indented-list'>
            <li>
              Worked on data-patching and managed small feature-developments on Shopee’s Salesforce Force.com platform using APEX, Lightning and SOQL.
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h3 className="text-l font-semibold tracking-tighter">Cisco</h3>
          <p className="text-l tracking-tighter">Intern, May 2020 - July 2020</p>
          <ul className='indented-list'>
            <li>
              Researched on OpenCV's object-detection algorithms for pedestrian and vehicle real-time surveillance footage
            </li>
            <li>
              Co-developed a chatbot using Cisco's Webex Teams' API and ngrok that educates users on Covid-19 related insights.
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold tracking-tighter">Side Projects</h1>
        <ul className='indented-list mb-2'>
          <li>React App Template that supports Basic CRUD and Vertical sidebar</li>
          <li>To-Do App, made using NextJS</li>
          <li>Prometheus Query Visualizer, a React app that onboards and visualises Prometheus queries</li>
          <li>A step-by-step guide for migrating between React to NextJS for large repos</li>
          <li>Passport photo making, a Python app that uses opencv and rembg libraries for generating ICA-compliant passport photos</li>
        </ul >
        <i className="text-m">
          For more details, please check these out on <a rel="noopener noreferrer" target='_blank' href='https://github.com/chensxb97/' style={{ color: '#91e8ff' }}>
            Github
          </a>
        </i>.
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold tracking-tighter">Other things about me</h1>
        <ul className='indented-list mb-4'>
          <li>I used to intern as a secondary school teacher. I still enjoy coaching or giving technical sharings.</li>
          <li>I used to compete in powerlifting but have stopped doing it due to its monotony.</li>
          <li>I discovered rock-climbing in university and have been doing this for close to 6 years, probably because I get to 1) Keep fit and 2) Extend my problem-solving skills outside of work.</li>
        </ul>
      </div >
    </section >
  )
}
