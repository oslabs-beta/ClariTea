import React from 'react';
import Tree from 'react-d3-tree';
import SideBar from '../SideBar/SideBar.jsx';
import Header from '../header/header.jsx'
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
                          name: "I Care A Lot.",
                          children: [
                            {
                              name: "02-19-2021"
                            },
                            {
                              name: "58%"
                            }
                          ]
                        },
                        {
                          name: "Ready or Not",
                          children: [
                            {
                              name: "07-27-2019"
                            },
                            {
                              name: "87%"
                            }
                          ]
                        },
                        {
                          name: "Parasite",
                          children: [
                            {
                              name: "05-30-2019"
                            },
                            {
                              name: "90%"
                            }
                          ]
                        }
                      ]
                },
                {
                    name: "Action",
                    children: [
      
                        {
                        name: "No Time to Die",
                        children: [
                         {
                           name: "10-08-2021" 
                          },
                          {
                            name: "87%"
                          }
                        ]
                      },
                      {
                        name: "Free Guy",
                        children: [
                          {
                            name: "08-13-2021"
                          },
                          {
                            name: "91%"
                          }
                        ]
                      }, 
                      {
                        name: "Spider-Man: Into the Spider-Verse",
                        children: [
                          {
                            name: "12-14-2018"
                          },
                          {
                            name: "87%"
                          }
                        ]
                      }
                    ]
                },
                {
                    name: "Animation",
                    children: [
                        {
                          name: "Your Name",
                          children: [
                            {
                              name: "04-07-2017"
                            },
                            {
                              name: "96%"
                            }
                          ]
                        },
                        {
                          name: "Howl's Moving Castle",
                          children: [
                            {
                              name: "06-17-2005"
                            },
                            {
                              name: "96%"
                            }
                          ]
                        }, 
                        {
                          name: "Spirited Away",
                          children: [
                            {
                              name: "08-31-2002"
                            },
                            {
                              name: "95%"
                            }
                          ]
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
                        name: "No Time to Die",
                        children: [
                         {
                           name: "10-08-2021" 
                          },
                          {
                            name: "87%"
                          }
                        ]
                      },
                      {
                        name: "Free Guy",
                        children: [
                          {
                            name: "08-13-2021"
                          },
                          {
                            name: "91%"
                          }
                        ]
                      }, 
                      {
                        name: "Spider-Man: Into the Spider-Verse",
                        children: [
                          {
                            name: "12-14-2018"
                          },
                          {
                            name: "87%"
                          }
                        ]
                      },
                      
                    ]
                },
                {
                    name: "Animation",
                    children: [
                        {
                          name: "Your Name",
                          children: [
                            {
                              name: "04-07-2017"
                            },
                            {
                              name: "96%"
                            }
                          ]
                        },
                        {
                          name: "Howl's Moving Castle",
                          children: [
                            {
                              name: "06-17-2005"
                            },
                            {
                              name: "96%"
                            }
                          ]
                        }, 
                        {
                          name: "Spirited Away",
                          children: [
                            {
                              name: "08-31-2002"
                            },
                            {
                              name: "95%"
                            }
                          ]
                        }
                      ]
                },
                {
                    name: "Comedy",
                    children: [
                        {
                          name: 'Grown Ups',
                          children: [
                            {
                              name: "06-25-2010"
                            },
                            {
                              name: "90%"
                            }
                          ]
                        },
                        {
                          name: '22 Jump Street',
                          children: [
                            {
                              name: "06-13-2014"
                            },
                            {
                              name: "86%"
                            }
                          ]
                        },
                        {
                          name: 'Superbad',
                          children: [
                            {
                              name: "08-17-2007"
                            },
                            {
                              name: "92%"
                            }
                          ]
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
                          name: "Your Name",
                          children: [
                            {
                              name: "04-07-2017"
                            },
                            {
                              name: "96%"
                            }
                          ]
                        },
                        {
                          name: "Howl's Moving Castle",
                          children: [
                            {
                              name: "06-17-2005"
                            },
                            {
                              name: "96%"
                            }
                          ]
                        }, 
                        {
                          name: "Spirited Away",
                          children: [
                            {
                              name: "08-31-2002"
                            },
                            {
                              name: "95%"
                            }
                          ]
                        }
                      ]
                },
                {
                    name: "Comedy",
                    children: [
                        {
                          name: 'Grown Ups',
                          children: [
                            {
                              name: "06-25-2010"
                            },
                            {
                              name: "90%"
                            }
                          ]
                        },
                        {
                          name: '22 Jump Street',
                          children: [
                            {
                              name: "06-13-2014"
                            },
                            {
                              name: "86%"
                            }
                          ]
                        },
                        {
                          name: 'Superbad',
                          children: [
                            {
                              name: "08-17-2007"
                            },
                            {
                              name: "92%"
                            }
                          ]
                        }
                      ]
                },
                {
                    name: "Drama",
                    children: [
                      {
                        name: "Little Women",
                        children: [
                          {
                            name: "12-25-2019"
                          },
                          {
                            name: "90%"
                          }
                        ]
                      },
                      {
                        name: "Beautiful Boy",
                        children: [
                          {
                            name: "09-07-2018"
                          },
                          {
                            name: "81%"
                          }
                        ]
                      },
                      {
                        name: "Dear Evan Hanson",
                        children: [
                          {
                            name: "09-24-2021"
                          },
                          {
                            name: "68%"
                          }
                        ]
                      }
                    ]
                  }
            ]
        },
        {
            name: 'Node 4',
            children: [               
                {
                    name: "Comedy",
                    children: [
                        {
                          name: 'Grown Ups',
                          children: [
                            {
                              name: "06-25-2010"
                            },
                            {
                              name: "90%"
                            }
                          ]
                        },
                        {
                          name: '22 Jump Street',
                          children: [
                            {
                              name: "06-13-2014"
                            },
                            {
                              name: "86%"
                            }
                          ]
                        },
                        {
                          name: 'Superbad',
                          children: [
                            {
                              name: "08-17-2007"
                            },
                            {
                              name: "92%"
                            }
                          ]
                        }
                      ]
                },
                {
                    name: "Drama",
                    children: [
                      {
                        name: "Little Women",
                        children: [
                          {
                            name: "12-25-2019"
                          },
                          {
                            name: "90%"
                          }
                        ]
                      },
                      {
                        name: "Beautiful Boy",
                        children: [
                          {
                            name: "09-07-2018"
                          },
                          {
                            name: "81%"
                          }
                        ]
                      },
                      {
                        name: "Dear Evan Hanson",
                        children: [
                          {
                            name: "09-24-2021"
                          },
                          {
                            name: "68%"
                          }
                        ]
                      }
                    ]
                  },

                  {
                    name: "Sci-Fi",
                    children: [
                      {
                        name: "The Matrix: Resurrections",
                        children: [
                          {
                            name: "12-22-2021"
                          },
                          {
                            name: "63%"
                          }
                        ]
                      },
                      {
                        name: "Dune",
                        children: [
                          {
                            name: "10-22-2021"
                          },
                          {
                            name: "85%"
                          }
                        ]
                      },
                      {
                        name: "Spider-Man: Far From Home",
                        children: [
                          {
                            name: "06-26-2019"
                          },
                          {
                            name: "86%"
                          }
                        ]
                      }
                    ]
                  } 

            ]
        },
        {
            name: 'Node 5',
            children: [               
                {
                    name: "Drama",
                    children: [
                      {
                        name: "Little Women",
                        children: [
                          {
                            name: "12-25-2019"
                          },
                          {
                            name: "90%"
                          }
                        ]
                      },
                      {
                        name: "Beautiful Boy",
                        children: [
                          {
                            name: "09-07-2018"
                          },
                          {
                            name: "81%"
                          }
                        ]
                      },
                      {
                        name: "Dear Evan Hanson",
                        children: [
                          {
                            name: "09-24-2021"
                          },
                          {
                            name: "68%"
                          }
                        ]
                      }
                    ]
                  },

                  {
                    name: "Sci-Fi",
                    children: [
                      {
                        name: "The Matrix: Resurrections",
                        children: [
                          {
                            name: "12-22-2021"
                          },
                          {
                            name: "63%"
                          }
                        ]
                      },
                      {
                        name: "Dune",
                        children: [
                          {
                            name: "10-22-2021"
                          },
                          {
                            name: "85%"
                          }
                        ]
                      },
                      {
                        name: "Spider-Man: Far From Home",
                        children: [
                          {
                            name: "06-26-2019"
                          },
                          {
                            name: "86%"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: "Thriller",
                    children: [
                        {
                          name: "I Care A Lot.",
                          children: [
                            {
                              name: "02-19-2021"
                            },
                            {
                              name: "58%"
                            }
                          ]
                        },
                        {
                          name: "Ready or Not",
                          children: [
                            {
                              name: "07-27-2019"
                            },
                            {
                              name: "87%"
                            }
                          ]
                        },
                        {
                          name: "Parasite",
                          children: [
                            {
                              name: "05-30-2019"
                            },
                            {
                              name: "90%"
                            }
                          ]
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
                        name: "The Matrix: Resurrections",
                        children: [
                          {
                            name: "12-22-2021"
                          },
                          {
                            name: "63%"
                          }
                        ]
                      },
                      {
                        name: "Dune",
                        children: [
                          {
                            name: "10-22-2021"
                          },
                          {
                            name: "85%"
                          }
                        ]
                      },
                      {
                        name: "Spider-Man: Far From Home",
                        children: [
                          {
                            name: "06-26-2019"
                          },
                          {
                            name: "86%"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: "Thriller",
                    children: [
                        {
                          name: "I Care A Lot.",
                          children: [
                            {
                              name: "02-19-2021"
                            },
                            {
                              name: "58%"
                            }
                          ]
                        },
                        {
                          name: "Ready or Not",
                          children: [
                            {
                              name: "07-27-2019"
                            },
                            {
                              name: "87%"
                            }
                          ]
                        },
                        {
                          name: "Parasite",
                          children: [
                            {
                              name: "05-30-2019"
                            },
                            {
                              name: "90%"
                            }
                          ]
                        }
                      ]
                },
                {
                    name: "Action",
                    children: [
      
                        {
                        name: "No Time to Die",
                        children: [
                         {
                           name: "10-08-2021" 
                          },
                          {
                            name: "87%"
                          }
                        ]
                      },
                      {
                        name: "Free Guy",
                        children: [
                          {
                            name: "08-13-2021"
                          },
                          {
                            name: "91%"
                          }
                        ]
                      }, 
                      {
                        name: "Spider-Man: Into the Spider-Verse",
                        children: [
                          {
                            name: "12-14-2018"
                          },
                          {
                            name: "87%"
                          }
                        ]
                      },
                      
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