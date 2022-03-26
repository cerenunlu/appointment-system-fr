import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "../Card/card";
export default function BasicList({
    list,
}) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {(list).map((obj, index) => (
              <ListItem key={index} disablePadding>
              <Card content={obj}/>
            </ListItem>
            
          ))}
          
        </List>
      </nav>
    </Box>
  );
}
