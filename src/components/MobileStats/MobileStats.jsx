import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { fetchData } from "../../redux/dataActions";

const MobileStats = ({ fetchData, data, error }) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <Box className={styles.MobileStats}>
            <Container maxWidth="md">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box className={styles.stateBox}>
                        <div>
                            <p className={styles.bold}>{data && data.user.posts_count}</p>
                            <p>posts</p>
                        </div>
                    </Box>
                    <Box className={styles.stateBox}>
                        <div>
                            <p className={styles.bold}>{data && data.user.follower_count}</p>
                            <p>followers</p>
                        </div>
                    </Box>
                    <Box className={styles.stateBox}>
                        <div>
                            <p className={styles.bold}>{data && data.user.follow_count}</p>
                            <p>followings</p>
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
    error: state.error,
});

export default connect(mapStateToProps, { fetchData })(MobileStats);
