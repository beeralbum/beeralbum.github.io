import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// Banderas
import ar from "../assets/flags/flag_ar.png";
import be from "../assets/flags/flag_be.png";
import br from "../assets/flags/flag_br.png";
import eu from "../assets/flags/flag_eu.png";
import ge from "../assets/flags/flag_ge.png";
import ir from "../assets/flags/flag_ir.png";
import mx from "../assets/flags/flag_mx.png";
import ne from "../assets/flags/flag_ne.png";
import rc from "../assets/flags/flag_rc.png";

// Mapa país → imagen
const flags = {
  Argentina: ar,
  Belgica: be,
  Brasil: br,
  "Estados Unidos": eu,
  Alemania: ge,
  Irlanda: ir,
  Mexico: mx,
  "Paises Bajos": ne,
  "Republica Checa": rc,
};

export default function Gallery() {
  const [beers, setBeers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      const { data, error } = await supabase
        .from("beers")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setBeers(data || []);
      }
    };

    fetchBeers();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div className="grid">
      {beers.map((beer) => (
        <div className="card" key={beer.id}>
          <div className="card-image">
            <img
              src={beer.imagen_oficial}
              alt={beer.marca}
            />

            <div className="card-overlay">

             <div className="pais">
                {flags[beer.pais] && (
                  <img
                    src={flags[beer.pais]}
                    alt={beer.pais}
                    className="flag"
                  />
                )}
               
              </div>
              <div className="marca">{beer.marca}</div>
              <div className="variedad">{beer.variedad}</div>

             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
