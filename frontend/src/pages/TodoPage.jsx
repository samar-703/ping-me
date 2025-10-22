import { useState } from "react";
import { PlusIcon, TrashIcon, CheckIcon } from "lucide-react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toLocaleDateString(),
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const selectAllTodos = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="max-w-4xl mx-auto p-6 max-h-screen bg-base-100">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Todo App</h1>
        <p className="text-base-content opacity-70">
          Stay organized and get things done
        </p>
      </div>

      {/* Add Todo Section */}
      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Add a new task..."
              className="input input-bordered flex-1"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={addTodo}
              className="btn btn-primary btn-square"
              disabled={newTodo.trim() === ""}
            >
              <PlusIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      {todos.length > 0 && (
        <div className="flex gap-4 mb-6">
          <div className="card bg-base-100 flex-1">
            <div className="card-body py-3">
              <div className="text-sm opacity-70">Total Tasks</div>
              <div className="text-2xl font-bold text-primary">
                {totalCount}
              </div>
            </div>
          </div>
          <div className="card bg-base-200 flex-1">
            <div className="card-body py-3">
              <div className="text-sm opacity-70">Completed</div>
              <div className="text-2xl font-bold text-success">
                {completedCount}
              </div>
            </div>
          </div>
          <div className="card bg-base-200 flex-1">
            <div className="card-body py-3">
              <div className="text-sm opacity-70">Progress</div>
              <div className="text-2xl font-bold">
                {totalCount > 0
                  ? Math.round((completedCount / totalCount) * 100)
                  : 0}
                %
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Select All Button */}
      {todos.length > 0 && (
        <div className="flex items-center gap-2 mb-4 ml-8">
          <button
            onClick={selectAllTodos}
            className={`btn btn-sm btn-circle ${
              todos.every((todo) => todo.completed) ? "btn-warning" : "btn-info"
            }`}
          >
            {todos.every((todo) => todo.completed) ? "✓" : "O"}
          </button>
          <span className="text-sm font-medium">
            {todos.every((todo) => todo.completed)
              ? "Unselect All"
              : "Select All"}
          </span>
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center py-12">
              <div className="text-6xl opacity-20 mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No tasks yet</h3>
              <p className="text-base-content opacity-70">
                Add your first task above to get started!
              </p>
            </div>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`card bg-base-100 shadow-xl transition-all duration-200 ${
                todo.completed ? "opacity-75" : ""
              }`}
            >
              <div className="card-body py-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`btn btn-sm btn-circle ${
                      todo.completed ? "btn-success" : "btn-outline btn-success"
                    }`}
                  >
                    {todo.completed && <CheckIcon className="size-4" />}
                  </button>

                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        todo.completed
                          ? "line-through text-base-content opacity-50"
                          : "text-base-content"
                      }`}
                    >
                      {todo.text}
                    </p>
                    <p className="text-xs text-base-content opacity-50">
                      Added on {todo.createdAt}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-sm btn-error btn-outline btn-circle"
                  >
                    <TrashIcon className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.completed))}
            className="btn btn-outline btn-error"
          >
            Clear Completed ({completedCount})
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoPage;
