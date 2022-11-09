import React from "react";
import Country from "./Country";
import { v4 as uuidv4 } from "uuid";

import style from "./countries.module.css";

const Countries = (props) => {
  console.log(props);
  return (
    <>
      <section className={style.countries}>
        {props.countries.map((country) => {
          const countryNew = { country, id: uuidv4() };

          return (
            <Country
              {...countryNew}
              key={countryNew.id}
              onRemoveCountry={props.onRemoveCountry}
            />
          );
        })}
      </section>
    </>
  );
};

export default Countries;
