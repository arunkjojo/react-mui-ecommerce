import { Avatar, Box, Button, Divider, Drawer, Paper, Typography, useMediaQuery } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/system";

export default function Cart() {

    const { cart, showCart, setShowCart } = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const cartContent = cart.map(item => (
        <Box key={item.id}>
            <Box
                display = 'flex'
                sx = {{ pt: 2, pb: 2 }}
                alignItems = 'start'
                justifyContent = 'space-between'
            >
                <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
                <Box display='flex' flexDirection='column'>
                    <Typography variant='h6'>{item.name}</Typography>
                    {!matches && <Typography variant='subtitle2'>{item.description}</Typography>  }
                </Box>
                <Typography variant='body1' justifyContent='end'>${item.price}</Typography>
            </Box>
            {matches && <Typography variant='subtitle2'>{item.description}</Typography> }
            <Divider variant='inset' />
        </Box>
    ))

    return (
        <Drawer
            open={showCart}
            anchor='right'
            PaperProps={{
                sx: {
                    width: matches? '100%' : 500,
                    background: Colors.light_gray,
                    borderRadius: 0,
                }
            }}
        >
            {cart && cart.length >0 ?
            <Box
                display = 'flex'
                sx = {{ p: 4 }}
                alignItems = 'center'
                justifyContent = 'center'
                flexDirection = 'column'
            >
                <Typography variant='h3' color={Colors.black}>
                    Your Cart
                </Typography>
                <Typography variant='body1' color={Colors.muted}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna.
                </Typography>
                <Paper
                    elevation={0}
                    sx={{
                        mt:2,
                        p:4,
                        width: "90%",
                    }}
                >
                    { cartContent }
                </Paper>
                <Button sx={{ mt: 4 }} variant='contained'>
                    Proceed to payment
                </Button>
            </Box>
            : <Box
                display = 'flex'
                sx = {{ p: 4 }}
                alignItems = 'center'
                justifyContent = 'center'
            >
                <Typography variant={matches ? 'h5' : 'h3'} color={Colors.black}>
                    Your Cart is Empty!
                </Typography>
            </Box> }
            <Button onClick={()=> setShowCart(false)}>
                Close
            </Button>
        </Drawer>
    )
}