/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const FAQs = () => {
  return (
    <>
      {/* FAQ */}
      <div className="container content-space-1">
        <div className="text-center">
          <img
            className="mb-5"
            src="../assets/svg/illustrations/oc-looking-for-answers.svg"
            alt="Illustration"
            style={{ maxWidth: '15rem' }}
          />
        </div>
        {/* Heading */}
        <div className="w-lg-65 text-center mx-lg-auto mb-7">
          <h3>Frequently Asked Questions</h3>
        </div>
        {/* End Heading */}
        {/* Accordion */}
        <div className="w-lg-85 mx-lg-auto mb-7">
          <div className="accordion accordion-flush" id="accordionFAQEg1">
            {/* Accordion Item */}
            <div className="accordion-item">
              <div className="accordion-header" id="headingOneEg1">
                <a
                  className="accordion-button"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneEg1"
                  aria-expanded="true"
                  aria-controls="collapseOneEg1"
                >
                  What is Swahilipot Hub?
                </a>
              </div>
              <div
                id="collapseOneEg1"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOneEg1"
                data-bs-parent="#accordionFAQEg1"
              >
                <div className="accordion-body">
                  Swahilipot Hub is an innovation and technology hub located in
                  Mombasa, Kenya. It serves as a community-driven space that
                  promotes technology, entrepreneurship, and skills development
                  in the coastal region of Kenya.
                </div>
              </div>
            </div>
            {/* End Accordion Item */}
            {/* Accordion Item */}
            <div className="accordion-item">
              <div className="accordion-header" id="headingTwoEg1">
                <a
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoEg1"
                  aria-expanded="false"
                  aria-controls="collapseTwoEg1"
                >
                  What programs and services does SwahiliPot Hub offer?
                </a>
              </div>
              <div
                id="collapseTwoEg1"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwoEg1"
                data-bs-parent="#accordionFAQEg1"
              >
                <div className="accordion-body">
                  SwahiliPot Hub offers a range of programs and services,
                  including training workshops, mentorship programs, networking
                  events, access to co-working spaces, and maker labs. These
                  initiatives aim to empower individuals by providing them with
                  the necessary resources and skills to participate in the
                  digital economy.
                </div>
              </div>
            </div>
            {/* End Accordion Item */}
            {/* Accordion Item */}
            <div className="accordion-item">
              <div className="accordion-header" id="headingThreeEg1">
                <a
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeEg1"
                  aria-expanded="false"
                  aria-controls="collapseThreeEg1"
                >
                  Who can benefit from Swahilipot Hub?
                </a>
              </div>
              <div
                id="collapseThreeEg1"
                className="accordion-collapse collapse"
                aria-labelledby="headingThreeEg1"
                data-bs-parent="#accordionFAQEg1"
              >
                <div className="accordion-body">
                  Swahilipot Hub is open to entrepreneurs, developers,
                  creatives, and anyone interested in technology and innovation.
                  It caters to individuals who are looking to enhance their
                  digital skills, collaborate on projects, and connect with
                  like-minded individuals in the tech ecosystem.
                </div>
              </div>
            </div>
            {/* End Accordion Item */}

            {/* Accordion Item */}
            <div className="accordion-item">
              <div className="accordion-header" id="headingFourEg1">
                <a
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourEg1"
                  aria-expanded="false"
                  aria-controls="collapseFourEg1"
                >
                  Can I visit Swahilipot Hub as a visitor?
                </a>
              </div>
              <div
                id="collapseFourEg1"
                className="accordion-collapse collapse"
                aria-labelledby="headingFourEg1"
                data-bs-parent="#accordionFAQEg1"
              >
                <div className="accordion-body">
                  Yes, Swahilipot Hub welcomes visitors who are interested in
                  learning more about their initiatives and the local tech
                  ecosystem. You can visit the hub to attend events, participate
                  in workshops, or simply network with professionals in the
                  field. SwahiliPot Hub promotes an inclusive and vibrant
                  community where individuals can exchange ideas and explore
                  opportunities in technology and innovation.
                </div>
              </div>
            </div>
            {/* End Accordion Item */}
          </div>
        </div>
        {/* End Accordion */}
        {/* Info */}
        <div className="text-center">
          <p className="mb-0">Still have questions?</p>
          <a className="link" href="mailto:info@swahilipothub.co.ke">
            Contact our friendly support team{' '}
            <i className="bi-chevron-right small ms-1" />
          </a>
        </div>
        {/* End Info */}
      </div>
      {/* End FAQ */}
    </>
  )
}

export default FAQs
