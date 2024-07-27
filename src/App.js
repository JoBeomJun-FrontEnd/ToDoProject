import TodoBox from './components/TodoBox';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className="flex h-screen items-center justify-center">
        <TodoBox></TodoBox>
      </div>
    </DarkModeProvider>
  );
}

export default App;
