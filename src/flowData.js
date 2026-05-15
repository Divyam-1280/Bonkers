/* ── Flow data: nodes, hierarchy, colours, and Google Drive links ── */

export const nodeData = [
  {
    id: 'total-order',
    label: 'Total SKU',
    count: 142174,
    amount: '12,23,26,386',
    link: 'https://docs.google.com/spreadsheets/d/1fydToXk4Obb2VqcBYZULmwPSO_vohspj/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'root',
    parentId: null,
  },

  /* ── Level 1 children of Total Order ── */
  {
    id: 'dto-created',
    label: 'DTO Created',
    count: 18741,
    amount: '1,89,94,965',
    link: 'https://docs.google.com/spreadsheets/d/1xU_nRxbtfquMa8maUorOFEoczejtIQE4/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'total-order',
  },
  {
    id: 'fulfillable',
    label: 'Total Fulfillable/Unfulfillable/Created',
    count: 2245,
    amount: '1,93,772',
    link: 'https://docs.google.com/spreadsheets/d/1CZejWNC7sEhM5tD6g8XLMyrKvXaoEWto/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'green',
    parentId: 'total-order',
  },
  {
    id: 'cancelled-before-shipment',
    label: 'Cancelled Before Shipment',
    count: 8501,
    amount: '6,16,467',
    link: 'https://docs.google.com/spreadsheets/d/1Y-tZ6fwj0I6cqjkLvdsYjqSDN0ruNjBJ/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'amber',
    parentId: 'total-order',
  },
  {
    id: 'rto-created',
    label: 'RTO Created',
    count: 7858,
    amount: '77,30,631',
    link: 'https://docs.google.com/spreadsheets/d/18LxiKcBAWDywZzvN6int7mZkiQTOeCkj/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'total-order',
  },
  {
    id: 'total-intransit',
    label: 'Total Intransit',
    count: 1218,
    amount: '11,74,670',
    link: 'https://docs.google.com/spreadsheets/d/1GH_h72EKQ86s_OAgo3SSAEG9LQl3HSbn/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'violet',
    parentId: 'total-order',
  },
  {
    id: 'total-lost',
    label: 'Total Lost',
    count: 45,
    amount: '41,086',
    link: 'https://docs.google.com/spreadsheets/d/1-ZHplvzq1pJtnoNolkgVg7jhX_Shcj7G/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'orange',
    parentId: 'total-order',
  },
  {
    id: 'total-delivered',
    label: 'Total Delivered',
    count: 103566,
    amount: '9,35,74,795',
    link: 'https://docs.google.com/spreadsheets/d/196QwFY9Ii7Ruk2pkIZ1KTY6D1YkchM2r/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'teal',
    parentId: 'total-order',
  },

  /* ── Level 2 children of DTO Created ── */
  {
    id: 'dto-cancelled',
    label: 'DTO Cancelled',
    count: 211,
    amount: '210,382',
    link: 'https://docs.google.com/spreadsheets/d/10qU4Da00LxLXS-uf5aFV8kcr3QRlftoe/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto',
    label: 'DTO',
    count: 8,
    amount: '8,234',
    link: 'https://docs.google.com/spreadsheets/d/1jsgnPDaTGbq3ffWxTWE3eSNn5LOh2u1g/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-intransit',
    label: 'DTO Intransit',
    count: 2469,
    amount: '24,98,507',
    link: 'https://docs.google.com/spreadsheets/d/1CbVU9qapGEqpKCYyyfwb8H_YC6yff07J/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-lost',
    label: 'DTO Lost',
    count: 9,
    amount: '8,564',
    link: 'https://docs.google.com/spreadsheets/d/11ipq63kG_V1vZoZnX9twRSeHQ4vPjM3Z/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-return-received',
    label: 'DTO Return Received',
    count: 14757,
    amount: '1,49,58,266',
    link: 'https://docs.google.com/spreadsheets/d/1Pych_AC2Z2gGyVhZwaImH3CphuVrIC-V/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },
  {
    id: 'dto-delivered-return-cancelled',
    label: 'DTO Delivered-Return Cancelled by Customer',
    count: 1287,
    amount: '13,11,012',
    link: 'https://docs.google.com/spreadsheets/d/1bXKCnhh1E4zVpB-wpxRgOjlpL0AHN76P/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'blue',
    parentId: 'dto-created',
  },

  /* ── Level 3: COD/Prepaid children of DTO Cancelled ── */
  {
    id: 'dto-cancelled-cod',
    label: 'By COD',
    count: 53,
    amount: '55,866',
    link: 'https://drive.google.com/open?id=1Ndx40AEjodoTmQmmtRVbB_tNbn7UnJiz',
    color: 'sky',
    parentId: 'dto-cancelled',
  },
  {
    id: 'dto-cancelled-prepaid',
    label: 'By Prepaid',
    count: 158,
    amount: '1,54,516',
    link: 'https://drive.google.com/open?id=1H2-OLENnajVRGGiuxGwDq1ucITe0UHBh',
    color: 'pink',
    parentId: 'dto-cancelled',
  },

  /* ── Level 3: COD/Prepaid children of DTO ── */
  {
    id: 'dto-cod',
    label: 'By COD',
    count: 2,
    amount: '1,573',
    link: 'https://drive.google.com/open?id=1Cs0A_RxoOKynTxSntciEy7VOdDuLvxtK',
    color: 'sky',
    parentId: 'dto',
  },
  {
    id: 'dto-prepaid',
    label: 'By Prepaid',
    count: 6,
    amount: '6,661',
    link: 'https://drive.google.com/open?id=1qVUvhsTmhOrEyx4JxAzAxQNRf2OYw0tR',
    color: 'pink',
    parentId: 'dto',
  },

  /* ── Level 3: COD/Prepaid children of DTO Intransit ── */
  {
    id: 'dto-intransit-cod',
    label: 'By COD',
    count: 623,
    amount: '6,75,192',
    link: 'https://drive.google.com/open?id=1P19pEf86C6v62ArTrTQcX9OjXSV1O4Fp',
    color: 'sky',
    parentId: 'dto-intransit',
  },
  {
    id: 'dto-intransit-prepaid',
    label: 'By Prepaid',
    count: 1846,
    amount: '18,23,315',
    link: 'https://drive.google.com/open?id=18gg3dDdq0dYv5J7PGUdv8fflEpQ-0yd7',
    color: 'pink',
    parentId: 'dto-intransit',
  },

  /* ── Level 3: COD/Prepaid children of DTO Lost ── */
  {
    id: 'dto-lost-cod',
    label: 'By COD',
    count: 1,
    amount: '889',
    link: 'https://drive.google.com/open?id=1TQZcXx9kdWQaBW3q8jeL7kMjoygW2SIx',
    color: 'sky',
    parentId: 'dto-lost',
  },
  {
    id: 'dto-lost-prepaid',
    label: 'By Prepaid',
    count: 8,
    amount: '7,674',
    link: 'https://drive.google.com/open?id=1af9DBikEG0oO8grCDxcoX36MNP_3AS21',
    color: 'pink',
    parentId: 'dto-lost',
  },

  /* ── Level 3: COD/Prepaid children of DTO Return Received ── */
  {
    id: 'dto-return-received-cod',
    label: 'By COD',
    count: 3328,
    amount: '35,96,386',
    link: 'https://drive.google.com/open?id=1qelGff3FEEFXRiMutlxSQFIsMUP3C4XP',
    color: 'sky',
    parentId: 'dto-return-received',
  },
  {
    id: 'dto-return-received-prepaid',
    label: 'By Prepaid',
    count: 11429,
    amount: '1,13,61,879',
    link: 'https://drive.google.com/open?id=1v4_51wD1noX-hnjHm9WN2ae3DNQHHd-f',
    color: 'pink',
    parentId: 'dto-return-received',
  },

  /* ── Level 3: COD/Prepaid children of DTO Delivered-Return Cancelled ── */
  {
    id: 'dto-delivered-return-cancelled-cod',
    label: 'By COD',
    count: 371,
    amount: '3,99,867',
    link: 'https://drive.google.com/open?id=1OrFpdd-hLqyupf2u87VvCO9jw3eI_PVy',
    color: 'sky',
    parentId: 'dto-delivered-return-cancelled',
  },
  {
    id: 'dto-delivered-return-cancelled-prepaid',
    label: 'By Prepaid',
    count: 916,
    amount: '9,11,145',
    link: 'https://drive.google.com/open?id=1wpHkFKO6sRRrNwAD6HGxAg4TykRdpaa4',
    color: 'pink',
    parentId: 'dto-delivered-return-cancelled',
  },

  /* ── Level 2: COD/Prepaid children of Total Fulfillable/Unfulfillable/Created ── */
  {
    id: 'fulfillable-cod',
    label: 'By COD',
    count: 1583,
    amount: '1,69,753',
    link: 'https://drive.google.com/open?id=1yYEa3wyeR2giO2U4ZNNAQNCPM9GU1Ptm',
    color: 'sky',
    parentId: 'fulfillable',
  },
  {
    id: 'fulfillable-prepaid',
    label: 'By Prepaid',
    count: 662,
    amount: '24,019',
    link: 'https://drive.google.com/open?id=1FvkYgoUl3wgkD3T4-urAvULj4ZEQ9-Gb',
    color: 'pink',
    parentId: 'fulfillable',
  },

  /* ── Level 2: COD/Prepaid children of Cancelled Before Shipment ── */
  {
    id: 'cancelled-before-shipment-cod',
    label: 'By COD',
    count: 7641,
    amount: '5,18,093',
    link: 'https://drive.google.com/open?id=1v0unVyl54IW4imvcm2XDpecf-XK27o5g',
    color: 'sky',
    parentId: 'cancelled-before-shipment',
  },
  {
    id: 'cancelled-before-shipment-prepaid',
    label: 'By Prepaid',
    count: 860,
    amount: '98,374',
    link: 'https://drive.google.com/open?id=1EHLZ4L7hmTSsLanhGOORM7V4iuTW1inC',
    color: 'pink',
    parentId: 'cancelled-before-shipment',
  },

  /* ── Level 2: COD/Prepaid children of Total Intransit ── */
  {
    id: 'total-intransit-cod',
    label: 'By COD',
    count: 791,
    amount: '7,48,435',
    link: 'https://drive.google.com/open?id=1OvGPEelbNGlS214-xqOc329oZarDGXIi',
    color: 'sky',
    parentId: 'total-intransit',
  },
  {
    id: 'total-intransit-prepaid',
    label: 'By Prepaid',
    count: 427,
    amount: '4,26,236',
    link: 'https://drive.google.com/open?id=1sgsz-vTMPk1N8NXeqAnpDFTuxTjCHEfb',
    color: 'pink',
    parentId: 'total-intransit',
  },

  /* ── Level 2: COD/Prepaid children of Total Lost ── */
  {
    id: 'total-lost-cod',
    label: 'By COD',
    count: 13,
    amount: '15,503',
    link: 'https://drive.google.com/open?id=1YulZVxZYSTo2YtVbZbpPlXDirEpgeFfx',
    color: 'sky',
    parentId: 'total-lost',
  },
  {
    id: 'total-lost-prepaid',
    label: 'By Prepaid',
    count: 32,
    amount: '25,583',
    link: 'https://drive.google.com/open?id=1oL3yAajK67l3HbMb7QAHVIYfJNrlpkml',
    color: 'pink',
    parentId: 'total-lost',
  },

  /* ── Level 2 children of RTO Created ── */
  {
    id: 'rto-lost',
    label: 'RTO Lost',
    count: 28,
    amount: '31,474',
    link: 'https://docs.google.com/spreadsheets/d/1EZLe4A6No6wRGCDVkCJMovGkzeXg0vyW/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },
  {
    id: 'rto-received',
    label: 'RTO Received',
    count: 6921,
    amount: '67,82,155',
    link: 'https://docs.google.com/spreadsheets/d/1aGdbSFxliV7PxuWAkvK76YYvsOBLcjAZ/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },
  {
    id: 'rto-intransit-ofd',
    label: 'RTO Intransit/Out for delivery',
    count: 907,
    amount: '9,15,584',
    link: 'https://docs.google.com/spreadsheets/d/1SBClX75ML7TDwf3GTjgFR2ItoVO6NDSn/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },
  {
    id: 'delivered-rto-cancelled',
    label: 'Delivered RTO Cancelled by Customer',
    count: 2,
    amount: '1,417',
    link: 'https://docs.google.com/spreadsheets/d/1UeQe6HDi2acYFIbfK38ruhjwPXlYTXCH/edit?usp=sharing&ouid=108625963842783784299&rtpof=true&sd=true',
    color: 'rose',
    parentId: 'rto-created',
  },

  /* ── Level 3: COD/Prepaid children of RTO Lost ── */
  {
    id: 'rto-lost-cod',
    label: 'By COD',
    count: 27,
    amount: '30,237',
    link: 'https://drive.google.com/open?id=1LPiOwWqOENrvnXs_AbdSVtQQNNfF-ira',
    color: 'sky',
    parentId: 'rto-lost',
  },
  {
    id: 'rto-lost-prepaid',
    label: 'By Prepaid',
    count: 1,
    amount: '1,237',
    link: 'https://drive.google.com/open?id=1l7Rxx3mnDqow05I-x7bDeUH2fbsvHjDz',
    color: 'pink',
    parentId: 'rto-lost',
  },

  /* ── Level 3: COD/Prepaid children of RTO Received ── */
  {
    id: 'rto-received-cod',
    label: 'By COD',
    count: 6341,
    amount: '62,68,782',
    link: 'https://drive.google.com/open?id=1aXJ4jiYFPjj9SapRTa2VAWCRGIsIwSrE',
    color: 'sky',
    parentId: 'rto-received',
  },
  {
    id: 'rto-received-prepaid',
    label: 'By Prepaid',
    count: 580,
    amount: '5,13,373',
    link: 'https://drive.google.com/open?id=1rU5CaXpvuANa40tO5NSMogLl2hMNZBCb',
    color: 'pink',
    parentId: 'rto-received',
  },

  /* ── Level 3: COD/Prepaid children of RTO Intransit/Out for delivery ── */
  {
    id: 'rto-intransit-ofd-cod',
    label: 'By COD',
    count: 845,
    amount: '8,59,367',
    link: 'https://drive.google.com/open?id=1qkjB9-Xp__yDWDVdOa8MDsZR1mFXDv-6',
    color: 'sky',
    parentId: 'rto-intransit-ofd',
  },
  {
    id: 'rto-intransit-ofd-prepaid',
    label: 'By Prepaid',
    count: 62,
    amount: '56,217',
    link: 'https://drive.google.com/open?id=1h_xhiRis2wMiKZx9xTeaQlO6kVtxJrp5',
    color: 'pink',
    parentId: 'rto-intransit-ofd',
  },

  /* ── Level 3: COD/Prepaid children of Delivered RTO Cancelled ── */
  {
    id: 'delivered-rto-cancelled-cod',
    label: 'By COD',
    count: 0,
    amount: '0',
    link: 'https://drive.google.com/open?id=15thngni0G-G37jV7wdiO4Ocv0DPa0-Ln',
    color: 'sky',
    parentId: 'delivered-rto-cancelled',
  },
  {
    id: 'delivered-rto-cancelled-prepaid',
    label: 'By Prepaid',
    count: 2,
    amount: '1,417',
    link: 'https://drive.google.com/open?id=1vRRAdJWoF-wFtmGfWv4q0BTpn57SioYh',
    color: 'pink',
    parentId: 'delivered-rto-cancelled',
  },
];

/* Solid muted colour palette */
export const colorMap = {
  root: {
    bg: '#eef2ff',
    border: '#6366f1',
    text: '#312e81',
    accent: '#4f46e5',
  },
  blue: {
    bg: '#dbeafe',
    border: '#3b82f6',
    text: '#1e3a5f',
    accent: '#2563eb',
  },
  green: {
    bg: '#dcfce7',
    border: '#22c55e',
    text: '#14532d',
    accent: '#16a34a',
  },
  amber: {
    bg: '#fef3c7',
    border: '#d97706',
    text: '#78350f',
    accent: '#b45309',
  },
  rose: {
    bg: '#ffe4e6',
    border: '#e11d48',
    text: '#881337',
    accent: '#be123c',
  },
  violet: {
    bg: '#ede9fe',
    border: '#7c3aed',
    text: '#4c1d95',
    accent: '#6d28d9',
  },
  orange: {
    bg: '#ffedd5',
    border: '#ea580c',
    text: '#7c2d12',
    accent: '#c2410c',
  },
  teal: {
    bg: '#ccfbf1',
    border: '#0d9488',
    text: '#134e4a',
    accent: '#0f766e',
  },
  sky: {
    bg: '#e0f2fe',
    border: '#0ea5e9',
    text: '#0c4a6e',
    accent: '#0284c7',
  },
  pink: {
    bg: '#fce7f3',
    border: '#ec4899',
    text: '#831843',
    accent: '#db2777',
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
