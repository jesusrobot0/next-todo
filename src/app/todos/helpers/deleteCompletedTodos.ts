export async function deleteCompletedTodos() {
  await fetch("/api/todos", {
    method: "DELETE",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });

  return "deleted";
}
