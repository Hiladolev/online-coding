import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          Made with <FavoriteIcon sx={{ color: pink[500] }} /> By &nbsp;
          <Link color="inherit" href="https://github.com/Hiladolev">
            Hila Dolev
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
