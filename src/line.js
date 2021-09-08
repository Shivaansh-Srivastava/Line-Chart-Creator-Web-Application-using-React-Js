import React from "react";
import data from "./db";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Information from "./information";

class Line extends React.Component {
    

    render(){
        const nlist = data.map(item => <Information info={item} />)
        return(
            <div>
                <Paper>
                    <Chart data={data}>
                        <ArgumentAxis />
                        <ValueAxis />
                        <LineSeries valueField="y" argumentField="x" />
                    </Chart>
                </Paper>
                <h2>Indices to help understand the Graph:</h2>
                {nlist}
            </div>
        )
    }
}

export default Line