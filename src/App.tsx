import FormComponent from './components/FormComponent';
import TodoListComponent from './components/TodoListComponent';
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <header className="flex justify-center items-center mb-12">
        <h1 className="text-xl font-bold">Simple TODO List App</h1>
      </header>
      <main className="flex flex-col justify-center items-center h-full sm:flex-row sm:gap-2 sm:items-start">
        <section className="mb-12 w-9/12">
          <FormComponent />
        </section>
        <section className="w-9/12 h-[512px] overflow-auto">
          <TodoListComponent />
        </section>
      </main>
    </Provider>
  );
};

export default App;
