/**
 * Exam Cell page
 *
 * Displays information about exam cell
 * at IIIT Tiruchirappalli
 *
 */

"use client";
import Grid from "@mui/material/Grid2";
import styles from "./examcell.module.css"
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ExamCellData {
    title: string;
    cardDetails: {
        title: string;
        details: Array<{
            step: number;
            title: string;
            description: string;
            link?: string;
        }>;
    };
}


const ExamCell = () => {

    const [examcellData, setExamcellData] = useState<ExamCellData | null>(null);
    const [loading, setLoading] = useState(true);

    //fetching data
    useEffect(() => {
        document.title="Exam Cell";

        //Fetch Exam Cell data
        const fetchData = async () => {
            try {
                const response = await fetch('/json/examCell/exam_cell.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setExamcellData(data);
            } catch (error) {
                console.error('Error fetching Exam cell data:', error);

            } finally {
                setLoading(false);
            };
        };
        fetchData();
        return()=>{
            document.title="IIIT Trichy";
        };
    }, []);

    if (!examcellData) return <div>No data found</div>;

    if (loading) {
        return (
            <div className="page-container">
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="h4" align="center" sx={{ marginTop: 4 }}>
                            Loading...
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }


    return (
        <div className="page-container">
            <Grid container>
                <Grid size={1} />

                <Grid container size={10} className={styles.container}>
                    <Grid size={12}>
                        <Typography
                            variant="h2"
                            component="h2"
                            gutterBottom
                            align="center"
                            color="#2e8b57"
                            sx={{ fontWeight: 300, marginBottom: 4 }}
                        >
                            {examcellData.title}
                        </Typography>
                    </Grid>

                    <Grid size={12} sx={{ marginTop: 4 }}>
                        <Typography variant="h4" gutterBottom className={styles.themeText}>
                            {examcellData.cardDetails.title}
                        </Typography>
                        <Divider sx={{ marginBottom: 3 }} />

                        <Card sx={{ marginBottom: 3 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Card</Typography>
                                <List>
                                    {examcellData.cardDetails.details.map((step,index)=>(
                                        <ListItem key={index}>
                                            <h1>hey </h1>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>


                    </Grid>



                </Grid>

                <Grid size={1} />

            </Grid>
        </div>
    )
};

export default ExamCell;
