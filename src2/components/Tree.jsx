
import React from 'react';
import Tree from 'react-d3-tree';
import SideBar from '../SideBar/SideBar.jsx';
import Header from '../header/header.jsx'
import Grid from '@material-ui/core/Grid';
import { fontFamily } from '@mui/system';

//! this would be part of the reducers when dealing with imported data from the connect file.
const orgChart = {
  name: "Movies",

  children: [
    {
      name: "Action",
      children: [
    
          {
          name: "Title: No Time to Die",
          attributes: {
            "Released": "10-08-2021",
            "Rating": "87%"
          }
        },
        {
          name: "Title: Free Guy",
          attributes: {
            "Released": "08-13-2021",
            "Rating": "91%"
          }
        }, 
        {
          name: "Title: Spider-Man: Into the Spider-Verse",
          attributes: {
            "Released": "12-14-2018",
            "Rating": "87%"
          }
        }
      ]
    },
    {
      name: "Animation",
      children: [
        {
          name: "Title: Your Name",
          attributes: {
            "Released": "04-07-2017",
            "Rating": "96%"
          }
        },
        {
          name: "Title: Howl's Moving Castle",
          attributes: {
            "Released": "06-17-2005",
            "Rating": "96%"
          }
        }, 
        {
          name: "Title: Spirited Away",
          attributes: {
            "Released": "08-31-2002",
            "Rating": "95%"
          }
        }
      ]
    },
    {
      name: "Comedy",
      children: [
        {
          name: 'Title: Grown Ups',
          attributes: {
            "Released": "06-25-2010",
            "Rating": "90%"
          }
        },
        {
          name: 'Title: 22 Jump Street',
          attributes: {
            "Released": "06-13-2014",
            "Rating": "86%"
          }
        },
        {
          name: 'Title: Superbad',
          attributes: {
            "Released": "08-17-2007",
            "Rating": "92%"
          }
        }
      ]
    },
    {
      name: "Drama",
      children: [
        {
          name: "Title: Little Women",
          attributes: {
            "Released": "12-25-2019",
            "Rating": "90%"
          }
        },
        {
          name: "Title: Beautiful Boy",
          attributes: {
            "Released": "09-07-2018",
            "Rating": "81%"
          }
        },
        {
          name: "Title: Dear Evan Hanson",
          attributes: {
            "Released": "09-24-2021",
            "Rating": "68%"
          }
        }
      ]
    },
    {
      name: "Sci-Fi",
      children: [
        {
          name: "Title: The Matrix: Resurrections",
          attributes: {
            "Released": "12-22-2021",
            "Rating": "63%"
          }
        },
        {
          name: "Title: Dune",
          attributes: {
            "Released": "10-22-2021",
            "Rating": "85%"
          }
        },
        {
          name: "Title: Spider-Man: Far From Home",
          attributes: {
            "Released": "06-26-2019",
            "Rating": "86%"
          }
        }
      ]
    }, 
    {
      name: "Thriller",
      children: [
        {
          name: "Title: I Care A Lot.",
          attributes: {
            "Released": "02-19-2021",
            "Rating": "58%"
          },
        },
        {
          name: "Title: Ready or Not",
          attributes: {
            "Released": "07-27-2019",
            "Rating": "87%"
          }
        },
        {
          name: "Title: Parasite",
          attributes: {
            "Released": "05-30-2019",
            "Rating": "90%"
          }
        }
      ]
    }
  ]
};

const styleNodes = ({nodeDatum, toggleNode}) => (
  <g>
   <circle r='15' strokeWidth='0' fill='#9933ff' onClick={toggleNode}></circle>
    <text fontFamily='Sans' x='25' strokeWidth='1' fill='black'>
      {nodeDatum.name}
      
    </text>
    {nodeDatum.attributes?.Released && ( 
      <text fill="black" x="25" dy="18" strokeWidth="1">
        Released Date: {nodeDatum.attributes?.Released}
      </text>
    )}
     {nodeDatum.attributes?.Rating && (
      <text fill="black" x="25" dy="35" strokeWidth="1">
        Rating: {nodeDatum.attributes?.Rating}
      </text>
    )}
  </g>
)

export default function OrgChartTree(){                                                                                                                                                                                                                     
  return (
    <Grid container spacing= {1}>
      <Grid item xs={12}>
      <Header/>
      </Grid>
      <Grid item xs={2}>
      <SideBar />
      </Grid>
      <Grid item xs={10}>
      <div id="treeWrapper" style={{ width: '100em', height: '50em'}}>
    <Tree data={orgChart}   
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf" 
        renderCustomNodeElement={styleNodes}
        />
  </div>
      </Grid>
  </Grid>
  )
}