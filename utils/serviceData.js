import { assets } from "@/assets/assets";

export const servicesData = [
  {
    id: 1,
    title: "Bookkeeping",
    description:
      "Accurate records, simplified finances. We offer complete bookkeeping solutions using leading software such as Xero, MYOB, and QuickBooks.",
    image: assets.service1, // Replace with actual image path
    details: [
      "Daily/weekly/monthly transaction entry",
      "Bank and credit card reconciliations",
      "Chart of accounts setup",
      "Expense and income classification",
      "Cloud document management",
    ],
  },
  {
    id: 2,
    title: "Financial Reporting",
    description:
      "Know where you stand, anytime. We prepare clear, professional financial statements that give you a complete picture of your business performance.",
    image: assets.service2,
    details: [
      "Profit & Loss Statements",
      "Balance Sheets",
      "Cash Flow Statements",
      "Monthly/Quarterly/Annual reports",
      "Supporting ledgers and schedules",
    ],
  },
  {
    id: 3,
    title: "Management Reporting",
    description:
      "Turn your numbers into strategy. Our management reports go beyond standard financials, providing performance insights and KPI analysis.",
    image: assets.service3,
    details: [
      "Budget vs actuals reporting",
      "KPI dashboards and scorecards",
      "Segment-wise or project-based performance tracking",
      "Monthly executive summaries",
      "Variance and trend analysis",
    ],
  },
  {
    id: 4,
    title: "Corporate Planning & Budgeting",
    description:
      "Plan confidently. Grow strategically. We help businesses plan their financial future through structured budgeting and forecasting.",
    image: assets.service4,
    details: [
      "Annual and multi-year budgeting",
      "Rolling cash flow forecasts",
      "Break-even and ROI analysis",
      "Scenario planning and what-if modeling",
      "Strategic financial planning",
    ],
  },
  {
    id: 5,
    title: "Receivables & Payables Management",
    description:
      "Healthy cash flow, simplified. We manage your incoming and outgoing payments so you can focus on operations.",
    image: assets.service5,
    details: [
      "Customer invoicing and collections",
      "Aged debtors and creditors reporting",
      "Vendor bill processing",
      "Payment scheduling",
      "Supplier reconciliation",
    ],
  },
  {
    id: 6,
    title: "Tax Compliance",
    description:
      "Stay compliant, avoid penalties. We manage your tax reporting obligations and ensure lodgements are accurate and timely.",
    image: assets.service6,
    details: [
      "BAS and IAS preparation & lodgement",
      "GST reconciliation",
      "PAYG & Super compliance",
      "Support for FBT and payroll tax",
      "Coordination with registered tax agents",
    ],
  },
  {
    id: 7,
    title: "SMSF Accounting & Reporting",
    description:
      "Specialist services for self-managed super funds. We offer end-to-end SMSF accounting solutions that ensure your fund remains compliant.",
    image: assets.service7,
    details: [
      "SMSF financial statement preparation",
      "Member balance and pension phase reporting",
      "SMSF annual tax return (SAR)",
      "Investment tracking and documentation",
      "Audit coordination and year-end packs",
    ],
  },
];

export default servicesData;
