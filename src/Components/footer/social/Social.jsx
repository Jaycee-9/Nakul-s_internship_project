import { Instagram, Twitter, YouTube, Facebook } from "@mui/icons-material";
function Social() {
  const style = {
    color: "#fff",
    marginLeft: "10px",
    position: "relative",
    left: "60px",
  };
  return (
    <div className="social-conntainer">
      <div className="social-icons">
        <YouTube sx={style} />
        <Twitter sx={style} />
        <Instagram sx={style} />
        <Facebook sx={style} />
      </div>
      <div className="social-tc">
        <p>Terms | Privacy</p>
        <p>&copy; copyright</p>
      </div>
    </div>
  );
}

export default Social;
