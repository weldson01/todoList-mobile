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
  onlyDelete?: boolean;
}
export const ItemTodo = ({
  title,
  id,
  handleDone,
  handleDelete,
  onlyDelete,
}: IItemTodoProps) => {
  const handleDoneItem = () => {
    if (handleDone) {
      handleDone(id);
    }
  };
  const handleDelteItem = () => {
    if (handleDelete) {
      handleDelete(id);
    }
  };
  return (
    <View style={styles.todoItem}>
      <ScrollView style={{ flex: 1, height: 32 + 8 }} horizontal>
        <Text style={styles.title}>{title}</Text>
      </ScrollView>
      <View style={styles.actions}>
        {onlyDelete === false && (
          <TouchableOpacity style={styles.doneBtn} onPress={handleDoneItem}>
            <Text style={{ fontSize: 18, color: "#EEF1FF" }}>Done</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.delteBtn} onPress={handleDelteItem}>
          <Text style={{ fontSize: 18, color: "#EEF1FF" }}>Delete</Text>
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
    backgroundColor: "#AEBDCA",
    marginBottom: 16,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 16,
    color: "#222",
  },
  actions: {
    flexDirection: "row",
    backgroundColor: "#EEF1FF",
  },
  doneBtn: {
    width: 16 * 4,
    height: 16 * 3,
    backgroundColor: "#54BAB9",
    justifyContent: "center",
    marginRight: 8,
    alignItems: "center",
  },
  delteBtn: {
    width: 16 * 4,
    height: 16 * 3,
    backgroundColor: "#FF9494",
    justifyContent: "center",
    alignItems: "center",
  },
});
