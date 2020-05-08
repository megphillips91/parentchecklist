import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LeftSidebar from '../../components/ClassroomComponents/LeftSidebar.js';
import ClassAssignments from '../ClassAssignments.js';
import ContentCard from '../ContentCard.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Classroom( {section} ) {
    const classes = useStyles();

    
    if(section === 'undefined'){
        return null
    } else {
        console.log(section.schools)
        return (
            <div className={classes.root}>
                <Grid>
                    WTF
                </Grid>
            </div>
            /*
            <div className={classes.root}>
                <Grid>
                    <Grid item xs={12} sm={3}>
                    <ContentCard
                        key="Classroom Lessons"
                        mainTitle={section.schools+" "+ section.teachers}
                        subTitle={section.grades+" "+ section.subjects}
                        button="door-open"
                    >
                        <ClassAssignments 
                            section={section}
                            ></ClassAssignments>
                    </ContentCard>
                    </Grid>
                </Grid>
            </div>
            */
        )
    }
    
}
