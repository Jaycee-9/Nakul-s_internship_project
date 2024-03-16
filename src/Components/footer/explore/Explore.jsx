import { ArrowRightAlt } from "@mui/icons-material";
function Explore() {
  const style = {
    position: "relative",
    top: "7px",
    left: "8px",
  };
  return (
    <div className="explore">
      <div className="explore-heading">
        <h1>XYZ</h1>
        <p>INDUSTRIES</p>
      </div>
      <div className="explore-content">
        <p>
          XYZ Industries: Where real estate dreams meet seamless transactions,
          transforming aspirations into achievements.
        </p>
      </div>
      <button>
        EXPLORE <ArrowRightAlt sx={style} />
      </button>
    </div>
  );
}

export default Explore;
