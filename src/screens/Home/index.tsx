import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from "react-native";
import { AnimesData } from "../../@types/types";
import { Card } from "../../components/Card";
import { getAnimes } from "../../service/Api";

export const Home = () => {
  const [animes, setAnimes] = useState<AnimesData[]>([]);
  const [offset, setOffset] = useState(0);
  console.log(offset);
  const fetchAnimes = async () => {
    const data = await getAnimes(offset);

    if (data.data) {
      const current = data.data;
      setAnimes((prev) => [...prev, ...current]);
      setOffset((prev) => prev + 20);
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  const RenderItem = ({ item }: ListRenderItemInfo<AnimesData>) => {
    return (
      <Card
        url={item.attributes.posterImage.medium}
        title={item.attributes.titles.en_jp}
      />
    );
  };
  return (
    <View className="flex-1 items-center px-3 pt-16 pb-3 bg-sky-700">
      <FlatList
        data={animes}
        renderItem={RenderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
        onEndReached={fetchAnimes}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ActivityIndicator size={"large"} color="#FFF" />}
      />
    </View>
  );
};
