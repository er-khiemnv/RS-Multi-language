import { getDictionary } from "../../get-dictionary";
import LocaleSwitcher from "./components/LocaleSwitcher";
import TodoList from "../../components/ToDoList";

export default async function IndexPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher lang={lang} />
      <TodoList const dictionary={dictionary["to-do-list"]}/>
    </div>
  );
}
