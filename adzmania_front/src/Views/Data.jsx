export const orders = [
  {
    order_id: "#20462",
    product: "meta",
    date: "13/05/2022",
    amount: "$4.95",
    payment_mode: "Cih Bank",
    status: "Delivered",
  },
  {
    order_id: "#18933",
    product: "Tiktok",
    date: "22/05/2022",
    amount: "$8.95",
    payment_mode: "Paypal",
    status: "Delivered",
  },
  {
    order_id: "#45169",
    product: "meta",
    date: "15/06/2022",
    amount: "$1,149.95",
    payment_mode: "Cih Bank",
    status: "Process",
  },
  {
    order_id: "#34304",
    product: "meta",
    date: "06/09/2022",
    amount: "$899.95",
    payment_mode: "Wise",
    status: "Pending",
  },
];
export const statusColors = {
  delivered: {
    bgColor: "bg-st_delivered_bg",
    textColor: "text-st_delivered_text",
  },
  process: {
    bgColor: "bg-st_process_bg",
    textColor: "text-st_process_text",
  },
  pending: {
    bgColor: "bg-st_pending_bg",
    textColor: "text-st_pending_text",
  },
};
