import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Herb Seeds"
          left={(props) => (
            <List.Icon
              {...props}
              icon={{
                uri: "https://cdn3.iconfinder.com/data/icons/spice-colored/100/spices3-4-colored-02-512.png",
              }}
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Swiss Chard approx 25 seeds" />
          <List.Item title="Fennel Leaf Seed" />
          <List.Item title="Basil Lettuce" />
          <List.Item title="Organic Thyme Seeds" />
        </List.Accordion>

        <List.Accordion
          title="Flower Seeds"
          left={(props) => (
            <List.Icon
              {...props}
              icon={{
                uri: "https://cdn1.iconfinder.com/data/icons/food-v1/66/68-512.png",
              }}
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Cosmos Lemon Carpet Seeds" />
          <List.Item title="Zinnia Super Yoga Golden" />
          <List.Item title="Kochia" />
          <List.Item title="Balsam Tom Thumb Mixed" />
          <List.Item title="VINCA ROSEA DWARF LITTLE SERIES" />
          <List.Item title="SUNFLOWER FLORENZA RED 20 plus seeds" />
          <List.Item title="ROSS Tom Thumb Mixed" />
        </List.Accordion>

        <List.Accordion
          title="Vegetable Seeds"
          left={(props) => (
            <List.Icon
              {...props}
              icon={{
                uri: "https://cdn0.iconfinder.com/data/icons/gardening-drawn/32/seed_packet-512.png",
              }}
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Lettuce- All Year Round 100 seeds" />
          <List.Item title="CORIANDER OP" />
          <List.Item title="Red Radish" />
          <List.Item title="French Bean Seeds approx 20 se" />
        </List.Accordion>

        <List.Accordion
          title="Gardening Tools"
          left={(props) => (
            <List.Icon
              {...props}
              icon={{
                uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/gardening-tools-1817972-1542815.png",
              }}
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="zinc sulfate 250 gm" />
          <List.Item title="SULFUR 250 GM" />
          <List.Item title="Dried Blood" />
          <List.Item title="Fish Meal" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
