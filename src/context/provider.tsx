import { useState } from "react";
import { robots as robotsOther } from "../models/data/robots";
import { IRobot } from "../models/robot.model";
import { RobotsContext } from "./context";

export function RobotsContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<IRobot> = [...robotsOther];
    const [robots, setRobots] = useState(initialRobots);

    // const handleAdd = (newRobot: IRobot) => {
    //     createIRobot(newRobot).then((robot: IRobot) => {
    //         setRobots([...robots, robot]);
    //     });
    // };

    const handlerEraser = (name: string) => {
        setRobots(robots.filter((item) => item.name !== name));
    };

    // const handlerComplete = (robot: IRobot) => {
    //     updateIRobot(robot.id, { isComplete: !robot.isComplete }).then(
    //         (robot) => {
    //             robots.map((item) =>
    //                 item.id === robot.id
    //                     ? { ...item, isComplete: !item.isComplete }
    //                     : item
    //             );
    //         }
    //     );
    // };
    const context = {
        robots,
        handlerEraser,
    };
    return (
        <RobotsContext.Provider value={context}>
            {children}
        </RobotsContext.Provider>
    );
}
