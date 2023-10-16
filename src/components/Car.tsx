import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Car: React.FC<{ position: number }> = ({ position }) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const img = new Image();
    img.src = "/Car.jpeg";
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  }, []);

  const animationProps = useSpring({
    from: { transform: "translateX(0px)" },
    to: { transform: `translateX(${position}px)` },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      className="car"
      style={{
        ...animationProps,
        backgroundImage: `url(/Car.jpeg)`,
        width: `${imageDimensions.width}px`,
        height: `${imageDimensions.height}px`,
      }}
    ></animated.div>
  );
};

export default Car;
