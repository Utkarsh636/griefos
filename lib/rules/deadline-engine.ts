export function getDeadlineForAsset(asset: string) {
  const deadlines = {
    bank: {
      label: "Recommended within 30 days",
      daysRemaining: 30,
      urgency: "medium",
    },

    pf: {
      label: "EPFO action recommended",
      daysRemaining: 47,
      urgency: "high",
    },

    insurance: {
      label: "Claim filing recommended",
      daysRemaining: 82,
      urgency: "medium",
    },

    property: {
      label: "Legal succession timeline",
      daysRemaining: 120,
      urgency: "low",
    },
  };

  return deadlines[asset as keyof typeof deadlines];
}