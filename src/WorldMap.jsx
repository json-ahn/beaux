import React from 'react';
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

function WorldMap() {
    return (
        <VectorMap map = {worldMill} 
        containerStyle={{
            width: '700px',
            height: '600px',
        }}
        />
    )
}

export default WorldMap;