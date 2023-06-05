import { useState } from "react";

export default function QuestItem(props) {
  // recebe e define o título da missão
  const [title, setTitle] = useState(props.quest.title);
  // recebe e define se a missão foi concluída
  const [checked, setChecked] = useState(false);
  // chama o estado de edição da missão no componente
  const [editMode, setEditMode] = useState(false);
  // define o visual da missão na lista
  const conclued = props.quest.status === "concluído";

  return (
    <div className="flex gap-4 flex-col md:flex-row items-center">
      <div className="flex gap-4 items-center w-full sm:w-[80%]">
        <input
          disabled={conclued}
          type="checkbox"
          checked={checked}
          className="checkbox rounded-full border"
        />

        <p className="break-words">{props.quest.title}</p>
      </div>
      <div className="flex gap-4 w-full sm:w-fit justify-center">
        <button onClick={() => setEditMode(!editMode)}>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
}
