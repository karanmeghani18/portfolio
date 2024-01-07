import React from "react";

export const About = () => {
  return (
    <div id="about" className="text-white  gap-[20px] flex flex-col m-20 ">
      <h2 id="about">About</h2>
      <p className="text-[#cbcbcb] ">
        Tech-savvy recent graduate with a strong foundation in various
        programming languages and frameworks. Leveraging 3+ years of hands-on
        customer service experience, adept at creating efficient, user-centric
        mobile applications. Proficient in delivering high-quality results
        through a demonstrated track record. Seeking to contribute innovative
        solutions and technical expertise to a dynamic software development
        team.
      </p>
      <h2>Skillset</h2>
      <div id="skillset" className="flex-wrap flex ">
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

      <h2 id="experience">Experience</h2>
      <div id="experience-section" className="flex flex-col px-4 py-16">
        <div id="experience-item" className="flex flex-row flex-wrap">
          <h2 id="experience-date">June 2022 - August 2023</h2>
          <div>
            <h2 className="font-semibold text-white">
              Piebar - Bartender / Server{" "}
            </h2>
            <p className="max-w-[1100px]">
              Promoted from Host to Bartender/Server within two months for
              mastering menu knowledge, crafting diverse drink recipes, and
              delivering exceptional customer service in a fast-paced setting.
              Managed precise point-of-sale transactions, ensuring efficient
              payment processing and accuracy. Cultivated strong communication
              skills by engaging with diverse clientele, ensuring a positive
              customer experience. Thrived in a high-paced environment,
              demonstrating adaptability and problem-solving abilities to uphold
              service quality.{" "}
            </p>
          </div>
        </div>
        <div id="experience-item" className="flex flex-row flex-wrap">
          <h2 id="experience-date">July 2020 - May 2022</h2>
          <div>
            <h2 className="font-semibold text-white">
              Mindgears Technology - Jr. Developer{" "}
            </h2>
            <p className="max-w-[1100px]">
              Developed, deployed and maintained the in-house .NET application
              using C#, OOP, SAP, and SharePoint within the Agile Development
              Framework. Collaborated daily with clients, providing technical
              support and leveraging technological expertise. Assisted in
              testing and debugging procedures, ensuring seamless functionality
              of the .NET application. Contributed actively in a collaborative
              team environment utilizing Azure and Git for project management
              and version control.
            </p>
            <div id="skillset" className="flex">
              <p>C#</p>
              <p>.Net</p>
              <p>Sharepoint</p>
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="education">Education</h2>
      <div id="experience-section" className="flex flex-col px-4 py-16">
        <div id="experience-item" className="flex flex-row flex-wrap">
          <h2 id="experience-date">September 2022 - August 2023</h2>
          <div>
            <h2 className="font-semibold text-white">
              George Brown College - Mobile Application Development{" "}
            </h2>
            <p className="max-w-[1100px]">
              Acquired advanced knowledge and practical skills in mobile app
              development for iOS and Android platforms, collaborating on
              real-world projects to enhance teamwork, project management, and
              hands-on expertise with programming languages, frameworks, and
              modern app development tools.
            </p>
            <div id="skillset" className="flex">
              <p>HTML</p>
              <p>CSS</p>
              <p>Kotlin</p>
              <p>SwiftUi</p>
              <p>ReactNative</p>
            </div>
          </div>
        </div>
        <div id="experience-item" className="flex flex-row flex-wrap">
          <h2 id="experience-date">July 2020 - May 2022</h2>
          <div>
            <h2 className="font-semibold text-white">
              Seneca College - Project Management in IT{" "}
            </h2>
            <p className="max-w-[1100px]">
              Acquired a comprehensive understanding of project management
              principles and methodologies within the IT industry. Applied these
              methods to create effective project plans, ensuring successful
              project execution, while cultivating leadership and communication
              skills to coordinate with diverse stakeholders.
            </p>
            <div id="skillset" className="flex">
              <p>Project Management</p>
              <p>Agile</p>
              <p>Waterfall</p>
              <p>Scrum</p>
            </div>
          </div>
        </div>
        <div id="experience-item" className="flex flex-row flex-wrap">
          <h2 id="experience-date">May 2018 - June 2021</h2>
          <div>
            <h2 className="font-semibold text-white">
              VNSGU - Bachelors in Computer Applications{" "}
            </h2>
            <p className="max-w-[1100px]">
              Established a solid foundation in computer science, encompassing
              data structures, algorithms, and database management using Java,
              C, SQL, etc. Engaged in coding competitions and diverse projects,
              significantly enhancing problem-solving skills and gaining a
              holistic understanding of computer applications, spanning software
              development and database management.
            </p>
            <div id="skillset" className="flex">
              <p>C</p>
              <p>C++</p>
              <p>SQL</p>
              <p>Java</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
