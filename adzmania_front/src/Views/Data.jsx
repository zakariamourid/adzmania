import { axiosClient } from "../axios";

const token = localStorage.getItem("ACCESS_TOKEN");
export const getOrders = async () => {
  try {
    const response = await axiosClient.get("api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const orders = [
  {
    id: "#20462",
    product: "meta",
    date: "13/05/2022",
    amount: "$4.95",
    payment_mode: "Cih Bank",
    status: "delivered",
  },
  {
    id: "#18933",
    product: "Tiktok",
    date: "22/05/2022",
    amount: "$8.95",
    payment_mode: "Paypal",
    status: "delivered",
  },
  {
    id: "#45169",
    product: "meta",
    date: "15/06/2022",
    amount: "$1,149.95",
    payment_mode: "Cih Bank",
    status: "process",
  },
  {
    id: "#34304",
    product: "meta",
    date: "06/09/2022",
    amount: "$899.95",
    payment_mode: "Wise",
    status: "pending",
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
