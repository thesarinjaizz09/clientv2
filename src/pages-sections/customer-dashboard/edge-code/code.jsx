import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar"; // GLOBAL CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flex-box";
import { H3, H5, Paragraph, Small } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL

// ==============================================================
export default function Code({ user }) {
  const INFO_LIST = [{
    title: `${user._orders.length}`,
    subtitle: "Orders"
  }, {
    title: `${user._ownCarrierCoinsTxn.length}`,
    subtitle: "Cashback"
  },{
    title: `${user._ownTeamMembers.length}`,
    subtitle: "Friends"
  }, , {
    title: `${user._referCarrierCoinsTxn.length}`,
    subtitle: "Earnings"
  }];
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Card
          sx={{
            gap: 2,
            height: "100%",
            display: "flex",
            p: "1rem 1.5rem",
            alignItems: "center",
            backgroundColor:"rgba(43, 52, 69, 0.95)",
            color: "white"
          }}
        >
          <Avatar
            alt={user._name}
            src={`data:image/png;base64, ${user._avatar}`}
            sx={{
              height: 64,
              width: 64,
            }}
          />

          <FlexBetween flexWrap="wrap" flex={1}>
            <div>
              <H5>{`${user._name}`}</H5>

              <FlexBox alignItems="center" gap={1}>
                <Paragraph color="grey.600">Edge Code:</Paragraph>
                <Paragraph color="primary.main">
                  {user._referCode !== "" ? user._referCode : "******"}
                </Paragraph>
              </FlexBox>
            </div>

            <Paragraph color="#Ffd700" letterSpacing={3}>
              {user._orders.length > 0 ? "NCTEDGE MEMBER" : "NCTEDGE USER"}
            </Paragraph>
          </FlexBetween>
        </Card>
      </Grid>

      <Grid item container spacing={3} md={6} xs={12}>
        {INFO_LIST.map((item) => (
          <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                p: "1rem 1.25rem",
                alignItems: "center",
                flexDirection: "column",
                bgcolor:"rgba(43, 52, 69, 0.95)",
              }}
            >
              <H3 color="primary.main" my={0} fontWeight={600}>
                {item.title}
              </H3>

              <Small color="grey.600" textAlign="center">
                {item.subtitle}
              </Small>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
