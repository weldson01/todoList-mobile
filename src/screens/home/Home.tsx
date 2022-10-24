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
    if (inputValue != "") {
      setTodoList((prev) => {
        const text = inputValue;
        setInputValue("");
        return [...prev, { id: `${GenereteId()}`, title: text }];
      });
    }
  };

  const handleAddToDoneList = (id: string) => {
    setDoneList((prev) => {
      if (todoList.some((i) => i.id == id)) {
        const auxItem = todoList.find((item) => item.id === id);
        const isRepeatedItem = !!prev.some((i) => i.id === id);

        if (isRepeatedItem) {
          return prev;
        }
        if (auxItem) {
          setTodoList((prev) => {
            const newArray = prev.filter((item) => item.id !== id);
            if (newArray) {
              return newArray;
            }
            return prev;
          });
          return [...prev, auxItem];
        }
      }
      return prev;
    });
  };

  const handleRemoveItem = (id: string) => {
    if (todoList.some((i) => i.id === id)) {
      const newList = todoList.filter((i) => i.id !== id);
      setTodoList(newList);
    }
    if (doneList.some((i) => i.id === id)) {
      const newList = doneList.filter((i) => i.id !== id);
      setDoneList(newList);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Well todo-list</Text>
      <Text style={styles.titleSection}>To-do List</Text>
      <FlatList
        data={todoList}
        renderItem={(data) => {
          return (
            <ItemTodo
              title={data?.item?.title}
              id={data?.item?.id}
              handleDone={handleAddToDoneList}
              key={data?.item?.id}
              handleDelete={handleRemoveItem}
              onlyDelete={false}
            />
          );
        }}
        keyExtractor={(item) => {
          return item?.id;
        }}
        style={styles.listTodo}
      />
      <Text style={styles.titleSection}>Done List</Text>
      <FlatList
        data={doneList}
        renderItem={(data) => {
          return (
            <ItemTodo
              title={data?.item?.title}
              id={data?.item?.id}
              key={data?.item?.id}
              onlyDelete={true}
              handleDelete={handleRemoveItem}
            />
          );
        }}
        keyExtractor={(item) => {
          return item?.id;
        }}
        style={styles.listTodo}
      />
      <View style={styles.actionsHome}>
        <TextInput
          style={styles.inputText}
          value={inputValue}
          onChangeText={(e) => setInputValue(e)}
          placeholder={"Put your task here ..."}
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
    backgroundColor: "#EEF1FF",
  },
  title: {
    fontSize: 32,
    alignSelf: "center",
    fontFamily: "Changa_700Bold",
    color: "#554994",
    marginBottom: 5,
  },
  titleSection: {
    fontSize: 24,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#B1B2FF",
    color: "#EEF1FF",
    textAlign: "center",
    fontFamily: "Changa_400Regular",
  },
  listTodo: {
    flex: 1,
    paddingTop: 8,
    marginBottom: 8,
  },
  inputText: {
    flex: 1,
    backgroundColor: "#AAC4FF",
    color: "#EEF1FF",
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
    backgroundColor: "#6867AC",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  btnAddTitle: {
    fontSize: 36,
    color: "#EEF1FF",
  },
});
