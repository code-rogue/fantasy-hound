import Container from '@mui/material/Container';
import { LineChart } from '@mui/x-charts/LineChart';
import React from 'react';
import { StatData } from '@components/players/stats/playerStatBoomBust';
import { AxisValueFormatterContext } from '@mui/x-charts/models/axis';
import { SeriesValueFormatter } from '@mui/x-charts/models/seriesType/common';

export interface LineChartData {
    data: LineChartMetaData
}

export interface LineChartMetaData {
    xAxisLabels: string[],
    seriesData: (number | null)[],
    avgerageLineData: number[],
    valueSeriesFormatter: SeriesValueFormatter<number | null>,
    xAxisSeriesFormatter: (value: any, context: AxisValueFormatterContext) => string,
    avgSeriesFormatter: SeriesValueFormatter<number | null>,
    statData: StatData,
}

const PlayerStatLineChart: React.FC<LineChartData> = ({ data }) => {
    return (
        <Container disableGutters maxWidth={false} sx={{ display: 'flex' }}>
            <LineChart
                xAxis={[
                    { 
                        data: data.xAxisLabels,
                        scaleType: 'band',
                        dataKey: 'week',
                        valueFormatter: data.xAxisSeriesFormatter
                    }
                ]}
                series={[
                    {
                        color: '#1976d2',
                        curve: 'natural',
                        data: data.seriesData,
                        valueFormatter: data.valueSeriesFormatter,
                    },
                    {
                        color: '#000B29',
                        data: data.avgerageLineData,
                        disableHighlight: true,
                        showMark: false,
                        valueFormatter: data.avgSeriesFormatter
                    }
                ]}
                yAxis={[
                    {
                        min: data.statData.statMin - (Math.abs(data.statData.statMin) * .12),
                        max: data.statData.statMax + (Math.abs(data.statData.statMax) * .12),
                    }
                ]}
                grid={{ vertical: false, horizontal: true }}
                slotProps={{
                    loadingOverlay: { message: 'Loading data...' },
                }}
            />
        </Container>
    );
};

export default PlayerStatLineChart;