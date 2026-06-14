def get_recommendations(segment_name):
    playbooks = {
        "VIP Customers": {
            "strategy": "Reward and retain high-value customers.",
            "actions": [
                "Offer VIP loyalty rewards",
                "Give early access to new products",
                "Send premium personalized offers",
                "Create exclusive bundle deals"
            ],
            "campaign_type": "Retention / Premium Upsell"
        },

        "Loyal Buyers": {
            "strategy": "Increase average order value and strengthen loyalty.",
            "actions": [
                "Recommend complementary products",
                "Offer bundle discounts",
                "Send personalized product recommendations",
                "Introduce loyalty points"
            ],
            "campaign_type": "Cross-sell / Loyalty"
        },

        "At Risk Customers": {
            "strategy": "Reactivate customers before they churn.",
            "actions": [
                "Send win-back email campaign",
                "Offer limited-time discount",
                "Ask for feedback",
                "Show products similar to previous purchases"
            ],
            "campaign_type": "Win-back / Re-engagement"
        },

        "Low Value Customers": {
            "strategy": "Encourage repeat purchases with low-cost campaigns.",
            "actions": [
                "Send onboarding email series",
                "Offer small first-repeat discount",
                "Promote best-selling affordable products",
                "Avoid expensive premium campaigns"
            ],
            "campaign_type": "Activation / Discount"
        },

        "Regular Customers": {
            "strategy": "Move customers toward higher loyalty and value.",
            "actions": [
                "Send personalized offers",
                "Promote seasonal campaigns",
                "Recommend products based on purchase history",
                "Use moderate discounts"
            ],
            "campaign_type": "Growth / Nurturing"
        }
    }

    return playbooks.get(segment_name, {
        "strategy": "Use general personalized marketing.",
        "actions": [
            "Send personalized recommendations",
            "Test discount-based campaigns",
            "Monitor customer response"
        ],
        "campaign_type": "General Marketing"
    })


def generate_marketing_playbook(segment_summary):
    playbook = []

    for _, row in segment_summary.iterrows():
        segment_name = row["SegmentName"]
        recommendation = get_recommendations(segment_name)

        playbook.append({
            "SegmentName": segment_name,
            "Customers": int(row["Customers"]),
            "Revenue": float(row["Revenue"]),
            "CampaignType": recommendation["campaign_type"],
            "Strategy": recommendation["strategy"],
            "Actions": recommendation["actions"]
        })

    return playbook