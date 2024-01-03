import { useState } from "react";
import Item  from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); //.slice() is because we don't have to mutate the original array of items, .localCompare is because it is a string
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by Input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
