
import FAQ from "./FAQ";
import Datas from "./data";

import "./FAQS.module.css";

const FAQS = () => {
  const  faqs  = Datas;
  console.log(faqs);
  return (
    <>
      <section>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <FAQ key={Math.random()} {...faq} />
        ))}
      </section>
    </>
  );
};

export default FAQS;
