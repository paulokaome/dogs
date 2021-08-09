import React, { lazy, useEffect } from "react";
import Head from "../../components/Helper/Head";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api";

const UserStatsGraphics = lazy(()=> import("./UserStatsGraphics"))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphics data={data} />
      </React.Suspense>
    );
  else return null;
};
export default UserStats;
