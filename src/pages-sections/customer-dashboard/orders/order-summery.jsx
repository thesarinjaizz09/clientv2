import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider"; // GLOBAL CUSTOM COMPONENTS
import Button from "@mui/material/Button";
import { FlexBetween } from "components/flex-box";
import { H5, H6, Paragraph } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL

// ==============================================================
function ListItem({ title, value }) {
  return (
    <FlexBetween mb={1}>
      <Paragraph color="grey.600">{title}</Paragraph>
      <H6>{value}</H6>
    </FlexBetween>
  );
}

export default function OrderSummery({ order }) {
  return (
    <Grid container spacing={3}>
      {/* SHIPMENT ADDRESS SECTION */}
      <Grid item lg={6} md={6} xs={12}>
        <Card
          sx={{
            p: 3,
          }}
        >
          <H5 mt={0} mb={2}>
            Order Cashbacks
          </H5>

          <Paragraph
            fontSize={14}
            my={0}
            sx={{ color: "green", fontWeight: 600 }}
          >
            Wallet will be credited with {order._orderUserCarrierCoins} Edge Coins
          </Paragraph>
        </Card>
        <Card
          sx={{
            p: 3,
            marginTop: 3,
          }}
        >
          <H5 mt={0} mb={2}>
            Shipping Address
          </H5>

          <Paragraph fontSize={14} my={0}>
            {order._orderAddress}
          </Paragraph>
        </Card>
        <Card
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 1.8,
          }}
        >
          <Button
            color="primary"
            sx={{
              bgcolor: "primary.light",
              px: 2,
              border: "1px solid #d23f6f",
            }}
          >
            Return
          </Button>
          <Button
            color="primary"
            sx={{
              bgcolor: "primary.light",
              px: 2,
              border: "1px solid #d23f6f",
            }}
          >
            Replace
          </Button>
          <Button
            color="primary"
            sx={{
              bgcolor: "primary.light",
              px: 2,
              border: "1px solid #d23f6f",
            }}
          >
            Cancel
          </Button>
        </Card>
      </Grid>

      {/* TOTAL SUMMERY SECTION */}
      <Grid item lg={6} md={6} xs={12}>
        <Card
          sx={{
            p: 3,
          }}
        >
          <H5 mt={0} mb={2}>
            Order Summary
          </H5>

          <ListItem
            title="Items Rates"
            value={currency(order._orderSubAmount)}
          />
          <ListItem
            title="Postages & Handling Rates"
            value={currency(order._orderDeliveryRate)}
          />
          <ListItem
            title="Tax (included in price)"
            value={currency(order._orderTotalTax)}
          />
          <ListItem title="Discount" value={"-"} />

          <Divider
            sx={{
              mb: 1,
            }}
          />

          <FlexBetween mb={2}>
            <H6>Total</H6>
            <H6>{currency(order._orderTotalAmount)}</H6>
          </FlexBetween>
          <FlexBetween mb={2}>
            <H6>Paid Amount</H6>
            <H6>
              {currency(order._orderPaidAmount ? order._orderPaidAmount : 0)}
            </H6>
          </FlexBetween>

          <Paragraph>
            {order._paymentMode ? order._paymentMode : "Cash On Delivery"}
          </Paragraph>
        </Card>
      </Grid>
    </Grid>
  );
}
