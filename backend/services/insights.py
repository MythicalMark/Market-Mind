def generate_insights(segment_summary):

    insights = []

    for _, row in segment_summary.iterrows():

        segment = row["SegmentName"]

        customers = row["Customers"]

        revenue = row["Revenue"]

        avg_clv = row["AvgCLV"]


        if segment == "VIP Customers":

            title = "High-value loyal customers"

            description = (

                "These customers purchase frequently "

                "and generate the highest revenue."

            )

            recommendation = (

                "Focus on loyalty rewards, "

                "premium bundles and "

                "early access campaigns."

            )


        elif segment == "Loyal Buyers":

            title = "Consistent repeat buyers"

            description = (

                "Customers with stable purchase "

                "behavior and good retention."

            )

            recommendation = (

                "Use cross-selling and "

                "personalized recommendations."

            )


        elif segment == "At Risk Customers":

            title = "Customers likely to churn"

            description = (

                "These customers haven't "

                "purchased recently."

            )

            recommendation = (

                "Run win-back campaigns "

                "and limited-time offers."

            )


        elif segment == "Low Value Customers":

            title = "Low engagement customers"

            description = (

                "Customers with low purchase "

                "frequency and spending."

            )

            recommendation = (

                "Encourage repeat purchases "

                "with onboarding emails "

                "and discounts."

            )


        else:

            title = "Regular customers"

            description = (

                "Customers with average "

                "spending and activity."

            )

            recommendation = (

                "Increase engagement through "

                "personalized campaigns."

            )


        insights.append({

            "SegmentName": segment,

            "Title": title,

            "Description": description,

            "Recommendation": recommendation,

            "Customers": int(customers),

            "Revenue": round(float(revenue),2),

            "AvgCLV": round(float(avg_clv),2)

        })


    return insights