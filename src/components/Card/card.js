import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { useCustomersContext } from "../../context";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ content }) {
  const { get_customer_by_id, customers_context } = useCustomersContext();
  const { customers_list } = customers_context;

  const [expanded, setExpanded] = React.useState(false);
  let customer_info = [];
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [full_name, set_full_name] = useState();
  const [date, set_date] = useState();
  const get_customer_info = async () => {
    customer_info = await get_customer_by_id(content.customer_id);
    let fullname = customer_info.data.name + " " + customer_info.data.surname;
    set_full_name(fullname);
    set_date(content.date);
  };

  useEffect(() => {
    get_customer_info();
  }, []);

  console.log("test", content);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={full_name} subheader={date} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
    </Card>
  );
}
