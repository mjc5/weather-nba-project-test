import { Button } from "@mui/material";
export const EmailButton = () => {
    return (
        <Button
            variant="contained"
            target="_blank"
            href="mailto:paul@realsynch.com?subject=RealSynch Developer Challenge"
            size="large"
            sx={{ m: 2, bgcolor: "#00003C" }}
            disableElevation >
            Ask a Question
        </Button>
    )
}