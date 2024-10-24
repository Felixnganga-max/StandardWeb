const services = [
  { title: 'Front End Development', description: 'Building responsive and engaging interfaces.', image: './assets/frontend.png' },
  { title: 'Back End Development', description: 'Creating robust server-side applications.', image: './assets/backend.avif' },
  { title: 'API Services', description: 'Developing and integrating APIs for seamless communication.', image: './assets/api.avif' },
  { title: 'Web Design', description: 'Crafting visually appealing and user-friendly designs.', image: './assets/webdesign.jpg' },
  { title: 'SEO Writing', description: 'Optimizing content for search engines to boost visibility.', image: './assets/seowriting.png' },
  { title: 'Blockchain Development', description: 'Implementing secure and scalable blockchain solutions.', image: './assets/blockchain.png' },
  { title: 'Database Administration', description: 'Managing and optimizing databases for performance.', image: './assets/database.png' },
  { title: 'Mobile App Development', description: 'Managing and optimizing databases for performance.', image: './assets/mobile.avif' },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-text">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
