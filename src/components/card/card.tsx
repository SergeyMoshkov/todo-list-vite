import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {TaskType} from "@/components/todolist/todolist.tsx";
import {ButtonWithIcon} from "@/components/button/button.tsx";
import { Input } from "@/components/ui/input"

interface CardNameProps {
    title: string,
    cardDescription: string
    tasks: Array<TaskType>
}

export function CardName(props: CardNameProps) {
    return(
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <Input />
                    <ButtonWithIcon />
                </div>
                <ul>
                    <li><input type="checkbox" defaultChecked={props.tasks[0].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[0].title}</span></li>
                    <li><input type="checkbox" defaultChecked={props.tasks[1].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[1].title}</span></li>
                    <li><input type="checkbox" defaultChecked={props.tasks[2].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[2].title}</span></li>
                </ul>
            </CardContent>
            <CardFooter>
                <ul>
                    <li><input type="checkbox" defaultChecked={props.tasks[0].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[0].title}</span></li>
                    <li><input type="checkbox" defaultChecked={props.tasks[1].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[1].title}</span></li>
                    <li><input type="checkbox" defaultChecked={props.tasks[2].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[2].title}</span></li>
                </ul>
            </CardFooter>
        </Card>
    )
}

