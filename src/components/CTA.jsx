import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta text-white">
      <p className="cta-text text-white">
        Feel free to reach out to me! <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
