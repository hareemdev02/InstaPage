import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { fetchData } from "../../redux/dataActions";
import Stories from "../Stories/Stories";
import TabsContent from "../Tabs/Tabs";
import MobileStats from "../MobileStats/MobileStats";

const Home = ({ fetchData, data, error }) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Box>
            <Container maxWidth="md">
                <Box className={styles.profile}>
                    <Box className={styles.profileHeader}>
                        <Box className={styles.roundWrapper}>
                            <img src={data && data.user.profile_pic_url} alt="profile icon" />
                        </Box>
                        <Box>
                            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" } }} className={styles.headerBtn}>
                                <p>{data && data.user.username}</p>
                                <Box sx={{ display: "flex", mt: { xs: 2, sm: 0 } }}>
                                    <Box sx={{ ml: { sm: 3 } }}>
                                        <button>Edit Profile</button>
                                    </Box>
                                    <Box sx={{ ml: 1 }}>
                                        <button>View archive</button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", mt: { xs: 1, sm: 3 } }} className={styles.headerBtn}>
                                <Box>
                                    <p>
                                        <span>{data && data.user.posts_count} </span>Posts
                                    </p>
                                </Box>
                                <Box sx={{ pl: { sm: 5 }, my: { xs: 2, sm: 0 } }}>
                                    <p>
                                        <span>{data && data.user.follower_count} </span>followers
                                    </p>
                                </Box>
                                <Box sx={{ pl: { sm: 4 } }}>
                                    <p>
                                        <span>{data && data.user.follow_count} </span>followings
                                    </p>
                                </Box>
                            </Box>
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                <Box className={`${styles.headerBtn} ${styles.name}`} sx={{ display: "flex", mt: 3 }}>
                                    <p>{data && data.user.full_name}</p>
                                </Box>
                                <Box className={styles.headerBtn} sx={{ display: "flex", fontSize: "14px", mt: 1.5 }}>
                                    <p>{data && data.user.biography}</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>
                        <Box className={`${styles.headerBtnMobile} ${styles.name}`} sx={{ mt: 1.2 }}>
                            <p>{data && data.user.full_name}</p>
                        </Box>
                        <Box className={styles.headerBtnMobile} sx={{ fontSize: "14px", mt: 1.2 }}>
                            <p>{data && data.user.biography}</p>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <MobileStats />
            </Box>
            <Box>
                <Stories />
            </Box>
            <Box>
                <TabsContent />
            </Box>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
    error: state.error,
});

export default connect(mapStateToProps, { fetchData })(Home);
