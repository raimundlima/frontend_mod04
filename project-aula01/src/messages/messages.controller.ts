import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { create } from 'domain';
import { NotFoundError } from 'rxjs';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService){}
    
    @Get()
    getAll(){
        return this.messagesService.findAll();
    }

    @Get(':id')
    getById(@Param() params){
        return this.messagesService.findById(+params.id).catch((e)=> {
            throw new NotFoundException(e.message);
        
    });
    }

    @Post()
    create(@Body() MessageDto: MessageDto){
        return this.messagesService.create(MessageDto);
    }

    @Put(':id')
    update (@Param()params, @Body()MessageDto: MessageDto){
        return this.messagesService.update(+params.id,MessageDto);
    }

    @Delete(':id')
    delete (@Param()params, @Body()message: Message){
        return this.messagesService.delete(+params.id);
    }


}
