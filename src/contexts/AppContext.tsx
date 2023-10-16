import React, { useState, createContext, useEffect } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  carOnePosition: number;
  carTwoPosition: number;
  data: {
    displacement: {
      name: number;
      carOne: number;
      carTwo: number;
    }[];
    velocity: {
      name: number;
      carOne: number;
      carTwo: number;
    }[];
    acceleration: {
      name: number;
      carOne: number;
      carTwo: number;
    }[];
  };
  updateCarPosition: Function;
};

export const AppContext = createContext({} as AppContextType);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [carOnePosition, setCarOnePosition] = useState<number>(0);
  const [carTwoPosition, setCarTwoPosition] = useState<number>(0);
  const [data, setData] = useState<{
    displacement: {
      name: number;
      carOne: number;
      carTwo: number;
    }[];
    velocity: {
      name: number;
      carOne: number;
      carTwo: number;
    }[];
    acceleration: {
      name: number;
      carOne: number;
      carTwo: number;
    }[];
  }>({
    displacement: [{ name: 0, carOne: 0, carTwo: 0 }],
    velocity: [{ name: 0, carOne: 0, carTwo: 0 }],
    acceleration: [{ name: 0, carOne: 0, carTwo: 0 }],
  });

  const [carOneSpeed, setCarOneSpeed] = useState<number>(0);
  const [carTwoAcceleration, setCarTwoAcceleration] = useState<number>(0);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();

  const updateCarPosition = (
    carOneSpeed: number,
    carTwoAcceleration: number
  ) => {
    setCarOneSpeed(carOneSpeed);
    setCarTwoAcceleration(carTwoAcceleration);
    setCarOnePosition(carOneSpeed);
    setCarTwoPosition(carTwoAcceleration);
    setTime(0);
    setData({
      displacement: [{ name: 0, carOne: 0, carTwo: 0 }],
      velocity: [{ name: 0, carOne: 0, carTwo: 0 }],
      acceleration: [{ name: 0, carOne: 0, carTwo: 0 }],
    });
    setIsRunning(true);
  };

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId as NodeJS.Timeout);
      setIntervalId(undefined);
    }
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [isRunning]);

  useEffect(() => {
    if (Math.pow(carTwoPosition, 2) < window.screen.width) {
      setCarOnePosition((prevPosition) => prevPosition + carOneSpeed);
      setCarTwoPosition((prevPosition) => Math.pow(prevPosition, 2));
    } else {
      setIsRunning(false);
    }
  }, [time]);

  useEffect(() => {
    if (time !== 0) {
      setData({
        displacement: [
          ...data.displacement,
          { name: time, carOne: carOnePosition, carTwo: carTwoPosition },
        ],
        velocity: [
          ...data.velocity,
          {
            name: time,
            carOne: carOneSpeed,
            carTwo: carTwoAcceleration * time,
          },
        ],
        acceleration: [
          ...data.acceleration,
          {
            name: time,
            carOne: time === 1 ? carOneSpeed : 0,
            carTwo:
              carTwoAcceleration === 1
                ? time === 1
                  ? carTwoAcceleration
                  : 0
                : carTwoAcceleration,
          },
        ],
      });
      console.log(data);
      console.log("time", time);
    }
  }, [time]);

  return (
    <AppContext.Provider
      value={{
        carOnePosition,
        carTwoPosition,
        data,
        updateCarPosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
