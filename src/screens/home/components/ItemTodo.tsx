import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface IItemTodoProps {
  title: string;
  id: string;
  handleDone?: (id: string) => void;
  handleDelete?: (title: string) => void;
}
export const ItemTodo = ({
  title,
  id,
  handleDone,
  handleDelete,
}: IItemTodoProps) => {
  const handleDoneItem = () => {
    if (handleDone) {
      handleDone(id);
    }
  };
  return (
    <View style={styles.todoItem}>
      <ScrollView style={{ flex: 1, height: 32 + 8 }} horizontal>
        <Text style={styles.title}>{title}</Text>
      </ScrollView>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.doneBtn} onPress={handleDoneItem}>
          <Text style={{ fontSize: 18 }}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delteBtn}>
          <Text style={{ fontSize: 18 }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    marginBottom: 8,
  },
  title: { fontSize: 20, alignSelf: "center", paddingLeft: 8 },
  actions: {
    flexDirection: "row",
    backgroundColor: "#ffff7cba",
  },
  doneBtn: {
    width: 16 * 4,
    height: 16 * 3,
    backgroundColor: "rgb(100,200,100)",
    justifyContent: "center",
    marginRight: 8,
    alignItems: "center",
  },
  delteBtn: {
    width: 16 * 4,
    height: 16 * 3,
    backgroundColor: "rgb(200,100,100)",
    justifyContent: "center",
    alignItems: "center",
  },
});
