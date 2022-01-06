import React from 'react';
import Tree from 'react-d3-tree';
import SideBar from '../SideBar/SideBar.jsx';
import Header from '../header/Header.jsx';
import Grid from '@material-ui/core/Grid';

const orgChart = {
  name: "Movies",

  children: [
    {
      name: 'Node 1',
      children: [
        {
          name: "Thriller",
          children: [
            {
              name: "Title: I Care A Lot.",
              attributes: {
                "Released": "02-19-2021",
                "Rating": "58%"
              }
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
        },
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
        }
      ]
    },
    {
      name: 'Node 2',
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
        }
      ]
    },
    {
      name: 'Node 3',
      children: [
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
      ]
    },
    {
      name: 'Node 4',
      children: [
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

      ]
    },
    {
      name: 'Node 5',
      children: [
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
              }
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
    },
    {
      name: 'Node 6',
      children: [
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
              }
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
        },
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
      ]
    }
  ]
};
const styleNodes = ({ nodeDatum, toggleNode }) => (
  <g>
    <circle r='15' strokeWidth='0' fill='#9933ff' onClick={toggleNode}></circle>
    <text fontFamily='Sans-Serif' x='25' strokeWidth='1' fill='black'>
      {nodeDatum.name}

    </text>
    {nodeDatum.attributes?.Released && (
      <text fill="black" x="25" dy="18" strokeWidth="1" fontFamily='Sans-Serif'>
        Released Date: {nodeDatum.attributes?.Released}
      </text>
    )}
    {nodeDatum.attributes?.Rating && (
      <text fill="black" x="25" dy="35" strokeWidth="1" fontFamily='Sans-Serif'>
        Rating: {nodeDatum.attributes?.Rating}
      </text>
    )}
  </g>
)
  ; export default function OrgChartTree() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
          <div id="treeWrapper" style={{ width: '100%', height: '100%', backgroundColor: '#F8F8F8' }}>
            <Tree data={orgChart}
              renderCustomNodeElement={styleNodes}
            />
          </div>
        </Grid>
      </Grid>
    )
  };