import { useContext } from "react";
import { RobotsContext } from "../context/context";
import { RobotCard } from "./robot.card";

export function RobotList() {
    const { handlerEraser, robots } = useContext(RobotsContext);

    return (
        <ul className="characters-list">
            {robots.map((item) => (
                <RobotCard robot={item} key={item.name}></RobotCard>
            ))}
        </ul>
    );
}
