import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    findAll(): {
        id: number;
        texto: string;
    }[];
}
