import satelliteImage from '../assets/Quiz1.png';
import homeImage from '../assets/Data visualization2.png';
import learningImage from '../assets/LearningMaterial.png';

const SquishyCard = () => {
  return (
    <section className="mt-[150px] px-4 py-12">
      <div className="mx-auto flex flex-wrap justify-center gap-8">
        {/* First Card */}
        <Card
          id="#1"
          role="Learning"
          role1="Materials"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageUrl={learningImage}
        />
        {/* Second Card */}
        <Card
          id="#2"
          role="Game"
          description="Simple and efficient plan for individuals."
          imageUrl={homeImage}
        />
        {/* Third Card */}
        <Card
          id="#3"
          role="Quiz"
          description="Advanced solutions for large businesses and enterprises."
          imageUrl={satelliteImage}
        />
      </div>
    </section>
  );
};

const Card = ({ id, role, role1, description, imageUrl }) => {
  return (
    <div
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-cover bg-center p-8 bg-black"
      style={{
        backgroundImage: `url('${imageUrl}')`, 
      }}
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          {id}
        </span>
        <div className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]">
          {role}
          <br />
          {role1}
        </div>
        <p>{description}</p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Explore now
      </button>
    </div>
  );
};

export default SquishyCard;