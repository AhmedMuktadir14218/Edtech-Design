const Hero = () => {
  return (
    <div className="bg-[#245D51] ">
      <div className="grid grid-cols-2 gap-36 min-h-screen  px-16 pt-9">
        {/* 1st grid  */}
        <div>
          <p className=" text-5xl font-semibold text-start leading-normal">
            There is always <br /> something new for <br /> us to learn
          </p>
          <p className=" text-[#FFFFFF] opacity-60">
            we have created more than 100+ materials on various <br /> things
            that will help your career, with mentors who are <br /> experienced
            in their fields.
          </p>

          {/* buttn div  */}
          <div className="flex gap-6 mt-9">
            <button className="font-semibold text-xl">Start Journey ➚</button>

            {/* icon div  */}
            <div className="grid grid-cols-3 gap-6 items-center">
              <img src="../../public/Vector.png" alt="" />
              <img src="../../public/Vector (1).png" alt="" />
              <img src="../../public/Vector (2).png" alt="" />
            </div>
          </div>
        </div>

        {/* 2nd grid */}
        <div className="pt-11">
          <img className="" src="../../public/image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
