import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

import styles from "./UserStatsGraphics.module.css";

const UserStatsGraphics = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    if (data.length >= 1) {
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
    }
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graphic} animeLeft`}>
      <div className={`${styles.total} ${styles.graphitem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphitem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphitem}>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start" />
        </VictoryChart>
      </div>
    </section>
  );
};
export default UserStatsGraphics;
