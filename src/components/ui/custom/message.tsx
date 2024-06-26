import { Card, CardContent } from "components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "components/ui/avatar";
import { cn } from "utils/cn";

type MessageProps = {
    content: string;
    author: string;
    isBot: boolean;
};

const Message = ({
    content,
    author,
    isBot,
}: MessageProps) => {

    return (
        <div className="flex space-x-2">
            <Avatar>
                <AvatarImage src={isBot ? "https://github.com/shadcn.png" : undefined} alt="@shadcn" />
                <AvatarFallback>
                    {author}
                </AvatarFallback>
            </Avatar>
            <Card className={cn(
                    isBot ? "bg-dark text-light" : "bg-light text-dark",
                    "w-full"
                )}>
                <CardContent className="p-4">
                    {content}
                </CardContent>
            </Card>
        </div>
    )
};

export default Message;
