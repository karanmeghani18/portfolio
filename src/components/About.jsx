import React from "react";

export const About = () => {
  return (
    <div>
      <div id="about" className="container">
        <h1>About</h1>
        <p>
          Tech-savvy recent graduate with a strong foundation in various
          programming languages and frameworks. Leveraging 3+ years of hands-on
          customer service experience, adept at creating efficient, user-centric
          mobile applications. Proficient in delivering high-quality results
          through a demonstrated track record. Seeking to contribute innovative
          solutions and technical expertise to a dynamic software development
          team.
        </p>
      </div>
      <div className="container">
        <h1>Skillset</h1>
        <div id="skillset" className="pb-4">
          <p>React</p>
          <p>Next.js</p>
          <p>Javascript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Java</p>
          <p>Python</p>
          <p>C#</p>
          <p>Swift</p>
          <p>Kotlin</p>
          <p>Dart</p>
          <p>Firebase</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>Express</p>
          <p>Bootstrap</p>
          <p>Tailwind CSS</p>
        </div>
      </div>
      <div className="container">
        <h1 id="experience">Experience</h1>
        <div id="experience-section" className="flex flex-col">
          <div id="experience-item" >
            <h2 id="experience-date">June 2022 - August 2023</h2>
            <div>
              <h2>Piebar - Bartender / Server </h2>
              <p>
                Promoted from Host to Bartender/Server within two months for
                mastering menu knowledge, crafting diverse drink recipes, and
                delivering exceptional customer service in a fast-paced setting.
                Managed precise point-of-sale transactions, ensuring efficient
                payment processing and accuracy. Cultivated strong communication
                skills by engaging with diverse clientele, ensuring a positive
                customer experience. Thrived in a high-paced environment,
                demonstrating adaptability and problem-solving abilities to
                uphold service quality.{" "}
              </p>
            </div>
          </div>

          <div id="experience-item" >
            <h2 id="experience-date">July 2020 - May 2022</h2>
            <div>
              <h2>Mindgears Technology - Jr. Developer </h2>
              <p>
                Developed, deployed and maintained the in-house .NET application
                using C#, OOP, SAP, and SharePoint within the Agile Development
                Framework. Collaborated daily with clients, providing technical
                support and leveraging technological expertise. Assisted in
                testing and debugging procedures, ensuring seamless
                functionality of the .NET application. Contributed actively in a
                collaborative team environment utilizing Azure and Git for
                project management and version control.
              </p>
              <div id="skillset">
                <p>C#</p>
                <p>.Net</p>
                <p>Sharepoint</p>
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 id="education">Education</h1>
        <div id="experience-section" className="flex flex-col ">
          <div id="experience-item" >
            <h2 id="experience-date">September 2022 - August 2023</h2>
            <div>
              <h2>George Brown College - Mobile Application Development </h2>
              <p>
                Acquired advanced knowledge and practical skills in mobile app
                development for iOS and Android platforms, collaborating on
                real-world projects to enhance teamwork, project management, and
                hands-on expertise with programming languages, frameworks, and
                modern app development tools.
              </p>
              <div id="skillset">
                <p>HTML</p>
                <p>CSS</p>
                <p>Kotlin</p>
                <p>SwiftUi</p>
                <p>ReactNative</p>
              </div>
            </div>
          </div>
          <div id="experience-item" >
            <h2 id="experience-date">July 2020 - May 2022</h2>
            <div>
              <h2>
                Seneca College - Project Management in IT{" "}
              </h2>
              <p>
                Acquired a comprehensive understanding of project management
                principles and methodologies within the IT industry. Applied
                these methods to create effective project plans, ensuring
                successful project execution, while cultivating leadership and
                communication skills to coordinate with diverse stakeholders.
              </p>
              <div id="skillset">
                <p>Project Management</p>
                <p>Agile</p>
                <p>Waterfall</p>
                <p>Scrum</p>
              </div>
            </div>
          </div>
          <div id="experience-item" >
            <h2 id="experience-date">May 2018 - June 2021</h2>
            <div>
              <h2>
                VNSGU - Bachelors in Computer Applications{" "}
              </h2>
              <p>
                Established a solid foundation in computer science, encompassing
                data structures, algorithms, and database management using Java,
                C, SQL, etc. Engaged in coding competitions and diverse
                projects, significantly enhancing problem-solving skills and
                gaining a holistic understanding of computer applications,
                spanning software development and database management.
              </p>
              <div id="skillset">
                <p>C</p>
                <p>C++</p>
                <p>SQL</p>
                <p>Java</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Projects</h1>
        <div className="grid grid-cols-3">
          <a
            href="#"
            class="block max-w-sm p-6 m-[8%] bg-black border border-gray-200 rounded-lg shadow
           hover:bg-black dark:bg-[#1c1c1c] dark:border-[#2c2c2c] dark:hover:bg-gray-700"
          >
            <h2 class="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Waiter's Wallet
            </h2>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 m-[8%] bg-white border border-gray-200 rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Waiter's Wallet
            </h2>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 m-[8%] bg-white border border-gray-200 rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Waiter's Wallet
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};
