// import React, {useRef, useEffect, useState} from 'react';
// import {select, hierarchy, tree, linkHorizontal} from 'd3';
// import ResizeObserver from "resize-observer-polyfill";
// import { svg } from 'd3';




//   const useResizeObserver = ref => {
//     const [dimensions, setDimensions] = useState(null);
//     useEffect(() => {
//       const observeTarget = ref.current;
//       const resizeObserver = new ResizeObserver(entries => {
//         entries.forEach(entry => {
//           setDimensions(entry.contentRect);
//         });
//       });
//       resizeObserver.observe(observeTarget);
//       return () => {
//         resizeObserver.unobserve(observeTarget);
//       };
//     }, [ref]);
//     return dimensions;
//   };

// function TreeView({data}){
//     const svgRef = useRef();
//     const wrapperRef = useRef();
//     const dimensions = useResizeObserver(wrapperRef);
  
//     // we save data to see if it changed
// useEffect(() => {
// const svg = select(svgRef.current);
// if (!dimensions) return;
           
// const root = hierarchy(data);
// const treeLayout = tree().size([dimensions.height, dimensions.width])
// treeLayout(root)
// console.log(root.descendants());
//  console.log(root.links());
// console.log('dimensions', dimensions)
// //dont need to define link source and target they happen by default
// const linkGenerator = linkHorizontal().source(link => link.source).target(link => link.target).x(node => node.y).y(node => node.x)
// //nodes
// svg.selectAll(".node").data(root.descendants()).join("circle").attr("class", "node").attr("r", 4).attr("fill", "black").attr("cx", node => node.y).attr("cy", node => node.x)

// //links
// svg.selectAll(".link").data(root.links()).join("path").attr("class", "link").attr("fill", "none").attr("stroke", "black").attr("d", linkGenerator).attr("stroke-dasharray", function(){
//     const length = this.getTotalLength();
//     return `${length} ${length}`
// }).attr("stroke-dashoffset", function(){
//     const length = this.getTotalLength();
//     return length
// }).transition().duration(500).delay(linkObj => linkObj.source.depth * 500).attr("stroke-dashoffset", 0)

// //labels
// //does not work right now 
// // svg.selectAll(".label").data(root.descendants()).join("text").attr("class", "label").text(node => node.data.name).attr("text-anchor", "middle").attr("font-size", 24). attr("x", node => node.y).attr("y", node.x - 10)

// }, [data, dimensions]);


  
//     return (
//       <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
//         <svg ref={svgRef} style={{overflow: "visible"}}></svg>
//       </div>
//     );
// }

// export default TreeView

import React from 'react';
import Tree from 'react-d3-tree';
import SideBar from '../SideBar/SideBar.jsx';
import Header from '../header/header.jsx'
import Grid from '@material-ui/core/Grid';


// const orgChart = {
//   name: "Movies",

//   children: [
//     {
//       name: "Action",
//       children: [
    
//           {
//           name: "No Time to Die",
//           children: [
//            {
//              name: "10-08-2021" 
//             },
//             {
//               name: "87%"
//             }
//           ]
//         },
//         {
//           name: "Free Guy",
//           children: [
//             {
//               name: "08-13-2021"
//             },
//             {
//               name: "91%"
//             }
//           ]
//         }, 
//         {
//           name: "Spider-Man: Into the Spider-Verse",
//           children: [
//             {
//               name: "12-14-2018"
//             },
//             {
//               name: "87%"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "Animation",
//       children: [
//         {
//           name: "Your Name",
//           children: [
//             {
//               name: "04-07-2017"
//             },
//             {
//               name: "96%"
//             }
//           ]
//         },
//         {
//           name: "Howl's Moving Castle",
//           children: [
//             {
//               name: "06-17-2005"
//             },
//             {
//               name: "96%"
//             }
//           ]
//         }, 
//         {
//           name: "Spirited Away",
//           children: [
//             {
//               name: "08-31-2002"
//             },
//             {
//               name: "95%"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "Comedy",
//       children: [
//         {
//           name: 'Grown Ups',
//           children: [
//             {
//               name: "06-25-2010"
//             },
//             {
//               name: "90%"
//             }
//           ]
//         },
//         {
//           name: '22 Jump Street',
//           children: [
//             {
//               name: "06-13-2014"
//             },
//             {
//               name: "86%"
//             }
//           ]
//         },
//         {
//           name: 'Superbad',
//           children: [
//             {
//               name: "08-17-2007"
//             },
//             {
//               name: "92%"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "Drama",
//       children: [
//         {
//           name: "Little Women",
//           children: [
//             {
//               name: "12-25-2019"
//             },
//             {
//               name: "90%"
//             }
//           ]
//         },
//         {
//           name: "Beautiful Boy",
//           children: [
//             {
//               name: "09-07-2018"
//             },
//             {
//               name: "81%"
//             }
//           ]
//         },
//         {
//           name: "Dear Evan Hanson",
//           children: [
//             {
//               name: "09-24-2021"
//             },
//             {
//               name: "68%"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "Sci-Fi",
//       children: [
//         {
//           name: "The Matrix: Resurrections",
//           children: [
//             {
//               name: "12-22-2021"
//             },
//             {
//               name: "63%"
//             }
//           ]
//         },
//         {
//           name: "Dune",
//           children: [
//             {
//               name: "10-22-2021"
//             },
//             {
//               name: "85%"
//             }
//           ]
//         },
//         {
//           name: "Spider-Man: Far From Home",
//           children: [
//             {
//               name: "06-26-2019"
//             },
//             {
//               name: "86%"
//             }
//           ]
//         }
//       ]
//     }, 
//     {
//       name: "Thriller",
//       children: [
//         {
//           name: "I Care A Lot.",
//           children: [
//             {
//               name: "02-19-2021"
//             },
//             {
//               name: "58%"
//             }
//           ]
//         },
//         {
//           name: "Ready or Not",
//           children: [
//             {
//               name: "07-27-2019"
//             },
//             {
//               name: "87%"
//             }
//           ]
//         },
//         {
//           name: "Parasite",
//           attributes: {
//             "cool": "beans",
//             "more": "stuff"
//           },
//           children: [
//             {
//               name: "05-30-2019"
//             },
//             {
//               name: "90%"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

const orgChart = {
  name: "Movies",

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
    {
      name: "Thriller",
      children: [
        {
          name: "Title: I Care A Lot.",
          attributes: {
            "Released Date": "02-19-2021",
            "Rating": "58%"
          },
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

// export default function OrgChartTree(){
//   return (
//     <div style = {{display: 'grid'}}>
//     <div id="treeWrapper" style={{ width: '100em', height: '50em' }}>
//     <Header style = {{gridRow: '1'}}/>
//     <Tree data={orgChart} style = {{gridRow: '2'}}/>
//     <SideBar style = {{gridRow: '2', gridCol  }} />
//   </div>
//   </div>
//   )
// }

