import  React, {useContext} from 'react'
import { Box, Card, CardContent, Stack, Typography, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
const CartItem = ({ item }) => {
  const { removeInCart } = useContext(ShoppingCartContext);
  const deleteItem = (idmovie) =>{
    removeInCart(idmovie);
  }
  return (
    <Box mt={3}>
      <Card>
        <CardContent>
          <Stack direction="row" justifyContent="space-between" gap={3}>
            <img
              width={100}
              height={100}
              style={{
                objectFit: "cover",
                borderRadius: 4,
              }}
              src={item.movie.Poster}
              alt={item.movie.Title}
            />
            <Stack
              sx={{
                textAlign: "left",
                width: "100%",
              }}
            >
              <Typography variant="h6">{item.movie.Title}</Typography>
              <Typography variant="subtitle1">$ {item.movie.Price}</Typography>
              <Typography variant="subtitle1">{item.quantity}</Typography>
              <Button onClick={()=>{deleteItem(item.movie.imdbID)}}><DeleteIcon/></Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartItem;
