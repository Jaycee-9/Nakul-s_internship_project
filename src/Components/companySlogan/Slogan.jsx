import { ArrowRightAlt } from "@mui/icons-material";

function Slogan() {
  const style = {
    position: "relative",
    top: "7px",
    left: "20px",
  };
  return (
    <div className="slogan-content">
      <h1>
        CONNECTING DREAMS TO REALITY <span>YOUR PREMIER</span> REAL ESTATE
        MARKETPLACE
      </h1>
      <p>Where every search ends with a home</p>
      <button>
        <h5>
          Find Your Home <ArrowRightAlt sx={style} />
        </h5>
      </button>
      <button>
        <h5>
          List Your Property <ArrowRightAlt sx={style} />
        </h5>
      </button>
    </div>
  );
}

export default Slogan;
