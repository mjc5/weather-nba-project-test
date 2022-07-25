import { Button } from "@mui/material";
export const InstructionButton = () => {
        return ( 
        <Button 
            variant = "contained"
            target = "_blank"
            href = "https://github.com/ReWattInc/rs_challenge/blob/main/README.md"
            size = "large"
            sx = {{ m: 2, bgcolor: "#00003C" }}
            disableElevation >
            Instructions 
        </Button>
        )}