export default function LLMInsights({ data }) {

  if (!data || data.length === 0) {

    return <p>No insights available.</p>;

  }


  return (

    <div className="insights-grid">

      {

        data.map(

          insight => (

          <div

            className="insight-card"

            key={insight.SegmentName}

          >

            <h3>

              {insight.SegmentName}

            </h3>


            <h4>

              {insight.Title}

            </h4>


            <p>

              {insight.Description}

            </p>


            <p>

              <strong>

              Customers:

              </strong>

              {" "}

              {insight.Customers}

            </p>


            <p>

              <strong>

              Revenue:

              </strong>

              {" "}

              €

              {

              insight.Revenue

              }

            </p>


            <p>

              <strong>

              Average CLV:

              </strong>

              {" "}

              €

              {

              insight.AvgCLV

              }

            </p>


            <hr />


            <p>

            <strong>

            Recommendation:

            </strong>

            </p>


            <p>

            {

            insight.Recommendation

            }

            </p>

          </div>

          )

        )

      }

    </div>

  );

}