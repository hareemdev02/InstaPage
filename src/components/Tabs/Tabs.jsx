import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { fetchData } from "../../redux/dataActions";
import TabsData from "./TabsData";
import { connect } from "react-redux";
import { Box, Typography, Container, Grid, Tabs, Tab } from "@mui/material";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const TabsContent = ({ fetchData, data, error }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    console.log(data, "data");
    return (
        <Container maxWidth="md">
            <Box className={styles.InstTabs}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="POSTS" {...a11yProps(0)} />
                        <Tab label="SAVED" {...a11yProps(1)} />
                        <Tab label="TAGGED" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Grid container spacing={1} sx={{ display: "flex", justifyContent: "center" }}>
                        {data?.posts?.items?.map((item, index) => {
                            return (
                                <Grid key={index} item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box className={styles.cardPosts}>
                                        <img src={item?.display_url} alt="posts_" />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Grid container spacing={1} sx={{ display: "flex", justifyContent: "center" }}>
                        {data?.posts?.items?.map((item, index) => {
                            return (
                                <Grid key={index} item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box className={styles.cardPosts}>
                                        <img src={item?.display_url} alt="posts_" />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Grid container spacing={1} sx={{ display: "flex", justifyContent: "center" }}>
                        {data?.posts?.items?.map((item, index) => {
                            return (
                                <Grid key={index} item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box className={styles.cardPosts}>
                                        <img src={item?.display_url} alt="posts_" />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </CustomTabPanel>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
    error: state.error,
});

export default connect(mapStateToProps, { fetchData })(TabsContent);
