export default function ServicesSection() {
  return (
    <div id="services" className="bg-gray-100 py-8 px-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Our Services
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        <ServiceItem
          icon="https://via.placeholder.com/150/0000FF/808080?text=Expedited+Freight"
          title="Expedited Freight"
          description="Fast and reliable freight services across the UK, ensuring your goods arrive on time, every time."
        />
        <ServiceItem
          icon="https://via.placeholder.com/150/0000FF/808080?text=Supply+Chain+Management"
          title="Supply Chain Management"
          description="Optimize and manage your entire supply chain with expertise and innovative solutions, reducing costs and improving efficiency."
        />
        <ServiceItem
          icon="https://via.placeholder.com/150/0000FF/808080?text=Freight+Forwarding"
          title="Freight Forwarding"
          description="Seamless handling of your shipments, ensuring timely delivery across international borders with full regulatory compliance."
        />
        <ServiceItem
          icon="https://via.placeholder.com/150/0000FF/808080?text=Customs+Brokerage"
          title="Customs Brokerage"
          description="Expert customs services to navigate complex regulations and streamline your imports and exports without delays."
        />
        <ServiceItem
          icon="https://via.placeholder.com/150/0000FF/808080?text=Reverse+Logistics"
          title="Reverse Logistics"
          description="Efficient management of returns and exchanges, enhancing customer satisfaction and optimizing inventory."
        />
        <ServiceItem
          icon="https://via.placeholder.com/150/0000FF/808080?text=Same+Day+Delivery"
          title="Same Day Delivery"
          description="Urgent delivery solutions that guarantee your package arrives at its destination on the same day."
        />
      </div>
    </div>
  );
}

function ServiceItem({icon, title, description}) {
  return (
    <div className="service bg-grey rounded-lg shadow p-6 flex">
      <img src={icon} alt={title} className="w-12 h-12 mr-4" />
      <div>
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
