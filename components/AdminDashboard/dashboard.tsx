"use client";

import React from "react";
import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useRouter } from "next/navigation"; // Updated import
import {
  FaUsers,
  FaProductHunt,
  FaComments,
  FaCogs,
  FaShippingFast,
  FaFileInvoiceDollar,
  FaChartBar,
  FaQuestionCircle,
} from "react-icons/fa";

import './index.css';

const adminList = [
  { id: 1, text: "Users Management", route: "/admin/users", icon: <FaUsers /> },
  { id: 2, text: "Product Management", route: "/admin/products", icon: <FaProductHunt /> },
  { id: 3, text: "Reviews & Feedback", route: "/admin/reviews", icon: <FaComments /> },
  { id: 4, text: "Categories", route: "/admin/categories", icon: <FaCogs /> },
  { id: 5, text: "Testimonials", route: "/admin/testimonials", icon: <FaComments /> },
  { id: 7, text: "Orders", route: "/admin/orders", icon: <FaFileInvoiceDollar /> },
  { id: 9, text: "Analytics & Reports", route: "/admin/analytics", icon: <FaChartBar /> },
  { id: 10, text: "Payments", route: "/admin/payments", icon: <FaFileInvoiceDollar /> },
  { id: 11, text: "Shipping & Delivery", route: "/admin/shipping", icon: <FaShippingFast /> },
  { id: 12, text: "Size", route: "/admin/size", icon: <FaShippingFast /> },
  { id: 13, text: "Site Settings", route: "/admin/site-settings", icon: <FaCogs /> },
  { id: 16, text: "FAQ's", route: "/admin/faq", icon: <FaQuestionCircle /> },
];

const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <Box className="flex flex-col items-center bg-white-100 min-h-screen p-5">
      <Typography
        variant="h4"
        className="font-semibold mb-5 py-4"
        style={{ fontFamily: 'Poppins' }}
      >
        Admin Dashboard
      </Typography>
      <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {adminList.map((item) => (
          <Card
            key={item.id}
            className="hover:shadow-lg transition-shadow"
            onClick={() => router.push(item.route)} // Navigate on click
          >
            <CardActionArea>
              <CardContent
                className="flex flex-col items-center text-center"
                style={{ gap: 4, margin: 5 }}
              >
                <Box className="text-3xl text-blue-500 mb-2">{item.icon}</Box>
                <Typography
                  variant="h6"
                  className="font-medium"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {item.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
