import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PhotoContent from "../Photo/PhotoContent";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import { PHOTOSINGULAR_GET } from "../../api";

const Photo = () => {
  const {id} = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTOSINGULAR_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};
export default Photo;
