import React, {useRef, useEffect, useState} from 'react';
import {select, hierarchy, tree, linkHorizontal} from 'd3';
import ResizeObserver from "resize-observer-polyfill";
import { svg } from 'd3';




  const useResizeObserver = ref => {
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
      const observeTarget = ref.current;
      const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          setDimensions(entry.contentRect);
        });
      });
      resizeObserver.observe(observeTarget);
      return () => {
        resizeObserver.unobserve(observeTarget);
      };
    }, [ref]);
    return dimensions;
  };

function TreeView({data}){
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
  
    // we save data to see if it changed
useEffect(() => {
const svg = select(svgRef.current);
if (!dimensions) return;
           
const root = hierarchy(data);
const treeLayout = tree().size([dimensions.height, dimensions.width])
treeLayout(root)
console.log(root.descendants());
 console.log(root.links());
console.log('dimensions', dimensions)
//dont need to define link source and target they happen by default
const linkGenerator = linkHorizontal().source(link => link.source).target(link => link.target).x(node => node.y).y(node => node.x)
//nodes
svg.selectAll(".node").data(root.descendants()).join("circle").attr("class", "node").attr("r", 4).attr("fill", "black").attr("cx", node => node.y).attr("cy", node => node.x)

//links
svg.selectAll(".link").data(root.links()).join("path").attr("class", "link").attr("fill", "none").attr("stroke", "black").attr("d", linkGenerator).attr("stroke-dasharray", function(){
    const length = this.getTotalLength();
    return `${length} ${length}`
}).attr("stroke-dashoffset", function(){
    const length = this.getTotalLength();
    return length
}).transition().duration(500).delay(linkObj => linkObj.source.depth * 500).attr("stroke-dashoffset", 0)

//labels
//does not work right now 
// svg.selectAll(".label").data(root.descendants()).join("text").attr("class", "label").text(node => node.data.name).attr("text-anchor", "middle").attr("font-size", 24). attr("x", node => node.y).attr("y", node.x - 10)

}, [data, dimensions]);


  
    return (
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef} style={{overflow: "visible"}}></svg>
      </div>
    );
}

export default TreeView