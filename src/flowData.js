/* ── Flow data: nodes, hierarchy, colours, and Google Drive links ── */

export const nodeData = [
  {
    id: 'total-order',
    label: 'Total Order',
    count: 142174,
    link: 'https://docs.google.com/spreadsheets/d/1fydToXk4Obb2VqcBYZULmwPSO_vohspj/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'root',
    parentId: null,
  },

  /* ── Level 1 children of Total Order ── */
  {
    id: 'dto-created',
    label: 'DTO Created',
    count: 18741,
    link: 'https://docs.google.com/spreadsheets/d/1xU_nRxbtfquMa8maUorOFEoczejtIQE4/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'total-order',
  },
  {
    id: 'fulfillable',
    label: 'Total Fulfillable/Unfulfillable/Created',
    count: 2245,
    link: 'https://docs.google.com/spreadsheets/d/1CZejWNC7sEhM5tD6g8XLMyrKvXaoEWto/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'green',
    parentId: 'total-order',
  },
  {
    id: 'cancelled-before-shipment',
    label: 'Cancelled Before Shipment',
    count: 8501,
    link: 'https://docs.google.com/spreadsheets/d/1Y-tZ6fwj0I6cqjkLvdsYjqSDN0ruNjBJ/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'amber',
    parentId: 'total-order',
  },
  {
    id: 'rto-created',
    label: 'RTO Created',
    count: 7858,
    link: 'https://docs.google.com/spreadsheets/d/18LxiKcBAWDywZzvN6int7mZkiQTOeCkj/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'total-order',
  },
  {
    id: 'total-intransit',
    label: 'Total Intransit',
    count: 1218,
    link: 'https://docs.google.com/spreadsheets/d/1GH_h72EKQ86s_OAgo3SSAEG9LQl3HSbn/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'violet',
    parentId: 'total-order',
  },
  {
    id: 'total-lost',
    label: 'Total Lost',
    count: 45,
    link: 'https://docs.google.com/spreadsheets/d/1-ZHplvzq1pJtnoNolkgVg7jhX_Shcj7G/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'orange',
    parentId: 'total-order',
  },
  {
    id: 'total-delivered',
    label: 'Total Delivered',
    count: 103566,
    link: 'https://docs.google.com/spreadsheets/d/196QwFY9Ii7Ruk2pkIZ1KTY6D1YkchM2r/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'teal',
    parentId: 'total-order',
  },

  /* ── Level 2 children of DTO Created ── */
  {
    id: 'dto-cancelled',
    label: 'DTO Cancelled',
    count: 211,
    link: 'https://docs.google.com/spreadsheets/d/10qU4Da00LxLXS-uf5aFV8kcr3QRlftoe/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto',
    label: 'DTO',
    count: 8,
    link: 'https://docs.google.com/spreadsheets/d/1jsgnPDaTGbq3ffWxTWE3eSNn5LOh2u1g/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-intransit',
    label: 'DTO Intransit',
    count: 2469,
    link: 'https://docs.google.com/spreadsheets/d/1CbVU9qapGEqpKCYyyfwb8H_YC6yff07J/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-lost',
    label: 'DTO Lost',
    count: 9,
    link: 'https://docs.google.com/spreadsheets/d/11ipq63kG_V1vZoZnX9twRSeHQ4vPjM3Z/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-return-received',
    label: 'DTO Return Received',
    count: 14757,
    link: 'https://docs.google.com/spreadsheets/d/1Pych_AC2Z2gGyVhZwaImH3CphuVrIC-V/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-delivered-return-cancelled',
    label: 'DTO Delivered-Return Cancelled by Customer',
    count: 1287,
    link: 'https://docs.google.com/spreadsheets/d/1bXKCnhh1E4zVpB-wpxRgOjlpL0AHN76P/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },

  /* ── Level 2 children of RTO Created ── */
  {
    id: 'rto-lost',
    label: 'RTO Lost',
    count: 28,
    link: 'https://docs.google.com/spreadsheets/d/1EZLe4A6No6wRGCDVkCJMovGkzeXg0vyW/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },
  {
    id: 'rto-received',
    label: 'RTO Received',
    count: 6921,
    link: 'https://docs.google.com/spreadsheets/d/1aGdbSFxliV7PxuWAkvK76YYvsOBLcjAZ/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },
  {
    id: 'rto-intransit-ofd',
    label: 'RTO Intransit/Out for delivery',
    count: 907,
    link: 'https://docs.google.com/spreadsheets/d/1SBClX75ML7TDwf3GTjgFR2ItoVO6NDSn/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },
  {
    id: 'delivered-rto-cancelled',
    label: 'Delivered RTO Cancelled by Customer',
    count: 2,
    link: 'https://docs.google.com/spreadsheets/d/1UeQe6HDi2acYFIbfK38ruhjwPXlYTXCH/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },
];

/* Professional muted colour palette */
export const colorMap = {
  root: {
    bg: '#1e1b4b',
    border: '#6366f1',
    text: '#e0e7ff',
    accent: '#818cf8',
  },
  blue: {
    bg: '#172554',
    border: '#3b82f6',
    text: '#dbeafe',
    accent: '#60a5fa',
  },
  green: {
    bg: '#14532d',
    border: '#22c55e',
    text: '#dcfce7',
    accent: '#4ade80',
  },
  amber: {
    bg: '#451a03',
    border: '#f59e0b',
    text: '#fef3c7',
    accent: '#fbbf24',
  },
  rose: {
    bg: '#4c0519',
    border: '#f43f5e',
    text: '#ffe4e6',
    accent: '#fb7185',
  },
  violet: {
    bg: '#2e1065',
    border: '#8b5cf6',
    text: '#ede9fe',
    accent: '#a78bfa',
  },
  orange: {
    bg: '#431407',
    border: '#f97316',
    text: '#ffedd5',
    accent: '#fb923c',
  },
  teal: {
    bg: '#042f2e',
    border: '#14b8a6',
    text: '#ccfbf1',
    accent: '#2dd4bf',
  },
};

/* Helper: get children of a node */
export function getChildIds(parentId) {
  return nodeData.filter((n) => n.parentId === parentId).map((n) => n.id);
}

/* Helper: get all descendants of a node (recursive) */
export function getDescendantIds(parentId) {
  const children = getChildIds(parentId);
  let all = [...children];
  children.forEach((cid) => {
    all = all.concat(getDescendantIds(cid));
  });
  return all;
}

/* Helper: does a node have children? */
export function hasChildren(id) {
  return nodeData.some((n) => n.parentId === id);
}
