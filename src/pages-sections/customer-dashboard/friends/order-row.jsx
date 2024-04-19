import Link from "next/link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import { format } from "date-fns"; // GLOBAL CUSTOM COMPONENT
import Diversity1Icon from "@mui/icons-material/Diversity1";

import { H5, Paragraph } from "components/Typography"; // Local CUSTOM COMPONENT

import TableRow from "../table-row"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL

// =================================================
export default function OrderRow({ order }) {
  const getColor = (status) => {
    switch (status) {
      case "Active":
        return "success";

      case "InActive":
        return "primary";

      default:
        return "default";
    }
  };

  return (
    <Link href={""}>
      <TableRow
        sx={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        }}
        style={{ backgroundColor: "rgba(43, 52, 69, 0.95)", color: "white" }}
      >

        <H5 ellipsis>
          {order._name.substring(0, 18)}
        </H5>

        <Box textAlign="center">
          <Chip
            size="small"
            label={order._cashBack === "" ? "In - Active" : "Active"}
            color={getColor(order._cashBack === "" ? "InActive" : "Active")}
          />
        </Box>

        <Paragraph
          textAlign={{
            sm: "center",
            xs: "left",
          }}
        >
          {order._userNumber !== "" ? order._userNumber : "XXXXX XXXXX"}
        </Paragraph>

        <Paragraph textAlign="center">{currency(order._cashBack)}</Paragraph>

        <Box
          display={{
            sm: "inline-flex",
            xs: "none",
          }}
          justifyContent="end"
        >
          <IconButton>
            <East
              fontSize="small"
              sx={{
                color: "grey.500",
                transform: ({ direction }) =>
                  `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
              }}
            />
          </IconButton>
        </Box>
      </TableRow>
    </Link>
  );
}
