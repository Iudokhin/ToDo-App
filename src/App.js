import { Header } from "./components/Header";
import { InputForm } from "./components/InputForm";
import { Todos } from "./components/Todos";
import { Layout } from "./features/layout/Layout";

function App() {
  return (
      <Layout>
        <Header />
        <InputForm />
        <Todos />
      </Layout>
  );
}

export default App;
