import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns"; // GLOBAL CUSTOM COMPONENTS

import { H6, Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL

// ==============================================================
export default function OrderedProducts({
  order
}) {
  const {
    _orderNo,
    createdAt,
    _orderItems,
    deliveredAt
  } = order || {};
  return <Card sx={{
    p: 0,
    mb: "30px"
  }}>
      <FlexBetween px={3} py={2} flexWrap="wrap" bgcolor="grey.200">
        <Item title="Order No:" value={_orderNo} />
        <Item title="Placed on:" value={format(new Date(createdAt), "dd MMM, yyyy")} />
        <Item title="Delivered on:" value={deliveredAt ? format(new Date(deliveredAt), "dd MMM, yyyy") : "Processing"} />
      </FlexBetween>

      {_orderItems.map((item, ind) => <FlexBetween px={2} py={1} flexWrap="wrap" key={ind}>
          <FlexBox gap={2.5} alignItems="center">
            <Avatar src={`data:image/png;base64, ${item._productImg}`} alt={item._name} sx={{
          height: 64,
          width: 64
        }} />

            <div>
              <H6>{item._name}</H6>
              <Paragraph color="grey.600">
                {currency(item._price)} x {item._qty}
              </Paragraph>
            </div>
          </FlexBox>

          <Paragraph color="grey.600" ellipsis>
            {currency(item._price * item._qty)}
          </Paragraph>

          <Paragraph color="grey.600" ellipsis>
            {(item._price * item._qty) * 0.10} ECs
          </Paragraph>


          {/* <Button variant="text" color="primary">
            Write a Review
          </Button> */}
        </FlexBetween>)}
    </Card>;
}

function Item({
  title,
  value
}) {
  return <FlexBox gap={1} alignItems="center">
      <Paragraph color="grey.600">{title}</Paragraph>
      <Paragraph>{value}</Paragraph>
    </FlexBox>;
}