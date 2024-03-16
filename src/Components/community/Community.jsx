import { ArrowRightAlt } from "@mui/icons-material";

function Community() {
  const style = {
    position: "relative",
    top: "7px",
    left: "20px",
  };
  return (
    <div className="community">
      <div className="community-gradient"></div>
      <div className="community-container">
        <p>
          YOUR <span>TRUSTED</span> PARTNER IN THE FUTURE OF HOUSING.
        </p>
        <p>
          Our partnerships with governments and local banks ensure that our
          housing prices are affordable enough for our target market.
        </p>
        <button>
          List Your Property <ArrowRightAlt sx={style} />
        </button>
      </div>
    </div>
  );
}

export default Community;
