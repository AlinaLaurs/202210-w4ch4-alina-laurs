import { useContext } from "react";
import { RobotsContext } from "../context/context";
import { IRobot } from "../models/robot.model";

export function RobotCard({ robot }: { robot: IRobot }) {
    const { handlerEraser, robots } = useContext(RobotsContext);

    return (
        <div>
            <img src={robot.image} alt="" />
            <h1>{robot.name}</h1>
            <button
                onClick={() => {
                    handlerEraser(robot.name);
                }}
            >
                delete
            </button>
        </div>
    );
}
