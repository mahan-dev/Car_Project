import { Button } from "@mui/material";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";

interface ButtonInterface {
  onClick: () => void;
  disabled: boolean;
}

const ButtonReset = ({ onClick, disabled }: ButtonInterface) => {
  return (
    <Button
      className={styles["item__reset-button"]}
      onClick={onClick}
      sx={{ mt: "1rem" }}
      variant="contained"
      disabled={disabled}
    >
      Reset
    </Button>
  );
};

export default ButtonReset;
