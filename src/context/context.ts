import { IRobot } from "./../models/robot.model";
import { robots } from "./../models/data/robots";
import { createContext } from "react";
import { RobotList } from "../components/robot.list";

const initialContext: {
    robots: Array<IRobot>;
    // handleAdd: (newRobot: IRobot) => void;
    handlerEraser: (name: string) => void;
    // handlerComplete: (robot: IRobot) => void;
} = {
    robots: [],
    // handleAdd: () => undefined,
    handlerEraser: () => undefined,
    // handlerComplete: () => undefined,
};

export const RobotsContext = createContext(initialContext);
