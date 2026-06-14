export default function CohortTable({ data }) {

  if (!data || data.length === 0) {
    return <p>No cohort data.</p>;
  }

  const columns = Object.keys(data[0]);

  const getColor = (value) => {

    if (value === 0) {

      return "#f5f5f5";

    }

    if (value >= 50) {

      const green = 255;

      const red = Math.floor(
        255 - ((value - 50) / 50) * 255
      );

      return `rgb(${red},${green},150)`;

    }

    else {

      const green = Math.floor(
        (value / 50) * 255
      );

      return `rgb(255,${green},150)`;

    }

  };


  return (

    <div className="table-container">
      <table>
        <thead>
          <tr>
            {
              columns.map(
                (col) => (
                  <th key={col}>
                    {
                    col === "CohortMonth"
                    ?
                    "Cohort":`Month ${col}`
                    }
                  </th>
                )
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map(
              (row,index)=>(
                <tr key={index}>
                  {
                    columns.map(
                      (col)=>
                      {
                        const value=row[col];
                        const isMonth=
                        col!=="CohortMonth";
                        return(
                          <td
                          key={col}
                          style={
                            isMonth
                            ?
                            {
                              backgroundColor:
                              getColor(value),
                              fontWeight:
                              "bold"
                            }
                            :
                            {}
                          }
                          >
                            {
                            isMonth
                            ?
                            value===0
                            ?
                            "-"
                            :
                            `${value}%`
                            :
                            value
                            }
                          </td>
                        )

                      }

                    )

                  }

                </tr>

              )

            )

          }

        </tbody>

      </table>

    </div>

  );

}