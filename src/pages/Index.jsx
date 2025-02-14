import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">
          Todo App
        </Heading>
        <Flex width="100%" maxW="md">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mr={2}
          />
          <Button onClick={handleAddTask} colorScheme="teal">
            Add Task
          </Button>
        </Flex>
        <List width="100%" maxW="md">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              borderBottom="1px"
              borderColor="gray.200"
            >
              <Checkbox
                isChecked={task.completed}
                onChange={() => handleToggleTask(index)}
                mr={2}
              >
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                size="sm"
                colorScheme="red"
                onClick={() => handleDeleteTask(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;