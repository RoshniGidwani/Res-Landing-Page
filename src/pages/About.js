import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to Shakes Appeal, where culinary excellence meets heartfelt hospitality. Our journey began with a passion for creating unforgettable dining experiences that go beyond the plate. Nestled in the heart of Bhopal, we take pride in crafting a warm and inviting atmosphere that mirrors our commitment to exceptional service. At Shakes Appeal, we believe in the power of shared moments over a delicious meal, bringing people together to savor the joys of life. Our culinary team, led by renowned chefs, meticulously curates a menu that blends local flavors with global inspirations, promising a gastronomic adventure with every bite.
        </p>
        <br />
        <p>
        At Shakes Appeal, we are more than just a dining destination; we are a community of food enthusiasts dedicated to elevating the art of gastronomy. Our commitment to sourcing the finest ingredients ensures that each dish is a masterpiece, reflecting our dedication to quality and authenticity. Whether you're a first-time visitor or a cherished regular, our goal is to make every dining experience memorable. From our knowledgeable staff to our thoughtfully designed ambiance, every aspect of Shakes Appeal is crafted with you in mind. Join us on a culinary journey that celebrates the joy of shared meals and the pleasure of savoring extraordinary flavors at Shakes Appeal.
        </p>
      </Box>
    </Layout>
  )
}

export default About
