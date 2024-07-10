export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          About UK Logistics
        </h1>
        <p className="text-lg text-center mb-8">
          Connecting businesses and customers with reliable, innovative
          logistics solutions.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our History</h2>
          <p>
            Founded in 1998, UK Logistics has grown from a small local courier
            service into one of the UK's leading providers of logistics
            solutions. With over two decades of experience, we have continually
            adapted to meet the changing needs of our clients, incorporating the
            latest technology and practices to ensure the highest level of
            service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            Our mission is to empower businesses by providing superior logistics
            solutions that enhance their operations and customer satisfaction.
            We strive to be a partner you can rely on for efficiency,
            reliability, and innovation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Integrity</strong> – We conduct our business with honesty
              and fairness.
            </li>
            <li>
              <strong>Excellence</strong> – We are committed to delivering the
              highest quality of service.
            </li>
            <li>
              <strong>Innovation</strong> – We continuously seek out new ways to
              improve our services and meet the evolving needs of our clients.
            </li>
            <li>
              <strong>Teamwork</strong> – We believe in the power of working
              together, both within our organization and with our clients.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TeamMember
              name="John Doe"
              position="CEO"
              image="https://via.placeholder.com/150/0000FF/808080?text=CEO"
              bio="John has been leading UK Logistics since its inception. Under his leadership, the company has seen tremendous growth and innovation."
            />
            <TeamMember
              name="Jane Smith"
              position="COO"
              image="https://via.placeholder.com/150/0000FF/808080?text=COO"
              bio="Jane joined UK Logistics in 2005 and has been instrumental in streamlining operations and increasing our market reach."
            />
            <TeamMember
              name="Emma Wilson"
              position="CTO"
              image="https://via.placeholder.com/150/0000FF/808080?text=CTO"
              bio="Emma is at the forefront of integrating cutting-edge technologies into our logistics solutions, ensuring we remain at the leading edge of the industry."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function TeamMember({name, position, image, bio}) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />
      <h3 className="text-xl font-medium">{name}</h3>
      <p className="text-sm text-gray-600">{position}</p>
      <p className="text-sm mt-2">{bio}</p>
    </div>
  );
}
