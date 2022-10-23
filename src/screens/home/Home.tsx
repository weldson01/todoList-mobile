import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GenereteId } from "../../utils/genereteId/GenereteId";
import { ItemTodo } from "./components/ItemTodo";
interface ITodoItem {
  title: string;
  id: string;
}
export const Home = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [doneList, setDoneList] = useState<ITodoItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddItemtoTodo = () => {
    console.log(todoList);
    if (inputValue != "") {
      setTodoList((prev) => {
        const text = inputValue;
        setInputValue("");
        return [...prev, { id: `${GenereteId()}`, title: text }];
      });
    }
  };
  const handleAddToDoneList = (id: string) => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <Text style={{ fontSize: 16 }}>To-do List</Text>
      <FlatList
        data={todoList}
        renderItem={(data) => {
          return (
            <ItemTodo
              title={data?.item?.title}
              id={data?.item?.id}
              handleDone={handleAddToDoneList}
            />
          );
        }}
        keyExtractor={(item) => {
          return item?.id;
        }}
        style={styles.listTodo}
      />
      <Text style={{ fontSize: 16 }}>Done List</Text>
      <FlatList
        data={doneList}
        renderItem={(data) => {
          return <ItemTodo title={data?.item?.title} id={data?.item?.id} />;
        }}
        keyExtractor={(item) => {
          return item?.id;
        }}
      />
      <View style={styles.actionsHome}>
        <TextInput
          style={styles.inputText}
          value={inputValue}
          onChangeText={(e) => setInputValue(e)}
        />
        <TouchableOpacity style={styles.btnAdd} onPress={handleAddItemtoTodo}>
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
