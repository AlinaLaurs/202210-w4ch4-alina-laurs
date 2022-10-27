import { IRobot } from "../models/robot.model";

export function RobotCard({ robot }: { robot: IRobot }) {
    return <h1>{robot.name}</h1>;
}
