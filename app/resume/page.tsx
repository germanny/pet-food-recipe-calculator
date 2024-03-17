import { Title, rem } from '@mantine/core';

export const metadata = {
  title: 'Resume',
  description: 'Resume for Jen Germann, software developer and educator',
};

export default function Resume() {
  return (
    <div>
      <Title order={1}>Resume</Title>
      <Title order={2}>Jen Germann</Title>
      <p>
        Austin, TX | hello@jengermann.com | jengermann.com |
        linkedin.com/in/jengermann | github.com/germanny
      </p>
      <Title order={3}>PROFESSIONAL SUMMARY</Title>
      <p>
        Versatile software developer with a strong understanding of software
        engineering concepts, known for collaborative skills, and a history of
        delivering significant outcomes independently. Extensive experience in
        full-stack development, producing well-documented, thoroughly-tested,
        and functional code. Skilled in effective communication, idea sharing,
        and mentorship.
      </p>
      <Title order={3}>TECHNICAL SKILLS</Title>
      <ul>
        <li>
          <strong>Languages and Libraries:</strong> JavaScript, TypeScript,
          HTML, JSON, CSS, Sass, SQL (Postgres, MySQL), GraphQL, React, Redux,
          ApolloClient, Mantine, Nivo, Jest, React Testing Library, Cypress
        </li>
        <li>
          <strong>Runtime Environments and Frameworks:</strong> Node.js,
          Next.js, ExpressJS, Bootstrap
        </li>
        <li>
          <strong>DevOps, API, Cloud, and Security Tools:</strong> Git, Docker,
          Swagger, Postman, Terraform, AWS (Lambda, EventBridge, CloudFront,
          CloudWatch, ECS, S3), OAuth, JWT
        </li>
        <li>
          <strong>Other Skills:</strong> Agile (Scrum/Kanban), Debugging, Data
          Modeling, CI/CD, Unit and E2E testing, Test-Driven Development (TDD)
        </li>
      </ul>
      <Title order={3}>EXPERIENCE</Title>
      <dl>
        <dt>
          <strong>Senior Software Engineer</strong> | Red Ventures, LLC
          <em>February 2021 - Present</em>
        </dt>
        <dd>
          <ul>
            <li>
              Leading the development of a server-side rendered admin dashboard
              using Next.js, TypeScript, and Docker, incorporating advanced
              features such as JSON Schema forms, real-time data updates with
              ApolloClient and AWS services, and comprehensive testing with Jest
              and Cypress, improving data consistency and application
              reliability.
            </li>
            <li>
              Utilizing SQL and PostgreSQL for data management and GraphQL API
              integration via Hasura, enhancing efficiency in the admin
              dashboard.
            </li>
            <li>
              Designed and led the implementation of an AWS-based event-driven
              pipeline, facilitating on-demand container runs and real-time data
              updates in the admin UI.
            </li>
            <li>
              Employing Github Actions and AWS services for CI/CD, monitoring,
              and data storage, improving development efficiency.
            </li>
            <li>
              Excelling in a remote role on an Agile team, demonstrating
              effective communication, collaboration, and proactive stakeholder
              management. Showcasing problem-solving skills through
              troubleshooting and rigorous software testing. Driving projects to
              completion with self-motivation and independence.
            </li>
          </ul>
        </dd>
        <dt>
          <strong>Engineering Manager</strong> | Red Ventures, LLC
          <em>March 2020 - February 2021</em>
        </dt>
        <dd>
          <ul>
            <li>
              Managed a team of software engineers in an Agile environment,
              leading the development, deployment, and maintenance of multiple
              website projects using JAMStack, WordPress, and AWS services.
            </li>
            <li>
              Provided technical leadership, conducted code reviews, and
              improved development processes, fostering a culture of
              collaboration and continuous learning.
            </li>
            <li>
              Coordinated with other Agile teams and stakeholders to ensure
              alignment of project goals and expectations.
            </li>
            <li>
              Mentored team members, aiding in their professional development
              and technical skill enhancement.
            </li>
            <li>
              Oversaw project timelines and resources to ensure timely and
              efficient delivery of projects.
            </li>
          </ul>
        </dd>
        <dt>
          <strong>Web Developer</strong> | HigherEducation.com
          <em>August 2011 - March 2020</em>
        </dt>
        <dd>
          <ul>
            <li>
              Developed and maintained multiple web applications, implementing
              new features, fixing bugs, and optimizing existing functionality.
            </li>
            <li>
              Conducted code reviews, wrote unit tests, and created
              documentation to ensure code quality and maintainability.
            </li>
            <li>
              Optimized sites for performance using Google PageSpeed
              Insights/Lighthouse, resulting in improved user experience and
              SEO.
            </li>
          </ul>
        </dd>
      </dl>
      <Title order={3}>EDUCATION</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: rem(15),
        }}
      >
        <div>University of Nebraska-Lincoln</div>
        <div>BA in English</div>
        <div>August 1993 - December 1998</div>
      </div>
      <Title order={3}>PROJECTS</Title>
      <dl>
        <dt style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <strong>Project 1</strong> | (Next.js, TypeScript, Hasura GraphQL
            API, JSON Schema, Mantine)
          </div>
          <em>Ongoing</em>
        </dt>
        <dd>
          <ul>
            <li>
              Developing an SSR admin dashboard with Next.js, TypeScript, and
              Mantine, featuring Mantine components for consistent UI/UX,
              ApolloClient to manage data fetching with GraphQL, and Nivo for
              data visualizations.
            </li>
            <li>
              Writing GraphQL API resolvers, generated JSON schemas from data
              models, and used these schemas with react-jsonschema-form for
              frontend data forms, improving data consistency and reducing UI
              development time by 50%.
            </li>
            <li>
              Writing a complete suite of Jest tests for every aspect of the
              user experience.
            </li>
            <li>
              Handled authentication with NextAuth, role-based authorization
              with Hasura GraphQL API, and CI/CD, monitoring, and eventing with
              Github Actions and AWS services.
            </li>
          </ul>
        </dd>
        <dt style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <strong>Project 2</strong> | (AWS EventBridge, Lambda, ECS,
            CloudWatch, and Aurora PostgreSQL, ApolloClient, TypeScript){' '}
          </div>
          <em>Fall 2023</em>
        </dt>
        <dd>
          <ul>
            <li>
              Built an AWS-based event-driven pipeline for ECS Fargate, enabling
              users run containers on-demand and reducing request friction. The
              frontend UI reacts to PostgreSQL table updates via ApolloClient
              subscriptions. Wrote Jest tests for Lambda functions and frontend
              UX.
            </li>
          </ul>
        </dd>
        <dt style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <strong>Project 3</strong> | (AWS Lambda, Hasura GraphQL API, Github
            Actions, TypeScript)
          </div>
          <em>Spring 2023</em>
        </dt>
        <dd>
          <ul>
            <li>
              Modeled database schema and built GraphQL API to provide insights
              into operational DORA metrics data, allowing the team to make
              data-driven decisions and reduced the time to access data by 75%.
            </li>
            <li>
              Wrote AWS Lambda functions to automate data processing via the
              GraphQL API. Utilized AWS CloudWatch for monitoring and
              troubleshooting the application
            </li>
            <li>
              Designed and built UI to visualize the data and provide insights
              to the team. Wrote Jest tests for the frontend and backend.
            </li>
          </ul>
        </dd>
        <dt style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <strong>Project 4</strong> | (Node.js, AWS CloudFront, Lambda@Edge,
            and S3)
          </div>
          <em>Summer 2023</em>
        </dt>
        <dd>
          <ul>
            <li>
              Develop a serverless image optimization service using Node.js, AWS
              CloudFront, Lambda@Edge, and S3, reducing image load times by 50%.
            </li>
            <li>
              Wrote Lambda@Edge function using Sharp image processing to resize,
              compress, and cache images on-the-fly.
            </li>
            <li>
              Used AWS CloudWatch to monitor and troubleshoot the application
              and Jest for testing the Lambda@Edge function.
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  );
}
