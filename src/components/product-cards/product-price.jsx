import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import { Paragraph } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; // ==============================================================

// ==============================================================
export default function ProductPrice({
  discount,
  price,
  salePrice
}) {
  return <FlexBox alignItems="center" gap={1} mt={0.5}>
      <Paragraph fontWeight={600} color="primary.main">
        {currency(salePrice)}
      </Paragraph>

      <Box component="del" fontWeight={600} color="grey.600">
          {currency(price)}
        </Box>
    </FlexBox>;
}