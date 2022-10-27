import { robots } from "../models/data/robots";
import { RobotCard } from "./robot.card";

export function RobotList() {
    return (
        <ul className="characters-list">
            {robots.map((item) => (
                <RobotCard robot={item}></RobotCard>
            ))}
        </ul>
    );
}
