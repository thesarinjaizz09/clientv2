import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; // ==============================================================

// ==============================================================
export default function BottomActions({
  total,
  amount,
  handleNavigate
}) {
  return <Box p={2.5}>
      <Button fullWidth color="primary" variant="outlined" sx={{
      mb: "0.75rem",
      height: "40px"
    }}>
        Edge Coins Credits: {total * 0.10} ECs
      </Button>

      <Button fullWidth color="primary" variant="contained" sx={{
      height: 40
    }} onClick={handleNavigate("/cart")}>
        View Cart: {amount}
      </Button>
    </Box>;
}