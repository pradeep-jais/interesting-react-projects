// export { default } from './SnakeGame';
import SnakeGameByGemini from './SnakeGameByGemini';
import SnakeGameByChatGPT from './SnakeGameByChatGPT';

const Index = () => {
  return (
    <div>
      <SnakeGameByGemini />
      <SnakeGameByChatGPT />
    </div>
  );
};
export default Index;
