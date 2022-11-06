import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
        {toggle && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            deleniti ab nesciunt. Dignissimos quas ducimus doloremque odit
            quaerat, aliquid maxime ratione soluta quidem beatae, esse
            consequuntur error, provident illo tempora.
          </p>
        )}
        <div style={{ textAlign: "center" }}>
          <button
            style={{ padding: "10px", margin: "10px", cursor: 'pointer' }}
            onClick={() => setToggle(!toggle)}
          >
            {toggle === false ? "SHOW" : "HIDE"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Toggle;
