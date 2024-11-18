import Image from "next/image";
import partners from "@/data/partners.json";
import Slider from "react-slick";

const PartnersSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container pb-5">
      <h2 className="text-center mb-5">Partners</h2>
      <Slider {...settings} className="partners-slider">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-item text-center">
            <a href={partner.link} target="_blank" className="partner-link">
              <Image
                src={partner.imageURL}
                alt={partner.partner_name}
                width={200}
                height={150}
                className="partner-image"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
