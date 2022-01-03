import React from 'react';
import Tree from 'react-d3-tree';
import SideBar from '../SideBar/SideBar.jsx';
import Header from '../header/header.jsx'
import Grid from '@material-ui/core/Grid';


//! push this into reducers and us as placeholders.
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
                            "Released Date": "02-19-2021",
                            "Rating": "58%"
                          }
                        },
                        {
                          name: "Title: Ready or Not",
                          attributes: {
                            "Released Date": "07-27-2019",
                            "Rating": "87%"
                          }
                        },
                        {
                          name: "Title: Parasite",
                          attributes: {
                            "Released Date": "05-30-2019",
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
                            "Released Date": "10-08-2021",
                            "Rating": "87%"
                          }
                      },
                      {
                        name: "Title: Free Guy",
                        attributes: {
                            "Released Date": "08-13-2021",
                            "Rating": "91%"
                          }
                      }, 
                      {
                        name: "Title: Spider-Man: Into the Spider-Verse",
                        attributes: {
                            "Released Date": "12-14-2018",
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
                            "Released Date": "04-07-2017",
                            "Rating": "96%"
                          }
                        },
                        {
                          name: "Title: Howl's Moving Castle",
                          attributes: {
                            "Released Date": "06-17-2005",
                            "Rating": "96%"
                          }
                        }, 
                        {
                          name: "Title: Spirited Away",
                          attributes: {
                            "Released Date": "08-31-2002",
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
                            "Released Date": "10-08-2021",
                            "Rating": "87%"
                          }
                      },
                      {
                        name: "Title: Free Guy",
                        attributes: {
                            "Released Date": "08-13-2021",
                            "Rating": "91%"
                          }
                      }, 
                      {
                        name: "Title: Spider-Man: Into the Spider-Verse",
                        attributes: {
                            "Released Date": "12-14-2018",
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
                            "Released Date": "04-07-2017",
                            "Rating": "96%"
                          }
                        },
                        {
                          name: "Title: Howl's Moving Castle",
                          attributes: {
                            "Released Date": "06-17-2005",
                            "Rating": "96%"
                          }
                        }, 
                        {
                          name: "Title: Spirited Away",
                          attributes: {
                            "Released Date": "08-31-2002",
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
                            "Released Date": "06-25-2010",
                            "Rating": "90%"
                          }
                        },
                        {
                          name: 'Title: 22 Jump Street',
                          attributes: {
                            "Released Date": "06-13-2014",
                            "Rating": "86%"
                          }
                        },
                        {
                          name: 'Title: Superbad',
                          attributes: {
                            "Released Date": "08-17-2007",
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
                            "Released Date": "04-07-2017",
                            "Rating": "96%"
                          }
                        },
                        {
                          name: "Title: Howl's Moving Castle",
                          attributes: {
                            "Released Date": "06-17-2005",
                            "Rating": "96%"
                          }
                        }, 
                        {
                          name: "Title: Spirited Away",
                          attributes: {
                            "Released Date": "08-31-2002",
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
                            "Released Date": "06-25-2010",
                            "Rating": "90%"
                          }
                        },
                        {
                          name: 'Title: 22 Jump Street',
                          attributes: {
                            "Released Date": "06-13-2014",
                            "Rating": "86%"
                          }
                        },
                        {
                          name: 'Title: Superbad',
                          attributes: {
                            "Released Date": "08-17-2007",
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
                        "Released Date": "12-25-2019",
                        "Rating": "90%"
                    }
                    },
                    {
                    name: "Title: Beautiful Boy",
                    attributes: {
                        "Released Date": "09-07-2018",
                        "Rating": "81%"
                    }
                    },
                    {
                    name: "Title: Dear Evan Hanson",
                    attributes: {
                        "Released Date": "09-24-2021",
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
                            "Released Date": "06-25-2010",
                            "Rating": "90%"
                          }
                        },
                        {
                          name: 'Title: 22 Jump Street',
                          attributes: {
                            "Released Date": "06-13-2014",
                            "Rating": "86%"
                          }
                        },
                        {
                          name: 'Title: Superbad',
                          attributes: {
                            "Released Date": "08-17-2007",
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
                            "Released Date": "12-25-2019",
                            "Rating": "90%"
                        }
                        },
                        {
                        name: "Title: Beautiful Boy",
                        attributes: {
                            "Released Date": "09-07-2018",
                            "Rating": "81%"
                        }
                        },
                        {
                        name: "Title: Dear Evan Hanson",
                        attributes: {
                            "Released Date": "09-24-2021",
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
                            "Released Date": "12-22-2021",
                            "Rating": "63%"
                            }
                        },
                        {
                            name: "Title: Dune",
                            attributes: {
                            "Released Date": "10-22-2021",
                            "Rating": "85%"
                            }
                        },
                        {
                            name: "Title: Spider-Man: Far From Home",
                            attributes: {
                            "Released Date": "06-26-2019",
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
                            "Released Date": "12-25-2019",
                            "Rating": "90%"
                        }
                        },
                        {
                        name: "Title: Beautiful Boy",
                        attributes: {
                            "Released Date": "09-07-2018",
                            "Rating": "81%"
                        }
                        },
                        {
                        name: "Title: Dear Evan Hanson",
                        attributes: {
                            "Released Date": "09-24-2021",
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
                            "Released Date": "12-22-2021",
                            "Rating": "63%"
                            }
                        },
                        {
                            name: "Title: Dune",
                            attributes: {
                            "Released Date": "10-22-2021",
                            "Rating": "85%"
                            }
                        },
                        {
                            name: "Title: Spider-Man: Far From Home",
                            attributes: {
                            "Released Date": "06-26-2019",
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
                            "Released Date": "02-19-2021",
                            "Rating": "58%"
                          }
                        },
                        {
                          name: "Title: Ready or Not",
                          attributes: {
                            "Released Date": "07-27-2019",
                            "Rating": "87%"
                          }
                        },
                        {
                          name: "Title: Parasite",
                          attributes: {
                            "Released Date": "05-30-2019",
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
                          "Released Date": "12-22-2021",
                          "Rating": "63%"
                        }
                      },
                      {
                        name: "Title: Dune",
                        attributes: {
                          "Released Date": "10-22-2021",
                          "Rating": "85%"
                        }
                      },
                      {
                        name: "Title: Spider-Man: Far From Home",
                        attributes: {
                          "Released Date": "06-26-2019",
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
                            "Released Date": "02-19-2021",
                            "Rating": "58%"
                          }
                        },
                        {
                          name: "Title: Ready or Not",
                          attributes: {
                            "Released Date": "07-27-2019",
                            "Rating": "87%"
                          }
                        },
                        {
                          name: "Title: Parasite",
                          attributes: {
                            "Released Date": "05-30-2019",
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
                            "Released Date": "10-08-2021",
                            "Rating": "87%"
                          }
                      },
                      {
                        name: "Title: Free Guy",
                        attributes: {
                            "Released Date": "08-13-2021",
                            "Rating": "91%"
                          }
                      }, 
                      {
                        name: "Title: Spider-Man: Into the Spider-Verse",
                        attributes: {
                            "Released Date": "12-14-2018",
                            "Rating": "87%"
                          }
                      }
                    ]
                },
            ]
        }
    ]
  };
  
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
        <div id="treeWrapper" style={{ width: '100em', height: '50em' }}>
      <Tree data={orgChart}   
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf" 
          />
    </div>
        </Grid>
    </Grid>
    )
  }