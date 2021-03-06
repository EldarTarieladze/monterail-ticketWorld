import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Ticket } from 'src/models/ticket.model';
import { IResponseTicketDto } from './dto/ticket.dto';
import { TicketsService } from './tickets.service';

@Controller('tickets')
@ApiTags('Ticket')
export class TicketsController {
  constructor(private readonly ticketService: TicketsService) { }

  @Get()
  @ApiOkResponse({ type: IResponseTicketDto, isArray: true })
  async getTickets(): Promise<Ticket[]> {
    return await this.ticketService.getTickets();
  }
}
