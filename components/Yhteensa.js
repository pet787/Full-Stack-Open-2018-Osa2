import React from 'react'

const calcSum = (total, osa) => {
    console.log("calcSum", total, osa.tehtavia);
    return total + osa.tehtavia;
}

const Yhteensa = ({ osat }) => {
    console.log("Yhteensa", osat);
    let yhteensa = osat.reduce(calcSum,0);
      return (
        <div>
            <h4>Yhteensä {yhteensa} tehtävää</h4>    
        </div>
      )
    }

export default Yhteensa