import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { Link } from "react-router-dom"; // Import Link for navigation

const Game = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
      <div className="border-4 border-white p-4 shadow-lg rounded-lg bg-white">
        <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">NASA PACE Puzzle Game</h1>
        <JigsawPuzzle
          imageSrc="https://pace.oceansciences.org/coloring/images/coloring01-key.png"
          rows={2}
          columns={2}
          onSolved={() => alert("Puzzle Solved!")}
          className="rounded-xl"
        />
      </div>
      <Link to="/game1" className="mt-6 inline-block rounded-lg bg-blue-500 text-white py-2 px-4 font-bold text-center transition-colors hover:bg-blue-600">
        Game Level 1
      </Link>
    </div>
  );
};

export default Game;
