import Link from 'next/link';

const DonateBtn = () => {
  return (
    <li className="nav-item">
      <Link href="/stwdonate/donate" legacyBehavior>
        <a className="animated-button d-lg-inline-block btn btn-danger position-relative">
          <i className="bi position-absolute start-50 translate-middle"></i>
          <span className="text position-relative z-index-1">Donate</span>
          <div className="circle position-absolute top-50 start-50 translate-middle"></div>
        </a>
      </Link>
      <style jsx>{`
        .animated-button {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 7px 36px;
          border: 4px solid transparent;
          font-size: 20px;
          background-color: inherit;
          border-radius: 100px;
          font-weight: 800;
          color: #A0153E;
          box-shadow: 0 0 0 2px #A0153E;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          width: 100%;
        }

        @media only screen and (max-width: 768px){
          .animated-button{
            width: 50%;
          }
        }

        .animated-button .circle {
          width: 20px;
          height: 20px;
          background-color: #A0153E;
          color: #fff;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: -1;
        }

        .animated-button:hover {
          box-shadow: 0 0 0 12px transparent;
          border-radius: 12px;
          color: #ffffff;
        }

        .animated-button:hover .text {
          transform: translateX(12px);
          color: #ffffff; 
        }

        .animated-button:hover .circle {
          width: 220px;
          height: 220px;
          opacity: 1;
        }

        .animated-button:active {
          scale: 0.95;
          box-shadow: 0 0 0 4px #A0153E;
          color: #ffffff;
        }
      `}</style>
    </li>
  );
};

export default DonateBtn;
