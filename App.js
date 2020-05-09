import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Button,
  useWindowDimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const NUM_COLUMS = 3;
// export default function App() {
//   const [fadeValue, setFadeValue] = useState(new Animated.Value(0));
//   const [xMove, setXMove] = useState(new Animated.Value(20));
//   const [springValue, setSpringValue] = useState(new Animated.Value(0.4));
//   const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
//   const [rotateForever, setRotateForever] = useState(new Animated.Value(0));
//   const [show, setShow] = useState(false);
//   const [showLeft, setshowLeft] = useState(false);
//   const [grow, setGrow] = useState(false);

//   const animatedBackground = [];
//   for (let i = 0; i < 2000; i++) {
//     animatedBackground.push(new Animated.Value(0));
//   }
//   const [animateScreen, setAnimateScreen] = useState(animatedBackground);

//   const animationOnScreen = () => {
//     const animations = animateScreen.map((value) =>
//       Animated.timing(value, { toValue: 1, duration: 2000 })
//     );
//     Animated.stagger(1, animations).start();
//   };

//   const _showSquare = () => {
//     Animated.timing(fadeValue, {
//       toValue: 1,
//       duration: 1000,
//     }).start();
//     setShow(true);
//   };

//   const _hideSquare = () => {
//     Animated.timing(fadeValue, {
//       toValue: 0,
//       duration: 1000,
//     }).start();
//     setShow(false);
//   };

//   const _moveLeftSquare = () => {
//     Animated.timing(xMove, {
//       toValue: 20,
//       duration: 1000,
//       easing: Easing.linear,
//     }).start();
//     setshowLeft(true);
//   };
//   const _moveRigthSquare = () => {
//     Animated.timing(xMove, {
//       toValue: 0,
//       duration: 1000,
//       easing: Easing.linear,
//     }).start();
//     setshowLeft(false);
//   };
//   const _growSquare = () => {
//     Animated.spring(springValue, {
//       toValue: 1,
//       friction: 2,
//     }).start();
//     setGrow(true);
//   };
//   const _decreaseSquare = () => {
//     Animated.spring(springValue, {
//       toValue: 0.3,
//       friction: 2,
//     }).start();
//     setGrow(false);
//   };
//   const _rotateImage = () => {
//     Animated.sequence([
//       Animated.timing(rotateValue, {
//         toValue: 100,
//         duration: 1000,
//         easing: Easing.linear,
//       }),
//       Animated.timing(rotateValue, {
//         toValue: 0,
//         duration: 1000,
//         easing: Easing.linear,
//       }),
//     ]).start();
//   };
//   const _rotateImageForever = () => {
//     Animated.sequence([
//       Animated.timing(rotateForever, {
//         toValue: 100,
//         duration: 5000,
//         easing: Easing.linear,
//       }),
//       Animated.timing(rotateForever, {
//         toValue: 0,
//         duration: 5000,
//         easing: Easing.linear,
//       }),
//     ]).start(() => {
//       _rotateImageForever();
//     });
//   };
//   const _rotateAndSpring = () => {
//     showLeft
//       ? Animated.parallel([_rotateImage(), _moveRigthSquare()]).start()
//       : Animated.parallel([_rotateImage(), _moveLeftSquare()]).start();
//   };
//   const _fadeAndSpring = () => {
//     show
//       ? Animated.parallel([_hideSquare(), _decreaseSquare()]).start()
//       : Animated.parallel([_showSquare(), _growSquare()]).start();
//   };
//   const interpolate = rotateValue.interpolate({
//     inputRange: [0, 100],
//     outputRange: ["0deg", "360deg"],
//   });
//   const interpolateForever = rotateForever.interpolate({
//     inputRange: [0, 100],
//     outputRange: ["0deg", "360deg"],
//   });
//   const data = [
//     {
//       title: show ? "Hide" : "Show",
//       onPress: show ? _hideSquare : _showSquare,
//       extraStyle: { opacity: fadeValue },
//     },
//     {
//       title: "Mover",
//       onPress: showLeft ? _moveRigthSquare : _moveLeftSquare,
//       extraStyle: { left: xMove },
//     },
//     {
//       title: grow ? "Small" : "Big",
//       onPress: grow ? _decreaseSquare : _growSquare,
//       extraStyle: { transform: [{ scale: springValue }] },
//     },
//     {
//       onPress: _rotateImage,
//       title: "Secuence",
//       extraStyle: { transform: [{ rotate: interpolate }] },
//     },
//     {
//       onPress: _rotateImageForever,
//       title: "Secuence Forever",
//       extraStyle: { transform: [{ rotate: interpolateForever }] },
//     },
//     {
//       onPress: _rotateAndSpring,
//       title: "Parallel",
//       extraStyle: { transform: [{ rotate: interpolate }], left: xMove },
//     },
//     {
//       onPress: _fadeAndSpring,
//       title: "Fade + big",
//       extraStyle: { transform: [{ scale: springValue }], opacity: fadeValue },
//     },
//   ];
//   const formatData = (data) => {
//     const lenght = data.length;
//     const numofFullRows = Math.floor(lenght / NUM_COLUMS);
//     let numberofElementsinLastRow = lenght - numofFullRows * NUM_COLUMS;
//     while (
//       numberofElementsinLastRow !== NUM_COLUMS &&
//       numberofElementsinLastRow !== 0
//     ) {
//       data.push({ empty: true });
//       numberofElementsinLastRow += 1;
//     }
//     return data;
//   };
//   const ContainerPress = (props) => {
//     const { title = "", onPress = "", extraStyle = {}, empty = false } = props;
//     return empty ? (
//       <View style={[styles.container, { backgroundColor: "transparent" }]} />
//     ) : (
//       <TouchableOpacity onPress={onPress} style={styles.containerPress}>
//         <Animated.Image
//           source={require("./assets/logo.png")}
//           style={[styles.image, extraStyle]}
//         ></Animated.Image>
//         <Text style={styles.textButton}>{title}</Text>
//       </TouchableOpacity>
//     );
//   };
//   useEffect(() => {
//     animationOnScreen();
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Animations</Text>
//       <FlatList
//         data={formatData(data)}
//         style={styles.list}
//         keyExtractor={(item) => item.title}
//         renderItem={(item, index) => (
//           <ContainerPress
//             extraStyle={item.item.extraStyle}
//             onPress={item.item.onPress}
//             title={item.item.title}
//             empty={item.item.empty}
//           />
//         )}
//         numColumns={NUM_COLUMS}
//       />
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "white",
//           position: "absolute",
//           width: width,
//           height: height,
//           zIndex: -10,
//           flexWrap: "wrap",
//           flexDirection: "row",
//         }}
//       >
//         {animateScreen.map((animateSquare, index) => (
//           <Animated.View
//             key={index}
//             style={[styles.square, { opacity: animateSquare }]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 32,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "900",
//     textAlign: "center",
//     color: "gray",
//   },
//   list: {
//     flex: 1,
//   },
//   animationView: {
//     width: 100,
//     height: 100,
//     backgroundColor: "skyblue",
//   },
//   containerPress: {
//     flex: 1,
//     zIndex: 100,
//     position: "relative",
//     height: 150,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 16,
//     margin: 4,
//     backgroundColor: "rgba(255,255,255,0.5)",
//   },
//   textButton: {
//     color: "black",
//     bottom: 2,
//     position: "absolute",
//   },
//   image: {
//     width: 100,
//     height: 100,
//     zIndex: -1,
//     position: "absolute",
//   },
//   square: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "rgba(0,0,0,0.03)",
//     margin: 3,
//   },
// });
import { LineChart } from "react-native-chart-kit";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
const yellow = "#FFD428";
const Drawer = createDrawerNavigator();
const Chart = () => {
  return (
    <View>
      <Text style={{ fontSize: 32, textAlign: "center", marginTop: 32 }}>
        Bezier Line Chart
      </Text>
      <LineChart
        data={{
          labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"],
          datasets: [
            {
              data: [
                5.6 * 10,
                8.7 * 10,
                5.2 * 10,
                5.5 * 10,
                6.4 * 10,
                4.2 * 10,
                9.4 * 10,
              ],
            },
          ],
        }}
        width={width} // from react-native
        height={220}
        fromZero
        yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2, // optional, defaults to 2dp
          labelColor: () => "#000",
          color: () => yellow,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false, // optional
        }}
        bezier
      />
    </View>
  );
};
const AppBar = ({ openDrawer }) => {
  const route = useRoute();
  console.log(route);
  const { name } = route;
  return (
    <View
      style={{
        width: "100%",
        height: 56,
        backgroundColor: yellow,
        marginTop: 24,
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row", margin: 16 }}>
        <TouchableOpacity onPress={() => openDrawer()}>
          <MaterialCommunityIcons name="menu" size={24} />
        </TouchableOpacity>
        <Text style={{ fontSize: 17, marginLeft: 16 }}>{name}</Text>
      </View>
    </View>
  );
};
const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: yellow,
      }}
    >
      <AppBar {...navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Chart />
        <Text>Home Screen</Text>
      </View>
    </View>
  );
};
const HistoryScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: yellow,
      }}
    >
      <AppBar {...navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(255,234,32,0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Notification Screen</Text>
      </View>
    </View>
  );
};

const HeaderDrawer = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 175,
        backgroundColor: yellow,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 75,
          height: 75,
          borderRadius: 37.5,
          backgroundColor: "gray",
        }}
      />
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18 }}>Ecovia 1856</Text>
        <Text style={{ fontWeight: "normal", fontSize: 16 }}>
          Rio Coca - Quitumbe
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: 10 }}>Quito</Text>
      </View>
    </View>
  );
};
const ItemsDrawer = ({ navigate }) => {
  const routes = [
    {
      nameRoute: "Home",
      iconName: "currency-usd",
    },
    {
      nameRoute: "History",
      iconName: "history",
    },
    {
      nameRoute: "Report",
      iconName: "settings",
    },
    {
      nameRoute: "Profile",
      iconName: "account",
    },
    {
      nameRoute: "Salir",
      iconName: "logout",
    },
  ];
  const onPressRoute = (nameRoute) => {
    if (nameRoute === "Salir") {
      alert("Salir!");
    } else {
      navigate(nameRoute);
    }
  };
  return (
    <View style={{ marginTop: 15 }}>
      {routes.map(({ nameRoute, iconName }) => (
        <TouchableOpacity
          key={iconName}
          style={{ flexDirection: "row", marginVertical: 15, marginLeft: 30 }}
          onPress={() => onPressRoute(nameRoute)}
        >
          <MaterialCommunityIcons name={iconName} size={24} />
          <Text style={{ marginLeft: 32 }}>{nameRoute}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const CustomDrawer = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderDrawer />
      <ItemsDrawer {...navigation} />
    </View>
  );
};
export default (props) => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType={isLargeScreen ? "permanent" : "back"}
        drawerStyle={isLargeScreen ? null : { width: "80%" }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          options={{ title: "Costos" }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{ title: "Historial" }}
          name="History"
          component={HistoryScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
