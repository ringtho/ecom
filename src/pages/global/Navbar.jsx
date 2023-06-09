
import {useSelector, useDispatch} from "react-redux"
import { Badge, Box, IconButton } from "@mui/material"
import {
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,
    PersonOutlined
} from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { shades } from "../../theme"
import { setIsCartOpen } from "../../redux"

function Navbar(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cart, isCartOpen} = useSelector(state => state.cart)
    console.log(isCartOpen)
    return (
        <Box
            display="flex"
            alignItems="center"
            width="100%"
            height="60px"
            backgroundColor="rgba(255,255,255,0.95)"
            color="Black"
            position="fixed"
            top="0"
            left="0"
            zIndex="1"
        >
            <Box
                width="80%"
                display="flex"
                margin="auto"
                justifyContent="space-between"
                alignItems="center"    
            >
                <Box
                    onClick={()=> navigate("/")}
                    sx={{ '&:hover' : {cursor: "pointer"}}}
                    color={shades.secondary[500]}
                >
                ECOMMER
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    columnGap="20px"
                    zIndex="2"
                >
                    <IconButton>
                        <SearchOutlined sx={{ color: "black"}} />
                    </IconButton>
                    <IconButton>
                        <PersonOutlined sx={{ color: "black"}} />
                    </IconButton>
                    <Badge
                        badgeContent={cart.length}
                        color="secondary"
                        invisible={cart.length === 0}  
                        sx={{
                           " & .MuiBadge-badge" : {
                            right: 5,
                            top: 5,
                            padding: "0 4px",
                            height: "14px",
                            minWidth: "13px"
                           },
                        }}  
                    >
                    <IconButton>
                        <ShoppingBagOutlined
                        onClick={()=> dispatch(setIsCartOpen({}))}
                        sx={{ color: "black"}} />
                    </IconButton>
                    </Badge>
                    <IconButton>
                        <MenuOutlined sx={{ color: "black"}} />
                    </IconButton>

                </Box>

            </Box>

        </Box>
    )
}

export default Navbar 