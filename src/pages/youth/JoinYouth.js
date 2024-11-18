import Image from 'next/image';

const JoinYouth = () => {
  return (
    <div>
      {/* Youth Database Section */}
      <div
        id="youth-database-section"
        className="d-flex align-items-center justify-content-between flex-wrap-reverse my-5"
      >
        <div className="col-md-6">
          <img
            src="/images/youth.jpg"
            alt=""
            style={{
              width: '100%', // Fill the entire column width
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover', // Maintain aspect ratio and cover the area
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="col-md-6 text-md-start text-center p-4">
          <h3>Join Our Youth Database</h3>
          <p>
            Be part of an innovative community empowering the youth! Sign up
            today to stay informed and access opportunities.
          </p>
          <a
            href="https://www.platform.swahilipothub.org/youth/public/join/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Youth Database
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinYouth;
