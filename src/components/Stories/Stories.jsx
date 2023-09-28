import React from "react";
import { Box, Container } from "@mui/material";
import styles from "./styles.module.scss";
import Plus from "../../images/plus.svg";

const Stories = () => {
    return (
        <Container maxWidth="md">
            <Box className={styles.stories}>
                <Box className={styles.storyCircle}>
                    <Box className={styles.circle}>
                        <img src={Plus} alt="plus icon" />
                    </Box>
                    <p>New</p>
                </Box>
            </Box>
        </Container>
    );
};

export default Stories;
