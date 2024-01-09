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
        <div id="skillset-main" className="pb-4">
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
          <div id="experience-item">
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

          <div id="experience-item">
            <h2 id="experience-date">July 2020 - May 2021</h2>
            <div>
              <h2>Mindgears Technology - Jr. Developer </h2>
              <p>
                Contributed to the development and maintenance of web
                applications: Assisted in coding, testing, and debugging
                web-based projects using HTML, CSS, JavaScript, and various
                frameworks, ensuring alignment with project specifications and
                standards. Collaborated within a team to troubleshoot and
                resolve technical issues: Actively participated in identifying
                and resolving bugs, conducting tests, and implementing
                enhancements, fostering a collaborative environment to deliver
                high-quality web solutions.
              </p>
              <div id="skillset">
                <p>HTML</p>
                <p>CSS</p>
                <p>Sharepoint</p>
                <p>Git</p>
                <p>Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 id="education">Education</h1>
        <div id="experience-section" className="flex flex-col ">
          <div id="experience-item">
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
          <div id="experience-item">
            <h2 id="experience-date">July 2020 - May 2022</h2>
            <div>
              <h2>Seneca College - Project Management in IT </h2>
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
          <div id="experience-item">
            <h2 id="experience-date">May 2018 - June 2021</h2>
            <div>
              <h2>VNSGU - Bachelors in Computer Applications </h2>
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
        <h1>Work</h1>
        <div className="flex flex-row">
          <a
            className="work-item flex flex-col"
            href="https://www.karanmeghani.tech"
          >
            Waiters Wallet
          </a>
          <a className="work-item" href="https://www.karanmeghani.tech">
            Waiters Wallet
          </a>

        </div>
      </div>
    </div>
  );
};
