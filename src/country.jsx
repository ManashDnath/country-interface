import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./country.css";

const CustomizeCountry = ({ name, alt, image }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        borderRadius: "8px",
        textWrap: "wrap",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "120px",
          height: "100px",
        }}
      />
      <h3>{name}</h3>
    </div>
  );
};

function Country() {
  const [countryList, setCountryList] = useState([]);
  const API_Url = "https://xcountries-backend.azurewebsites.net/all";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_Url);
        const json = await response.json();
        setCountryList(json);
      } catch (err) {
        console.error("Error fetching data: " + err);
      }
    }
    fetchData();
  }, []);

  return (
    <div id="Parent-style">
      {countryList.map((server) => {
        return (
          <div key={uuidv4()}>
            <CustomizeCountry
              name={server.name}
              alt={server.abbs}
              image={server.flag}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Country;
