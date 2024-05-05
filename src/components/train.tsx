
'use client'






let MensWorkouts = [
  {
    id: "chest",
    name: " Barbell Bench Press",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-side_KciuhbB.mp4#t=0.1",
    step1:
      "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.",
    step2: "Lower the bar to your mid chest",
    step3: "Raise the bar until you've locked your elbows.",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-side.mp4#t=0.1",

    step4:
      "Flatten your back so your entire body is straight and slowly lower your body",
  },
  {
    id: "shoulders",
    video1:
      " https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1 ",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side_1DIUbfS.mp4#t=0.1 ",
    step1:
      "ake a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms)",
    step2:
      "Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-side.mp4#t=0.1",
    step3:
      "Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.",
    step4: "Raise the dumbbells upwards and pause at the contracted position.",
  },
  {
    id: "biceps",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-side.mp4#t=0.1",
    step1:
      "While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.",
    step2:
      "Continue the movement until your biceps are fully contracted and the bar is at shoulder level.",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-side.mp4#t=0.1",
    step3:
      "Grab the bar shoulder width apart with a supinated grip (palms facing you)",
    step4:
      "With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.",
  },
  {
    id: "forearms",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-wrist-curl-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-wrist-curl-side.mp4#t=0.1",
    step1:
      "Grab the bar shoulder width apart with a supinated grip (palms facing you)",
    step2:
      "With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.",
    step3:
      "Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.",
    step4: "Slowly curl your wrist upwards in a semicircular motion.",
  },
  {
    id: "obliques",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-side-plank-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-side-plank-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-wood-chopper-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-wood-chopper-side.mp4#t=0.1 ",
    step1:
      "Press your hand into the ground and pick up your hip off the ground.",
    step2:
      "Open your chest and maintain this position for the allotted amount of time.",
    step3:
      "Stand with a shoulder width stance. Begin with the dumbbell near one of your quads.",
    step4: "Rotate at your upper spine to engage the obliques.",
  },
  {
    id: "traps",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-shrug-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-shrug-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-silverback-shrug-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-silverback-shrug-side.mp4#t=0.1 ",
    step1:
      "Sit on a bench with dumbbells in both hands, palms facing your body, back straight.",
    step2:
      "Elevate your shoulders and hold the contracted position at the apex of the motion.",
    step3:
      "Stand with your feet shoulder width apart holding the Barbell with both hands in front just past shoulder width.",
    step4:
      "Bend forward at the hips with a slight bend in your knees, keeping your back straight.",
  },
  {
    id: "quads",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-front-squat-bodybuilding-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-front-squat-bodybuilding-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Vitruvian-belt-squat-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Vitruvian-belt-squat-side.mp4#t=0.1",
    step1:
      "Measure your shoulders against the bar to make sure you're even. Throw your shoulders under the bar. The bar should be digging into your neck slightly.",
    step2:
      "Make sure to push your elbows up to the ceiling for the entire rep. To make sure you dont get too pitched forward.",
    step3: "Set up the Vitruvian, including a the provided belt.",
    step4: "Position yourself with feet shoulder-width apart on the Vitruvian.",
  },
  {
    id: "calves",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-calve-raise-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-calve-raise-side.mp4#t=0.1",

    step1:
      "Get comfortable on the machine, then place your lower thighs beneath the padded lever. Place your toes and the balls of your feet onto the foot supports.",
    step2:
      "Prevent the weight from slipping forward by gripping the handles, and release the safety bar. Lower the weight until your calves are extended.",
    step3: "Place the bar on your back ,Start with feet flat on the ground",
    step4:
      "Extend your heels upwards while keeping your knees stationary, and pause at the contracted position. Slowly return to the starting position. Repeat.",
  },
  {
    id: "abdominals",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-situp-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-situp-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-side_GnZ2NZh.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-front_ZnMlFBF.mp4#t=0.1",

    step1:
      "Hold the bar with a slightly wider than shoulder width grip. Push the bar up toward the ceiling and maintain that elbow extension.",
    step2:
      "Flex your abs and sit-up. Aim to get your torso vertical while maintaining the barbell overhead.",
    step3:
      "Start in a kneeling position with your hands planted on the ground.",
    step4:
      "Pick your knees up off the ground. Hold in this position with a flat back.",
  },
];

//woment workout array declaration

let WomenWorkout = [
  {
    id: "traps",

    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-seated-shrug-front.mp4#t=0.1",

    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-seated-shrug-side.mp4#t=0.1",

    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-upright-row-front.mp4#t=0.1",

    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-upright-row-side.mp4#t=0.1",

    step1:
      "Sit on a bench with dumbbells in both hands, palms facing your body, back straight.",
    step2:
      "Elevate your shoulders and hold the contracted position at the apex of the motion.",
    step3:
      "Stand with your feet shoulder width apart holding the Barbell with both hands in front just past shoulder width.",
    step4:
      "Bend forward at the hips with a slight bend in your knees, keeping your back straight. Engage your shoulder blades, as if you are trying to touch them together.",
  },
  {
    id: "shoulders",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-overhead-press-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-overhead-press-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-seated-overhead-press-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-seated-overhead-press-side.mp4#t=0.1",

    step1:
      "Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).",
    step2:
      "Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.",
    step3:
      "Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.",
    step4:
      "Raise the dumbbells upwards and pause at the contracted position. Lower the weights back to starting position.",
  },
  {
    id: "biceps",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-curl-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-curl-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-chinup-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-chinup-side.mp4#t=0.1",

    step1:
      "While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.",
    step2:
      "Continue the movement until your biceps are fully contracted and the bar is at shoulder level.",
    step3:
      "Grab the bar shoulder width apart with a supinated grip (palms facing you)",
    step4:
      "With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.",
  },
  {
    id: "forearms",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-chinup-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-chinup-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-wrist-curl-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-wrist-curl-side.mp4#t=0.1",

    step1:
      "Grab the bar shoulder width apart with a supinated grip (palms facing you)",
    step2:
      "With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.",
    step3:
      "Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.",
    step4:
      "Slowly curl your wrist upwards in a semicircular motion. Return to starting position and repeat.",
  },
  {
    id: "chest",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-bench-press-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-bench-press-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-pushup-front.mp4#t=0.1",
    video4:
      "	https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-pushup-side.mp4#t=0.1",

    step1:
      "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.",
    step2:
      "Lower the bar to your mid chest. Raise the bar until you've locked your elbows.",
    step3: "Place your hands firmly on the ground, directly under shoulders.",
    step4:
      "Flatten your back so your entire body is straight and slowly lower your body. Draw shoulder blades back and down, keeping elbows tucked close to your body",
  },
  {
    id: "abdominals",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-situp-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-situp-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-hand-plank-side_PurCsSV.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-hand-plank-front_SFgElyI.mp4#t=0.1",

    step1:
      "Hold the bar with a slightly wider than shoulder width grip. Push the bar up toward the ceiling and maintain that elbow extension.",
    step2:
      "Flex your abs and sit-up. Aim to get your torso vertical while maintaining the barbell overhead.",
    step3:
      "Start in a kneeling position with your hands planted on the ground.",
    step4:
      "Pick your knees up off the ground. Hold in this position with a flat back.",
  },
  {
    id: "obliques",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-hand-side-plank-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-hand-side-plank-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-wood-chopper-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-wood-chopper-side.mp4#t=0.1",

    step1:
      "Press your hand into the ground and pick up your hip off the ground.",
    step2:
      "Open your chest and maintain this position for the allotted amount of time.",
    step3:
      "Stand with a shoulder width stance. Begin with the dumbbell near one of your quads.",
    step4: "Rotate at your upper spine to engage the obliques.",
  },
  {
    id: "quads",
    video1:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-front-squat-bodybuilding-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-front-squat-bodybuilding-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-Vitruvian-belt-squat-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-Vitruvian-belt-squat-side.mp4#t=0.1",

    step1:
      "Measure your shoulders against the bar to make sure you're even. Throw your shoulders under the bar. The bar should be digging into your neck slightly.",
    step2:
      "Make sure to push your elbows up to the ceiling for the entire rep. To make sure you don't get too pitched forward.",
    step3: "Set up the Vitruvian, including a the provided belt.",
    step4: "Position yourself with feet shoulder-width apart on the Vitruvian",
  },
  {
    id: "calves",
    video1:
      " https://media.musclewiki.com/media/uploads/videos/branded/female-machine-seated-calf-raise-front.mp4#t=0.1",
    video2:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-machine-seated-calf-raise-side.mp4#t=0.1",
    video3:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-calve-raise-front.mp4#t=0.1",
    video4:
      "https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-calve-raise-side.mp4#t=0.1",

    step1:
      "Get comfortable on the machine, then place your lower thighs beneath the padded lever. Place your toes and the balls of your feet onto the foot supports.",
    step2:
      "Prevent the weight from slipping forward by gripping the handles, and release the safety bar. Lower the weight until your calves are extended.",
    step3: "Place the bar on your back , Start with feet flat on the ground",
    step4:
      "Extend your heels upwards while keeping your knees stationary, and pause at the contracted position. Slowly return to the starting position. Repeat.",
  },
];





import Link from "next/link";
import React, { useState, useEffect } from "react";

const WorkoutApp: React.FC = () => {

const [musculeId,setId]=useState()
const[actbtn,setAct]= useState(false)
 const [activeBTN, setActiveBtn] = useState("male")
 const clickhandel =(clickId:any) =>{
    setActiveBtn(clickId);
 }
 const handelclick = (e:any)=>{
    const clickedelement = e.currentTarget;
    const musculeId = clickedelement.id;
    setId(musculeId)
    setAct(!actbtn)
    

 };
  const gender = activeBTN ==='male' ? MensWorkouts : WomenWorkout ;

    const exercice = gender.find((workout) => workout.id == musculeId);

 
  return (
    <>
      <div className="navigation-bar">
        <div className="icon-2">
          <img
            src="https://musclewiki.com/static/4992d71c5aa32b550829869289941ada.svg"
            alt=""
          />
        </div>
        <div className="workout-div">
          <a href="WorkoutsPage.html">
            <span className="work">Workout</span>
          </a>
          <Link href="/calo">
            <span>Calorie Calculator</span>
          </Link>
        </div>

        <div className="search-bar">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search Exercises" />
        </div>

        <div className="icon-div">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="menu">
          <i className="bi bi-list"></i>
        </div>
      </div>
      <div className="options-with-male-female">
        <div className="buttons-div">
          <button
            className={"male"}
            id="male"
            onClick={() => clickhandel("male")}
          >
            Male
          </button>
          <button
            className={"female"}
            id="female"
            onClick={() => clickhandel("female")}
          >
            Female
          </button>
        </div>
      </div>

      <div className="main-containner">
        {actbtn && (
          <>
            <div className="workout-container flex ">
              <div className="videos felx flex-col w-1/4 gap-4">
                <video
                  src={exercice?.video1}
                  autoPlay
                  loop
                  width="640"
                  height="480"
                  className="w-full rounded-lg shadow-md"
                  onError={(event) => {
                    console.error("Error loading video:", exercice?.video3);
                    document
                      .getElementById("video-container-4")
                      ?.classList.add("hidden");
                    document
                      .getElementById("video-error-4")
                      ?.classList.remove("hidden");
                  }}
                />
                <div
                  id="video-error-4"
                  className="hidden text-red-500 text-center mt-2"
                >
                  Error loading video.
                </div>
                {exercice?.video2 && (
                  <video
                    src={exercice?.video2}
                    autoPlay
                    loop
                    width="640"
                    height="480"
                    className="w-full rounded-lg shadow-md"
                    onError={(event) => {
                      console.error("Error loading video:", exercice.video3);
                      document
                        .getElementById("video-container-4")
                        ?.classList.add("hidden");
                      document
                        .getElementById("video-error-4")
                        ?.classList.remove("hidden");
                    }}
                  />
                )}

                <div
                  id="video-error-4"
                  className="hidden text-red-500 text-center mt-2"
                >
                  Error loading video.
                </div>
                {exercice?.video3 && (
                  <video
                    src={exercice?.video3}
                    autoPlay
                    loop
                    width="640"
                    height="480"
                    className="w-full rounded-lg shadow-md"
                    onError={(event) => {
                      console.error("Error loading video:", exercice.video3);
                      document
                        .getElementById("video-container-4")
                        ?.classList.add("hidden");
                      document
                        .getElementById("video-error-4")
                        ?.classList.remove("hidden");
                    }}
                  />
                )}
                <div
                  id="video-error-4"
                  className="hidden text-red-500 text-center mt-2"
                >
                  Error loading video.
                </div>
                {exercice?.video4 && (
                  <video
                    src={exercice?.video4}
                    autoPlay
                    loop
                    width="640"
                    height="480"
                    className="w-full rounded-lg shadow-md"
                    onError={(event) => {
                      console.error("Error loading video:", exercice.video3);
                      document
                        .getElementById("video-container-4")
                        ?.classList.add("hidden");
                      document
                        .getElementById("video-error-4")
                        ?.classList.remove("hidden");
                    }}
                  />
                )}
                <div
                  id="video-error-4"
                  className="hidden text-red-500 text-center mt-2"
                >
                  Error loading video.
                </div>
              </div>
              <div className="steps mt-4 text-center">
                <h1 className="text-4xl font-bold mb-4  text-center ">
                  {musculeId}
                </h1>
                <h1 className="text-4xl">steps</h1>
                <p className="m-2 text-xl">
                  step1:
                  {exercice?.step1}
                </p>
                <p className="m-2 text-xl">
                  step:2
                  {exercice?.step2}
                </p>
                <p className="m-2  text-xl">
                  Step:3
                  {exercice?.step3}
                </p>
                <p className="m-2 text-xl">
                  step:4
                  {exercice?.step4}
                </p>
              </div>
            </div>
          </>
        )}
        <div className="image-containner">
          {activeBTN === "male" && (
            <div className="men-pic ">
              <svg
                height="100%"
                viewBox="0 0 673 1200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  className="body-map__muscle"
                  id="abdominals"
                  onClick={handelclick}
                >
                  <path
                    d="M384.32 490.61C386.41 457.79 388.65 408.87 388.74 397.67C388.79 392.09 388.67 389.6 388.58 387.74L388.56 387.35C388.5 385.83 388.44 384.62 388.54 382.23C388.56 381.7 388.59 381.18 388.62 380.71C388.64 380.58 388.64 380.45 388.64 380.34C388.68 379.72 388.71 379.12 388.76 378.55L388.81 378.04C388.83 377.82 388.84 377.62 388.88 377.39C389.59 370 391.12 365.02 392.36 361.01L392.47 360.64C393.98 355.77 394.81 353.08 393.26 349.6C391.24 345.04 385.88 341.08 376.39 337.12C376.36 337.11 376.32 337.1 376.29 337.09C376.29 337.09 376.29 337.09 376.26 337.07C374.72 336.53 373.1 335.9 371.46 335.19C371.42 335.17 371.39 335.16 371.33 335.14C360.54 331.16 346.9 328.38 340.97 332.51C338.84 334 337.8 336.3 337.8 339.54C337.8 340.28 337.2 340.88 336.42 340.89C336.33 340.86 336.19 340.85 336.1 340.89C335.36 340.89 334.76 340.29 334.76 339.55C334.76 336.32 333.72 334.02 331.57 332.52C329.69 331.21 321.97 327.54 301.28 335.13L301.18 335.17L301.1 335.2C299.5 335.9 297.87 336.54 296.23 337.1H296.21C296.21 337.1 296.17 337.12 296.16 337.13C286.67 341.09 281.31 345.05 279.31 349.61C277.75 353.12 278.59 355.82 280.11 360.73C281.31 364.54 282.95 369.77 283.7 377.43C283.83 378.3 283.91 379.28 283.93 380.4C283.94 380.48 283.94 380.57 283.94 380.7C283.98 381.21 284.01 381.72 284.03 382.25C284.13 384.82 284.09 386.01 283.99 387.8C283.9 389.62 283.78 392.11 283.83 397.69C283.94 409.23 286.19 458.22 288.25 490.63C291.6 543.3 323.93 583.5 336.14 583.49C336.19 583.51 336.25 583.51 336.31 583.51C336.36 583.51 336.41 583.51 336.45 583.49C348.6 583.49 380.92 543.3 384.28 490.62L384.32 490.61ZM291.68 377.57C291.08 377.57 290.56 377.18 290.39 376.6C290.18 375.9 290.59 375.16 291.3 374.94C305.76 370.74 315.58 368.2 330 368.49C334.47 368.47 334.8 361.56 334.8 351.03C334.8 350.29 335.4 349.69 336.18 349.69C336.27 349.72 336.41 349.73 336.49 349.69C337.23 349.69 337.83 350.29 337.83 351.03C337.83 361.57 338.17 368.47 342.66 368.49C357.04 368.2 366.87 370.74 381.31 374.93C381.66 375.04 381.94 375.27 382.12 375.58C382.29 375.89 382.33 376.25 382.23 376.59C382.04 377.3 381.26 377.71 380.57 377.51C367.11 373.59 357.74 371.15 344.95 371.15C344.21 371.15 343.46 371.15 342.7 371.17C339.84 371.15 337.89 369.72 336.73 366.78C336.6 366.45 336.05 366.45 335.92 366.78C334.74 369.76 332.86 371.16 330 371.17C315.97 370.87 306.3 373.36 292.05 377.51C291.95 377.54 291.83 377.56 291.69 377.56L291.68 377.57ZM369.88 378.6C369.79 378.95 369.56 379.25 369.25 379.43C368.95 379.6 368.59 379.65 368.25 379.55L366.97 379.22C361.69 377.83 352.87 375.5 345.68 376.72C339.05 377.85 337.84 381.39 337.84 387.95C337.84 388.69 337.24 389.29 336.46 389.29C336.41 389.27 336.35 389.27 336.29 389.27C336.24 389.27 336.19 389.27 336.15 389.29C335.4 389.29 334.81 388.7 334.81 387.95C334.81 381.39 333.59 377.86 326.95 376.72C319.75 375.5 310.9 377.84 305.62 379.23L304.37 379.55C304.03 379.64 303.68 379.6 303.37 379.43C303.06 379.25 302.83 378.96 302.74 378.6C302.55 377.87 302.98 377.15 303.71 376.96L304.92 376.64C310.41 375.18 319.59 372.73 327.41 374.07C331.62 374.78 334.41 376.51 335.94 379.35C336.09 379.63 336.56 379.63 336.71 379.35C338.24 376.51 341.03 374.78 345.24 374.07C353.03 372.73 362.22 375.18 367.71 376.64L368.93 376.96C369.65 377.15 370.07 377.87 369.88 378.59V378.6ZM293.5 423.27C293.25 423.01 293.12 422.67 293.12 422.31C293.12 421.93 293.28 421.57 293.55 421.33C293.8 421.1 294.13 420.98 294.47 421L295.96 421.02C310.93 421.27 325.07 421.51 332.23 417.45C334.4 416.23 334.82 413.46 334.95 410.87C334.88 409.36 334.92 407.73 334.97 406.17L334.92 404.53C334.83 402.44 334.79 400.7 334.79 399.06C334.79 398.32 335.39 397.72 336.17 397.72C336.26 397.75 336.39 397.75 336.48 397.72C337.22 397.72 337.82 398.32 337.82 399.06C337.82 401.02 337.74 402.97 337.68 404.58C337.66 405.03 337.65 405.46 337.65 405.91C337.7 407.59 337.74 409.37 337.65 411.07C337.85 414.58 338.67 416.48 340.37 417.44C347.53 421.5 361.67 421.26 376.63 421.01L378.15 420.99C378.48 420.97 378.79 421.08 379.04 421.31C379.32 421.56 379.48 421.93 379.49 422.29C379.49 423.03 378.89 423.65 378.16 423.67L376.69 423.69C373.67 423.75 369.73 423.81 365.99 423.81C355.71 423.81 345.32 423.32 339.04 419.77C338.05 419.2 337.25 418.45 336.65 417.55C336.57 417.43 336.43 417.35 336.29 417.35C336.14 417.35 336 417.43 335.93 417.55C335.36 418.45 334.59 419.18 333.56 419.77C327.29 423.33 316.9 423.82 306.61 423.82C302.86 423.82 298.93 423.75 295.93 423.7L294.44 423.68C294.09 423.68 293.75 423.53 293.5 423.27ZM369.92 427.61C369.87 427.98 369.68 428.31 369.39 428.53C369.12 428.74 368.78 428.82 368.43 428.77L368.25 428.75C362.71 428.11 353.43 427.04 345.29 427.17C338.96 427.24 337.83 430.51 337.83 439.66C337.83 440.4 337.23 441 336.45 441C336.4 440.98 336.34 440.97 336.28 440.97C336.23 440.97 336.18 440.97 336.14 440.99C335.4 440.99 334.8 440.39 334.8 439.65C334.8 430.5 333.67 427.23 327.32 427.16C319.22 427.04 309.97 428.1 304.44 428.73L304.17 428.76C303.44 428.85 302.78 428.33 302.69 427.6C302.61 426.86 303.14 426.19 303.87 426.11C309.51 425.45 318.94 424.36 327.36 424.48C331.61 424.54 334.41 426 335.93 428.93C336.08 429.22 336.55 429.22 336.7 428.93C338.22 426 341.02 424.54 345.27 424.48C353.81 424.37 363.52 425.5 368.75 426.11C369.48 426.19 370.01 426.86 369.93 427.59L369.92 427.61ZM295 470.9C294.76 470.64 294.63 470.3 294.64 469.95C294.65 469.58 294.82 469.23 295.09 468.98C295.34 468.75 295.68 468.64 296.02 468.66C301.12 468.84 304.81 469.09 308.07 469.3L309.04 469.36C314.3 469.75 318.85 470.08 327.57 469.82C333.52 469.39 334.79 467.8 334.79 451.93C334.79 451.19 335.39 450.59 336.17 450.58C336.26 450.61 336.4 450.62 336.49 450.58C337.23 450.58 337.83 451.18 337.83 451.92C337.83 468.54 339.46 469.4 345.14 469.83C353.76 470.07 358.3 469.73 363.56 469.35L364.53 469.28C367.79 469.06 371.48 468.81 376.6 468.63C376.92 468.6 377.24 468.71 377.5 468.94C377.79 469.19 377.96 469.55 377.97 469.92C377.98 470.27 377.85 470.61 377.61 470.87C377.36 471.13 377.03 471.28 376.67 471.3C371.13 471.51 367.25 471.78 363.75 472.03C359.57 472.32 355.97 472.58 350.66 472.58C348.59 472.58 346.79 472.55 344.99 472.49C340.44 472.15 338.04 470.74 336.73 467.64C336.66 467.48 336.5 467.37 336.33 467.37C336.16 467.37 336 467.47 335.93 467.63C334.6 470.73 332.21 472.14 327.7 472.48C325.86 472.54 324.02 472.57 321.93 472.57C316.61 472.57 312.84 472.3 308.86 472.02C305.36 471.77 301.47 471.5 295.94 471.29C295.58 471.28 295.25 471.13 295.01 470.87L295 470.9ZM337.83 570.5C337.83 571.24 337.23 571.84 336.49 571.84H336.14C335.4 571.84 334.8 571.24 334.8 570.5V503.38C334.8 502.63 335.39 502.04 336.14 502.04H336.49C337.23 502.04 337.83 502.64 337.83 503.38V570.5ZM337.66 488.3C337.64 488.38 337.64 488.47 337.66 488.56C337.71 489.72 337.71 490.89 337.71 492.02V492.8C337.71 493.54 337.11 494.14 336.37 494.14H336.25C335.51 494.14 334.91 493.54 334.91 492.8V492.02C334.91 490.87 334.91 489.69 334.96 488.49V488.38C334.78 483.98 334.01 480.91 330.82 480.18C325.59 479 311.19 477.57 304.86 477.57C304.57 477.57 304.3 477.57 304.04 477.57C303.73 477.6 303.41 477.48 303.15 477.25C302.87 476.99 302.7 476.63 302.7 476.26C302.7 475.9 302.83 475.56 303.07 475.3C303.32 475.04 303.65 474.9 304.01 474.89C310.18 474.76 325.81 476.29 331.41 477.56C333.44 478.03 334.93 479.08 335.95 480.77C336.03 480.9 336.17 480.98 336.32 480.98C336.47 480.98 336.62 480.9 336.69 480.77C337.69 479.08 339.16 478.04 341.2 477.56C346.75 476.3 362.39 474.78 368.62 474.89C368.98 474.89 369.31 475.04 369.56 475.3C369.8 475.56 369.93 475.89 369.92 476.25C369.92 476.62 369.75 476.97 369.48 477.22C369.24 477.44 368.94 477.56 368.63 477.56C368.6 477.56 368.58 477.56 368.55 477.56C362.8 477.41 347.33 478.91 341.81 480.16C338.63 480.89 337.84 483.93 337.66 488.29V488.3Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="obliques"
                  onClick={handelclick}
                >
                  <path
                    d="M278.25 405.1L278.22 405.27L278.23 405.26L278.2 405.42L278.181 405.528C275.415 420.952 272.286 438.408 274.68 454.63C279.61 488.3 267.94 503.64 262.69 508.67C257.5 513.64 249.36 516.54 241.25 516.54C239.37 516.54 237.5 516.38 235.66 516.06C235.43 516.02 235.27 515.81 235.3 515.58C236.6 505.04 237.65 495.4 238.26 488.43C238.68 483.48 239.34 478.52 240.05 473.27L240.08 473.02L240.082 473.006C242.671 453.691 245.348 433.726 235.63 414.4C215.71 376.03 210.63 351.86 209.81 347.41V347.31C209.81 347.26 209.81 347.22 209.83 347.17C210.97 343.85 211.84 340.34 212.44 336.75C213.35 331.07 215.45 317.93 211.12 308.04C211.04 307.85 211.1 307.63 211.27 307.51C211.44 307.39 211.67 307.41 211.82 307.55C214.24 309.84 216.37 312.33 218.14 314.46C219.35 315.91 220.38 317.07 221.37 318.09C221.384 318.104 221.398 318.12 221.413 318.137C221.43 318.157 221.449 318.179 221.47 318.2C221.47 318.21 221.54 318.28 221.54 318.28C231.955 329.911 244.178 340.439 254.971 349.736L255.08 349.83L255.22 349.96L255.238 349.975C268.64 361.529 280.21 371.503 281.06 377.77C281.088 377.911 281.108 378.106 281.127 378.295L281.13 378.33V378.45C281.15 378.5 281.17 378.65 281.17 378.82C281.21 379.09 281.23 379.41 281.25 379.75L281.28 380.33C281.3 380.41 281.3 380.49 281.3 380.56C281.51 386.9 280 395.33 278.25 405.1Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M460.77 307.59C460.92 307.45 461.15 307.43 461.32 307.55L461.33 307.56C461.5 307.68 461.56 307.9 461.48 308.09C457.17 317.96 459.26 331.07 460.16 336.67L460.18 336.77C460.78 340.36 461.65 343.87 462.79 347.19C462.81 347.23 462.81 347.28 462.81 347.33V347.43C461.66 353.7 456.4 377.07 436.99 414.44C427.27 433.74 429.95 453.72 432.56 473.03V473.13C433.34 478.83 433.97 483.58 434.39 488.44C434.96 495.23 436.01 504.88 437.33 515.59C437.36 515.82 437.2 516.03 436.97 516.07C435.14 516.39 433.26 516.54 431.39 516.54C423.28 516.54 415.13 513.64 409.94 508.67C404.69 503.63 393.02 488.29 397.95 454.63C400.36 438.26 397.2 420.73 394.4 405.27L394.37 405.08C392.62 395.32 391.11 386.89 391.32 380.55C391.32 380.51 391.32 380.44 391.34 380.36C391.34 380.29 391.35 380.2 391.37 380.11C391.41 379.35 391.48 378.57 391.55 377.8C391.55 377.78 391.55 377.72 391.58 377.63C392.6 371.342 404.153 361.386 417.528 349.861L417.676 349.733C428.442 340.462 440.614 329.981 451.07 318.29L451.14 318.21C451.17 318.17 451.21 318.13 451.24 318.1C452.33 316.97 453.41 315.75 454.46 314.47C456.35 312.19 458.42 309.78 460.77 307.59Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="forearms"
                  onClick={handelclick}
                >
                  <path
                    d="M135.05 418.55C141.32 418.55 148.19 416.1 154.92 411.47V411.46C155.1 411.34 155.33 411.37 155.48 411.52C155.63 411.67 155.65 411.91 155.52 412.08C151.51 417.52 146.59 424.21 144.16 427.73C139.457 435.289 136.843 440.787 134.543 445.625L134.46 445.8L134.457 445.806C130.428 454.264 126.627 462.244 113.47 478.7C101.33 493.83 93.04 500.16 84.26 506.86L84.199 506.906C77.9179 511.692 71.4135 516.648 63.23 525.21C63.21 525.23 63.19 525.25 63.16 525.27C61.56 527.38 58.6 531.44 56.45 535.48C56.4 535.57 56.33 535.64 56.23 535.68C53.2 536.91 50.19 537.52 47.41 537.52C44.92 537.52 42.61 537.03 40.63 536.04C35.84 533.67 32.13 527.92 30.95 521.04C30.94 520.95 30.95 520.86 30.99 520.78C31.81 519.04 32.73 517.24 33.72 515.43C37.33 507.63 41.56 497.2 46.32 485.38L46.43 485.1C57.43 457.87 71.12 423.99 84.49 407.9C92.4 398.38 98.13 392.38 102.32 388L102.5 387.81C108.4 381.64 111.64 378.25 114.13 372.23C114.229 371.995 114.327 371.761 114.425 371.528C114.593 371.127 114.759 370.728 114.93 370.33L115.04 370.08C115.13 369.87 115.36 369.77 115.58 369.84C115.8 369.91 115.92 370.14 115.87 370.36C108.45 400.78 117.14 412.23 125.73 416.48C128.51 417.85 131.64 418.55 135.05 418.55Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M638.96 515.58C640.01 517.47 640.88 519.19 641.61 520.78C641.64 520.86 641.65 520.94 641.64 521.03C640.5 527.9 636.8 533.65 631.99 536.05C630.02 537.04 627.7 537.53 625.21 537.53C622.42 537.53 619.4 536.92 616.38 535.7C616.29 535.66 616.21 535.59 616.16 535.5C614.01 531.46 611.05 527.39 609.47 525.33C609.46 525.32 609.443 525.298 609.425 525.275C609.407 525.252 609.39 525.23 609.38 525.22C601.16 516.63 594.65 511.67 588.351 506.871L588.291 506.825C579.533 500.132 571.243 493.796 559.15 478.7C545.92 462.19 542.15 454.23 538.16 445.8L538.02 445.5L538.012 445.484C535.585 440.399 533.075 435.142 528.39 427.63C526.32 424.65 522.31 419.13 517.12 412.09C517 411.92 517.01 411.68 517.16 411.53C517.31 411.37 517.55 411.35 517.72 411.47C524.43 416.1 531.29 418.55 537.57 418.55C540.97 418.55 544.11 417.85 546.89 416.48C555.48 412.24 564.16 400.82 556.8 370.45C556.74 370.23 556.87 370 557.09 369.93C557.31 369.85 557.55 369.97 557.63 370.18L557.633 370.188C557.792 370.575 557.951 370.963 558.12 371.35C558.25 371.64 558.37 371.93 558.49 372.22C561.01 378.3 564.24 381.68 570.12 387.82L570.48 388.2L570.625 388.352C574.773 392.699 580.44 398.639 588.14 407.91C601.55 424.05 615.27 458.06 626.29 485.38L626.52 485.95C631.01 497.07 635.25 507.57 638.96 515.58Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="biceps"
                  onClick={handelclick}
                >
                  <path
                    d="M207.71 345.02C207.68 345.12 207.61 345.21 207.52 345.26V345.25C207.32 345.37 207.15 345.57 207.04 345.84C202.959 355.849 196 362.113 191.389 366.264L191.36 366.29C190.73 366.85 190.16 367.36 189.67 367.84C187.7 369.66 179.78 379.71 167.95 395.4C155.59 410.5 143.93 415.86 135.1 415.86C131.98 415.86 129.22 415.19 126.91 414.05C117.4 409.37 105.33 392.91 131.34 335.25C131.34 335.24 131.42 335.08 131.42 335.08C140.01 318.85 144.88 313.74 147.79 310.69L148.08 310.39C148.53 309.92 148.94 309.48 149.32 309.03C149.35 309 149.38 308.97 149.41 308.95C152.39 306.96 155.59 305.18 158.94 303.68C161.66 302.46 164.46 301.43 167.25 300.62C167.39 300.59 167.47 300.57 167.53 300.54C170.77 299.61 174.06 298.94 177.38 298.53C177.54 298.53 177.65 298.52 177.76 298.49C179.544 298.291 180.92 298.24 181.741 298.21L181.75 298.21C190.1 297.96 197.98 297.73 203.74 302.43C213.92 310.71 210.92 329.3 209.79 336.29L209.36 336.24L209.79 336.31C209.32 339.25 208.62 342.18 207.71 345.02Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M541.2 335.1C567.3 392.89 555.23 409.38 545.71 414.07L545.73 414.08C543.41 415.23 540.64 415.9 537.52 415.9C528.73 415.9 517.12 410.57 504.8 395.57C504.77 395.54 504.75 395.51 504.74 395.48C492.87 379.77 484.95 369.71 482.96 367.86C482.46 367.4 481.9 366.89 481.28 366.34C476.66 362.2 469.7 355.93 465.59 345.87C465.48 345.61 465.3 345.39 465.08 345.25C464.99 345.2 464.93 345.12 464.9 345.02C463.99 342.17 463.29 339.25 462.83 336.34L462.828 336.326C461.696 329.296 458.707 310.725 468.88 302.45C474.656 297.743 482.529 297.98 490.852 298.23L490.87 298.23C491.7 298.26 493.08 298.32 494.81 298.5C494.931 298.524 495.029 298.53 495.117 298.535C495.175 298.539 495.228 298.542 495.28 298.55C498.49 298.94 501.77 299.61 505.04 300.53C505.19 300.59 505.25 300.61 505.32 300.62C508.17 301.44 510.97 302.47 513.69 303.69C517.04 305.19 520.25 306.97 523.22 308.96L523.235 308.971C523.268 308.995 523.293 309.014 523.31 309.04C523.61 309.39 523.92 309.73 524.25 310.08C524.44 310.28 524.639 310.499 524.839 310.719L524.84 310.72L524.862 310.743C527.755 313.766 532.612 318.841 541.2 335.1Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="shoulders"
                  onClick={handelclick}
                >
                  <path
                    d="M152.89 303.71C152.83 303.75 152.75 303.77 152.68 303.77H152.66C152.56 303.77 152.47 303.74 152.39 303.68C152.26 303.57 152.19 303.39 152.24 303.22C157.74 282.4 160.82 274.86 162.86 269.87L162.897 269.778C163.919 267.242 164.719 265.259 165.46 262.65C171.07 244.34 184.75 221.38 218.1 216C218.85 215.87 219.39 215.77 219.69 215.7L220.14 215.58C220.467 215.498 220.837 215.404 221.242 215.301C221.728 215.178 222.262 215.042 222.83 214.9C223.469 214.73 224.088 214.571 224.706 214.411L224.71 214.41L225.77 214.14C225.81 214.13 225.84 214.13 225.88 214.13C243.5 210.59 262.01 215.16 271.47 218.2C271.64 218.25 271.77 218.42 271.77 218.6C271.78 218.79 271.66 218.95 271.49 219.02C267.45 220.55 261.53 223.08 256.28 226.42C245.175 233.477 240.444 239.724 233.899 248.368L233.89 248.38C230.84 252.44 227.43 256.97 222.68 262.54L222.658 262.566C217.699 268.376 207.4 280.443 194.34 289.32C190.84 291.69 184.95 293.94 177.31 295.83H177.29C177.24 295.85 177.18 295.86 177.14 295.86C173.74 296.25 170.23 296.96 166.75 297.97C166.733 297.974 166.717 297.977 166.703 297.981C166.604 298.003 166.551 298.015 166.49 298.05C163.47 298.93 160.58 299.99 157.83 301.22C156.1 302.01 154.44 302.84 152.89 303.71Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M400.85 218.61C400.85 218.43 400.97 218.27 401.15 218.21L401.14 218.23C410.58 215.19 429.07 210.61 446.76 214.17C447.006 214.234 447.249 214.295 447.49 214.357C447.858 214.451 448.222 214.544 448.59 214.64L449.77 214.94L450.317 215.078C451.36 215.34 452.27 215.569 452.91 215.74C453.2 215.8 453.74 215.91 454.49 216.03C487.82 221.4 501.51 244.33 507.13 262.62C507.872 265.301 508.673 267.288 509.678 269.78L509.71 269.86C511.77 274.9 514.86 282.46 520.36 303.24C520.41 303.41 520.35 303.59 520.21 303.7C520.13 303.76 520.03 303.79 519.94 303.79C519.87 303.79 519.8 303.77 519.73 303.73C518.16 302.85 516.5 302.01 514.78 301.24C507.02 297.76 499.95 296.39 495.38 295.86C487.71 293.99 481.81 291.74 478.26 289.32C465.161 280.424 454.873 268.349 449.914 262.528L449.89 262.5C445.03 256.78 441.4 251.97 438.76 248.45L438.65 248.31C432.13 239.69 427.42 233.47 416.34 226.43C411.09 223.11 405.17 220.57 401.13 219.03C400.96 218.96 400.85 218.79 400.85 218.61Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="traps"
                  onClick={handelclick}
                >
                  <path
                    d="M395.89 217.17C395.84 217.17 395.75 217.15 395.75 217.15V217.14C384.68 213.38 379.06 209.6 379.06 199.34V178.65C379.06 178.48 379.16 178.32 379.32 178.25C379.48 178.18 379.66 178.21 379.79 178.33C382.83 181.15 388.48 186.15 392.19 188.01C395.081 189.475 402.834 192.729 409.776 195.641L410.13 195.79L412.34 196.72C412.95 196.977 413.555 197.233 414.15 197.484C417.946 199.085 421.335 200.515 422.96 201.25C425.92 202.61 430.04 205.78 433.67 208.64L433.91 208.83C434.02 208.918 434.128 209.002 434.233 209.084C434.367 209.188 434.497 209.289 434.62 209.39C434.75 209.51 434.81 209.71 434.75 209.88C434.69 210.06 434.52 210.17 434.34 210.17C433.89 210.16 433.451 210.16 433.001 210.16C415.031 210.16 399.12 215.95 396.05 217.14C396 217.17 395.94 217.17 395.89 217.17Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M276.58 217.15C273.44 215.93 256.81 209.87 238.27 210.18V210.19C238.07 210.19 237.91 210.08 237.85 209.9C237.79 209.72 237.85 209.53 237.99 209.41C238.029 209.378 238.07 209.345 238.111 209.312C238.287 209.169 238.477 209.014 238.68 208.86L238.93 208.66L238.933 208.658C241.963 206.278 246.531 202.69 249.64 201.27C251.51 200.43 255.73 198.65 260.2 196.77L262.48 195.81L262.846 195.657C269.784 192.745 277.531 189.494 280.44 188.03C283.94 186.28 289.1 181.8 292.82 178.35C292.95 178.23 293.13 178.2 293.29 178.27C293.45 178.34 293.55 178.5 293.55 178.67V199.36C293.55 209.61 287.93 213.39 276.88 217.16C276.84 217.18 276.79 217.18 276.74 217.18C276.68 217.18 276.63 217.17 276.58 217.15Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="chest"
                  onClick={handelclick}
                >
                  <path
                    d="M277.532 219.782C277.578 219.768 277.624 219.754 277.67 219.74H277.66L277.85 219.68C282.69 218.25 291.6 215.63 307.32 217.12C334.48 219.71 334.79 236.91 334.79 237.64V287.27C334.79 297.21 331.34 306.75 325.08 314.13C318.19 322.23 309.8 328.48 300.15 332.7C300.141 332.703 300.129 332.708 300.115 332.713C300.082 332.727 300.036 332.746 299.98 332.76C298.18 333.44 296.71 334.01 295.37 334.57C295.35 334.58 295.32 334.6 295.32 334.6H295.29C288.29 337.01 281.02 338.18 273.77 338.18C255.58 338.18 237.53 330.82 224.21 317.22C224.14 317.16 224.08 317.1 224.03 317.03L223.98 316.98C223.932 316.928 223.885 316.876 223.838 316.825C223.679 316.653 223.527 316.488 223.38 316.31C223.32 316.23 223.26 316.18 223.21 316.14C223.16 316.11 223.12 316.08 223.09 316.05C222.13 315.02 221.16 313.92 220.2 312.75C213.51 304.62 205.11 295.9 190.2 295.44C190 295.43 189.83 295.28 189.79 295.08C189.75 294.88 189.86 294.68 190.05 294.6C192.28 293.66 194.23 292.63 195.85 291.53C209.29 282.42 219.75 270.14 224.78 264.23C229.196 259.042 232.486 254.704 235.386 250.879L235.59 250.61L236 250.06L236.02 250.034C242.629 241.268 246.991 235.483 257.72 228.68C264.15 224.59 271.91 221.64 275.96 220.25C276 220.23 276.05 220.22 276.11 220.2L276.69 220.02C276.75 219.99 276.79 219.97 276.85 219.97C276.869 219.964 276.887 219.958 276.906 219.954C276.917 219.951 276.929 219.95 276.94 219.95C276.953 219.947 276.967 219.941 276.982 219.936C277.013 219.924 277.049 219.91 277.09 219.91C277.236 219.872 277.382 219.827 277.532 219.782Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M372.63 332.76C372.54 332.74 372.44 332.69 372.44 332.69H372.42C362.8 328.48 354.41 322.23 347.51 314.13C341.26 306.77 337.82 297.23 337.82 287.27V237.61C337.81 237.61 337.77 232.46 342.02 227.28C346.71 221.57 354.54 218.15 365.29 217.13C380.986 215.63 389.895 218.259 394.676 219.669L394.68 219.67L394.95 219.75C395.15 219.82 395.35 219.88 395.54 219.93C395.58 219.93 395.63 219.95 395.69 219.97C395.7 219.97 395.79 220 395.79 220C395.83 220.01 395.87 220.02 395.92 220.04C395.94 220.05 396.03 220.08 396.05 220.08C396.16 220.12 396.26 220.15 396.37 220.18L396.51 220.23C396.547 220.241 396.582 220.253 396.616 220.265C396.677 220.287 396.737 220.307 396.8 220.32C400.85 221.72 408.53 224.66 414.88 228.7C425.617 235.498 429.988 241.297 436.595 250.063L436.6 250.07L437.03 250.64C439.98 254.53 443.32 258.93 447.88 264.29C452.95 270.24 463.4 282.49 476.75 291.54C478.37 292.64 480.32 293.67 482.55 294.61C482.74 294.69 482.85 294.89 482.81 295.09C482.78 295.3 482.6 295.45 482.4 295.45C467.48 295.9 459.09 304.62 452.39 312.76C451.52 313.84 450.6 314.86 449.5 316.06C449.5 316.07 449.48 316.09 449.48 316.09C449.47 316.1 449.455 316.112 449.44 316.125C449.425 316.137 449.41 316.15 449.4 316.16C449.34 316.2 449.3 316.23 449.25 316.3L449.03 316.55C448.98 316.603 448.931 316.657 448.882 316.71C448.784 316.817 448.687 316.923 448.58 317.03C448.59 317.04 448.51 317.12 448.44 317.19C435.13 330.8 417.05 338.17 398.85 338.17C391.6 338.17 384.32 337 377.32 334.58H377.28C377.276 334.576 377.271 334.574 377.266 334.572C377.257 334.57 377.246 334.57 377.24 334.57C375.57 333.88 373.9 333.24 372.63 332.76Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="quads"
                  onClick={handelclick}
                >
                  <path
                    d="M458.96 792.3L458.82 793.02L458.79 793.01C455.7 808.78 452.78 823.66 445.26 827.39C442.18 828.92 438.37 828.54 433.62 826.22C431.52 825.19 429.7 825.03 428.21 825.74C425.2 827.18 424.21 831.51 422.96 837L422.956 837.018C420.807 846.414 418.372 857.06 405.71 857.28H405.44C382.64 857.28 375.34 806.56 375.27 806.05C375.26 805.98 375.25 805.92 375.23 805.87C375.2 805.81 375.2 805.76 375.2 805.7C374.55 800.89 373.79 796.12 372.95 791.53V791.38L372.91 791.22C372.88 791.05 372.85 790.88 372.8 790.71C372.43 788.68 372.02 786.51 371.48 783.85L371.42 783.55C371.35 783.23 371.28 782.88 371.22 782.54C365.63 751.25 368.5 747.76 374.79 740.12L374.795 740.114C381.265 732.274 391.032 720.439 399.45 674.95C401.737 662.572 403.351 647.89 405.06 632.351L405.09 632.08L405.118 631.827C409.996 587.785 415.522 537.892 437.54 522.52C437.67 522.43 437.83 522.42 437.97 522.48C438.11 522.54 438.21 522.67 438.23 522.82C441.22 545.99 444.31 565.51 446.09 572.56L446.19 572.92C446.314 573.364 446.463 573.935 446.634 574.597L446.7 574.85C455.6 608.45 474.81 695.9 461.05 782.05V782.07C460.31 785.48 459.62 788.95 458.96 792.3Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M267.5 632.08C269.12 646.92 270.81 662.26 273.14 674.95H273.13C281.55 720.45 291.32 732.28 297.79 740.11L297.797 740.118C304.082 747.742 306.958 751.231 301.36 782.54C301.31 782.87 301.24 783.2 301.17 783.53C301.16 783.64 301.14 783.72 301.12 783.79C300.72 785.77 300.33 787.75 299.99 789.7L299.83 790.45C299.77 790.74 299.71 791.04 299.65 791.34C299.64 791.42 299.62 791.52 299.62 791.61C298.77 796.32 298.02 801.04 297.38 805.7C297.38 805.737 297.376 805.774 297.368 805.809C297.364 805.831 297.358 805.851 297.35 805.87C297.343 805.9 297.335 805.94 297.324 805.996C297.32 806.015 297.315 806.037 297.31 806.06C297.3 806.18 295.46 819.01 290.79 831.76C284.68 848.46 276.5 857.28 267.14 857.28H266.89C254.226 857.06 251.792 846.43 249.643 837.044L249.64 837.03L249.6 836.85C248.35 831.44 247.36 827.16 244.37 825.74C242.85 825.03 241.03 825.19 238.96 826.22C234.2 828.54 230.39 828.92 227.31 827.39C219.791 823.661 216.871 808.785 213.782 793.048L213.78 793.04L213.71 792.69L213.601 792.139C212.925 788.731 212.229 785.223 211.48 781.76C197.85 695.79 217.02 608.42 225.89 574.84C226.06 574.22 226.2 573.68 226.32 573.23L226.5 572.55C228.28 565.52 231.37 546.01 234.36 522.84C234.38 522.69 234.48 522.56 234.62 522.5C234.76 522.44 234.93 522.45 235.05 522.54C257.069 537.892 262.594 587.78 267.473 631.824L267.48 631.89L267.5 632.08Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  className="body-map__muscle"
                  id="calves"
                  onClick={handelclick}
                >
                  <path
                    d="M213.13 880.79C213.65 879.35 214.06 878.18 214.36 877.22C219.58 878.81 222.24 881.96 226.36 889.29C225.671 901.305 223.421 919.666 221.458 935.675C220.998 939.426 220.554 943.049 220.15 946.43C218.66 958.9 213.28 974.49 201.61 983.81C201.488 983.915 201.362 984.013 201.237 984.104C201.147 984.169 201.058 984.231 200.97 984.29C196.03 928.87 208.12 894.82 213.13 880.79Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M446.26 889.29C450.38 881.96 453.04 878.82 458.26 877.22C458.57 878.18 458.97 879.35 459.49 880.79C464.49 894.82 476.59 928.87 471.65 984.29C471.44 984.15 471.22 983.99 471.01 983.81C459.34 974.48 453.96 958.9 452.47 946.43C452.066 943.049 451.622 939.427 451.162 935.676C449.199 919.667 446.949 901.305 446.26 889.29Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M419.322 902.906C418.618 902.747 417.894 902.558 417.19 902.32V902.3C412.25 900.74 407.39 897.7 402.91 893.4C403.53 898.32 402.73 906.81 400.35 927.92C394.241 972.272 398.539 978.278 402.688 984.077L402.69 984.08L402.759 984.178C404.278 986.317 405.847 988.527 406.95 992.28C406.99 992.4 407.02 992.53 407.07 992.65L407.819 992.047C418.013 983.845 426.766 976.803 425.38 954.81C424.524 941.224 422.33 925.11 420.55 912.034L420.546 912.01C420.104 908.758 419.687 905.695 419.322 902.906Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M269.71 893.41C265.24 897.71 260.37 900.74 255.43 902.31V902.33C254.72 902.56 253.99 902.76 253.28 902.92C252.915 905.717 252.496 908.791 252.052 912.054L252.05 912.065C250.27 925.14 248.076 941.255 247.22 954.84C245.834 976.833 254.587 983.875 264.781 992.077C265.03 992.277 265.28 992.478 265.53 992.68C265.54 992.656 265.55 992.631 265.559 992.606C265.573 992.569 265.586 992.531 265.598 992.494C265.618 992.432 265.635 992.37 265.65 992.31C266.758 988.53 268.337 986.317 269.862 984.178L269.91 984.11C274.07 978.3 278.36 972.3 272.25 927.95C269.87 906.84 269.07 898.35 269.69 893.43L269.71 893.41Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g className="body-map__model" onClick={handelclick}>
                  <path
                    d="M342.66 368.05C357.13 367.77 366.96 370.31 381.44 374.53H381.43C382.37 374.8 382.91 375.79 382.64 376.73C382.42 377.51 381.71 378.01 380.94 378.01C380.77 378.01 380.6 377.99 380.44 377.94C366.28 373.82 356.65 371.33 342.68 371.61C339.38 371.59 337.44 369.79 336.31 366.96C335.18 369.79 333.26 371.6 329.97 371.61C315.96 371.33 306.33 373.82 292.17 377.94C292 377.99 291.83 378.01 291.67 378.01C290.9 378.01 290.2 377.51 289.97 376.73C289.7 375.79 290.24 374.8 291.18 374.53C305.66 370.31 315.49 367.77 330 368.05C334.04 368.04 334.35 361.3 334.35 351.03C334.35 350.05 335.15 349.25 336.13 349.25C336.151 349.25 336.172 349.252 336.193 349.256L336.219 349.26L336.224 349.261C336.236 349.263 336.248 349.265 336.261 349.266C336.277 349.268 336.294 349.27 336.31 349.27C336.37 349.26 336.43 349.25 336.49 349.25C337.48 349.25 338.27 350.05 338.27 351.03C338.27 361.3 338.57 368.04 342.66 368.05Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M305.74 379.65L304.48 379.98H304.51C303.57 380.23 302.59 379.66 302.35 378.71C302.1 377.77 302.67 376.8 303.62 376.55L304.86 376.22C310.39 374.76 319.64 372.32 327.5 373.66C332.33 374.48 334.94 376.55 336.34 379.17C337.74 376.55 340.35 374.48 345.18 373.66C353.049 372.32 362.288 374.759 367.818 376.219L367.82 376.22L369.06 376.55C370.01 376.79 370.57 377.76 370.33 378.71C370.09 379.66 369.11 380.22 368.17 379.98L366.91 379.65C361.66 378.26 352.87 375.94 345.77 377.15C339.4 378.24 338.28 381.5 338.28 387.94C338.28 388.92 337.48 389.72 336.5 389.72C336.44 389.72 336.38 389.7 336.32 389.7C336.26 389.71 336.2 389.72 336.14 389.72C335.15 389.72 334.36 388.92 334.36 387.94C334.36 381.49 333.24 378.23 326.88 377.15C319.77 375.94 310.99 378.26 305.74 379.65Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M327.31 427.61C319.13 427.51 309.8 428.58 304.23 429.22H304.25C303.26 429.35 302.39 428.63 302.28 427.66C302.17 426.68 302.87 425.8 303.84 425.69C309.49 425.04 318.99 423.96 327.37 424.06C332.3 424.13 334.92 426.03 336.32 428.75C337.72 426.03 340.34 424.13 345.27 424.06C353.68 423.96 363.14 425.04 368.8 425.69C369.77 425.8 370.47 426.69 370.36 427.66C370.25 428.63 369.38 429.35 368.39 429.22L368.331 429.213L368.329 429.213C362.752 428.572 353.51 427.51 345.31 427.61C339.29 427.69 338.27 430.69 338.27 439.67C338.27 440.65 337.47 441.45 336.49 441.45C336.46 441.45 336.43 441.445 336.4 441.44C336.386 441.438 336.372 441.435 336.359 441.434C336.342 441.431 336.326 441.43 336.31 441.43C336.25 441.44 336.19 441.45 336.13 441.45C335.14 441.45 334.35 440.65 334.35 439.67C334.35 430.69 333.34 427.69 327.31 427.61Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M336.49 501.6H336.13C335.15 501.6 334.35 502.4 334.35 503.38V570.51C334.35 571.49 335.14 572.29 336.13 572.29H336.49C337.47 572.29 338.27 571.49 338.27 570.51V503.38C338.27 502.4 337.48 501.6 336.49 501.6Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M378.16 420.56H378.13L376.66 420.58L376.512 420.582C361.637 420.822 347.627 421.047 340.59 417.06C338.87 416.09 338.25 414.03 338.09 410.93C338.17 409.41 338.14 407.78 338.09 406.08C338.099 405.632 338.116 405.185 338.134 404.715L338.14 404.55L338.156 404.073C338.212 402.468 338.27 400.798 338.27 399.07C338.27 398.09 337.48 397.29 336.49 397.29C336.43 397.29 336.37 397.3 336.31 397.31C336.293 397.31 336.275 397.308 336.258 397.306C336.25 397.305 336.242 397.304 336.235 397.302L336.22 397.3C336.19 397.295 336.16 397.29 336.13 397.29C335.15 397.29 334.35 398.09 334.35 399.07C334.35 400.97 334.41 402.8 334.48 404.55L334.485 404.67C334.503 405.157 334.521 405.627 334.53 406.08C334.48 407.78 334.45 409.41 334.53 410.93C334.36 414.03 333.74 416.09 332.03 417.06C324.97 421.06 310.88 420.83 295.96 420.58L294.49 420.56H294.46C293.49 420.56 292.7 421.34 292.68 422.31C292.66 423.29 293.45 424.1 294.43 424.11L295.9 424.13L296.265 424.136H296.271C299.849 424.194 303.314 424.25 306.62 424.25C318.07 424.25 327.7 423.59 333.78 420.15C334.87 419.53 335.69 418.73 336.31 417.78C336.93 418.73 337.75 419.54 338.84 420.15C344.92 423.59 354.55 424.25 366 424.25C369.327 424.25 372.804 424.194 376.386 424.135L376.72 424.13L378.19 424.11C379.17 424.09 379.95 423.29 379.94 422.31C379.92 421.34 379.13 420.56 378.16 420.56Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M363.955 468.911C367.324 468.678 371.163 468.412 376.57 468.22L376.56 468.23C377.56 468.2 378.37 468.96 378.4 469.94C378.44 470.92 377.67 471.74 376.69 471.78C371.336 471.972 367.524 472.238 364.181 472.472L364.18 472.472L363.78 472.5C359.5 472.81 355.9 473.06 350.66 473.06C348.96 473.06 347.09 473.03 344.96 472.97C340.25 472.62 337.69 471.12 336.3 467.84C334.92 471.12 332.37 472.61 327.71 472.96C325.54 473.02 323.64 473.05 321.91 473.05C316.67 473.05 313.08 472.8 308.81 472.5C305.37 472.25 301.47 471.98 295.9 471.78C294.92 471.74 294.15 470.92 294.19 469.94C294.23 468.96 295.08 468.19 296.03 468.23C301.66 468.43 305.59 468.7 309.06 468.95L309.083 468.952C314.642 469.341 319.052 469.65 327.53 469.41C332.91 469.01 334.34 468.23 334.34 451.95C334.34 450.97 335.14 450.17 336.12 450.17C336.18 450.17 336.24 450.19 336.3 450.19L336.326 450.186L336.349 450.182C336.367 450.179 336.386 450.177 336.405 450.174C336.43 450.172 336.455 450.17 336.48 450.17C337.47 450.17 338.26 450.97 338.26 451.95C338.26 468.22 339.69 469 345.15 469.41C353.535 469.639 357.934 469.332 363.49 468.943L363.955 468.911Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M368.62 474.46C362.43 474.34 346.75 475.86 341.11 477.14C338.79 477.67 337.29 478.92 336.31 480.57C335.33 478.92 333.83 477.67 331.51 477.14C325.88 475.86 310.18 474.34 304 474.46C303.02 474.48 302.24 475.29 302.26 476.27C302.28 477.25 303.11 478.04 304.07 478.01C309.99 477.88 325.39 479.39 330.72 480.6C333.57 481.25 334.34 484.02 334.53 488.27C334.48 489.54 334.48 490.81 334.48 492.03V492.81C334.48 493.79 335.28 494.59 336.26 494.59H336.38C337.36 494.59 338.16 493.79 338.16 492.81V492.03C338.16 490.82 338.16 489.55 338.11 488.27C338.3 484.02 339.07 481.25 341.92 480.61C347.26 479.4 362.71 477.88 368.57 478.02C369.5 478.04 370.36 477.26 370.38 476.28C370.4 475.3 369.62 474.49 368.64 474.47L368.62 474.46Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M664.702 571.051C669.891 581.221 670.001 581.437 670.24 586.61L670.16 586.58C670.25 588.64 670.39 591.46 670.97 596.31C672.95 612.74 672.58 618.5 672.34 621.95V622.17C672.12 625.58 667.67 641.16 667.16 642.92C666.96 643.63 666.35 644.13 665.62 644.2C665.41 644.22 660.52 644.62 657.29 641.1C656.15 639.87 655.4 638.32 654.99 636.5C653.37 636.42 650.93 635.97 649.22 634.2C647.59 632.5 647.01 630.1 647.51 627.04C648.29 622.242 648.03 619.772 647.7 616.633L647.7 616.63C647.47 614.49 647.22 612.07 647.29 608.59C647.349 605.725 646.514 604.039 645.467 601.924L645.44 601.87C643.78 598.54 641.74 594.4 642.63 584.75C642.2 584.21 641.76 583.76 641.34 583.41C641.66 589.34 641.68 601.22 637.21 606.28C635.79 607.89 634.04 608.73 632 608.77C622.216 608.94 621.822 599.818 621.364 589.204L621.36 589.12C621.25 586.43 621.13 583.64 620.87 580.74C619.79 572.3 618.49 568.04 616.08 565.09C612.68 560.94 609.78 551.8 615.72 543.63C616.1 542.91 615.27 540.6 613.69 537.62C613.65 537.56 613.62 537.49 613.59 537.43C611.97 534.4 609.61 530.71 606.99 527.27C599.041 518.971 592.612 514.062 586.393 509.312L586.39 509.31L586.365 509.291C577.434 502.468 568.988 496.016 556.65 480.62C543.24 463.87 539.37 455.74 535.28 447.12L535.275 447.109C532.857 442.023 530.357 436.765 525.74 429.33C517.71 417.83 484.85 373.9 480.77 370.11C480.366 369.731 479.921 369.331 479.441 368.899C479.339 368.808 479.235 368.715 479.13 368.62L479.113 368.604C475.312 365.184 469.383 359.848 464.99 351.92C462.82 361.44 456.54 383.35 439.68 415.81C430.39 434.27 433.02 453.79 435.57 472.66L435.624 473.06C436.297 478.045 436.991 483.182 437.41 488.13C438.07 495.9 439.2 506.02 440.52 516.58C440.52 516.59 440.54 516.61 440.54 516.61V516.65C440.56 516.7 440.56 516.76 440.56 516.82C440.57 516.87 440.58 516.93 440.58 516.98V517.02C440.635 517.44 440.688 517.86 440.74 518.28C440.792 518.7 440.845 519.12 440.9 519.54C440.92 519.61 440.93 519.69 440.93 519.77C443.7 541.49 447.17 564.25 449.07 571.75C449.2 572.29 449.4 573.05 449.66 574.02C459.28 610.38 477.6 696.15 464.25 781.5C464.25 781.63 464.24 781.77 464.21 781.9C464.188 781.988 464.169 782.078 464.15 782.17C464.134 782.246 464.118 782.323 464.1 782.4C462 795.6 459.14 808.79 455.37 821.78C455.62 841.779 456.937 846.39 458.096 850.447L458.1 850.46C458.48 851.77 458.87 853.14 459.19 854.92C459.815 858.324 459.928 861.245 460.038 864.065L460.04 864.13C460.16 867.26 460.29 870.5 461.11 874.45C461.31 875.39 461.96 877.23 462.79 879.56L462.791 879.563C468.652 896.046 484.219 939.825 471.4 1012.83C470.719 1020.43 469.762 1028.44 468.836 1036.2L468.76 1036.84C466.31 1057.35 464 1076.72 466.26 1088.92C468.02 1099.42 468.76 1103.98 468.95 1109.6C470.36 1113.85 477.33 1124.93 481.53 1131.59L482.045 1132.41C483.197 1134.23 484.158 1135.76 484.76 1136.77C485.69 1138.34 486.19 1139.5 486.59 1140.43C487.45 1142.44 487.93 1143.55 492.58 1147.31C493.48 1148.04 494.42 1148.78 495.39 1149.54L495.455 1149.59C501.994 1154.75 510.115 1161.16 514.52 1170.91C516.97 1176.81 516.1 1180.15 514.94 1181.92C514.01 1183.34 512.58 1184.27 510.82 1184.64C510.6 1185.58 510.14 1186.77 509.17 1187.72C508.58 1188.3 507.6 1188.97 506.14 1189.19C505.62 1190.43 504.57 1192.27 502.65 1193.39C501.24 1194.21 499.64 1194.5 497.88 1194.23C496.79 1195.41 494.61 1197.32 491.71 1197.65C489.73 1197.89 487.79 1197.36 485.94 1196.09C484.11 1197.53 480.37 1199.93 475.66 1199.93C475.08 1199.93 474.49 1199.9 473.88 1199.82C468.26 1199.1 463.21 1194.99 458.85 1187.62C455.6 1186.47 442.47 1180.93 443.61 1166.95C443.71 1163.79 440.45 1161.77 434.17 1158.2L433.18 1157.64C425.64 1153.34 421.23 1149.53 425.22 1126.47C425.89 1121.12 425.15 1115.29 424.85 1113.34C423.17 1111.82 420.19 1107.09 421.45 1092.98C422.96 1076.06 424.38 1060.08 403.5 993.29C402.52 990 401.17 988.1 399.74 986.1C395.18 979.73 390.47 973.14 396.76 927.39C400.519 893.919 400.24 893.45 396.843 887.735L396.84 887.73L396.819 887.695C396.093 886.471 395.19 884.951 394.17 882.9C393.71 881.98 393.21 881.05 392.69 880.12L392.56 879.9C392.55 879.89 392.55 879.87 392.55 879.87C391.74 878.43 390.88 876.97 389.99 875.46L389.984 875.45C383.855 865.082 376.229 852.181 374.19 825.81C373.29 814.16 371.74 802.45 369.58 790.74C369.11 788.42 368.68 786.2 368.29 784.07C366.11 773.45 363.42 762.84 360.23 752.31C359.142 748.707 357.317 743.68 355.203 737.856L355.19 737.82C348.47 719.31 338.32 691.33 336.91 668.36C336.8 664.7 336.73 661.49 336.67 658.66L336.669 658.601C336.569 653.944 336.479 649.719 336.23 647.06C335.981 649.709 335.891 653.925 335.791 658.572L335.79 658.63C335.73 661.46 335.66 664.68 335.55 668.3C334.131 691.307 324.001 719.253 317.29 737.763L317.258 737.853C315.143 743.679 313.318 748.707 312.23 752.31C309.04 762.83 306.36 773.42 304.18 784.03C303.79 786.19 303.35 788.45 302.87 790.8C300.71 802.49 299.17 814.18 298.27 825.81C296.231 852.181 288.605 865.082 282.476 875.45L282.47 875.46C282.319 875.718 282.168 875.974 282.019 876.229C281.289 877.472 280.584 878.675 279.92 879.87C279.91 879.88 279.91 879.9 279.91 879.9L279.71 880.25C279.21 881.14 278.74 882.02 278.3 882.9C277.28 884.951 276.377 886.471 275.651 887.695L275.63 887.73C272.23 893.44 271.95 893.91 275.72 927.43C282 973.13 277.29 979.72 272.73 986.1L272.703 986.137C271.283 988.123 269.934 990.01 268.98 993.26C248.09 1060.06 249.51 1076.05 251.02 1092.97C252.28 1107.08 249.3 1111.81 247.62 1113.33C247.33 1115.29 246.59 1121.14 247.27 1126.54C251.25 1149.51 246.84 1153.32 239.3 1157.63L238.31 1158.19C232.04 1161.76 228.77 1163.78 228.88 1167.02C230.02 1180.92 216.89 1186.45 213.64 1187.6C209.28 1194.97 204.23 1199.08 198.61 1199.8C198 1199.87 197.41 1199.91 196.83 1199.91C192.11 1199.91 188.37 1197.51 186.55 1196.07C184.7 1197.33 182.75 1197.86 180.78 1197.63C177.88 1197.3 175.7 1195.39 174.61 1194.21C172.85 1194.48 171.26 1194.2 169.84 1193.37C167.92 1192.24 166.87 1190.41 166.35 1189.17C164.89 1188.95 163.92 1188.29 163.32 1187.7C162.35 1186.75 161.89 1185.57 161.67 1184.62C159.91 1184.26 158.48 1183.32 157.55 1181.9C156.4 1180.13 155.53 1176.79 157.95 1170.94C162.382 1161.13 170.521 1154.71 177.076 1149.55L177.11 1149.52C178.08 1148.76 179.02 1148.02 179.92 1147.29C184.554 1143.54 185.037 1142.43 185.901 1140.43L185.91 1140.41L185.948 1140.32C186.341 1139.41 186.829 1138.27 187.74 1136.75C188.44 1135.58 189.59 1133.75 190.97 1131.56C195.17 1124.9 202.15 1113.83 203.55 1109.58C203.74 1103.97 204.48 1099.4 206.24 1088.93C208.5 1076.7 206.19 1057.33 203.74 1036.82L203.636 1035.95C202.718 1028.25 201.774 1020.33 201.08 1012.66C188.29 939.81 203.85 896.02 209.71 879.54L209.784 879.333C210.579 877.101 211.206 875.342 211.39 874.43C212.21 870.48 212.34 867.24 212.46 864.11C212.57 861.27 212.69 858.33 213.31 854.9C213.63 853.12 214.02 851.76 214.4 850.44L214.405 850.421C215.564 846.366 216.88 841.759 217.13 821.76C213.35 808.77 210.5 795.58 208.4 782.38C208.36 782.22 208.33 782.05 208.29 781.88C208.25 781.75 208.25 781.61 208.25 781.48C194.9 696.14 213.23 610.36 222.84 574C223.09 573.03 223.29 572.27 223.43 571.73C225.33 564.23 228.8 541.48 231.57 519.76C231.57 519.67 231.58 519.59 231.6 519.5C231.71 518.66 231.82 517.82 231.92 516.99V516.95C231.92 516.9 231.94 516.84 231.94 516.79C231.95 516.74 231.95 516.68 231.97 516.62V516.58C231.98 516.56 231.98 516.55 231.98 516.54C233.3 505.98 234.43 495.86 235.09 488.1C235.53 483.02 236.24 477.74 236.93 472.63C239.48 453.76 242.11 434.24 232.81 415.76C215.96 383.31 209.68 361.41 207.51 351.89C203.11 359.84 197.17 365.18 193.37 368.59L193.161 368.777C192.648 369.238 192.162 369.675 191.73 370.08C187.65 373.87 154.79 417.8 146.71 429.38C142.144 436.744 139.644 442.002 137.226 447.088L137.22 447.1C133.13 455.72 129.26 463.86 115.85 480.6C103.51 496.01 95.06 502.46 86.11 509.29L86.1075 509.292C79.8882 514.041 73.4589 518.951 65.51 527.25C60.22 534.18 56.01 542.14 56.82 543.67C62.71 551.78 59.82 560.92 56.42 565.07C54.01 568.02 52.71 572.28 51.63 580.79C51.3884 583.534 51.2682 586.232 51.1521 588.838L51.14 589.11L51.1338 589.254C50.6766 599.842 50.2856 608.899 40.5 608.76C38.47 608.72 36.71 607.88 35.29 606.27C30.82 601.21 30.84 589.33 31.16 583.4C30.74 583.76 30.3 584.2 29.87 584.74C30.7594 594.394 28.7126 598.525 27.0631 601.854L27.06 601.86C25.99 604 25.15 605.69 25.21 608.59C25.2782 611.984 25.0327 614.369 24.8164 616.47L24.7997 616.633C24.4698 619.772 24.2102 622.242 24.99 627.04C25.49 630.1 24.91 632.51 23.28 634.2C21.57 635.97 19.14 636.42 17.51 636.5C17.11 638.32 16.35 639.86 15.22 641.1C11.99 644.62 7.08999 644.22 6.88999 644.2C6.15999 644.13 5.54999 643.62 5.34999 642.92C4.83999 641.16 0.379989 625.59 0.149989 622.17V621.95L0.149774 621.947C-0.0702519 618.506 -0.439367 612.735 1.52999 596.31C2.10903 591.55 2.245 588.746 2.34438 586.696L2.34999 586.58C2.59968 581.396 2.69974 581.201 7.93058 570.958L7.94999 570.92L8.12999 570.57C14.9657 557.668 17.9962 548.132 20.9245 538.917L20.93 538.9C23.53 530.68 26 522.93 30.92 514.02C34.5167 506.273 38.7578 495.763 43.2574 484.613L43.42 484.21C54.53 456.67 68.36 422.41 82.08 405.9C90.1787 396.162 95.9981 390.082 100.248 385.642L100.25 385.64C106.06 379.58 108.98 376.53 111.26 371.02C131.486 323.28 140.616 313.684 145.517 308.533L145.52 308.53L145.619 308.424C146.205 307.802 146.694 307.282 147.12 306.78C147.13 306.76 147.15 306.74 147.17 306.72C147.98 305.73 148.53 304.81 148.98 303.36C154.609 281.87 157.826 273.949 159.946 268.728L159.97 268.67L159.99 268.62C160.981 266.194 161.765 264.273 162.47 261.75C168.35 242.55 182.68 218.54 217.6 212.9L217.757 212.874C218.286 212.788 218.671 212.725 218.89 212.67C219.364 212.545 219.978 212.389 220.687 212.21C221.114 212.101 221.575 211.984 222.06 211.86L222.074 211.856C222.911 211.647 223.906 211.398 224.96 211.13C225.04 211.1 225.13 211.08 225.22 211.06C228.72 210.17 232.74 209.12 233.55 208.75C233.959 208.555 235.504 207.348 236.895 206.26L237.01 206.17C240.35 203.55 244.93 199.97 248.34 198.41C250.156 197.586 253.869 196.025 258.279 194.172C258.849 193.932 259.43 193.688 260.02 193.44L260.794 193.115C268.086 190.059 276.104 186.698 279.03 185.23C283.25 183.12 290.69 176.09 292.62 174.23C293.23 166.349 293.511 140.703 293.558 136.413L293.56 136.22C291.46 131.76 290.6 125.47 290.28 122.33C287.51 122.55 285.24 121.95 283.35 120.52C279.42 117.54 277.19 110.85 276.33 99.47C275.74 91.6 277.16 86.25 280.55 83.58C281.74 82.65 283.01 82.18 284.17 81.97C284.06 81.82 283.96 81.64 283.9 81.45L283.889 81.4155C283.579 80.4404 279.154 66.5074 278.05 54.75C277 43.49 280.93 23.29 288.51 17.47C288.66 16.82 288.79 15.6 287.9 14.81C286.7 13.75 286.33 12.26 286.9 10.83C287.94 8.24 291.78 6.56 296.3 6.7C296.65 6.71 296.89 6.68 297.01 6.66C297.021 6.58774 297.032 6.50003 297.043 6.41233C297.052 6.34226 297.061 6.27218 297.07 6.21L297.072 6.19697C297.172 5.36562 297.337 3.99505 298.63 3.05C300.15 1.95 302.69 1.84 307.11 2.7C309.368 2.80802 310.354 2.135 311.402 1.41949L311.46 1.38C312.74 0.490003 314.34 -0.599997 317.22 0.380003C320.83 0.290003 348.59 -0.0999975 365.88 9.96C383.09 19.99 397.69 32.86 387.33 79.46C387.12 80.42 386.17 81.02 385.22 80.81C385.37 81.28 385.52 81.63 385.64 81.89C387.21 81.71 389.78 81.79 392.07 83.59C395.46 86.26 396.88 91.6 396.29 99.48C395.43 110.86 393.2 117.54 389.27 120.53C387.38 121.97 385.11 122.56 382.34 122.34C382.02 125.47 381.16 131.77 379.06 136.23L379.062 136.423C379.109 140.713 379.39 166.359 380 174.24C381.93 176.1 389.36 183.13 393.59 185.24C396.58 186.74 404.894 190.226 412.31 193.334L412.61 193.46C413.505 193.837 414.379 194.205 415.223 194.56C419.237 196.249 422.576 197.653 424.27 198.43C427.68 199.99 432.26 203.57 435.6 206.19C437.03 207.31 438.64 208.57 439.07 208.78C439.87 209.14 443.87 210.19 447.35 211.08H447.37C447.385 211.08 447.398 211.085 447.41 211.09C447.422 211.095 447.435 211.1 447.45 211.1C447.815 211.193 448.175 211.285 448.523 211.374C449.263 211.563 449.955 211.741 450.56 211.89C451.85 212.22 452.97 212.5 453.73 212.7C453.913 212.753 454.212 212.801 454.615 212.865C454.74 212.885 454.875 212.906 455.02 212.93C489.94 218.57 504.27 242.59 510.14 261.74C510.87 264.32 511.65 266.25 512.65 268.7C514.78 273.93 517.99 281.83 523.67 303.47C524.1 304.87 524.64 305.77 525.45 306.74C525.48 306.77 525.5 306.79 525.52 306.82C525.96 307.35 526.48 307.9 527.11 308.56L527.113 308.563C532.014 313.714 541.144 323.31 561.36 371.03C563.632 376.541 566.54 379.58 572.311 385.609L572.37 385.67C576.62 390.11 582.44 396.2 590.53 405.93C604.231 422.407 618.031 456.604 629.133 484.114L629.18 484.23C633.73 495.53 638.04 506.2 641.73 514.16C646.584 522.921 649.044 530.659 651.644 538.839L651.67 538.92C654.6 548.14 657.63 557.67 664.46 570.57L664.65 570.95L664.702 571.051ZM446.725 214.594L446.59 214.56H446.57C428.68 210.99 409.79 215.88 401.26 218.63C405.32 220.18 411.29 222.73 416.55 226.07C427.76 233.19 432.51 239.48 439.09 248.2L439.406 248.617C442.358 252.515 445.701 256.93 450.21 262.23L450.213 262.233C455.184 268.064 465.462 280.122 478.51 288.97C482.01 291.35 487.87 293.58 495.47 295.45C500.19 296 507.21 297.38 514.97 300.85C516.66 301.61 518.32 302.45 519.94 303.34C514.489 282.724 511.4 275.115 509.35 270.065L509.34 270.04C508.3 267.49 507.48 265.47 506.71 262.74C501.15 244.59 487.55 221.79 454.43 216.44L454.241 216.408C453.57 216.295 453.085 216.213 452.81 216.14C452.06 215.94 450.95 215.66 449.67 215.34C448.658 215.082 447.674 214.834 446.725 214.594ZM388.31 397.66C388.36 392.04 388.24 389.56 388.15 387.75L388.13 387.76L388.128 387.714C388.049 386.038 387.991 384.807 388.1 382.23C388.13 381.6 388.16 380.99 388.2 380.39C388.24 379.35 388.31 378.37 388.44 377.43C389.19 369.78 390.8 364.57 392.04 360.59C393.54 355.79 394.36 353.14 392.87 349.77C390.46 344.34 383.07 340.35 375.76 337.34C374.25 336.81 372.75 336.24 371.27 335.59C360.57 331.62 347.06 328.82 341.25 332.87C339.24 334.27 338.26 336.46 338.26 339.55C338.26 340.53 337.46 341.33 336.48 341.33C336.45 341.33 336.42 341.325 336.39 341.32C336.36 341.315 336.33 341.31 336.3 341.31C336.24 341.32 336.18 341.33 336.12 341.33C335.13 341.33 334.34 340.53 334.34 339.55C334.34 336.46 333.36 334.27 331.35 332.87C325.54 328.82 312.02 331.62 301.31 335.59C299.84 336.23 298.35 336.8 296.85 337.33C289.53 340.34 282.14 344.33 279.73 349.77C278.24 353.13 279.06 355.78 280.56 360.59C281.8 364.56 283.41 369.76 284.16 377.38C284.29 378.33 284.36 379.34 284.4 380.39C284.44 380.99 284.47 381.59 284.5 382.22C284.609 384.801 284.551 386.023 284.473 387.694L284.47 387.75C284.38 389.56 284.26 392.04 284.31 397.66C284.41 409.01 286.65 457.95 288.73 490.59C292.07 543.03 324.09 583.05 336.13 583.05C336.19 583.05 336.25 583.07 336.31 583.07C336.37 583.06 336.43 583.05 336.49 583.05C348.53 583.05 380.55 543.03 383.89 490.59C385.97 457.97 388.21 409.03 388.31 397.66ZM324.76 313.85C330.95 306.57 334.36 297.13 334.36 287.26V237.65C334.36 236.92 334.17 220.12 307.28 217.57C291.6 216.08 282.75 218.7 278 220.11C277.67 220.21 277.37 220.3 277.08 220.38C275.83 220.78 265.88 224.04 257.96 229.07C247.301 235.833 242.949 241.598 236.37 250.314L236.35 250.34C233.31 254.38 229.85 258.96 225.11 264.53L225.099 264.542C220.015 270.507 209.541 282.796 196.1 291.91C194.49 293 192.51 294.03 190.17 295.02C205.25 295.46 213.75 304.24 220.55 312.48C221.53 313.67 222.55 314.81 223.6 315.92C223.64 315.95 223.68 315.98 223.71 316.02L224.43 316.8C242.98 335.82 270.84 342.64 295.36 334.1C296.92 333.46 298.48 332.85 300.03 332.28C309.59 328.1 317.91 321.9 324.76 313.85ZM345.16 316.16C341 311.27 338 305.49 336.31 299.26L336.3 299.25C334.61 305.48 331.61 311.26 327.45 316.15C323.53 320.76 319.14 324.79 314.34 328.22C321.29 326.92 328.72 326.7 333.39 329.95C334.62 330.81 335.58 331.86 336.31 333.09C337.04 331.86 338 330.8 339.23 329.95C343.9 326.7 351.33 326.92 358.27 328.22C353.47 324.8 349.08 320.77 345.16 316.16ZM283.1 340.65C280 341.06 276.89 341.29 273.78 341.29L273.76 341.3C262.5 341.3 251.29 338.59 241.13 333.44C246.53 338.38 251.97 343.07 257.09 347.48C266.16 355.29 274.04 362.08 278.94 367.89C278.373 365.574 277.76 363.591 277.225 361.86L277.151 361.621C275.586 356.566 274.454 352.911 276.48 348.33C277.8 345.36 280.15 342.84 283.1 340.65ZM396.12 348.32C398.16 352.91 397.02 356.57 395.44 361.64H395.43L395.365 361.85C394.83 363.581 394.217 365.564 393.65 367.88C398.55 362.06 406.43 355.27 415.5 347.46C420.62 343.05 426.06 338.36 431.46 333.42C421.31 338.58 410.1 341.28 398.83 341.28C395.72 341.28 392.61 341.06 389.51 340.64C392.45 342.83 394.8 345.35 396.12 348.32ZM372.6 332.28C374.15 332.86 375.71 333.46 377.26 334.1C401.77 342.64 429.62 335.82 448.17 316.81C448.302 316.655 448.441 316.507 448.58 316.357C448.684 316.246 448.788 316.135 448.89 316.02C448.906 316.004 448.923 315.989 448.939 315.975C448.963 315.954 448.986 315.934 449.01 315.91C450.06 314.8 451.08 313.66 452.06 312.47C458.86 304.23 467.36 295.46 482.44 295.01C480.1 294.03 478.11 292.99 476.51 291.9C463.089 282.793 452.609 270.504 447.561 264.585L447.54 264.56C442.825 259.027 439.405 254.495 436.385 250.496L436.26 250.33C429.67 241.6 425.31 235.83 414.65 229.06C406.73 224.02 396.8 220.77 395.54 220.37C395.25 220.29 394.95 220.2 394.62 220.1C389.87 218.69 381.03 216.07 365.34 217.56C338.45 220.11 338.26 236.91 338.26 237.62V287.26C338.26 297.13 341.67 306.57 347.86 313.85C354.72 321.9 363.04 328.1 372.6 332.28ZM391.98 188.43C388.26 186.56 382.68 181.64 379.49 178.67V199.35C379.49 209.29 384.79 212.96 395.89 216.73C399.32 215.4 415.82 209.43 434.37 209.74C434.196 209.607 434.016 209.467 433.827 209.32C433.689 209.214 433.547 209.104 433.4 208.99L433.133 208.782C429.95 206.303 425.727 203.012 422.78 201.67C420.78 200.76 416.14 198.81 411.22 196.75C403.67 193.59 395.12 190 391.98 188.43ZM291.01 20.06C284.88 24.11 280.51 42.86 281.59 54.43V54.44C282.38 62.86 285.02 72.71 286.41 77.49C286.51 72.32 286.57 64.95 286.25 59.42C285.8 51.64 289.75 40.06 296.13 35.88C299.23 33.86 302.63 33.69 305.98 35.38C316.52 40.71 345.63 38.38 364.75 30.67C366.86 30.03 368.89 30.39 370.76 31.65C376.86 35.77 381.11 49.44 382.15 60.81C382.87 68.66 383.6 73.68 384.23 76.9C393.32 34.09 380.49 22.62 364.07 13.05C346.86 3.02 317.29 3.95 317 3.96C316.74 3.97 316.52 3.93 316.3 3.84C314.936 3.31224 314.593 3.54799 313.484 4.31027L313.455 4.3303C312.146 5.22943 310.356 6.45924 306.79 6.26C306.71 6.26 306.63 6.25 306.55 6.23C301.57 5.25 300.75 5.91 300.72 5.94C300.676 6.01945 300.64 6.31709 300.611 6.55089C300.607 6.58194 300.604 6.61187 300.6 6.64L300.596 6.67158C300.465 7.80914 300.163 10.4185 296.17 10.26C292.28 10.1 290.3 11.68 290.19 12.19C292.74 14.38 292.32 17.65 291.68 19.24C291.54 19.58 291.31 19.86 291.01 20.06ZM291.55 118.58C292.05 118.48 292.57 118.61 292.98 118.92L292.99 118.93C293.4 119.24 293.65 119.72 293.68 120.23C293.68 120.33 294.27 129.71 296.94 135.06C297.07 135.31 297.13 135.59 297.13 135.87C297.13 135.906 297.129 135.971 297.128 136.06C297.125 136.265 297.12 136.601 297.12 137.04C300.36 141.88 311.91 156.37 336.29 160.74H336.33C360.73 156.37 372.26 141.89 375.5 137.05C375.49 136.41 375.49 136 375.49 135.87C375.49 135.59 375.56 135.31 375.68 135.06C378.35 129.71 378.94 120.32 378.94 120.23C378.97 119.72 379.22 119.24 379.63 118.93C380.03 118.61 380.56 118.49 381.06 118.59C383.74 119.12 385.61 118.85 387.11 117.71C390.14 115.42 391.98 109.37 392.74 99.22C393.35 91.01 391.53 87.72 389.89 86.41C387.91 84.8224 385.46 85.511 385.259 85.5674L385.25 85.57C384.35 85.84 383.41 85.37 383.08 84.51C381.71 82.64 380.15 77.77 378.62 61.12C377.54 49.23 373.21 37.57 368.78 34.58C367.78 33.9 366.88 33.72 365.94 34C345.85 42.11 315.87 44.34 304.39 38.54C302.18 37.42 300.12 37.52 298.09 38.85C292.96 42.2 289.42 52.55 289.8 59.21C290.302 68.1099 289.87 81.6196 289.807 83.5884C289.803 83.7367 289.8 83.8195 289.8 83.83C289.78 84.37 289.51 84.84 289.12 85.15C288.67 85.58 288 85.77 287.36 85.56C287.18 85.5 284.71 84.81 282.72 86.4C281.08 87.71 279.25 91 279.87 99.21C280.64 109.36 282.48 115.41 285.5 117.7C287.01 118.85 288.87 119.12 291.55 118.58ZM296.67 162.51V199.36H296.68C296.68 206.32 294.18 210.78 290.34 213.95C294.96 213.48 300.64 213.36 307.62 214.02C326.54 215.81 333.65 224.52 336.31 230.85C338.98 224.53 346.08 215.82 365.01 214.02C371.99 213.36 377.67 213.48 382.29 213.95C378.45 210.78 375.95 206.32 375.95 199.36V162.49C375.73 154.51 375.6 145.2 375.54 139.96C370.79 146.19 358.9 158.45 336.64 162.44C336.59 162.45 336.54 162.45 336.49 162.45C336.45 162.45 336.41 162.441 336.37 162.432C336.35 162.428 336.33 162.423 336.31 162.42C336.29 162.423 336.27 162.428 336.25 162.432C336.21 162.441 336.17 162.45 336.13 162.45C336.08 162.45 336.03 162.44 335.98 162.44C320.24 159.62 309.84 152.67 303.88 147.34C300.8 144.58 298.58 142 297.08 140.01C297.01 145.26 296.88 154.55 296.67 162.51ZM249.83 201.66C246.8 203.05 242.41 206.48 239.21 208.99L239.2 209C239.053 209.113 238.911 209.223 238.774 209.33C238.585 209.477 238.404 209.617 238.23 209.75C256.77 209.44 273.27 215.41 276.71 216.74C287.81 212.97 293.11 209.3 293.11 199.36V178.67C289.92 181.63 284.34 186.56 280.62 188.42C277.48 189.99 268.94 193.57 261.4 196.73C256.48 198.79 251.83 200.74 249.83 201.66ZM165.89 262.77C165.14 265.46 164.32 267.48 163.28 270.03H163.27C161.21 275.09 158.12 282.7 152.67 303.33C154.29 302.44 155.95 301.6 157.64 300.84C165.4 297.37 172.43 295.99 177.14 295.44C184.74 293.57 190.6 291.33 194.09 288.96C207.13 280.12 217.41 268.06 222.35 262.26C226.994 256.808 230.384 252.317 233.373 248.359L233.532 248.148C240.095 239.46 244.848 233.169 256.04 226.06C261.31 222.71 267.27 220.16 271.33 218.62C262.8 215.87 243.91 210.99 226.02 214.55L225.897 214.581C224.945 214.821 223.956 215.071 222.94 215.33C221.66 215.65 220.55 215.93 219.8 216.13C219.5 216.21 218.95 216.31 218.18 216.43C185.06 221.78 171.46 244.58 165.89 262.77ZM23.9111 600.328L23.92 600.31H23.91L23.9217 600.287C24.8985 598.323 25.9617 596.186 26.38 592.64C24.98 595.6 23.58 597.32 22.38 598.79L22.3685 598.804C20.8944 600.617 19.8281 601.928 19.1 605.03C18.44 609.6 17.74 612.45 17.22 614.53L17.2122 614.562C16.2082 618.637 15.8642 620.033 17.5 629.1C17.74 630.47 17.87 631.75 17.89 632.94C18.89 632.83 20.04 632.51 20.77 631.75C21.58 630.9 21.84 629.52 21.53 627.63C20.67 622.36 20.98 619.41 21.31 616.28C21.54 614.15 21.77 611.94 21.7 608.69C21.6202 604.93 22.7838 602.592 23.9111 600.328ZM48.15 580.45C49.33 571.15 50.84 566.4 53.72 562.87L53.73 562.86C56.33 559.69 58.69 552.23 53.97 545.74C53.02 544.33 53.25 542.15 54.1 539.7C51.82 540.33 49.58 540.64 47.43 540.64C44.46 540.64 41.68 540.04 39.26 538.84C34.66 536.55 31.07 532.02 29.1 526.27C27.2653 530.827 25.8587 535.248 24.4099 539.802L24.3352 540.036C21.4989 548.965 18.2879 559.073 11.32 572.23L11.15 572.56C7.81666 579.087 6.07999 583.827 5.93999 586.78C5.83999 588.9 5.69999 591.79 5.09999 596.77C3.15999 612.87 3.51999 618.44 3.74999 621.76V621.98C3.88999 624.13 6.49999 633.86 8.42999 640.66C9.59999 640.54 11.4 640.11 12.67 638.71C14.31 636.9 14.77 633.88 14.02 629.73C12.25 619.89 12.7 618.07 13.79 613.67C14.32 611.55 14.97 608.91 15.64 604.36C16.58 600.3 18.07 598.47 19.65 596.54C21.37 594.43 23.32 592.03 25.19 585.74C25.2199 585.65 25.2598 585.56 25.2997 585.471C28.0648 579.811 32.5491 578.641 32.8139 578.572L32.82 578.57C33.38 578.43 33.97 578.58 34.4 578.96C34.84 579.34 35.06 579.91 35 580.48C34.48 585.47 34.02 599.44 38.01 603.95C38.77 604.81 39.6 605.22 40.63 605.24H40.84C46.42 605.24 47.14 600.73 47.65 588.99C47.76 586.26 47.88 583.44 48.15 580.45ZM134.138 445.477C136.577 440.351 139.114 435.02 143.8 427.48L143.79 427.46C146 424.29 150.19 418.53 155.17 411.78C147.77 416.9 140.89 418.96 135.04 418.96C131.43 418.96 128.21 418.18 125.52 416.85C117.53 412.91 107.77 401.77 115.4 370.35C115.11 371.02 114.82 371.7 114.53 372.39C112.014 378.477 108.766 381.873 102.907 387.999L102.704 388.211C98.5029 392.601 92.7529 398.611 84.81 408.17C71.4626 424.245 57.7658 458.176 46.7511 485.463L46.72 485.54C42.15 496.88 37.83 507.59 34.1 515.63C33.1 517.45 32.21 519.22 31.39 520.95C32.54 527.7 36.12 533.31 40.82 535.65C44.92 537.69 50.44 537.54 56.07 535.27C58.32 531.07 61.35 526.93 62.79 525.05C62.83 525 62.87 524.95 62.92 524.9C71.0704 516.38 77.6285 511.374 83.9545 506.545L84 506.51C92.77 499.82 101.05 493.49 113.13 478.42C126.286 462.004 130.068 454.044 134.067 445.627L134.07 445.62L134.138 445.477ZM206.64 345.68C206.78 345.34 207.02 345.06 207.31 344.87L207.29 344.86C208.17 342.03 208.87 339.14 209.35 336.23C210.47 329.31 213.45 310.89 203.45 302.75C197.834 298.173 190.031 298.4 181.768 298.639L181.75 298.64C179.35 298.7 174.09 299.09 167.52 300.99C167.508 300.994 167.496 300.998 167.484 301.002C167.439 301.018 167.398 301.032 167.35 301.04C164.77 301.79 161.99 302.77 159.09 304.07C155.79 305.56 152.6 307.33 149.62 309.33C149.15 309.87 148.64 310.41 148.09 310.99L148.07 311.011C145.208 314.023 140.32 319.167 131.79 335.31C105.87 392.72 117.72 409.05 127.1 413.67C135.82 417.97 151.03 415.37 167.58 395.16C167.587 395.146 167.599 395.137 167.609 395.129C167.613 395.126 167.617 395.123 167.62 395.12C177.52 381.99 187.05 369.69 189.37 367.53C189.767 367.164 190.201 366.773 190.662 366.359C190.792 366.241 190.925 366.122 191.06 366L191.121 365.945C195.701 361.815 202.598 355.596 206.64 345.68ZM240.51 473.16C239.79 478.46 239.12 483.47 238.69 488.46V488.47C238.08 495.55 237.01 505.25 235.73 515.62C245.31 517.29 256.06 514.41 262.38 508.35C267.58 503.37 279.14 488.15 274.24 454.7C271.833 438.329 274.993 420.75 277.78 405.243L277.79 405.19C279.53 395.5 281.06 386.97 280.86 380.63C280.8 379.64 280.72 378.69 280.63 377.78C279.73 371.63 268.17 361.67 254.79 350.15C244.18 341.01 232.2 330.67 221.92 319.3C220.49 317.85 219.12 316.32 217.81 314.73C215.85 312.36 213.8 310 211.53 307.85C215.92 317.889 213.8 331.038 212.87 336.808L212.87 336.81C212.29 340.36 211.4 343.9 210.25 347.33C211.26 352.81 216.47 376.53 236.03 414.2C245.839 433.679 243.13 453.747 240.511 473.156L240.51 473.16ZM265.65 992.3C266.78 988.49 268.37 986.26 269.91 984.1L269.88 984.08C274.03 978.27 278.32 972.26 272.23 927.91C269.85 906.74 269.04 898.27 269.67 893.37C262.89 899.91 255.21 903.55 247.7 903.55H247.34C238.79 903.42 231.53 898.71 226.89 890.29C222.44 882.24 219.77 878.89 214.33 877.2C214.02 878.17 213.61 879.34 213.09 880.79L213.085 880.805C207.31 897.067 191.994 940.203 204.64 1012.26C205.38 1020.31 206.36 1028.52 207.31 1036.46L207.326 1036.59C209.8 1057.33 212.135 1076.91 209.78 1089.61C208.03 1100.04 207.31 1104.5 207.14 1110C207.14 1110.16 207.11 1110.31 207.07 1110.46C205.701 1115 198.689 1126.13 194.039 1133.51L194.03 1133.52L193.552 1134.28C192.404 1136.1 191.449 1137.62 190.85 1138.63C190.055 1139.96 189.636 1140.93 189.265 1141.79L189.23 1141.87C188.12 1144.45 187.3 1145.99 182.21 1150.11C181.3 1150.85 180.35 1151.6 179.37 1152.37L179.36 1152.38C172.783 1157.56 165.328 1163.42 161.27 1172.41C159.37 1177.01 160.03 1179.15 160.59 1180.01C161.26 1181.05 162.46 1181.28 163.35 1181.3C164.33 1181.32 165.11 1182.13 165.09 1183.11C165.09 1183.49 165.24 1184.63 165.88 1185.25C166.28 1185.63 166.85 1185.81 167.64 1185.77C168.55 1185.73 169.23 1186.31 169.43 1187.12C169.43 1187.14 170.04 1189.42 171.72 1190.39C172.59 1190.89 173.63 1190.97 174.88 1190.62C175.6 1190.42 176.37 1190.7 176.8 1191.31L176.812 1191.33C176.98 1191.54 178.808 1193.91 181.27 1194.19C182.68 1194.35 184.06 1193.8 185.5 1192.52C186.2 1191.89 187.28 1191.93 187.94 1192.6C187.98 1192.64 192.49 1197.1 198.24 1196.34C202.83 1195.74 207.11 1192.03 210.95 1185.31C211.18 1184.9 211.56 1184.61 212.01 1184.48C212.6 1184.32 226.45 1180.21 225.39 1167.29C225.19 1161.67 230.23 1158.8 236.61 1155.17L237.59 1154.61C243.61 1151.18 247.59 1148.9 243.82 1127.13C242.91 1119.93 244.24 1112.41 244.3 1112.09C244.41 1111.53 244.78 1111.04 245.3 1110.8C245.299 1110.8 245.303 1110.8 245.313 1110.79C245.55 1110.57 248.817 1107.55 247.55 1093.36C246.01 1076.08 244.56 1059.75 265.65 992.3ZM276.77 878.42C277.63 876.88 278.54 875.33 279.49 873.72H279.48C284.94 864.48 291.62 853.17 294.21 831.58C289.22 845.65 280.75 860.4 267.16 860.4H266.84C251.73 860.15 248.76 847.17 246.6 837.7L246.596 837.682C245.657 833.588 244.688 829.359 243.04 828.57C242.44 828.29 241.54 828.44 240.35 829.02C234.67 831.8 229.96 832.18 225.94 830.19C223.89 829.17 222.16 827.6 220.67 825.57C220.3 842.97 219.02 847.48 217.87 851.48L217.87 851.482C217.5 852.771 217.15 853.991 216.86 855.6C216.29 858.79 216.18 861.47 216.07 864.32C215.96 867.21 215.84 870.19 215.21 873.76C222 875.8 225.29 880 230.04 888.59C234.04 895.85 240.22 899.91 247.43 900.02C257.77 900.12 268.56 892.32 276.44 879.01C276.472 878.955 276.511 878.884 276.554 878.806C276.604 878.715 276.661 878.612 276.72 878.51L276.77 878.42ZM300.78 783.42C300.83 783.1 300.89 782.78 300.95 782.47L300.96 782.49C306.519 751.383 303.681 747.941 297.472 740.412L297.47 740.41L297.458 740.396C290.968 732.516 281.165 720.613 272.73 675.04C270.45 662.69 268.81 647.85 267.08 632.14L267.08 632.138C262.21 588.019 256.71 538.19 234.82 522.9C232.15 543.52 228.9 564.96 226.95 572.67L226.859 573.02C226.728 573.528 226.558 574.185 226.35 574.97C216.77 611.2 198.48 696.83 211.96 781.75C212.77 785.48 213.52 789.27 214.24 792.94L214.253 793.006C217.318 808.632 220.21 823.375 227.54 827.01C230.5 828.48 234.19 828.09 238.8 825.83C241.01 824.74 242.96 824.58 244.59 825.36C247.79 826.89 248.8 831.309 250.08 836.908L250.08 836.91L250.08 836.911C252.19 846.161 254.581 856.64 266.91 856.85H267.16C289.56 856.85 296.84 806.51 296.91 806C296.91 805.985 296.915 805.97 296.92 805.955C296.925 805.94 296.93 805.925 296.93 805.91C297.58 801.13 298.35 796.34 299.21 791.56C299.21 791.46 299.22 791.37 299.24 791.27C299.28 791.08 299.317 790.893 299.355 790.705C299.392 790.518 299.43 790.33 299.47 790.14C299.89 787.9 300.32 785.66 300.78 783.42ZM332.09 668.19C332.19 664.65 332.26 661.43 332.32 658.61H332.31L332.315 658.397C332.462 651.52 332.556 647.143 333.1 644.52C318.01 642.44 311.03 623.96 298.7 582.26C285.03 536.01 249.84 522.81 235.9 519.34C259.895 534.897 265.568 586.257 270.587 631.7L270.618 631.981C272.337 647.528 273.962 662.215 276.21 674.37C284.48 719.06 293.94 730.53 300.2 738.12C304.46 743.28 307.29 746.72 307.49 756.16C307.96 754.55 308.43 752.94 308.92 751.33C309.98 747.827 311.695 743.087 313.682 737.594L314.061 736.548C320.701 718.227 330.713 690.604 332.09 668.19ZM336.31 641.2C336.37 641.19 336.43 641.18 336.49 641.18C350.54 641.18 357 626.96 370.51 581.26C382.03 542.28 408.36 525.9 425.63 519.18C418.77 518.12 412.28 515.24 407.78 510.92C402.18 505.55 389.72 489.27 394.87 454.19C397.12 438.9 394.28 422.23 391.61 407.35C390.96 426.43 389.14 464.1 387.44 490.82C384.1 543.24 351.65 586.6 336.49 586.6C336.46 586.6 336.43 586.595 336.4 586.59C336.37 586.585 336.34 586.58 336.31 586.58C336.25 586.59 336.19 586.6 336.13 586.6C320.97 586.6 288.52 543.24 285.18 490.82C283.48 464.08 281.67 426.42 281.01 407.35C278.34 422.23 275.51 438.9 277.75 454.19C282.9 489.27 270.44 505.55 264.84 510.92C260.34 515.24 253.85 518.12 246.99 519.18C264.26 525.89 290.59 542.28 302.11 581.26C315.62 626.95 322.08 641.18 336.13 641.18C336.16 641.18 336.19 641.185 336.22 641.19C336.25 641.195 336.28 641.2 336.31 641.2ZM365.131 756.137C364.674 754.538 364.197 752.929 363.71 751.33C362.62 747.728 360.838 742.81 358.779 737.128L358.61 736.66C351.96 718.34 341.92 690.65 340.54 668.25C340.43 664.66 340.36 661.45 340.3 658.63L340.295 658.412C340.148 651.528 340.054 647.142 339.51 644.52C354.61 642.44 361.58 623.96 373.91 582.26C387.58 536.01 422.77 522.81 436.71 519.35C412.715 534.906 407.042 586.267 402.023 631.71L402.02 631.74L402.004 631.882C400.28 647.479 398.653 662.197 396.4 674.38C388.132 719.067 378.675 730.533 372.415 738.123L372.41 738.13C368.165 743.274 365.337 746.722 365.131 756.137ZM459.218 879.962C458.838 878.885 458.519 877.98 458.27 877.21L458.24 877.2C452.8 878.9 450.13 882.25 445.68 890.3C441.04 898.72 433.78 903.43 425.24 903.56H424.88C417.37 903.56 409.69 899.92 402.91 893.39C403.53 898.29 402.72 906.75 400.35 927.88C394.251 972.262 398.548 978.278 402.698 984.087L402.7 984.09L402.708 984.101C404.245 986.248 405.842 988.476 406.97 992.31C428.056 1059.73 426.601 1076.05 425.061 1093.33L425.06 1093.34C423.73 1108.22 427.38 1110.82 427.42 1110.84C427.95 1111.08 428.21 1111.5 428.31 1112.07L428.319 1112.12C428.444 1112.86 429.671 1120.14 428.8 1127.03C425.02 1148.88 428.99 1151.15 435.01 1154.59L435.99 1155.15C442.37 1158.78 447.41 1161.65 447.22 1167.19C446.15 1180.25 460.45 1184.43 460.59 1184.47C461.04 1184.6 461.42 1184.9 461.65 1185.3C465.49 1192.01 469.77 1195.72 474.36 1196.33C480.12 1197.09 484.62 1192.63 484.67 1192.58C485.33 1191.91 486.41 1191.88 487.11 1192.5C488.56 1193.78 489.92 1194.33 491.34 1194.17C493.91 1193.89 495.79 1191.32 495.81 1191.29C496.25 1190.69 497.01 1190.41 497.73 1190.61C498.98 1190.96 500.02 1190.88 500.89 1190.38C502.57 1189.41 503.18 1187.13 503.18 1187.11C503.39 1186.3 504.06 1185.75 504.97 1185.77C505.76 1185.81 506.34 1185.63 506.73 1185.25C507.38 1184.63 507.52 1183.49 507.52 1183.1C507.52 1182.13 508.29 1181.33 509.26 1181.31C510.14 1181.29 511.34 1181.05 512.02 1180.02C512.59 1179.16 513.25 1177.02 511.32 1172.37C507.28 1163.44 499.83 1157.56 493.25 1152.38C492.968 1152.16 492.686 1151.93 492.406 1151.71C491.725 1151.17 491.055 1150.64 490.41 1150.12C485.32 1146 484.5 1144.46 483.39 1141.88C483.02 1141.01 482.59 1140.01 481.77 1138.64C481.172 1137.63 480.217 1136.11 479.07 1134.29L478.59 1133.53C473.94 1126.16 466.92 1115.01 465.55 1110.47C465.5 1110.32 465.47 1110.17 465.47 1110.01C465.3 1104.51 464.58 1100.05 462.82 1089.59C460.464 1076.9 462.801 1057.32 465.276 1036.59L465.29 1036.47C466.24 1028.53 467.22 1020.32 467.94 1012.41C480.616 940.194 465.29 897.058 459.516 880.806L459.51 880.79C459.409 880.503 459.312 880.227 459.218 879.962ZM456.557 864.251C456.448 861.426 456.345 858.754 455.77 855.6C455.48 853.99 455.13 852.771 454.76 851.481L454.757 851.468C453.617 847.471 452.33 842.952 451.96 825.57C450.47 827.6 448.74 829.17 446.69 830.19C442.67 832.19 437.95 831.8 432.28 829.02C431.09 828.44 430.18 828.29 429.58 828.57C427.935 829.348 426.966 833.575 426.028 837.663L426.014 837.727C423.844 847.195 420.876 860.15 405.78 860.4H405.46C391.87 860.4 383.4 845.67 378.41 831.59C380.99 853.17 387.67 864.48 393.13 873.71L393.2 873.83C394.135 875.416 395.031 876.938 395.88 878.46L395.9 878.5C395.94 878.572 395.979 878.643 396.018 878.713C396.088 878.837 396.156 878.958 396.22 879.08C403.99 892.19 414.7 900.02 424.89 900.02H425.2C432.41 899.91 438.59 895.86 442.59 888.6C447.34 880.01 450.64 875.81 457.42 873.76C456.79 870.19 456.67 867.21 456.56 864.32L456.557 864.251ZM445.69 572.66C443.74 564.94 440.49 543.51 437.82 522.88L437.83 522.87C415.94 538.17 410.44 587.99 405.57 632.12C403.84 647.83 402.2 662.67 399.92 675.02C391.492 720.6 381.674 732.505 375.184 740.375L375.18 740.38L375.179 740.381C368.97 747.91 366.14 751.341 371.7 782.46L371.88 783.45C372.33 785.65 372.75 787.86 373.16 790.06L373.4 791.26C373.42 791.36 373.43 791.47 373.43 791.57C374.29 796.35 375.05 801.13 375.71 805.9C375.71 805.915 375.715 805.93 375.72 805.945C375.725 805.96 375.73 805.975 375.73 805.99C375.8 806.5 383.1 856.84 405.48 856.84H405.73C418.05 856.63 420.45 846.15 422.56 836.9L422.56 836.898C423.84 831.299 424.85 826.88 428.05 825.35C429.68 824.57 431.63 824.73 433.84 825.82C438.45 828.09 442.14 828.47 445.1 827C452.43 823.365 455.322 808.622 458.387 792.996L458.481 792.518C459.175 788.977 459.891 785.331 460.68 781.74C474.16 696.82 455.87 611.2 446.29 574.96C446.03 573.98 445.83 573.21 445.69 572.66ZM432.113 473.107C429.505 453.714 426.809 433.662 436.59 414.22V414.23C456.16 376.54 461.37 352.82 462.38 347.34C461.23 343.9 460.34 340.37 459.76 336.82L459.76 336.818C458.83 331.048 456.71 317.899 461.1 307.86C458.83 310.01 456.78 312.36 454.82 314.74C453.51 316.33 452.14 317.85 450.72 319.31C440.43 330.68 428.45 341.02 417.84 350.16L417.764 350.226C404.416 361.728 392.888 371.662 392 377.79C391.91 378.71 391.83 379.65 391.77 380.64C391.57 386.97 393.1 395.51 394.84 405.19C397.63 420.71 400.79 438.31 398.39 454.69C393.49 488.14 405.05 503.35 410.25 508.34C416.56 514.4 427.31 517.28 436.9 515.61C435.62 505.24 434.55 495.54 433.94 488.46C433.51 483.47 432.84 478.46 432.12 473.16L432.113 473.107ZM505.02 395.13L505.05 395.16C521.6 415.36 536.81 417.97 545.53 413.67C554.91 409.04 566.77 392.71 540.83 335.29C532.29 319.13 527.41 314 524.54 310.99C523.99 310.41 523.48 309.87 523.01 309.33C520.03 307.33 516.84 305.56 513.53 304.07C510.63 302.77 507.85 301.79 505.27 301.04C505.21 301.03 505.16 301.01 505.11 300.99C498.54 299.1 493.28 298.71 490.87 298.64L490.855 298.64C482.601 298.4 474.787 298.173 469.17 302.75C459.173 310.888 462.148 329.3 463.269 336.234L463.27 336.24C463.75 339.14 464.45 342.04 465.33 344.87C465.62 345.07 465.86 345.34 466 345.68C470.06 355.65 476.99 361.88 481.58 366C481.715 366.122 481.849 366.242 481.98 366.36C482.44 366.774 482.873 367.164 483.27 367.53C485.59 369.69 495.13 382 505.02 395.13ZM609.7 524.9C609.75 524.95 609.79 525 609.83 525.05H609.82C611.26 526.94 614.3 531.08 616.55 535.28C622.17 537.54 627.69 537.69 631.79 535.65C636.49 533.31 640.07 527.7 641.22 520.95C640.42 519.25 639.54 517.52 638.56 515.75C634.823 507.683 630.558 497.123 626.036 485.926L625.88 485.54C614.87 458.24 601.16 424.26 587.79 408.18C579.78 398.54 574.01 392.51 569.79 388.11L569.745 388.064C563.854 381.903 560.604 378.505 558.07 372.39C557.78 371.7 557.49 371.02 557.2 370.35C564.84 401.78 555.08 412.92 547.09 416.86C544.39 418.19 541.18 418.97 537.57 418.97C531.72 418.97 524.84 416.91 517.44 411.8C522.4 418.52 526.57 424.26 528.76 427.4C533.54 435.09 536.09 440.44 538.55 445.62L538.554 445.628C542.562 454.055 546.344 462.005 559.49 478.42C571.57 493.49 579.85 499.82 588.62 506.51C594.97 511.35 601.53 516.36 609.7 524.9ZM654.74 632.92C654.76 631.73 654.88 630.45 655.13 629.09H655.11C656.75 620 656.41 618.61 655.39 614.51L655.355 614.367C654.848 612.3 654.154 609.473 653.48 604.86C652.78 601.9 651.71 600.58 650.23 598.77C649.03 597.29 647.64 595.57 646.24 592.62C646.67 596.18 647.73 598.32 648.71 600.29L648.719 600.308C649.846 602.572 651.01 604.91 650.93 608.67C650.87 611.905 651.098 614.11 651.317 616.231L651.325 616.309C651.643 619.421 651.945 622.377 651.1 627.61C650.8 629.5 651.05 630.89 651.86 631.73C652.59 632.49 653.74 632.81 654.74 632.92ZM668.9 621.96V621.74L668.89 621.72C669.11 618.4 669.47 612.83 667.53 596.73C666.94 591.75 666.8 588.85 666.7 586.74C666.56 583.793 664.823 579.057 661.49 572.53L661.31 572.17C654.369 559.074 651.157 548.974 648.325 540.071L648.29 539.96C646.82 535.33 645.39 530.85 643.54 526.24C641.57 531.99 637.98 536.52 633.38 538.81C630.97 540.01 628.18 540.61 625.21 540.61C623.07 540.61 620.83 540.3 618.56 539.68C619.4 542.11 619.64 544.27 618.71 545.66C613.95 552.21 616.31 559.67 618.91 562.84C621.8 566.37 623.3 571.12 624.48 580.36C624.742 583.317 624.863 586.068 624.979 588.721L624.99 588.97C625.5 600.7 626.22 605.22 631.8 605.22H632.01C633.04 605.2 633.87 604.79 634.63 603.93C638.62 599.42 638.16 585.46 637.64 580.46C637.58 579.89 637.81 579.32 638.24 578.94C638.67 578.56 639.26 578.42 639.82 578.55C640.02 578.6 644.55 579.74 647.34 585.45C647.384 585.521 647.413 585.608 647.44 585.69L647.45 585.72C649.308 592.003 651.266 594.405 652.984 596.513L652.99 596.52L653.006 596.54C654.58 598.472 656.063 600.293 656.98 604.19C657.67 608.89 658.32 611.53 658.85 613.65C659.94 618.05 660.39 619.88 658.62 629.71C657.88 633.86 658.33 636.88 659.97 638.69C661.24 640.09 663.04 640.52 664.21 640.64C666.14 633.85 668.75 624.11 668.9 621.96Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
          )}

          {activeBTN === "female" && (
            <div className="women-pic ">
              <svg
                height="100%"
                viewBox="0 0 642 1200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="calves"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M242.329 984.197C241.343 986.901 240.471 989.289 239.836 991.615C233.335 983.818 227.925 973.449 229.45 961.38C232.436 937.637 234.832 914.397 235.493 907.904C235.493 907.904 238.797 907.305 239.854 906.935C242.109 906.151 249.5 902.011 250.108 897.994C254.936 950.191 246.963 971.449 242.321 984.206L242.329 984.197Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M206.024 952.173C206.412 960.146 195.232 971.141 188.238 977.66C182.124 919.815 190.246 889.633 194.607 874.04C195.735 874.727 199.241 877.634 200.122 881.66C200.659 884.118 201.849 897.668 207.61 901.993C208.861 902.927 205.417 939.479 206.024 952.165V952.173Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M398.676 984.197C399.662 986.901 400.535 989.289 401.169 991.615C407.67 983.818 413.08 973.449 411.555 961.38C408.569 937.637 406.701 914.943 406.041 908.451C405.961 907.658 405.301 907.05 404.499 907.059C402.323 907.076 396.94 903.042 391.161 898.108C386.333 950.306 394.042 971.458 398.684 984.214L398.676 984.197Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M439.456 954.649C439.068 962.622 447.085 974.991 454.08 981.51C463.401 931.109 451.428 892.258 447.49 872.225C445.737 875.864 440.645 872.225 438.073 893.386C437.888 894.937 440.072 941.963 439.456 954.649V954.649Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="quads"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M438.038 767.477C437.791 770.675 437.544 773.803 437.298 776.86C435.439 796.347 431.606 815.402 426.532 817.825C426.004 818.072 425.263 818.248 424.004 817.349C419.299 813.993 415.502 812.953 412.41 814.169C407.248 816.186 405.627 823.921 403.926 832.088C401.909 841.752 399.83 851.734 392.438 852.764C382.545 854.165 372.22 817.631 368.018 794.189C368.018 794.153 368 794.1 368 794.065C366.476 780.939 364.344 765.187 361.869 750.475C360.239 719.482 361.64 717.658 365.348 712.892C369.427 707.659 376.237 698.911 384.73 653.092C386.994 640.882 388.615 626.196 390.315 610.647C395.143 567.003 400.579 517.73 422.198 502.586C423.237 505.802 424.479 510.11 425.942 516.241C426.118 516.752 443.526 568.739 445.535 604.929C447.323 637.041 442.39 711.835 438.046 767.469L438.038 767.477Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M279.841 750.642C277.366 765.293 275.251 780.983 273.745 794.074C273.745 794.109 273.745 794.127 273.727 794.162C269.543 817.596 259.2 854.121 249.289 852.773C241.906 851.734 239.836 841.761 237.819 832.097C236.118 823.93 234.497 816.195 229.335 814.178C226.243 812.962 222.446 814.002 217.724 817.358C216.473 818.257 215.724 818.081 215.213 817.834C210.156 815.429 206.342 796.47 204.465 777.071C204.218 773.944 203.954 770.746 203.69 767.477C199.364 711.853 194.431 637.067 196.202 604.938C198.219 568.747 215.618 516.761 215.847 516.092C217.283 510.048 218.499 505.776 219.556 502.595C241.184 517.739 246.611 567.021 251.43 610.655C253.148 626.205 254.769 640.89 257.033 653.101C265.499 698.92 272.335 707.668 276.397 712.901C280.123 717.676 281.541 719.491 279.859 750.642H279.841Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="abdominals"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M367.921 350.522C369.172 345.87 369.903 343.051 368.626 339.65C366.714 334.611 361.138 330.303 350.531 325.687C342.064 322.013 331.22 319.238 326.163 322.56C324.128 323.916 323.124 326.216 323.124 329.643C323.124 330.612 322.331 331.396 321.37 331.396C321.194 331.396 321.036 331.378 320.877 331.308C320.718 331.36 320.542 331.396 320.366 331.396C319.397 331.396 318.613 330.603 318.613 329.643C318.613 326.216 317.609 323.916 315.556 322.56C310.517 319.238 299.672 322.013 291.206 325.687C280.59 330.303 275.005 334.611 273.111 339.65C271.824 343.06 272.564 345.87 273.798 350.522C275.049 355.208 276.749 361.657 277.119 371.868C277.207 374.431 277.154 375.647 277.084 377.312C277.013 379.1 276.908 381.567 276.943 387.135C277.031 398.376 278.925 446.812 280.669 479.091C283.444 529.985 310.587 570.553 320.375 570.553C320.551 570.553 320.727 570.589 320.886 570.642C321.044 570.571 321.203 570.553 321.379 570.553C331.167 570.553 358.31 529.985 361.067 479.091C362.82 446.821 364.723 398.385 364.794 387.135C364.846 381.567 364.741 379.109 364.67 377.312C364.6 375.647 364.547 374.431 364.635 371.868C365.005 361.657 366.705 355.208 367.939 350.522H367.921ZM322.912 558.149C322.912 559.118 322.137 559.902 321.159 559.902C321.053 559.902 320.948 559.885 320.859 559.867C320.771 559.885 320.666 559.902 320.56 559.902C319.591 559.902 318.807 559.11 318.807 558.149V491.742C318.807 490.755 319.6 489.988 320.56 489.988C320.666 489.988 320.771 489.988 320.859 490.024C320.948 489.988 321.053 489.988 321.159 489.988C322.146 489.988 322.912 490.764 322.912 491.742V558.149ZM348.372 466.634C343.456 466.528 330.524 467.991 326.04 469.18C322.912 470.026 322.912 475.593 322.93 480.492V481.267C322.93 482.236 322.137 483.02 321.177 483.02C321.088 483.02 321 483.02 320.912 482.985C320.877 483.002 320.842 482.985 320.824 482.985C320.736 483.02 320.648 483.02 320.56 483.02C319.591 483.02 318.807 482.227 318.807 481.267V480.492C318.824 475.593 318.824 470.017 315.679 469.18C311.213 467.982 298.271 466.511 293.347 466.634C292.36 466.599 291.576 465.894 291.558 464.934C291.523 463.947 292.298 463.163 293.259 463.128C298.527 463.004 311.812 464.519 316.587 465.797C318.692 466.361 320.031 467.691 320.859 469.471C321.688 467.7 323.018 466.361 325.15 465.797C329.925 464.511 343.21 463.022 348.46 463.128C349.447 463.163 350.196 463.956 350.178 464.934C350.161 465.903 349.35 466.704 348.372 466.634V466.634ZM355.279 460.449C350.592 460.661 347.324 460.925 344.425 461.172C340.805 461.471 337.748 461.718 333.325 461.718C331.889 461.718 330.303 461.7 328.515 461.63C324.278 461.26 322.049 459.683 320.895 456.168C319.732 459.683 317.521 461.26 313.345 461.63C311.503 461.7 309.882 461.718 308.411 461.718C303.98 461.718 300.941 461.471 297.346 461.172C294.448 460.925 291.162 460.661 286.475 460.449C285.506 460.414 284.757 459.586 284.81 458.626C284.845 457.657 285.673 456.908 286.634 456.961C291.391 457.155 294.712 457.436 297.628 457.666C302.315 458.053 306.006 458.37 313.142 458.124C317.397 457.754 318.639 456.926 318.639 440.857C318.639 439.888 319.432 439.103 320.392 439.103C320.569 439.103 320.745 439.139 320.903 439.192C321.062 439.121 321.221 439.103 321.397 439.103C322.366 439.103 323.15 439.896 323.15 440.857C323.15 456.934 324.401 457.754 328.735 458.141C335.765 458.37 339.466 458.071 344.144 457.666C347.077 457.436 350.398 457.155 355.156 456.961C356.125 456.908 356.944 457.666 356.979 458.626C357.015 459.586 356.257 460.414 355.297 460.449H355.279ZM291.576 416.859C291.435 415.89 292.122 415 293.074 414.877C297.848 414.225 305.848 413.159 312.992 413.265C317.415 413.335 319.705 415.37 320.877 418.216C322.04 415.37 324.322 413.335 328.744 413.265C335.898 413.141 343.87 414.234 348.645 414.877C349.614 415 350.275 415.899 350.152 416.859C350.028 417.81 349.13 418.462 348.17 418.357C343.5 417.722 335.66 416.674 328.788 416.78C324.269 416.85 323.115 419.308 323.115 428.708C323.115 429.677 322.322 430.461 321.362 430.461C321.185 430.461 321.027 430.443 320.868 430.373C320.71 430.426 320.533 430.461 320.357 430.461C319.388 430.461 318.604 429.668 318.604 428.708C318.604 419.308 317.424 416.85 312.913 416.78C306.077 416.691 298.227 417.731 293.532 418.357C292.58 418.48 291.69 417.81 291.567 416.859H291.576ZM356.53 413.309L355.279 413.326C352.293 413.379 349.359 413.45 346.513 413.45C336.884 413.45 328.33 412.798 323.115 409.318C322.128 408.666 321.414 407.829 320.868 406.842C320.322 407.829 319.6 408.666 318.622 409.318C313.406 412.798 304.87 413.45 295.223 413.45C292.395 413.45 289.444 413.379 286.475 413.326L285.224 413.309C284.237 413.291 283.489 412.48 283.506 411.52C283.524 410.551 284.317 409.785 285.277 409.802L286.546 409.82C299.038 410.067 310.843 410.296 316.692 406.393C319.062 404.816 318.904 399.768 318.727 393.936C318.675 392.218 318.622 390.403 318.622 388.527C318.622 387.558 319.415 386.774 320.375 386.774C320.551 386.774 320.727 386.809 320.886 386.862C321.044 386.791 321.203 386.774 321.379 386.774C322.348 386.774 323.132 387.567 323.132 388.527C323.132 390.403 323.079 392.218 323.027 393.936C322.85 399.768 322.692 404.807 325.062 406.411C330.911 410.296 342.716 410.067 355.209 409.82L356.46 409.802C357.446 409.767 358.23 410.56 358.248 411.52C358.266 412.489 357.49 413.291 356.53 413.309V413.309ZM292.809 366.265L293.849 365.947C298.553 364.485 306.429 362.045 313.177 363.384C317.468 364.247 319.714 366.406 320.886 369.128C322.049 366.406 324.295 364.247 328.577 363.384C335.325 362.027 343.192 364.494 347.905 365.947L348.945 366.265C349.879 366.546 350.407 367.533 350.125 368.458C349.843 369.392 348.857 369.894 347.932 369.621L346.875 369.304C342.478 367.93 335.14 365.648 329.273 366.846C324.093 367.886 323.141 371.26 323.141 377.523C323.141 378.492 322.348 379.277 321.388 379.277C321.212 379.277 321.053 379.259 320.895 379.188C320.736 379.241 320.56 379.277 320.384 379.277C319.415 379.277 318.631 378.484 318.631 377.523C318.631 371.251 317.679 367.877 312.481 366.846C306.614 365.666 299.284 367.938 294.897 369.304L293.84 369.621C292.906 369.903 291.928 369.374 291.646 368.458C291.364 367.524 291.893 366.546 292.827 366.265H292.809ZM360.503 366.511C360.257 367.234 359.569 367.692 358.847 367.692C358.653 367.692 358.459 367.674 358.266 367.604C346.39 363.542 338.329 361.084 326.612 361.366C323.573 361.349 321.855 359.472 320.886 356.503C319.917 359.472 318.199 361.349 315.195 361.366C303.425 361.084 295.364 363.542 283.462 367.604C283.286 367.674 283.092 367.692 282.898 367.692C282.158 367.692 281.498 367.234 281.233 366.511C280.916 365.577 281.409 364.6 282.343 364.282C294.589 360.08 302.932 357.587 315.212 357.851C318.622 357.834 318.622 348.892 318.622 341.007C318.622 340.038 319.415 339.254 320.375 339.254C320.551 339.254 320.727 339.289 320.886 339.342C321.044 339.272 321.203 339.254 321.379 339.254C322.348 339.254 323.132 340.047 323.132 341.007C323.132 348.892 323.132 357.834 326.577 357.851C338.84 357.569 347.148 360.08 359.411 364.282C360.327 364.6 360.812 365.586 360.503 366.511V366.511Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="obliques"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M417.942 491.46C418.154 492.094 418.383 492.693 418.612
                        493.266C418.489 493.319 418.365 493.371 418.224 493.424C418.171
                        493.442 418.101 493.46 418.048 493.477C417.044 493.777 416.013 494.076
                        414.938 494.376C414.903 494.376 414.85 494.393 414.797 494.411C411.793
                        495.045 408.261 495.292 404.217 495.098C377.902 493.812 375.198
                        469.603 374.687 444.909C374.176 420.383 372.229 402.376 370.802
                        389.232C368.097 364.194 367.075 354.83 378.845 343.342C393.073 329.466
                        400.208 322.101 404.111 317.221C404.182 317.133 404.252 317.062
                        404.305 316.992C404.323 316.974 404.34 316.974 404.34 316.957C407.027
                        313.952 409.309 310.42 411.758 306.64C414.304 302.685 416.92 298.632
                        420.383 294.571C420.066 296.113 419.907 297.787 419.907 299.61C419.907
                        301.892 420.154 304.403 420.665 307.151C419.942 309.363 416.762
                        319.397 416.075 322.436L415.617 324.436C410.666 346.998 407.08 360.979
                        404.966 365.983C402.138 372.713 399.292 386.941 397.777
                        394.588C397.354 396.623 397.002 398.403 396.878 398.825C396.191
                        401.248 394.843 420.083 396.702 430.012C397.671 435.192 401.794
                        446.266 406.578 459.084C410.903 470.678 415.379 482.659 417.925
                        491.46H417.942Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M270.926 389.223C269.49 402.367 267.534 420.374 267.023 444.9C266.53 469.603 263.825 493.812 237.511 495.089C233.414 495.283 229.811 495.036 226.763 494.349C226.71 494.332 226.657 494.332 226.604 494.314C225.6 494.032 224.64 493.75 223.688 493.468C223.653 493.451 223.635 493.451 223.618 493.451C223.441 493.398 223.283 493.327 223.124 493.257C223.371 492.658 223.6 492.041 223.829 491.38C226.34 482.65 230.824 470.669 235.141 459.075C239.916 446.248 244.047 435.183 245.016 430.003C246.875 420.074 245.527 401.248 244.823 398.817C244.699 398.394 244.347 396.623 243.942 394.579C242.409 386.941 239.581 372.705 236.735 365.974C234.63 360.97 231.062 346.98 226.093 324.427L225.653 322.427C224.965 319.388 221.768 309.354 221.063 307.143C221.961 302.244 222.049 298.024 221.309 294.527C224.772 298.606 227.406 302.658 229.969 306.632C232.41 310.411 234.674 313.944 237.37 316.948C237.387 316.965 237.405 316.983 237.422 317.001C237.475 317.071 237.528 317.142 237.599 317.212C241.501 322.075 248.628 329.458 262.883 343.333C274.652 354.821 273.63 364.186 270.926 389.223V389.223Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="forearms"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M596.049 475.03C596.207 479.32 595.591 485.258 591.688 489.257C587.926 493.142 582.2 493.371 577.689 492.737H577.672C574.967 490.35 571.699 487.627 567.778 484.482C566.404 483.372 564.951 482.218 563.4 481.003C551.842 471.832 536.028 459.269 511.097 432.355C507.405 428.382 505.969 426.717 504.296 424.761C503.309 423.598 502.243 422.356 500.569 420.471C496.842 416.269 494.896 413.458 493.125 410.542C492.367 409.309 491.61 407.644 490.72 405.715C489.293 402.605 487.522 398.737 484.8 394.473C484.218 393.557 483.425 392.262 482.447 390.659C482.412 390.588 482.359 390.518 482.306 390.447C488.685 395.081 495.433 398.138 501.036 398.138C503.776 398.138 506.269 397.398 508.313 395.751C513.035 391.919 518.418 382.378 509.978 359.402C521.765 375.656 530.866 383.593 538.962 390.676C547.269 397.953 554.441 404.226 563.153 417.608C576.905 438.742 589.609 462.159 596.146 474.351C596.075 474.563 596.04 474.792 596.04 475.021L596.049 475.03Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M159.421 390.456C159.368 390.527 159.315 390.597 159.28 390.668C158.293 392.262 157.492 393.566 156.928 394.482C154.206 398.755 152.426 402.614 150.99 405.723C150.109 407.653 149.334 409.327 148.603 410.551C146.814 413.467 144.858 416.277 141.158 420.48C139.493 422.339 138.419 423.607 137.432 424.77C135.767 426.699 134.322 428.391 130.631 432.364C105.699 459.278 89.8769 471.84 78.3098 481.011C76.7769 482.227 75.3233 483.381 73.9313 484.491C70.011 487.654 66.7426 490.376 64.038 492.746C59.5274 493.38 53.7923 493.151 50.0217 489.266C46.1366 485.258 45.5111 479.32 45.6609 475.038C45.6609 474.809 45.6257 474.58 45.5552 474.386C52.092 462.194 64.8133 438.76 78.5652 417.625C87.2781 404.235 94.4492 397.962 102.757 390.694C110.853 383.611 119.936 375.673 131.741 359.437C123.31 382.413 128.684 391.936 133.406 395.768C135.441 397.416 137.916 398.156 140.683 398.156C146.286 398.156 153.034 395.099 159.412 390.465L159.421 390.456Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="biceps"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M506.102 393.02C500.481 397.601 487.337 391.945 476.043 380.369C468.96 369.251 458.776 354.142 446.935 340.276C429.721 320.128 424.708 308.164 424.171 306.79C424.171 306.755 424.153 306.737 424.153 306.72V306.702L424.136 306.649C422.638 298.553 423.501 292.739 426.629 289.382C429.933 285.849 435.395 285.55 439.597 285.99C439.614 286.008 439.65 286.008 439.667 286.008H439.72C441.385 286.308 442.989 286.748 444.477 287.171C444.918 287.294 445.358 287.418 445.781 287.523C445.817 287.541 445.852 287.541 445.869 287.541C446.451 287.752 447.05 287.999 447.693 288.263C456.388 291.99 471.338 301.689 489.204 327.141C489.24 327.193 489.275 327.229 489.31 327.264C490.667 329.246 491.962 331.255 493.213 333.29C494.341 335.307 495.583 337.474 497.045 339.897C497.292 340.32 497.503 340.725 497.732 341.148C517.563 378.043 510.189 389.725 506.11 393.029L506.102 393.02Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M217.609 306.658C217.609 306.658 217.609 306.676 217.592 306.711V306.728C217.592 306.728 217.574 306.764 217.574 306.799C217.01 308.173 212.024 320.137 194.81 340.285C182.952 354.142 172.759 369.251 165.702 380.378C154.408 391.954 141.264 397.592 135.644 393.029C131.547 389.725 124.191 378.043 144.022 341.148C144.251 340.725 144.462 340.32 144.709 339.897C146.109 337.58 147.29 335.501 148.382 333.554C149.669 331.431 151.017 329.317 152.444 327.264C152.479 327.229 152.514 327.193 152.532 327.141C171.737 299.804 187.577 290.633 195.876 287.558C195.893 287.558 195.929 287.541 195.964 287.523C196.387 287.418 196.827 287.294 197.285 287.171C198.818 286.748 200.448 286.29 202.148 285.99H202.219C206.421 285.55 211.848 285.885 215.134 289.382C218.261 292.739 219.107 298.553 217.627 306.649L217.609 306.658Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="shoulders"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M478.324 307.724C466.396 294.456 456.362 288.149 449.446 285.18L449.428 285.162H449.411C422.955 255.949 402.869 236.585 392.015 226.586C391.187 225.811 390.43 225.106 389.716 224.463C389.787 224.41 389.91 224.357 390.068 224.34C408.41 221.811 415.3 220.966 417.846 220.666C417.916 220.666 418.004 220.649 418.092 220.649C418.216 220.631 418.357 220.631 418.497 220.613C418.568 220.596 418.621 220.596 418.691 220.596C418.762 220.596 418.815 220.578 418.885 220.578H418.956C419.061 220.56 419.149 220.56 419.237 220.543C427.034 220.067 437.773 221.107 446.662 231.855C457.34 245.175 463.075 264.9 467.691 280.731C469.356 286.475 470.924 291.902 472.519 296.174C474.289 300.949 476.21 304.341 478.333 307.715L478.324 307.724Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M252.029 224.472C251.307 225.124 250.558 225.829 249.73 226.595C238.911 236.559 218.807 255.896 192.317 285.171C185.392 288.14 175.384 294.448 163.421 307.715C165.544 304.359 167.464 300.949 169.235 296.192C170.812 291.919 172.398 286.492 174.063 280.749C178.67 264.917 184.414 245.192 195.074 231.907C203.981 221.142 214.711 220.085 222.499 220.56C222.64 220.578 222.798 220.578 222.939 220.596C223.027 220.596 223.115 220.613 223.186 220.613C223.362 220.631 223.521 220.631 223.679 220.666C223.767 220.666 223.838 220.684 223.926 220.684C226.49 220.983 233.414 221.829 251.668 224.357C251.844 224.375 251.967 224.446 252.038 224.481L252.029 224.472Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="chest"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M318.807 240.329V290.316C318.807 297.293 314.974 303.513 307.425 308.781C290.122 320.85 258.178 324.348 249.183 321.027C245.527 319.688 242.735 317.582 240.259 314.895C240.224 314.86 240.206 314.825 240.171 314.789L240.118 314.737C240.065 314.666 239.977 314.578 239.942 314.543C237.484 311.785 235.334 308.464 232.929 304.737C229.943 300.112 226.569 294.862 221.829 289.805C214.552 282.026 207.39 281.55 201.611 282.528H201.54C201.399 282.528 201.276 282.546 201.135 282.563C200.589 282.634 199.919 282.74 199.118 282.916C223.362 256.425 241.774 238.7 252.002 229.282C252.02 229.264 252.038 229.247 252.055 229.247C257.394 224.727 260.892 222.322 273.93 221.882H274.071C274.459 221.864 274.846 221.847 275.234 221.847C276.291 221.829 277.427 221.811 278.625 221.811C278.996 221.811 279.348 221.794 279.683 221.741H279.771C300.623 221.653 310.129 226.375 314.472 230.542C317.371 233.317 318.833 236.603 318.833 240.329H318.807Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M442.628 282.916C441.799 282.74 441.13 282.634 440.592 282.563C440.469 282.546 440.346 282.528 440.223 282.528H440.117C434.338 281.524 427.166 282 419.898 289.805C415.176 294.862 411.802 300.121 408.816 304.737C406.428 308.446 404.279 311.785 401.803 314.525C401.768 314.578 401.68 314.666 401.627 314.737L401.574 314.789C399.099 317.529 396.288 319.652 392.562 321.027C383.567 324.348 351.605 320.85 334.321 308.781C326.771 303.513 322.921 297.293 322.921 290.316V240.329C322.921 236.603 324.392 233.317 327.282 230.542C331.625 226.375 341.139 221.653 361.966 221.741C362.336 221.794 362.723 221.811 363.129 221.811C364.327 221.811 365.463 221.829 366.52 221.847C366.873 221.847 367.225 221.864 367.577 221.882H367.842C380.863 222.322 384.36 224.727 389.716 229.247C389.734 229.247 389.752 229.264 389.769 229.282C399.98 238.7 418.41 256.425 442.654 282.916H442.628Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g
                  id="traps"
                  className="body-map__muscle"
                  onClick={handelclick}
                >
                  <path
                    d="M402.094 219.16C398.561 219.635 394.421 220.199 389.584 220.86C388.351 221.036 387.285 221.688 386.668 222.613C382.36 219.997 377.409 218.675 367.868 218.358H367.657C365.939 218.288 364.265 218.235 362.635 218.235H362.618C360.618 217.829 358.873 214.244 357.878 192.343C359.376 194.818 361.093 197.241 362.459 199.232C363.076 200.113 363.587 200.844 363.939 201.373C365.727 204.13 389.417 214.535 402.094 219.151V219.16Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M283.858 192.352C282.854 214.191 281.136 217.812 279.136 218.243H279.101C277.797 218.243 276.485 218.279 275.128 218.332C274.723 218.332 274.317 218.349 273.912 218.367H273.859C264.318 218.666 259.35 219.997 255.059 222.622C254.443 221.688 253.377 221.045 252.143 220.869C247.333 220.199 243.184 219.635 239.651 219.169C252.32 214.552 276 204.148 277.788 201.39C278.141 200.862 278.652 200.122 279.26 199.25C280.652 197.268 282.334 194.836 283.85 192.361L283.858 192.352Z"
                    fill="currentColor"
                  ></path>
                </g>
                <g id="body" className="body-map__model" onClick={handelclick}>
                  <path
                    d="M359.402 364.397C347.148 360.204 338.814 357.666 326.568 357.966C323.123 357.948 323.123 349.015 323.123 341.122C323.123 340.153 322.339 339.368 321.37 339.368C321.194 339.368 321.027 339.404 320.868 339.448C320.71 339.404 320.542 339.368 320.366 339.368C319.397 339.368 318.613 340.153 318.613 341.122C318.613 349.006 318.613 357.948 315.212 357.966C302.923 357.666 294.589 360.204 282.326 364.397C281.409 364.714 280.916 365.71 281.233 366.626C281.48 367.357 282.167 367.815 282.898 367.815C283.083 367.815 283.277 367.78 283.471 367.718C295.355 363.657 303.425 361.19 315.186 361.472C318.208 361.463 319.917 359.587 320.877 356.609C321.846 359.587 323.564 361.463 326.612 361.472C338.32 361.225 346.39 363.648 358.274 367.718C358.459 367.78 358.653 367.815 358.847 367.815C359.578 367.815 360.256 367.357 360.512 366.626C360.829 365.71 360.336 364.705 359.42 364.397H359.402Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M293.822 369.744L294.871 369.418C299.258 368.062 306.596 365.78 312.464 366.961C317.653 368 318.604 371.374 318.604 377.638C318.604 378.607 319.388 379.391 320.357 379.391C320.533 379.391 320.701 379.356 320.859 379.312C321.018 379.356 321.185 379.391 321.361 379.391C322.331 379.391 323.115 378.607 323.115 377.638C323.115 371.365 324.066 367.991 329.255 366.961C335.131 365.78 342.461 368.062 346.848 369.418L347.896 369.744C348.821 370.026 349.808 369.507 350.09 368.573C350.372 367.648 349.852 366.661 348.918 366.379L347.888 366.062C343.183 364.6 335.307 362.159 328.559 363.516C324.269 364.379 322.022 366.547 320.851 369.26C319.679 366.547 317.432 364.371 313.142 363.516C306.394 362.168 298.518 364.608 293.813 366.062L292.783 366.379C291.858 366.661 291.329 367.639 291.611 368.573C291.893 369.498 292.88 370.026 293.805 369.744H293.822Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M293.54 418.48C298.218 417.846 306.032 416.788 312.922 416.894C317.441 416.965 318.604 419.423 318.604 428.831C318.604 429.8 319.388 430.584 320.357 430.584C320.533 430.584 320.701 430.549 320.859 430.505C321.018 430.549 321.185 430.584 321.361 430.584C322.33 430.584 323.114 429.8 323.114 428.831C323.114 419.423 324.286 416.965 328.797 416.894C335.668 416.78 343.5 417.846 348.178 418.48C349.13 418.612 350.028 417.934 350.152 416.973C350.284 416.013 349.605 415.123 348.645 415C343.87 414.348 335.862 413.282 328.735 413.379C324.304 413.45 322.031 415.476 320.85 418.321C319.67 415.476 317.397 413.45 312.966 413.379C305.83 413.273 297.831 414.348 293.056 415C292.095 415.132 291.417 416.013 291.549 416.973C291.681 417.934 292.571 418.603 293.523 418.48H293.54Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M356.451 409.917L355.217 409.943C342.707 410.181 330.894 410.41 325.053 406.525C322.674 404.939 322.833 399.9 323.009 394.059C323.062 392.333 323.115 390.527 323.115 388.65C323.115 387.681 322.33 386.897 321.361 386.897C321.185 386.897 321.018 386.932 320.859 386.976C320.701 386.932 320.533 386.897 320.357 386.897C319.388 386.897 318.604 387.681 318.604 388.65C318.604 390.527 318.657 392.333 318.71 394.059C318.886 399.9 319.036 404.939 316.666 406.525C310.816 410.41 299.011 410.181 286.501 409.943L285.268 409.917C284.343 409.917 283.497 410.674 283.48 411.644C283.462 412.613 284.228 413.414 285.206 413.432L286.44 413.458C289.426 413.52 292.369 413.573 295.214 413.573C304.852 413.573 313.397 412.921 318.622 409.45C319.599 408.798 320.331 407.961 320.868 406.974C321.405 407.97 322.137 408.798 323.115 409.459C328.33 412.93 336.875 413.582 346.522 413.582C349.368 413.582 352.319 413.529 355.296 413.467L356.53 413.441C357.499 413.423 358.274 412.621 358.257 411.652C358.239 410.683 357.455 409.908 356.468 409.926L356.451 409.917Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M355.129 457.067C350.372 457.269 347.051 457.542 344.126 457.78C339.439 458.168 335.739 458.467 328.709 458.238C324.365 457.859 323.123 457.031 323.123 440.962C323.123 439.993 322.339 439.209 321.37 439.209C321.194 439.209 321.027 439.244 320.868 439.289C320.709 439.244 320.542 439.209 320.366 439.209C319.397 439.209 318.613 439.993 318.613 440.962C318.613 457.04 317.362 457.859 313.115 458.238C305.988 458.476 302.288 458.168 297.61 457.78C294.686 457.533 291.364 457.26 286.598 457.067C285.603 457.031 284.81 457.78 284.766 458.749C284.722 459.718 285.479 460.538 286.448 460.582C291.135 460.775 294.421 461.049 297.311 461.286C300.914 461.586 303.945 461.833 308.376 461.833C309.847 461.833 311.468 461.806 313.318 461.745C317.494 461.383 319.705 459.789 320.859 456.3C322.031 459.798 324.26 461.383 328.488 461.753C330.286 461.815 331.871 461.841 333.307 461.841C337.739 461.841 340.778 461.586 344.399 461.286C347.297 461.049 350.574 460.775 355.261 460.582C356.23 460.538 356.988 459.718 356.944 458.749C356.9 457.78 356.089 457.031 355.111 457.067H355.129Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M321.168 490.094C321.062 490.094 320.965 490.112 320.868 490.121C320.771 490.103 320.674 490.094 320.569 490.094C319.599 490.094 318.815 490.878 318.815 491.847V558.264C318.815 559.233 319.599 560.017 320.569 560.017C320.674 560.017 320.771 559.999 320.868 559.991C320.965 560.008 321.062 560.017 321.168 560.017C322.137 560.017 322.921 559.233 322.921 558.264V491.847C322.921 490.878 322.137 490.094 321.168 490.094Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M348.46 463.242C343.236 463.101 329.916 464.634 325.141 465.912C323.035 466.475 321.705 467.814 320.859 469.568C320.013 467.814 318.683 466.475 316.578 465.912C311.794 464.634 298.5 463.119 293.258 463.242C292.289 463.269 291.523 464.07 291.549 465.039C291.576 466.008 292.377 466.766 293.346 466.748C298.289 466.643 311.204 468.105 315.679 469.294C318.824 470.131 318.815 475.699 318.807 480.606V481.381C318.807 482.35 319.591 483.135 320.56 483.135C320.665 483.135 320.762 483.117 320.859 483.108C320.956 483.126 321.062 483.135 321.159 483.135C322.128 483.135 322.912 482.35 322.912 481.381V480.606C322.903 475.699 322.894 470.14 326.039 469.303C330.515 468.114 343.43 466.643 348.372 466.757C349.359 466.828 350.152 466.017 350.169 465.048C350.196 464.079 349.429 463.269 348.46 463.251V463.242Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M641.472 573.981C639.992 564.581 638.106 551.604 638.089 551.48C638.08 551.392 638.054 551.313 638.036 551.225C632.274 532.134 618.699 507.934 616.012 503.247C615.571 502.472 614.972 500.904 614.338 499.248C613.351 496.657 612.118 493.433 610.62 490.914C608.33 487.055 604.242 481.76 603.599 480.941C603.114 480.095 602.172 478.333 600.841 475.831C594.956 464.801 581.169 438.98 566.096 415.819C557.11 402.023 549.419 395.293 541.27 388.174C532.539 380.536 522.637 371.885 509.361 352.601C505.441 346.91 502.525 342.355 500.173 338.47C498.948 336.223 497.662 333.986 496.296 331.766C495.142 329.687 494.111 327.748 493.09 325.828C491.839 323.476 490.614 321.176 489.204 318.683C486.94 314.675 484.949 311.635 483.196 308.957C480.263 304.464 477.937 300.923 475.761 295.073C474.219 290.924 472.66 285.567 471.004 279.885C466.308 263.746 460.467 243.66 449.332 229.775C436.989 214.852 421.748 216.711 413.564 217.706C411.899 217.909 410.454 218.094 409.679 218.014C408.842 217.944 407.001 217.389 404.552 216.517C404.516 216.261 404.437 216.006 404.287 215.777C401.592 211.61 396.641 182.423 393.672 164.98C392.429 157.659 391.355 151.334 390.632 147.722C389.276 140.991 389.152 122.693 389.029 103.329C388.906 85.0227 388.773 66.0994 387.672 52.7967C386.034 33.107 370.837 16.2275 342.505 2.64294C332.7 -2.06146 325.114 1.19814 322.56 2.61651C318.181 0.660749 299.584 -5.89369 280.898 13.7344C263.059 32.4815 260.865 49.8455 258.927 65.1744C258.566 68.0023 258.231 70.6717 257.808 73.3587C257.306 76.5478 256.742 79.7457 256.178 82.9789C253.553 97.9907 250.84 113.505 253.068 130.331C255.958 152.232 256.742 199.426 249.342 210.799C249.139 211.116 249.051 211.469 249.06 211.812C241.096 215.134 233.907 217.838 231.969 218.006C231.194 218.076 229.749 217.9 228.084 217.697C219.9 216.702 204.668 214.843 192.308 229.784C181.181 243.651 175.34 263.737 170.653 279.876C169.006 285.559 167.447 290.915 165.896 295.064C163.72 300.905 161.403 304.456 158.461 308.948C156.708 311.627 154.725 314.666 152.452 318.674C151.043 321.168 149.818 323.467 148.567 325.819C147.545 327.731 146.515 329.678 145.361 331.757C143.995 333.977 142.709 336.215 141.484 338.47C139.141 342.355 136.225 346.901 132.313 352.583C119.037 371.868 109.135 380.519 100.405 388.157C92.2555 395.275 84.5646 402.006 75.5787 415.802C60.5141 438.945 46.7268 464.766 40.8419 475.796C39.5117 478.298 38.5602 480.069 38.0757 480.914C37.4414 481.734 33.3449 487.028 31.0543 490.887C29.5567 493.407 28.3321 496.631 27.3366 499.221C26.7023 500.877 26.1033 502.445 25.6451 503.256C22.9846 507.916 9.40881 532.108 3.64725 551.199C3.62082 551.287 3.6032 551.366 3.59439 551.454C3.57677 551.586 1.69149 564.554 0.202644 573.989C0.123357 574.535 -1.59454 587.38 5.28586 598.049C5.55015 598.604 6.90685 601.467 7.47948 603.246C8.08735 605.132 10.695 606.048 13.1706 605.255C15.4787 604.515 17.4697 602.339 17.3552 598.375C18.9145 597.969 20.1038 597.141 20.9143 595.89C23.5572 591.811 20.7998 584.57 18.9762 579.777C18.5093 578.544 17.919 577.002 17.8838 576.623C17.8838 574.465 19.8924 568.783 20.65 566.642L20.7734 566.298C21.4605 564.351 24.1739 558.581 24.7906 557.277C26.209 555.85 27.7683 554.414 29.4069 553.154C30.0764 552.582 30.9046 552.018 31.6798 551.533C31.7327 553.33 31.7855 555.489 31.7679 556.493C31.7679 556.81 31.486 557.903 31.2569 558.792C30.376 562.255 28.8959 568.052 30.4729 572.818C31.5653 576.112 33.6268 577.46 35.1597 578.007C38.1462 579.072 41.4058 578.051 43.4672 576.747C47.1233 574.43 47.3699 569.655 48.0042 556.942C48.6826 554.123 50.0833 551.903 51.5722 549.56C53.0434 547.243 54.5587 544.847 55.2723 541.878C55.8097 539.631 56.0475 538.142 56.2502 536.821C56.5673 534.786 56.814 533.183 58.0562 529.5C59.545 525.086 58.4526 519.202 57.4835 514.004C56.9637 511.211 56.4704 508.568 56.444 506.542C56.9021 504.375 61.0427 500.208 65.5797 496.155C65.6149 496.155 65.6501 496.146 65.6854 496.138C66.4518 496.05 67.0685 495.468 67.2095 494.719C70.6276 491.75 74.0546 488.984 76.1249 487.319C77.4992 486.209 78.944 485.064 80.4769 483.848C92.1234 474.607 108.069 461.956 133.186 434.848C136.912 430.822 138.374 429.122 140.066 427.149C141.044 426.003 142.11 424.761 143.757 422.902C147.88 418.242 149.95 415.141 151.571 412.472C152.426 411.062 153.236 409.309 154.162 407.283C155.545 404.27 157.263 400.526 159.853 396.456C160.443 395.539 161.245 394.227 162.249 392.588C163.87 389.945 165.958 386.553 168.433 382.651C169.05 382.016 169.649 381.382 170.239 380.73C170.627 380.299 170.759 379.726 170.653 379.197C177.525 368.573 186.81 355.085 197.444 342.655C209.998 327.978 216.164 317.617 218.931 312.226C220.138 316.058 221.759 321.344 222.208 323.308L222.648 325.282C224.516 333.766 230.189 359.587 233.493 367.427C236.198 373.841 239.087 388.368 240.479 395.354C241.008 398.024 241.272 399.328 241.431 399.874C241.924 401.618 243.307 420.03 241.545 429.448C240.629 434.329 236.356 445.799 231.828 457.939C227.485 469.594 222.983 481.646 220.455 490.411C220.102 491.433 219.715 492.385 219.283 493.424V493.442C219.248 493.495 219.23 493.556 219.204 493.609C219.16 493.715 219.124 493.812 219.08 493.909C218.587 495.089 218.032 496.42 217.407 498.093C217.063 498.243 216.755 498.49 216.561 498.842C216.253 499.38 216.27 500.014 216.543 500.525C215.398 503.881 214.05 508.445 212.438 515.202C212.262 515.731 194.713 568.14 192.669 604.806C190.872 637.102 195.823 712.047 200.157 767.751V767.768C200.298 769.944 200.527 773.089 200.871 776.78C202.016 791.193 203.082 803.959 203.937 813.852C204.465 822.477 201.884 833.674 200.351 840.36C199.946 842.122 199.602 843.594 199.408 844.66C198.184 851.135 196.202 857.346 194.105 863.926C193.435 866.041 192.739 868.217 192.035 870.498C191.982 870.622 191.938 870.754 191.92 870.886C184.555 894.989 176.838 930.246 188.96 1013.48C189.083 1014.25 200.853 1090.46 192.299 1111.47C184.811 1129.86 176.899 1141.12 173.525 1145.93C172.953 1146.75 172.512 1147.37 172.248 1147.79C171.402 1149.12 167.491 1153.85 164.028 1158.03C160.364 1162.46 156.901 1166.65 155.862 1168.21L155.342 1168.96C153.078 1172.25 147.827 1179.88 153.466 1186.05C154.355 1188.22 156.822 1191.43 161.112 1191.24C161.333 1191.6 161.623 1191.97 162.02 1192.34C163.421 1193.61 165.588 1194.23 168.46 1194.21C169.737 1195.69 172.917 1198.15 179.067 1196.36C180.846 1197.67 185.357 1200.48 190.678 1199.87C194.677 1199.4 198.219 1197.13 201.214 1193.12C203.531 1192.7 210.324 1191.03 214.658 1185.48C217.706 1181.58 218.878 1176.63 218.147 1170.76C218.217 1170.37 219.389 1169.78 220.428 1169.26C223.75 1167.6 228.771 1165.09 229.775 1156.46C229.872 1153.97 229.414 1151.51 228.956 1149.13C228.366 1146.02 227.758 1142.81 228.339 1139.27C229.441 1132.55 229.67 1125.5 229.555 1122.4C229.555 1122.26 229.564 1122.2 229.996 1121.66C231.819 1119.36 233.317 1116.2 230.031 1105.31C227.185 1095.9 231.555 1068.43 236.18 1039.35C238.717 1023.39 241.343 1006.89 242.946 992.311C243.536 989.923 244.479 987.351 245.562 984.373C250.443 970.973 258.61 948.579 252.971 892.734C255.236 885.528 258.83 874.507 259.773 872.771C259.869 872.586 260.037 872.304 260.257 871.926C272.23 851.284 274.74 833.048 274.74 821.446C274.881 817.006 275.762 807.121 277.172 794.885L277.189 794.77C277.198 794.708 277.198 794.647 277.207 794.585C278.678 781.908 280.713 766.746 283.092 752.483C283.215 752.263 283.295 752.008 283.312 751.743C283.33 751.47 283.339 751.215 283.356 750.95C285.268 739.665 287.4 729.041 289.629 720.759C297.69 690.877 306.006 645.533 307.971 628.654C309.865 612.391 318.868 608.964 320.56 608.964C320.665 608.964 320.762 608.964 320.859 608.938C320.956 608.955 321.053 608.964 321.159 608.964C322.85 608.964 331.854 612.391 333.748 628.654C335.712 645.524 344.029 690.868 352.09 720.759C354.319 729.032 356.451 739.665 358.362 750.95C358.38 751.215 358.389 751.47 358.406 751.743C358.424 752.016 358.503 752.263 358.627 752.483C361.005 766.729 363.04 781.873 364.511 794.541C364.511 794.62 364.511 794.691 364.529 794.77L364.556 794.911C365.965 807.121 366.837 816.97 366.987 821.393C366.987 833.057 369.498 851.284 381.47 871.926C381.69 872.304 381.849 872.586 381.955 872.771C382.889 874.507 386.492 885.528 388.756 892.734C383.118 948.57 391.284 970.973 396.165 984.373C397.248 987.351 398.191 989.923 398.781 992.311C400.385 1006.89 403.001 1023.38 405.538 1039.34C410.163 1068.43 414.533 1095.9 411.688 1105.31C408.393 1116.2 409.899 1119.36 411.723 1121.66C412.146 1122.2 412.163 1122.26 412.163 1122.4C412.049 1125.49 412.278 1132.54 413.379 1139.27C413.96 1142.81 413.344 1146.02 412.762 1149.13C412.313 1151.51 411.846 1153.96 411.961 1156.59C412.956 1165.09 417.978 1167.6 421.299 1169.26C422.339 1169.78 423.51 1170.37 423.581 1170.76C422.85 1176.63 424.021 1181.58 427.069 1185.48C431.404 1191.04 438.205 1192.71 440.513 1193.12C443.508 1197.13 447.05 1199.4 451.049 1199.87C451.569 1199.93 452.08 1199.96 452.582 1199.96C457.225 1199.96 461.057 1197.55 462.661 1196.36C468.792 1198.15 471.981 1195.69 473.268 1194.21C476.166 1194.27 478.307 1193.61 479.708 1192.34C480.104 1191.97 480.395 1191.6 480.615 1191.24C484.905 1191.44 487.372 1188.22 488.271 1186.05C493.909 1179.88 488.658 1172.25 486.394 1168.96L485.874 1168.21C484.835 1166.65 481.373 1162.46 477.699 1158.02C474.245 1153.85 470.325 1149.11 469.488 1147.78C469.224 1147.37 468.792 1146.75 468.211 1145.93C464.837 1141.12 456.917 1129.86 449.437 1111.47C440.883 1090.46 452.662 1014.25 452.785 1013.46C464.907 930.255 457.19 894.989 449.825 870.895C449.798 870.763 449.763 870.631 449.702 870.498C449.006 868.226 448.31 866.041 447.631 863.935C445.535 857.354 443.552 851.143 442.328 844.668C442.125 843.602 441.79 842.131 441.385 840.36C439.843 833.674 437.271 822.485 437.8 813.905C438.654 803.985 439.729 791.176 440.874 776.719C441.218 773.063 441.438 769.944 441.579 767.777C441.579 767.777 441.579 767.777 441.579 767.768C445.913 712.047 450.856 637.111 449.067 604.815C447.032 568.148 429.483 515.731 429.342 515.361C427.704 508.515 426.338 503.908 425.193 500.534C425.466 500.023 425.484 499.388 425.175 498.851C424.973 498.499 424.673 498.243 424.33 498.102C423.704 496.428 423.149 495.098 422.664 493.918C422.62 493.821 422.585 493.733 422.55 493.636C422.524 493.574 422.506 493.512 422.479 493.451V493.433C422.03 492.394 421.651 491.451 421.325 490.499C418.771 481.655 414.278 469.603 409.926 457.948C405.397 445.808 401.116 434.329 400.2 429.457C398.438 420.039 399.812 401.627 400.314 399.883C400.473 399.336 400.728 398.033 401.266 395.372C402.658 388.386 405.556 373.85 408.261 367.436C411.564 359.596 417.238 333.774 419.105 325.291L419.546 323.317C419.995 321.353 421.616 316.067 422.823 312.226C425.589 317.617 431.756 327.978 444.31 342.655C454.935 355.085 464.229 368.573 471.1 379.197C470.986 379.726 471.118 380.299 471.514 380.739C472.105 381.391 472.704 382.025 473.32 382.66C475.796 386.553 477.884 389.954 479.505 392.597C480.509 394.236 481.32 395.539 481.901 396.464C484.491 400.526 486.209 404.279 487.592 407.292C488.526 409.318 489.328 411.071 490.182 412.48C491.803 415.141 493.874 418.251 497.997 422.911C499.644 424.77 500.71 426.021 501.688 427.157C503.379 429.131 504.842 430.831 508.568 434.857C533.676 461.956 549.622 474.615 561.268 483.848C562.801 485.064 564.254 486.218 565.629 487.328C567.699 488.993 571.126 491.759 574.544 494.728C574.685 495.451 575.267 496.023 576.007 496.129C576.06 496.138 576.121 496.147 576.174 496.155C580.711 500.199 584.852 504.366 585.31 506.542C585.283 508.568 584.79 511.211 584.27 514.013C583.301 519.21 582.209 525.095 583.698 529.509C584.94 533.191 585.186 534.795 585.504 536.83C585.706 538.142 585.935 539.64 586.473 541.887C587.186 544.855 588.701 547.252 590.173 549.569C591.662 551.912 593.062 554.132 593.741 556.951C594.375 569.664 594.622 574.439 598.278 576.756C600.339 578.059 603.608 579.081 606.594 578.015C608.127 577.469 610.188 576.121 611.281 572.826C612.858 568.06 611.378 562.272 610.497 558.801C610.268 557.92 609.995 556.819 609.986 556.511C609.968 555.515 610.021 553.357 610.074 551.551C610.867 552.044 611.721 552.626 612.417 553.225C614.021 554.458 615.554 555.868 616.946 557.268C617.545 558.546 620.276 564.343 620.972 566.298L621.095 566.651C621.853 568.792 623.852 574.465 623.861 576.588C623.817 577.011 623.236 578.553 622.769 579.786C620.945 584.579 618.197 591.82 620.831 595.899C621.641 597.141 622.83 597.969 624.39 598.383C624.275 602.348 626.257 604.524 628.574 605.264C631.05 606.057 633.658 605.141 634.265 603.255C634.847 601.467 636.195 598.612 636.459 598.057C643.339 587.389 641.613 574.544 641.533 573.972L641.472 573.981ZM418.938 220.701C426.743 220.182 437.641 221.124 446.636 231.995C457.322 245.316 463.048 265.023 467.656 280.872C469.321 286.616 470.898 292.034 472.492 296.307C474.272 301.081 476.184 304.482 478.307 307.838C466.361 294.589 456.353 288.298 449.428 285.303C420.947 253.852 399.865 233.854 389.698 224.604C389.778 224.551 389.892 224.498 390.06 224.481C412.525 221.38 417.81 220.807 418.938 220.71V220.701ZM389.575 220.992C388.342 221.16 387.285 221.82 386.668 222.745C382.36 220.12 377.382 218.799 367.806 218.49C367.701 218.49 367.604 218.49 367.498 218.481C365.815 218.411 364.186 218.384 362.582 218.367C360.591 217.926 358.864 214.306 357.86 192.475C359.367 194.933 361.076 197.382 362.441 199.347C363.058 200.228 363.569 200.968 363.921 201.505C365.718 204.254 389.381 214.649 402.059 219.283C398.526 219.759 394.394 220.323 389.566 220.983L389.575 220.992ZM256.583 129.882C254.434 113.593 257.103 98.3431 259.676 83.5956C260.239 80.3448 260.803 77.1292 261.314 73.9225C261.746 71.1827 262.107 68.3547 262.451 65.6237C264.406 50.1098 266.433 34.0761 283.48 16.1659C302.799 -4.13175 321.062 5.71753 321.828 6.14921C322.419 6.48398 323.159 6.44874 323.714 6.0523C323.784 5.99945 330.99 1.00433 341.025 5.81444C368.15 18.8264 382.677 34.7368 384.21 53.0963C385.302 66.258 385.435 85.1196 385.558 103.356C385.699 123.742 385.813 141.352 387.232 148.418C387.945 151.986 389.02 158.284 390.254 165.579C394.042 187.876 397.433 207.117 400.129 214.861C387.884 210.112 368.643 201.496 366.872 199.584C366.511 199.029 365.974 198.254 365.331 197.338C363.005 193.999 358.688 187.806 357.842 184.458C357.605 182.617 357.446 179.93 357.34 176.829C357.314 175.111 357.279 173.331 357.235 171.464L357.208 169.614C357.208 169.614 357.208 169.552 357.208 169.526C357.191 166.433 357.208 163.28 357.261 160.381C357.261 160.346 357.261 160.302 357.261 160.267C357.261 159.888 357.279 159.518 357.296 159.174C357.296 159.113 357.296 159.051 357.287 158.989C357.393 154.091 357.587 150.135 357.816 148.858C357.878 148.691 357.922 148.559 357.948 148.444C358.389 147.642 359.138 146.7 359.93 145.704C360.767 144.656 361.631 143.563 362.353 142.401C363.56 140.445 364.318 134.392 364.679 130.684C366.432 130.974 368.308 130.622 370.132 129.635C374.422 127.292 379.268 120.517 379.999 108.545C380.387 102.246 379.083 97.9202 376.14 95.7089C374.281 94.3082 372.185 94.088 370.617 94.1849L371.198 81.2522C371.233 80.521 370.81 79.8514 370.141 79.5607C350.019 70.8919 335.783 63.5887 325.396 58.25C303.566 47.0352 296.976 43.6522 286.739 54.4882C284.739 56.6025 283.797 57.5628 283.303 58.0738C282.863 58.5201 282.525 58.9048 282.29 59.2279C281.982 59.6507 281.348 60.5053 279.409 62.9279C269.992 74.6889 270.362 87.3749 270.388 88.0092L270.979 94.1761C269.428 94.0968 267.384 94.3434 265.569 95.7089C262.618 97.929 261.323 102.246 261.711 108.545C262.442 120.517 267.287 127.292 271.578 129.635C273.392 130.631 275.269 130.983 277.031 130.684C277.392 134.392 278.15 140.445 279.357 142.401C280.079 143.563 280.942 144.656 281.779 145.704C282.59 146.726 283.356 147.686 283.744 148.382C283.761 148.453 283.797 148.541 283.832 148.647C284.096 149.862 284.308 154.003 284.431 159.148V159.165V159.245C284.51 162.54 284.537 166.231 284.51 169.825L284.484 171.464C284.449 173.331 284.405 175.111 284.378 176.829C284.272 179.921 284.114 182.617 283.876 184.449C283.03 187.797 278.713 193.99 276.388 197.338C275.745 198.254 275.216 199.029 274.908 199.505C273.63 200.88 263.799 205.531 253.808 209.83C260.794 193.03 258.742 146.277 256.583 129.882V129.882ZM371.903 338.532C369.013 330.876 360.177 326.172 351.914 322.577C346.126 320.058 331.845 314.745 324.233 319.732C322.753 320.701 321.626 321.996 320.85 323.59C320.075 321.996 318.956 320.701 317.467 319.732C309.865 314.745 295.575 320.058 289.787 322.577C281.524 326.163 272.696 330.867 269.798 338.532C268.943 340.804 268.767 342.848 268.979 344.963C267.904 343.632 266.688 342.293 265.314 340.954C258.337 334.144 253.095 328.929 249.095 324.806C251.474 325.449 254.857 325.784 258.9 325.784C273.111 325.784 295.311 321.617 309.407 311.785C315.106 307.812 318.921 303.293 320.842 298.298C322.762 303.293 326.577 307.812 332.277 311.785C346.372 321.617 368.573 325.784 382.783 325.784C386.827 325.784 390.209 325.44 392.588 324.806C388.597 328.92 383.355 334.144 376.369 340.954C374.986 342.302 373.779 343.632 372.705 344.963C372.916 342.848 372.74 340.804 371.885 338.532H371.903ZM364.644 377.435C364.714 379.233 364.82 381.69 364.776 387.249C364.696 398.491 362.802 446.927 361.049 479.205C358.292 530.108 331.14 570.668 321.353 570.668C321.176 570.668 321.009 570.703 320.85 570.747C320.692 570.703 320.524 570.668 320.348 570.668C310.561 570.668 283.418 530.108 280.652 479.205C278.898 446.935 277.013 398.499 276.925 387.249C276.881 381.69 276.987 379.233 277.057 377.435C277.128 375.761 277.172 374.555 277.084 371.991C276.722 361.772 275.022 355.341 273.771 350.645C272.538 345.993 271.789 343.183 273.084 339.774C274.996 334.726 280.572 330.409 291.188 325.802C299.654 322.119 310.499 319.37 315.538 322.674C317.591 324.022 318.586 326.339 318.586 329.757C318.586 330.726 319.37 331.51 320.339 331.51C320.516 331.51 320.683 331.475 320.842 331.431C321 331.475 321.168 331.51 321.344 331.51C322.313 331.51 323.097 330.726 323.097 329.757C323.097 326.339 324.092 324.022 326.145 322.674C331.193 319.37 342.029 322.119 350.495 325.802C361.102 330.418 366.687 334.726 368.59 339.774C369.877 343.183 369.137 345.993 367.903 350.645C366.661 355.341 364.952 361.772 364.591 371.991C364.503 374.555 364.547 375.761 364.617 377.435H364.644ZM316.877 228.137C310.578 222.093 299.522 218.843 283.973 218.411C286.149 213.627 287.268 202.562 287.867 177.454C287.876 177.384 287.884 177.313 287.884 177.234C287.911 175.419 287.955 173.525 287.99 171.543L288.025 170.054V169.684C288.096 166.028 288.078 162.83 287.973 160.267C287.973 160.029 287.973 159.791 287.955 159.562C287.928 158.381 287.902 157.254 287.867 156.17C292.518 162.584 301.927 171.05 320.251 174.327C320.357 174.345 320.463 174.353 320.56 174.353C320.657 174.353 320.762 174.345 320.859 174.327C320.956 174.345 321.053 174.353 321.159 174.353C321.264 174.353 321.361 174.353 321.467 174.327C339.791 171.041 349.2 162.584 353.852 156.17C353.816 157.245 353.781 158.373 353.764 159.544C353.764 159.773 353.746 159.994 353.755 160.196C353.649 162.848 353.631 166.037 353.702 169.649V170.054L353.737 171.543C353.781 173.525 353.816 175.419 353.843 177.234C353.843 177.305 353.843 177.507 353.861 177.587C354.46 202.606 355.578 213.636 357.754 218.411C342.214 218.843 331.149 222.093 324.85 228.137C323.115 229.802 321.784 231.67 320.868 233.687C319.952 231.67 318.622 229.802 316.886 228.137H316.877ZM273.903 87.7714C273.903 87.6568 273.595 75.8166 282.167 65.1128C284.167 62.6196 284.819 61.7298 285.136 61.2981C285.374 60.9722 285.382 60.9722 285.823 60.5141C286.325 60.0031 287.277 59.034 289.303 56.8845C297.487 48.2157 301.434 49.8807 323.793 61.3598C334.039 66.6192 347.993 73.7903 367.639 82.2917L367.013 96.2111C366.987 96.7925 367.251 97.3564 367.727 97.6999C368.203 98.0435 368.811 98.1404 369.357 97.9378C369.383 97.929 372.07 97.0304 374.026 98.5016C375.946 99.9464 376.792 103.338 376.493 108.316C375.85 118.87 371.753 124.728 368.441 126.543C367.322 127.16 365.648 127.688 363.983 126.763C363.463 126.473 362.829 126.464 362.3 126.746C361.772 127.028 361.428 127.556 361.375 128.155C360.979 133.194 360.098 139.37 359.367 140.542C358.75 141.528 357.957 142.533 357.182 143.511C356.248 144.691 355.358 145.801 354.768 146.911C354.715 147.026 354.671 147.14 354.636 147.255C354.424 148.012 349.05 165.799 320.859 170.856C292.668 165.799 287.294 148.012 287.083 147.255C287.047 147.131 287.003 147.017 286.942 146.911C286.352 145.801 285.471 144.682 284.537 143.511C283.761 142.541 282.96 141.537 282.352 140.542C281.621 139.361 280.74 133.194 280.343 128.155C280.299 127.556 279.947 127.028 279.418 126.746C278.89 126.464 278.255 126.473 277.736 126.763C276.071 127.688 274.388 127.16 273.278 126.543C269.965 124.737 265.878 118.879 265.226 108.316C264.926 103.356 265.772 99.964 267.675 98.5193C269.631 97.0304 272.353 97.929 272.37 97.9378C272.934 98.1404 273.569 98.0347 274.036 97.6735C274.511 97.3035 274.758 96.7221 274.705 96.123L273.912 87.7714H273.903ZM277.788 201.505C278.141 200.968 278.652 200.228 279.269 199.347C280.634 197.382 282.343 194.933 283.85 192.475C282.845 214.288 281.127 217.918 279.136 218.358C277.533 218.376 275.903 218.402 274.212 218.473C274.106 218.473 274.009 218.473 273.903 218.481C264.327 218.781 259.35 220.111 255.042 222.736C254.416 221.811 253.359 221.151 252.135 220.983C247.316 220.314 243.175 219.75 239.642 219.283C252.32 214.658 275.982 204.262 277.78 201.505H277.788ZM169.226 296.289C170.812 292.025 172.389 286.598 174.063 280.854C178.67 265.014 184.397 245.298 195.065 232.004C204.069 221.124 214.949 220.164 222.754 220.684C223.829 220.781 229.027 221.336 251.659 224.463C251.826 224.49 251.941 224.542 252.02 224.595C241.915 233.775 220.825 253.791 192.29 285.294C185.366 288.29 175.358 294.589 163.412 307.83C165.535 304.473 167.447 301.073 169.226 296.298V296.289ZM17.9983 593.996C17.8838 594.172 17.6019 594.595 16.8266 594.877C16.7473 594.604 16.6768 594.331 16.5887 594.04C14.2454 586.675 14.2365 583.195 14.2189 578.799C14.2189 577.416 14.2101 575.963 14.1308 574.306C14.3863 573.461 15.2409 570.756 16.4478 568.166C15.3113 571.558 14.4127 574.703 14.4039 576.623C14.4039 577.513 14.8356 578.685 15.7254 581.046C17.0997 584.667 19.6722 591.415 17.9983 593.996ZM52.9729 506.146C52.9553 506.234 52.9553 506.322 52.9553 506.41C52.9553 508.78 53.4927 511.634 54.0565 514.665C54.9463 519.439 55.9506 524.849 54.7525 528.399C53.4134 532.363 53.1315 534.196 52.8055 536.301C52.6029 537.614 52.3915 538.971 51.8893 541.067C51.3079 543.464 50.0129 545.516 48.6385 547.692C47.0352 550.221 45.3789 552.837 44.5773 556.317C44.5508 556.414 44.542 556.52 44.5332 556.625C43.9958 567.488 43.7491 572.439 41.6172 573.795C40.2164 574.685 38.0492 575.311 36.3666 574.712C35.1861 574.289 34.358 573.311 33.8294 571.725C32.5784 567.937 33.8911 562.766 34.6839 559.682C35.0451 558.246 35.2918 557.304 35.3006 556.581C35.3359 554.626 35.1332 548.793 35.1244 548.547C35.1068 547.948 34.7808 547.402 34.2699 547.102C33.7589 546.794 33.1246 546.767 32.5872 547.032C32.4551 547.102 29.2571 548.688 27.2133 550.45C20.835 555.357 15.5844 562.625 15.3466 562.951C12.5891 566.906 10.7391 573.337 10.6686 573.61C10.6157 573.795 10.5981 573.989 10.6069 574.174C10.695 575.901 10.695 577.399 10.7038 578.808C10.7215 583.328 10.7303 587.23 13.241 595.106C14.2542 598.287 14.0868 600.656 12.7741 601.599C11.9989 602.163 11.1179 602.075 10.7831 601.943C10.0343 599.74 8.51022 596.569 8.43974 596.428C8.4045 596.366 8.36927 596.296 8.33403 596.234C2.11436 586.675 3.70892 574.606 3.71773 574.518C5.11847 565.602 6.88923 553.489 7.09185 552.106C12.7653 533.394 26.1209 509.608 28.7638 504.983C29.3452 503.97 29.9619 502.357 30.6755 500.49C31.6181 498.023 32.7898 494.957 34.1289 492.693C36.4459 488.782 40.93 483.046 40.9741 482.994C41.0269 482.932 41.071 482.861 41.115 482.791C41.3881 482.324 41.8286 481.514 42.4189 480.412C42.9387 484.333 44.3306 488.544 47.5197 491.83C50.5326 494.94 54.7701 496.552 59.9326 496.64C55.3956 501.001 53.3253 503.908 52.9817 506.146H52.9729ZM159.28 390.773C158.284 392.385 157.492 393.68 156.91 394.588C154.188 398.852 152.417 402.728 150.99 405.838C150.109 407.767 149.343 409.432 148.594 410.666C146.814 413.582 144.867 416.392 141.15 420.594C139.485 422.471 138.41 423.73 137.414 424.885C135.749 426.832 134.304 428.514 130.631 432.487C105.699 459.392 89.8769 471.955 78.3185 481.126C76.7768 482.35 75.3232 483.505 73.9401 484.615C70.0286 487.768 66.7602 490.491 64.0468 492.869C59.5274 493.504 53.7922 493.275 50.0217 489.389C46.1366 485.39 45.5111 479.443 45.6697 475.153C45.6697 474.924 45.6432 474.704 45.564 474.501C52.092 462.308 64.7956 438.883 78.5564 417.74C87.278 404.349 94.4492 398.077 102.748 390.817C110.862 383.725 119.953 375.77 131.758 359.508C123.319 382.501 128.666 392.051 133.406 395.883C135.441 397.53 137.925 398.27 140.674 398.27C146.286 398.27 153.016 395.205 159.394 390.562L159.262 390.773H159.28ZM217.574 306.861C217.195 307.856 212.341 319.881 194.801 340.399C182.943 354.266 172.759 369.392 165.685 380.501C154.382 392.051 141.255 397.707 135.635 393.152C131.547 389.839 124.182 378.149 144.013 341.263C144.189 340.928 144.383 340.602 144.559 340.267C146.048 337.8 147.308 335.607 148.444 333.545C149.721 331.475 151.043 329.414 152.426 327.396C152.461 327.352 152.496 327.317 152.523 327.273C171.843 299.76 187.762 290.651 196.034 287.629C196.431 287.523 196.836 287.417 197.259 287.294C198.774 286.871 200.386 286.431 202.069 286.131C206.289 285.691 211.795 285.973 215.107 289.514C218.252 292.871 219.08 298.712 217.574 306.852V306.861ZM201.602 282.651C201.443 282.669 201.294 282.678 201.135 282.696C200.589 282.757 199.902 282.872 199.091 283.048C223.318 256.575 241.721 238.858 251.941 229.441C251.958 229.423 251.976 229.414 251.994 229.405C257.949 224.357 261.57 221.935 278.617 221.935C279.022 221.935 279.401 221.917 279.771 221.873C300.588 221.794 310.111 226.507 314.455 230.674C317.344 233.449 318.815 236.735 318.815 240.453V290.43C318.815 297.417 314.983 303.627 307.433 308.904C290.131 320.974 258.187 324.462 249.192 321.15C245.439 319.767 242.602 317.6 240.1 314.833C240.048 314.772 239.995 314.701 239.951 314.666C237.484 311.909 235.334 308.578 232.929 304.852C229.952 300.236 226.569 294.994 221.838 289.919C214.57 282.132 207.399 281.656 201.611 282.643L201.602 282.651ZM223.811 491.495C226.331 482.782 230.806 470.792 235.132 459.198C239.915 446.38 244.047 435.298 245.016 430.126C246.875 420.198 245.518 401.363 244.831 398.94C244.708 398.508 244.356 396.746 243.95 394.702C242.426 387.064 239.589 372.845 236.753 366.097C234.647 361.093 231.062 347.121 226.102 324.559L225.661 322.56C224.965 319.52 221.785 309.512 221.071 307.275C221.952 302.376 222.041 298.174 221.336 294.677C224.78 298.747 227.414 302.808 229.969 306.764C232.401 310.543 234.682 314.058 237.361 317.053C237.378 317.08 237.396 317.097 237.422 317.124C241.307 322.005 248.452 329.396 262.874 343.465C274.643 354.944 273.63 364.309 270.917 389.337C269.49 402.481 267.543 420.497 267.032 445.015C266.53 469.708 263.825 493.935 237.502 495.213C233.458 495.406 229.916 495.169 226.886 494.517C225.688 494.182 224.534 493.838 223.415 493.495C223.318 493.46 223.212 493.424 223.115 493.389C223.353 492.79 223.582 492.173 223.811 491.504V491.495ZM242.268 983.201C241.131 986.32 240.153 989.007 239.51 991.615C239.493 991.685 239.475 991.764 239.466 991.844C237.88 1006.37 235.255 1022.87 232.718 1038.83C227.82 1069.6 223.6 1096.18 226.674 1106.36C229.714 1116.4 228.172 1118.35 227.256 1119.51C226.727 1120.18 226.005 1121.09 226.058 1122.55C226.163 1125.4 225.934 1132.31 224.886 1138.74C224.208 1142.88 224.904 1146.57 225.52 1149.82C225.952 1152.1 226.357 1154.26 226.287 1156.22C225.512 1162.82 221.829 1164.66 218.869 1166.15C216.852 1167.17 214.57 1168.3 214.649 1170.93C214.649 1170.99 214.649 1171.05 214.667 1171.1C215.31 1176.06 214.385 1180.17 211.927 1183.33C207.672 1188.81 200.113 1189.78 200.034 1189.79C199.54 1189.85 199.091 1190.12 198.8 1190.52C196.316 1194.05 193.462 1196.03 190.308 1196.41C185.145 1197.01 180.644 1193.15 180.608 1193.12C180.133 1192.7 179.472 1192.56 178.873 1192.78C172.856 1194.86 170.962 1191.75 170.9 1191.64C170.583 1191.03 169.94 1190.67 169.244 1190.71C165.367 1190.93 164.134 1189.82 164.037 1189.29C164.02 1188.77 163.764 1188.28 163.359 1187.97C162.945 1187.65 162.416 1187.53 161.905 1187.64C158.188 1188.44 156.804 1184.94 156.663 1184.56C156.575 1184.31 156.443 1184.09 156.258 1183.9C152.532 1180.08 155.333 1175.24 158.249 1170.99L158.795 1170.19C159.729 1168.78 163.297 1164.47 166.751 1160.3C170.618 1155.63 174.265 1151.22 175.226 1149.71C175.472 1149.33 175.878 1148.75 176.406 1148C179.851 1143.09 187.929 1131.59 195.558 1112.84C204.474 1090.93 192.924 1016.15 192.431 1013C180.767 932.951 187.594 897.791 194.642 874.049C197.426 876.084 200.184 878.973 200.624 884.788C202.166 905.403 215.636 906.883 223.688 907.772L224.868 907.904C226.833 908.134 228.692 908.248 230.454 908.248C239.545 908.248 246.003 905.2 250.029 899.051C254.443 949.751 246.866 970.577 242.259 983.21L242.268 983.201ZM271.225 821.419C271.225 832.652 268.794 850.227 257.218 870.19C256.971 870.613 256.795 870.921 256.68 871.133C255.341 873.617 250.637 888.479 249.65 891.633C249.65 891.651 249.633 891.659 249.633 891.677C246.347 901.905 238.612 905.949 225.282 904.398L224.076 904.266C216.217 903.403 205.461 902.213 204.13 884.515C203.522 876.48 199.162 872.842 195.726 870.498C196.307 868.613 196.889 866.798 197.453 865.028C199.584 858.341 201.593 852.033 202.862 845.347C203.056 844.316 203.39 842.889 203.778 841.18C205.364 834.308 208.007 822.803 207.443 813.632C207.381 812.962 207.328 812.266 207.267 811.57C208.993 816.319 211.099 819.878 213.671 821.102C215.028 821.745 217.186 822.142 219.741 820.318C223.362 817.746 226.146 816.812 228.022 817.543C231.423 818.873 232.912 826.009 234.356 832.916C236.515 843.25 238.955 854.967 248.787 856.35C249.113 856.394 249.439 856.42 249.765 856.42C259.085 856.42 266.477 837.576 271.252 820.627C271.243 820.908 271.225 821.173 271.216 821.419H271.225ZM279.85 750.651C277.366 765.354 275.242 781.124 273.718 794.259C269.525 817.693 259.218 854.262 249.289 852.87C241.906 851.831 239.827 841.849 237.81 832.194C236.101 824.018 234.489 816.301 229.317 814.275C226.225 813.068 222.428 814.099 217.715 817.455C216.464 818.345 215.706 818.177 215.187 817.931C210.059 815.49 206.209 796.065 204.368 776.393C199.902 720.134 194.307 638.891 196.193 605.035C198.201 568.844 215.601 516.876 215.821 516.197C217.266 510.145 218.49 505.899 219.539 502.71C241.158 517.88 246.593 567.135 251.412 610.761C253.13 626.31 254.751 640.996 257.006 653.206C265.481 699.026 272.3 707.774 276.379 713.007C280.097 717.773 281.506 719.614 279.85 750.651V750.651ZM304.473 628.275C302.526 645.049 294.254 690.137 286.228 719.87C285.479 722.654 284.739 725.702 284.017 728.944C283.858 716.901 282.149 714.707 279.145 710.84C275.269 705.862 268.776 697.537 260.46 652.563C258.222 640.476 256.61 625.852 254.901 610.374C249.95 565.506 244.347 514.797 220.737 499.283C221.107 498.296 221.45 497.433 221.767 496.649C221.97 496.71 222.173 496.772 222.375 496.842C223.476 497.257 224.648 497.6 225.899 497.882C226.163 497.953 226.41 498.032 226.674 498.102C239.272 501.661 253.553 505.687 264.345 527.844C282.537 565.162 298.72 581.407 308.385 591.115C314.507 597.265 318.111 600.894 318.71 605.784C313.97 607.132 306.209 613.395 304.482 628.284L304.473 628.275ZM320.85 600.692C319.027 596.833 315.565 593.344 310.869 588.622C300.738 578.456 285.435 563.083 267.499 526.293C259.394 509.669 249.174 502.56 239.413 498.569C269.472 495.917 270.142 464.194 270.538 445.076C270.952 424.893 272.362 409.142 273.639 396.887C274.194 415.784 275.718 452.988 277.154 479.382C279.964 531.253 307.495 574.165 320.357 574.165C320.533 574.165 320.701 574.13 320.859 574.086C321.018 574.13 321.185 574.165 321.361 574.165C334.224 574.165 361.754 531.253 364.564 479.382C366 452.979 367.524 415.775 368.079 396.878C369.357 409.133 370.758 424.885 371.18 445.068C371.577 464.185 372.246 495.909 402.305 498.56C392.544 502.56 382.325 509.661 374.22 526.285C356.283 563.074 340.981 578.447 330.849 588.613C326.154 593.327 322.692 596.815 320.868 600.683L320.85 600.692ZM449.27 1012.97C448.777 1016.14 437.227 1090.92 446.142 1112.83C453.78 1131.58 461.85 1143.08 465.295 1147.99C465.832 1148.74 466.237 1149.33 466.475 1149.71C467.436 1151.21 471.083 1155.63 474.95 1160.29C478.404 1164.46 481.972 1168.78 482.905 1170.19L483.452 1170.99C486.368 1175.23 489.178 1180.07 485.443 1183.9C485.258 1184.09 485.126 1184.31 485.037 1184.56C484.985 1184.72 483.637 1188.49 479.796 1187.64C479.285 1187.53 478.756 1187.6 478.351 1187.92C477.937 1188.24 477.69 1188.68 477.672 1189.2C477.567 1189.82 476.342 1190.93 472.457 1190.71C471.788 1190.68 471.153 1191.05 470.818 1191.62C470.739 1191.75 468.854 1194.86 462.828 1192.79C462.229 1192.59 461.568 1192.72 461.093 1193.14C461.049 1193.17 456.626 1197.04 451.411 1196.42C448.248 1196.05 445.385 1194.07 442.9 1190.54C442.61 1190.13 442.16 1189.86 441.667 1189.81C441.588 1189.81 434.082 1188.86 429.792 1183.37C427.316 1180.2 426.391 1176.08 427.034 1171.12C427.034 1171.06 427.043 1171 427.052 1170.95C427.122 1168.32 424.841 1167.17 422.823 1166.17C419.863 1164.69 416.172 1162.84 415.414 1156.37C415.335 1154.28 415.74 1152.12 416.172 1149.84C416.788 1146.59 417.484 1142.9 416.806 1138.75C415.749 1132.32 415.529 1125.42 415.634 1122.57C415.687 1121.11 414.965 1120.2 414.436 1119.53C413.52 1118.37 411.978 1116.42 415.009 1106.38C418.083 1096.19 413.855 1069.62 408.965 1038.83C406.428 1022.88 403.803 1006.38 402.217 991.861C402.217 991.782 402.2 991.711 402.173 991.632C401.539 989.024 400.552 986.338 399.416 983.219C394.808 970.586 387.232 949.76 391.645 899.06C395.663 905.209 402.129 908.257 411.221 908.257C412.983 908.257 414.85 908.142 416.815 907.913L417.995 907.781C426.047 906.891 439.518 905.411 441.059 884.797C441.5 878.973 444.257 876.093 447.041 874.058C454.098 897.8 460.916 932.959 449.261 1012.99L449.27 1012.97ZM437.914 841.171C438.311 842.88 438.637 844.316 438.83 845.347C440.099 852.033 442.108 858.341 444.24 865.028C444.803 866.798 445.385 868.613 445.966 870.498C442.53 872.842 438.161 876.48 437.562 884.515C436.231 902.213 425.475 903.403 417.617 904.266L416.41 904.398C403.08 905.94 395.346 901.905 392.059 891.677C392.059 891.659 392.042 891.651 392.042 891.633C391.046 888.479 386.351 873.617 385.012 871.133C384.906 870.93 384.721 870.613 384.474 870.19C372.898 850.218 370.467 832.643 370.467 821.358C370.467 821.129 370.449 820.891 370.44 820.635C375.206 837.576 382.607 856.412 391.919 856.412C392.244 856.412 392.57 856.385 392.896 856.341C402.728 854.958 405.168 843.241 407.327 832.907C408.763 826.009 410.26 818.873 413.661 817.534C415.537 816.794 418.321 817.728 421.942 820.309C424.497 822.133 426.655 821.737 428.012 821.093C430.584 819.869 432.699 816.31 434.417 811.561C434.355 812.275 434.293 812.98 434.232 813.667C433.668 822.794 436.32 834.299 437.905 841.171H437.914ZM422.162 502.71C423.211 505.917 424.453 510.216 425.924 516.347C426.1 516.867 443.5 568.836 445.508 605.026C447.385 638.873 441.799 720.063 437.333 776.34C435.491 796.03 431.633 815.482 426.506 817.922C425.986 818.169 425.228 818.336 423.977 817.446C419.264 814.099 415.476 813.05 412.375 814.266C407.203 816.292 405.591 824.009 403.882 832.185C401.865 841.84 399.786 851.822 392.403 852.861C382.536 854.245 372.176 817.719 367.974 794.277C366.45 781.141 364.326 765.354 361.842 750.642C360.186 719.605 361.595 717.773 365.313 712.998C369.383 707.765 376.202 699.017 384.686 653.198C386.941 640.979 388.562 626.301 390.28 610.752C395.09 567.118 400.534 517.871 422.145 502.701L422.162 502.71ZM419.933 496.649C420.251 497.433 420.594 498.296 420.964 499.283C397.345 514.797 391.751 565.506 386.8 610.374C385.091 625.852 383.479 640.476 381.241 652.563C372.916 697.537 366.432 705.871 362.556 710.84C359.543 714.698 357.843 716.892 357.684 728.935C356.962 725.684 356.222 722.645 355.473 719.861C347.447 690.119 339.183 645.031 337.228 628.266C335.492 613.378 327.74 607.114 323 605.766C323.59 600.885 327.202 597.247 333.325 591.098C342.989 581.389 359.173 565.144 377.365 527.826C388.157 505.679 402.437 501.644 415.035 498.085C415.3 498.005 415.555 497.935 415.819 497.864C417.07 497.582 418.242 497.239 419.343 496.825C419.546 496.763 419.748 496.702 419.942 496.64L419.933 496.649ZM416.048 322.551L415.608 324.551C410.648 347.103 407.071 361.084 404.957 366.088C402.12 372.837 399.283 387.064 397.759 394.702C397.354 396.737 397.002 398.499 396.878 398.931C396.182 401.354 394.826 420.189 396.685 430.118C397.654 435.298 401.785 446.372 406.569 459.19C410.895 470.783 415.361 482.773 417.907 491.574C418.119 492.2 418.339 492.79 418.577 493.38C418.489 493.415 418.392 493.451 418.295 493.486C417.167 493.83 416.004 494.173 414.797 494.517C411.767 495.169 408.225 495.406 404.19 495.213C377.867 493.935 375.171 469.717 374.66 445.015C374.149 420.497 372.202 402.49 370.775 389.346C368.062 364.318 367.049 354.953 378.818 343.465C393.249 329.378 400.393 321.987 404.279 317.115C404.287 317.097 404.305 317.089 404.314 317.071H404.323C407.01 314.067 409.291 310.543 411.723 306.764C414.278 302.808 416.912 298.747 420.356 294.677C419.652 298.174 419.74 302.385 420.621 307.275C419.907 309.504 416.727 319.52 416.031 322.56L416.048 322.551ZM419.881 289.919C415.15 294.994 411.767 300.227 408.789 304.843C406.393 308.561 404.235 311.891 401.768 314.657C401.768 314.657 401.662 314.781 401.609 314.842C399.107 317.6 396.271 319.767 392.526 321.15C383.523 324.462 351.588 320.965 334.285 308.904C326.727 303.636 322.903 297.417 322.903 290.43V240.453C322.903 236.735 324.366 233.449 327.264 230.674C331.607 226.507 341.122 221.794 361.939 221.873C362.309 221.917 362.697 221.935 363.102 221.935C380.149 221.935 383.77 224.357 389.725 229.405C389.743 229.423 389.76 229.432 389.778 229.441C399.997 238.858 418.401 256.575 442.627 283.048C441.817 282.872 441.121 282.766 440.583 282.696C440.425 282.678 440.275 282.669 440.125 282.651C434.337 281.665 427.166 282.132 419.889 289.928L419.881 289.919ZM476.016 380.492C468.951 369.383 458.758 354.248 446.9 340.382C429.386 319.908 424.523 307.883 424.127 306.852C422.62 298.703 423.449 292.862 426.594 289.505C429.915 285.955 435.421 285.682 439.641 286.122C441.324 286.422 442.936 286.863 444.451 287.285C444.874 287.4 445.279 287.506 445.676 287.62C453.948 290.633 469.867 299.751 489.187 327.264C489.222 327.308 489.248 327.352 489.284 327.387C490.667 329.405 491.988 331.466 493.266 333.536C494.402 335.589 495.653 337.783 497.142 340.241C497.327 340.584 497.521 340.919 497.706 341.263C517.537 378.149 510.163 389.831 506.075 393.143C500.454 397.698 487.328 392.051 476.025 380.501L476.016 380.492ZM577.645 492.852C574.941 490.473 571.672 487.751 567.752 484.597C566.369 483.487 564.915 482.324 563.374 481.108C551.815 471.937 535.993 459.383 511.07 432.479C507.388 428.505 505.952 426.823 504.287 424.876C503.3 423.722 502.216 422.462 500.56 420.585C496.842 416.383 494.887 413.573 493.116 410.657C492.367 409.423 491.601 407.758 490.72 405.838C489.293 402.728 487.513 398.861 484.8 394.588C484.218 393.68 483.425 392.385 482.43 390.773C482.386 390.703 482.342 390.632 482.298 390.562C488.685 395.205 495.415 398.27 501.018 398.27C503.767 398.27 506.251 397.53 508.295 395.883C513.035 392.042 518.382 382.501 509.943 359.508C521.748 375.77 530.848 383.725 538.953 390.817C547.261 398.077 554.432 404.349 563.144 417.74C576.905 438.883 589.609 462.3 596.137 474.501C596.066 474.704 596.022 474.924 596.031 475.153C596.19 479.443 595.564 485.399 591.679 489.389C587.909 493.275 582.174 493.504 577.654 492.869L577.645 492.852ZM627.482 578.791C627.464 583.195 627.456 586.666 625.112 594.031C625.024 594.322 624.954 594.595 624.874 594.868C624.099 594.578 623.817 594.164 623.703 593.987C622.029 591.406 624.592 584.658 625.967 581.037C626.865 578.676 627.297 577.504 627.288 576.615C627.288 574.694 626.381 571.558 625.244 568.166C626.451 570.756 627.306 573.452 627.561 574.298C627.491 575.963 627.482 577.416 627.473 578.791H627.482ZM633.367 596.234C633.323 596.296 633.288 596.357 633.261 596.428C633.191 596.569 631.667 599.731 630.918 601.934C630.592 602.066 629.711 602.154 628.927 601.59C627.614 600.648 627.447 598.278 628.46 595.097C630.962 587.222 630.979 583.319 630.997 578.799C630.997 577.381 631.006 575.892 631.094 574.165C631.103 573.972 631.085 573.787 631.032 573.602C630.953 573.329 629.103 566.897 626.337 562.924C626.116 562.616 620.866 555.348 614.558 550.503C612.435 548.679 609.246 547.093 609.114 547.032C608.576 546.767 607.942 546.794 607.431 547.102C606.92 547.41 606.594 547.957 606.576 548.547C606.576 548.793 606.365 554.617 606.4 556.572C606.409 557.295 606.656 558.246 607.017 559.673C607.81 562.766 609.122 567.937 607.871 571.716C607.343 573.302 606.515 574.28 605.334 574.703C603.652 575.302 601.484 574.668 600.084 573.787C597.952 572.439 597.705 567.479 597.168 556.617C597.168 556.511 597.15 556.414 597.124 556.308C596.322 552.828 594.666 550.212 593.062 547.683C591.688 545.507 590.384 543.464 589.812 541.058C589.309 538.962 589.098 537.605 588.895 536.292C588.569 534.178 588.287 532.355 586.948 528.381C585.75 524.84 586.763 519.431 587.644 514.656C588.208 511.625 588.737 508.771 588.746 506.401C588.746 506.313 588.746 506.225 588.728 506.137C588.384 503.899 586.323 500.983 581.777 496.631C586.94 496.543 591.177 494.931 594.19 491.821C597.379 488.544 598.771 484.324 599.291 480.404C599.881 481.505 600.322 482.315 600.595 482.782C600.639 482.853 600.683 482.923 600.736 482.985C600.78 483.046 605.264 488.782 607.581 492.684C608.92 494.948 610.092 498.014 611.034 500.481C611.748 502.34 612.364 503.952 612.964 505C615.589 509.59 628.944 533.376 634.618 552.088C634.82 553.48 636.582 565.585 637.983 574.474C638.001 574.597 639.613 586.622 633.376 596.216L633.367 596.234Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkoutApp; 
