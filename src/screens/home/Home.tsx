import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ItemTodo } from "./components/ItemTodo";
export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <Text style={{ fontSize: 16 }}>To-do List</Text>
      <FlatList
        data={[
          { id: "1", title: "Hi" },
          { id: "2", title: "have lunchlunchlunchlunchlunchlunch" },
          { id: "3", title: "have lunch" },
          { id: "4", title: "have lunch" },
          { id: "5", title: "have lunch" },
          { id: "6", title: "have lunch" },
          { id: "7", title: "have lunch" },
          { id: "8", title: "have lunch" },
          { id: "9", title: "have lunch" },
          { id: "10", title: "have lunch" },
          { id: "11", title: "have lunch" },
          { id: "12", title: "have lunch" },
          { id: "13", title: "have lunch" },
          { id: "14", title: "have lunch" },
        ]}
        renderItem={(data) => {
          return <ItemTodo title={data.item.title} />;
        }}
        keyExtractor={(item) => item.id}
        style={styles.listTodo}
      />
      <Text style={{ fontSize: 16 }}>Done List</Text>
      <FlatList
        data={[{ id: "1", title: "okokok" }]}
        renderItem={(data) => {
          return <ItemTodo title={data.item.title} />;
        }}
      />
      <View style={styles.actionsHome}>
        <TextInput style={styles.inputText} />
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.btnAddTitle}>+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 32,
    alignSelf: "center",
    fontWeight: "800",
  },
  listTodo: {
    paddingTop: 8,
    height: "25%",
    marginBottom: 8,
  },
  inputText: {
    flex: 1,
    backgroundColor: "#999",
    fontSize: 16 + 16 / 2,
    paddingHorizontal: 16,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  actionsHome: {
    flexDirection: "row",
    height: 16 * 3,
  },
  btnAdd: {
    width: 16 * 5,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lime",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  btnAddTitle: {
    fontSize: 16 + 16 / 2,
  },
});
