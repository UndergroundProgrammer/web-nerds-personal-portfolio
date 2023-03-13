export default function Services() {
  return (
    <div className="container py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap mb-20">
        <div className="md:w-1/2 w-full md:mb-0 mb-5">
          <img
            src="/images/services/designer.svg"
            alt="Designer"
            className="mx-auto md:w-auto w-4/5"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="px-10">
            <h1 className="md:text-5xl text-3xl font-semibold text-primary md:mb-5 mb-2">
              Web Design
            </h1>
            <p className="leading-6">
              Our web design service leverages the latest tools and technologies
              to create visually stunning and user-friendly websites. Using
              tools like Figma and XD, our designers collaborate with clients to
              create custom designs that align with their brand and business
              goals. We employ a variety of design techniques, including
              responsive design, typography, and color theory, to create an
              engaging and intuitive user experience. Whether you need a website
              redesign or a brand new site, our team is equipped with the skills
              and expertise to create a website that will make your business
              stand out online.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mb-20">
        <div className="md:w-1/2 order-1 md:order-2 w-full md:mb-0 mb-5">
          <img
            src="/images/services/web-dev.svg"
            alt="Designer"
            className="mx-auto md:w-auto w-4/5"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="px-10">
            <h1 className="md:text-5xl  text-3xl font-semibold text-primary md:mb-5 mb-2">
              Web Development
            </h1>
            <p className="leading-6">
              We offer web development services using the latest technologies
              like ReactJS, NextJS, Node, and MongoDB. Our expertise in the MERN
              stack allows us to create dynamic and scalable web applications
              with a focus on performance and user experience. Whether it's a
              simple landing page or a complex web application, we have the
              skills to deliver a product that meets your needs. Contact us
              today to see how we can help you with your web development
              requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mb-20">
        <div className="md:w-1/2 w-full md:mb-0 mb-5">
          <img
            src="/images/services/mobile-app.svg"
            alt="Designer"
            className="mx-auto md:w-auto w-4/5"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="px-10">
            <h1 className="md:text-5xl text-3xl font-semibold text-primary md:mb-5 mb-2">
              Mobile Application Development
            </h1>
            <p className="leading-6">
              Our mobile app development service offers cutting-edge solutions
              using Flutter and Dart. With our expertise, we build fast,
              beautiful, and responsive mobile apps that provide an excellent
              user experience. We use state-of-the-art tools to create stunning
              designs, including the Flutter framework and its pre-built
              widgets. We make sure to thoroughly test our apps for performance,
              usability, and functionality. Our team of experienced developers
              is committed to delivering quality mobile apps that exceed our
              clients' expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mb-20">
        <div className="md:w-1/2 order-1 md:order-2 w-full md:mb-0 mb-5">
          <img
            src="/images/services/seo.svg"
            alt="Designer"
            className="mx-auto md:w-auto w-4/5"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="px-10">
            <h1 className="md:text-5xl  text-3xl font-semibold text-primary md:mb-5 mb-2">
              Search Engine Optimization
            </h1>
            <p className="leading-6">
              We provide expert Search Engine Optimization (SEO) services to
              help boost your website's visibility and ranking on search engines
              like Google. Our team of experienced professionals uses proven
              strategies and techniques to optimize your website's content,
              keywords, and meta data for improved search engine ranking. We
              also offer comprehensive analytics and reporting to track your
              website's progress and identify areas for improvement. Let us help
              you increase your online presence and reach your target audience
              through effective SEO techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
