import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Game = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-4 border-white p-4  shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">NASA PACE Puzzle Game</h1>
        <JigsawPuzzle
          imageSrc="https://pace.oceansciences.org/coloring/images/coloring01-key.png"
          rows={2}
          columns={2}
          onSolved={() => alert("Puzzle Solved!")}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Game;
