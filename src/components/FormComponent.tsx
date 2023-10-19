import { useState, useEffect } from "react";
import idGenerator from "../helpers/idGenerator";
import { useAppDispatch } from "../hooks/redux";
import { addTodo } from "../redux/slices/todos";
import axios from "axios";

const FormComponent = () => {
  const [todoName, setTodoName] = useState("");
  const [todoColor, setTodoColor] = useState("white");
  const [colors, setColors] = useState([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getColors = async () => {
      const { data } = await axios(
        "https://www.colr.org/json/colors/random/10"
      );
      setColors(data.colors);
      console.log(colors);
    };
    getColors();
  }, []);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: idGenerator(),
        name: todoName,
        color: `#${todoColor}`,
      })
    );
  };

  return (
    <form action="" className="flex flex-col gap-2 ">
      <input
        className="rounded-lg px-2 border border-black"
        name="name"
        placeholder="TODO name"
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <select
        name="color"
        className="rounded-lg border border-black"
        style={{ backgroundColor: `#${todoColor}` }}
        onChange={(e) => setTodoColor(e.target.value)}
      >
        <option value="white" disabled selected>
          Select color
        </option>
        {colors.map(
          (color: any) =>
            color.hex !== "" && (
              <option
                key={idGenerator()}
                value={color.hex}
                style={{ backgroundColor: `#${color.hex}` }}
              ></option>
            )
        )}
      </select>
      <button
        className="bg-white rounded-lg shadow hover:bg-slate-100 border border-black"
        onClick={handleAddTodo}
      >
        Add item
      </button>
    </form>
  );
};

export default FormComponent;
