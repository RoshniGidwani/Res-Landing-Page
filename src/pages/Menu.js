import React from "react";
import { Menulist } from "../Data.js/Data";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Menulist.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.images}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                  
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="h4"> <CurrencyRupeeIcon  /> {menu.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
     
    </Layout>
  )
}

export default Menu
