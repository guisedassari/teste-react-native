import React, { useState, useEffect } from "react";
import Menu from "../../componets/Menu";
import { api, apikey } from "../../services/api";

import { Title } from "./style";

interface ListData {
  created_by: string;
  description: string;
  favorite_count: number;
  id: number;
  items: Array<string>;
  item_count: number;
  name: string;
  poster_path: string;
}

const Lists: React.FC = () => {
  const [lists, setLists] = useState<ListData>();

  useEffect(() => {
    api
      .get(
        `https://api.themoviedb.org/3/list/7054707?api_key=${apikey}&language=en-US`
      )
      .then((response) => {
        setLists(response.data);
      });
  }, []);
  return (
    <>
      <Menu />
      <Title>{lists?.name}</Title>
    </>
  );
};

export default Lists;
