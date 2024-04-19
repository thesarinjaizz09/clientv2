"use client";

import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button"; // MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H1, H2, H3, H6 } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // DUMMY DATA

import productVariants from "data/product-variants"; // CUSTOM DATA MODEL

// ================================================================
export default function ProductIntro({
  product
}) {
  const {
    _id,
    _modelNumber,
    _title,
    _image,
    _salePrice,
    _stock,
  } = product || {};
  const {
    state,
    dispatch
  } = useCart();

  const edgeCoins = _salePrice * 0.10;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectVariants, setSelectVariants] = useState({
    option: "option 1",
    type: "type 1"
  }); // HANDLE CHANGE TYPE AND OPTIONS

  const handleChangeVariant = (variantName, value) => () => {
    setSelectVariants(state => ({ ...state,
      [variantName.toLowerCase()]: value
    }));
  }; // CHECK PRODUCT EXIST OR NOT IN THE CART


  const cartItem = state.cart.find(item => item.id === _id); // HANDLE SELECT IMAGE

  const handleImageClick = ind => () => setSelectedImage(ind); // HANDLE CHANGE CART


  const handleCartAmountChange = amount => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        price: _salePrice,
        qty: amount,
        name: _title,
        imgUrl: _image.split(",")[0],
        id: _id,
        slug: _id,
        modelNumber: _modelNumber
      }
    });
  };

  var images = [];
  for (let index = 0; index < _image.split(",").length - 1; index++) {
    const element = _image.split(",")[index];
    images.push(element)
  }

  return <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        {
        /* IMAGE GALLERY AREA */
      }
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            <LazyImage alt={_title} width={300} height={300} loading="eager" src={`data:image/png;base64,${_image.split(',')[selectedImage]}`} sx={{
            objectFit: "contain"
          }} />
          </FlexBox>

          <FlexBox overflow="auto">
            {images.map((url, ind) => <FlexRowCenter key={ind} width={64} height={64} minWidth={64} bgcolor="white" border="1px solid" borderRadius="10px" ml={ind === 0 ? "auto" : 0} style={{
            cursor: "pointer"
          }} onClick={handleImageClick(ind)} mr={ind === images.length - 1 ? "auto" : "10px"} borderColor={selectedImage === ind ? "primary.main" : "grey.400"}>
                <Avatar alt="product" src={`data:image/png;base64,${url}`} variant="square" sx={{
              height: 40
            }} />
              </FlexRowCenter>)}
          </FlexBox>
        </Grid>

        {
        /* PRODUCT INFO AREA */
      }
        <Grid item md={6} xs={12} alignItems="center">
          {
          /* PRODUCT NAME */
        }
          <H1 mb={1}>{_title}</H1>

          {
          /* PRODUCT BRAND */
        }
          <FlexBox alignItems="center" mb={1}>
            <H6>NCT</H6>
          </FlexBox>

          {
          /* PRODUCT RATING */
        }
          <FlexBox alignItems="center" gap={1} mb={2}>
            <Rating color="warn" value={0} readOnly />
            <H6 lineHeight="1">(0)</H6>
          </FlexBox>

          {
          /* PRODUCT VARIANTS */
        }
          <Box mb={2}>
              <H6 mb={1}>{'Edge Coins Credits'}</H6>
               <Chip label={`${edgeCoins} ECs`} sx={{
                borderRadius: "4px",
                mr: 1,
                cursor: "pointer"
              }} color={"default"} />
          </Box>

          {
          /* PRICE & STOCK */
        }
          <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              {currency(_salePrice)}
            </H2>
            <Box color="inherit">{_stock === 0 ? "Out of Stock" : `Only ${_stock} left in stock`}</Box>
          </Box>

          {
          /* ADD TO CART BUTTON */
        }
          {!cartItem?.qty ? <Button color="primary" variant="contained" onClick={handleCartAmountChange(1)} sx={{
          mb: 4.5,
          px: "1.75rem",
          height: 40
        }}>
              Add to Cart
            </Button> : <FlexBox alignItems="center" mb={4.5}>
              <Button size="small" sx={{
            p: 1
          }} color="primary" variant="outlined" onClick={handleCartAmountChange(cartItem?.qty - 1)}>
                <Remove fontSize="small" />
              </Button>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <Button size="small" sx={{
            p: 1
          }} color="primary" variant="outlined" onClick={handleCartAmountChange(cartItem?.qty + 1)}>
                <Add fontSize="small" />
              </Button>
            </FlexBox>}

          {
          /* SHOP NAME */
        }
          <FlexBox alignItems="center" gap={1} mb={2}>
            <div>Sold By :</div>
            <Link href="/shops/scarlett-beauty">
              <H6>NCT</H6>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>;
}