import React, { useState } from "react";

import style from "./FAQ.module.css";

const FAQ = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <article>
        <div className={style.ques}>
          <h4>{title}</h4>
          <p>{toggle && desc}</p>
          <button type="button" onClick={() => setToggle(!toggle)}>
            {toggle ? "🔼Hide" : "🔽Show"}
          </button>
        </div>
      </article>
    </>
  );
};

export default FAQ;
